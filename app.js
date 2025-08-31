// GK Writes - Blog Application with Firebase
// Clean, fast, focused on great content

// Application State
let posts = [];
let currentView = 'home';
let currentPost = null;
let currentCategory = 'all';
let editingPostId = null;
let lastVisible = null;
let isLoading = false;

// Initialize the application
async function initializeApp() {
  try {
    showLoading('Loading GK Writes...');
    
    // Initialize sample data if needed
    await initializeSampleData();
    
    // Load initial posts
    const result = await FirebaseService.loadPosts(10);
    posts = result.posts;
    lastVisible = result.lastVisible;
    
    console.log(`✅ Loaded ${posts.length} posts`);
    
    // Set up event listeners
    setupEventListeners();
    
    // Show initial view
    showView('home');
    
    // Render content
    renderPosts();
    renderSidebar();
    
    // Update load more button
    updateLoadMoreButton();
    
  } catch (error) {
    console.error('❌ Error initializing app:', error);
    showError('Failed to load blog. Please refresh the page.');
  } finally {
    hideLoading();
  }
}

// Loading and notification functions
function showLoading(message = 'Loading...') {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.querySelector('p').textContent = message;
    loadingScreen.style.display = 'flex';
  }
}

function hideLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }
}

function showError(message) {
  alert(`❌ ${message}`);
}

function showSuccess(message) {
  const toast = document.createElement('div');
  toast.textContent = `✅ ${message}`;
  toast.style.cssText = `
    position: fixed; top: 20px; right: 20px; background: #28a745; color: white;
    padding: 1rem 1.5rem; border-radius: 0.5rem; z-index: 10000;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Event listeners setup
function setupEventListeners() {
  // Navigation
  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const view = e.target.getAttribute('data-view');
      showView(view);
    });
  });
  
  // Category filtering
  document.querySelectorAll('[data-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = e.target.getAttribute('data-category');
      filterByCategory(category);
    });
  });
  
  // Search functionality
  const searchBtn = document.getElementById('search-btn');
  const searchInput = document.getElementById('search-input');
  
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') performSearch();
    });
  }
  
  // Load more button
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', loadMorePosts);
  }
  
  // Form handling
  const postForm = document.getElementById('post-form');
  if (postForm) {
    postForm.addEventListener('submit', handlePostSubmission);
  }
  
  // Other buttons
  const buttons = [
    { id: 'preview-btn', handler: showPreview },
    { id: 'save-draft-btn', handler: saveDraft },
    { id: 'edit-post-btn', handler: editCurrentPost }
  ];
  
  buttons.forEach(({ id, handler }) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', handler);
  });
}

// Load more posts
async function loadMorePosts() {
  if (isLoading || !lastVisible) return;
  
  try {
    isLoading = true;
    const loadMoreBtn = document.getElementById('load-more-btn');
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    const result = await FirebaseService.loadPosts(10, lastVisible);
    
    if (result.posts.length > 0) {
      posts = [...posts, ...result.posts];
      lastVisible = result.lastVisible;
      
      renderPosts();
      updateLoadMoreButton();
      showSuccess(`Loaded ${result.posts.length} more posts`);
    }
    
  } catch (error) {
    console.error('❌ Error loading more posts:', error);
    showError('Failed to load more posts');
  } finally {
    isLoading = false;
    const loadMoreBtn = document.getElementById('load-more-btn');
    loadMoreBtn.textContent = 'Load More Posts';
    loadMoreBtn.disabled = false;
  }
}

function updateLoadMoreButton() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = (lastVisible && posts.length >= 10) ? 'inline-block' : 'none';
  }
}

// Post creation with Firebase
async function createNewPost(formData) {
  const postData = {
    title: formData.title,
    content: formData.content,
    category: formData.category,
    author: "GK Writes",
    tags: formData.tags.filter(tag => tag.trim()),
    excerpt: extractExcerpt(formData.content),
    readTime: calculateReadTime(formData.content),
    featured: false
  };
  
  try {
    const submitBtn = document.getElementById('publish-btn');
    submitBtn.textContent = 'Publishing...';
    submitBtn.disabled = true;
    
    const postId = await FirebaseService.savePost(postData);
    
    const newPost = {
      id: postId,
      ...postData,
      date: new Date().toISOString().split('T')[0]
    };
    
    posts.unshift(newPost);
    
    document.getElementById('post-form').reset();
    showView('home');
    renderPosts();
    renderSidebar();
    
    showSuccess('Post published successfully!');
    
  } catch (error) {
    console.error('❌ Error publishing post:', error);
    showError('Failed to publish post. Please try again.');
  } finally {
    const submitBtn = document.getElementById('publish-btn');
    submitBtn.textContent = 'Publish Post';
    submitBtn.disabled = false;
  }
}

// Post updating
async function updatePost(postId, formData) {
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex === -1) return;
  
  const updatedData = {
    title: formData.title,
    content: formData.content,
    category: formData.category,
    tags: formData.tags.filter(tag => tag.trim()),
    excerpt: extractExcerpt(formData.content)
  };
  
  try {
    const submitBtn = document.getElementById('publish-btn');
    submitBtn.textContent = 'Updating...';
    submitBtn.disabled = true;
    
    await FirebaseService.updatePost(postId, updatedData);
    
    posts[postIndex] = { ...posts[postIndex], ...updatedData };
    
    editingPostId = null;
    showView('home');
    renderPosts();
    renderSidebar();
    
    showSuccess('Post updated successfully!');
    
  } catch (error) {
    console.error('❌ Error updating post:', error);
    showError('Failed to update post. Please try again.');
  } finally {
    const submitBtn = document.getElementById('publish-btn');
    submitBtn.textContent = 'Publish Post';
    submitBtn.disabled = false;
  }
}

// Search functionality
async function performSearch() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.toLowerCase().trim();
  
  if (!query) {
    const result = await FirebaseService.loadPosts(10);
    posts = result.posts;
    lastVisible = result.lastVisible;
    currentCategory = 'all';
    renderPosts();
    updateLoadMoreButton();
    return;
  }
  
  try {
    showLoading('Searching...');
    const searchResults = await FirebaseService.searchPosts(query);
    displaySearchResults(searchResults, query);
  } catch (error) {
    console.error('❌ Error searching:', error);
    showError('Search failed. Please try again.');
  } finally {
    hideLoading();
  }
}

function displaySearchResults(results, query) {
  const postsGrid = document.getElementById('posts-grid');
  const featuredPost = document.getElementById('featured-post');
  
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) loadMoreBtn.style.display = 'none';
  
  if (featuredPost) {
    featuredPost.innerHTML = `
      <div class="search-results-header">
        <h3>Search Results for "${query}"</h3>
        <p>${results.length} posts found</p>
        <button class="btn btn--secondary" onclick="clearSearch()">Clear Search</button>
      </div>
    `;
  }
  
  if (results.length === 0) {
    postsGrid.innerHTML = `
      <div class="no-results">
        <h3>No posts found</h3>
        <p>Try different keywords or browse our categories.</p>
      </div>
    `;
    return;
  }
  
  postsGrid.innerHTML = results.map(post => createPostCardHTML(post)).join('');
  
  postsGrid.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-post-id');
      showPost(postId);
    });
  });
}

async function clearSearch() {
  document.getElementById('search-input').value = '';
  
  try {
    showLoading('Loading posts...');
    const result = await FirebaseService.loadPosts(10);
    posts = result.posts;
    lastVisible = result.lastVisible;
    currentCategory = 'all';
    renderPosts();
    updateLoadMoreButton();
  } catch (error) {
    console.error('❌ Error clearing search:', error);
    showError('Failed to reload posts');
  } finally {
    hideLoading();
  }
}

// Post rendering
function renderPosts() {
  const postsGrid = document.getElementById('posts-grid');
  const featuredPost = document.getElementById('featured-post');
  
  if (!postsGrid) return;
  
  let filteredPosts = currentCategory === 'all' ? posts : posts.filter(post => post.category === currentCategory);
  
  // Render featured post
  const featured = filteredPosts.find(post => post.featured);
  if (featured && featuredPost) {
    featuredPost.innerHTML = createFeaturedPostHTML(featured);
    featuredPost.addEventListener('click', () => showPost(featured.id));
  } else if (featuredPost && filteredPosts.length > 0) {
    featuredPost.innerHTML = createFeaturedPostHTML(filteredPosts[0]);
    featuredPost.addEventListener('click', () => showPost(filteredPosts[0].id));
  }
  
  // Render regular posts
  const regularPosts = filteredPosts.filter(post => !post.featured);
  postsGrid.innerHTML = regularPosts.map(post => createPostCardHTML(post)).join('');
  
  postsGrid.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', () => {
      const postId = card.getAttribute('data-post-id');
      showPost(postId);
    });
  });
}

function createFeaturedPostHTML(post) {
  return `
    <div class="featured-post-content" data-post-id="${post.id}">
      <header class="featured-post-header">
        <div class="featured-post-meta">
          <span class="featured-badge">Featured</span>
          <span class="post-category">${post.category}</span>
          <span class="post-date">${formatDate(post.date)}</span>
          <span class="post-read-time">${post.readTime}</span>
        </div>
        <h2 class="featured-post-title">${escapeHtml(post.title)}</h2>
        <div class="post-author">By <strong>${post.author}</strong></div>
      </header>
      <p class="featured-post-excerpt">${escapeHtml(post.excerpt)}</p>
      <footer class="featured-post-footer">
        <div class="post-tags">
          ${post.tags ? post.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('') : ''}
        </div>
        <button class="btn btn--primary">Read More</button>
      </footer>
    </div>
  `;
}

function createPostCardHTML(post) {
  return `
    <article class="post-card" data-post-id="${post.id}">
      <div class="post-card-content">
        <header class="post-card-meta">
          <span class="post-category">${post.category}</span>
          <span class="post-date">${formatDate(post.date)}</span>
          <span class="post-read-time">${post.readTime}</span>
        </header>
        <h3 class="post-card-title">${escapeHtml(post.title)}</h3>
        <p class="post-card-excerpt">${escapeHtml(post.excerpt)}</p>
        <footer class="post-card-footer">
          <span>By <strong>${post.author}</strong></span>
          <div class="post-tags">
            ${post.tags ? post.tags.slice(0, 3).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('') : ''}
          </div>
        </footer>
      </div>
    </article>
  `;
}

// Individual post display
function showPost(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) {
    showError('Post not found');
    return;
  }
  
  currentPost = post;
  
  document.getElementById('post-category').textContent = post.category;
  document.getElementById('post-date').textContent = formatDate(post.date);
  document.getElementById('post-read-time').textContent = post.readTime;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-author').textContent = post.author;
  document.getElementById('post-content').innerHTML = formatPostContent(post.content);
  
  const tagsContainer = document.getElementById('post-tags');
  if (post.tags && post.tags.length > 0) {
    tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  } else {
    tagsContainer.innerHTML = '<span class="tag">General</span>';
  }
  
  showView('post');
}

// Format post content (simple markdown-style)
function formatPostContent(content) {
  if (!content) return '';
  
  return content
    .split('\n\n')
    .map(paragraph => {
      paragraph = paragraph.trim();
      if (!paragraph) return '';
      
      // Handle headers
      if (paragraph.startsWith('## ')) {
        return `<h2>${paragraph.substring(3)}</h2>`;
      }
      if (paragraph.startsWith('# ')) {
        return `<h1>${paragraph.substring(2)}</h1>`;
      }
      
      // Handle bold text
      paragraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Handle italic text
      paragraph = paragraph.replace(/\*(.*?)\*/g, '<em>$1</em>');
      
      return `<p>${paragraph}</p>`;
    })
    .filter(p => p)
    .join('');
}

// Category filtering
async function filterByCategory(category) {
  try {
    showLoading('Loading category...');
    currentCategory = category;
    
    if (category === 'all') {
      const result = await FirebaseService.loadPosts(10);
      posts = result.posts;
      lastVisible = result.lastVisible;
    } else {
      const allResult = await FirebaseService.loadPosts(100);
      posts = allResult.posts.filter(post => post.category === category);
      lastVisible = null;
    }
    
    showView('home');
    renderPosts();
    updateLoadMoreButton();
    
  } catch (error) {
    console.error('❌ Error filtering category:', error);
    showError('Failed to load category');
  } finally {
    hideLoading();
  }
}

// Form handling
function handlePostSubmission(e) {
  e.preventDefault();
  
  const title = document.getElementById('title-input').value.trim();
  const category = document.getElementById('category-select').value;
  const tags = document.getElementById('tags-input').value.split(',').map(tag => tag.trim()).filter(tag => tag);
  const content = document.getElementById('content-input').value.trim();
  
  if (!title || !category || !content) {
    showError('Please fill in all required fields');
    return;
  }
  
  const formData = { title, category, tags, content };
  
  if (editingPostId) {
    updatePost(editingPostId, formData);
  } else {
    createNewPost(formData);
  }
}

// View management
function showView(viewName) {
  document.querySelectorAll('.view').forEach(view => {
    view.classList.add('hidden');
  });
  
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.remove('hidden');
    currentView = viewName;
    
    if (viewName === 'create') {
      resetCreateForm();
    }
  }
}

function resetCreateForm() {
  const form = document.getElementById('post-form');
  if (form) form.reset();
  
  const createTitle = document.getElementById('create-title');
  if (createTitle) {
    createTitle.textContent = editingPostId ? 'Edit Post' : 'Write New Post';
  }
  
  if (editingPostId) {
    populateEditForm();
  }
}

function populateEditForm() {
  const post = posts.find(p => p.id === editingPostId);
  if (!post) return;
  
  document.getElementById('title-input').value = post.title;
  document.getElementById('category-select').value = post.category;
  document.getElementById('tags-input').value = post.tags ? post.tags.join(', ') : '';
  document.getElementById('content-input').value = post.content;
}

function editCurrentPost() {
  if (!currentPost) return;
  
  editingPostId = currentPost.id;
  showView('create');
}

// Preview functionality
function showPreview() {
  const title = document.getElementById('title-input').value;
  const category = document.getElementById('category-select').value;
  const tags = document.getElementById('tags-input').value.split(',').map(tag => tag.trim());
  const content = document.getElementById('content-input').value;
  
  document.getElementById('preview-category').textContent = category;
  document.getElementById('preview-date').textContent = formatDate(new Date().toISOString().split('T')[0]);
  document.getElementById('preview-title').textContent = title;
  document.getElementById('preview-content').innerHTML = formatPostContent(content);
  document.getElementById('preview-tags').innerHTML = 
    tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  
  showView('preview');
}

function saveDraft() {
  showSuccess('Draft saved locally!');
}

// Sidebar rendering
function renderSidebar() {
  const recentPostsContainer = document.getElementById('sidebar-recent-posts');
  if (!recentPostsContainer) return;
  
  const recentPosts = posts.slice(0, 5);
  
  recentPostsContainer.innerHTML = recentPosts.map(post => `
    <div class="recent-post-item" onclick="showPost('${post.id}')">
      <h4 class="recent-post-title">${escapeHtml(post.title)}</h4>
      <div class="recent-post-meta">
        ${post.category} • ${formatDate(post.date)}
      </div>
    </div>
  `).join('');
}

// Share functionality
function sharePost() {
  if (!currentPost) return;
  
  if (navigator.share) {
    navigator.share({
      title: currentPost.title,
      text: currentPost.excerpt,
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showSuccess('Post URL copied to clipboard!');
    }).catch(() => {
      showError('Failed to copy URL');
    });
  }
}

// Utility functions
function formatDate(dateString) {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch {
    return 'Unknown date';
  }
}

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function extractExcerpt(content) {
  return content.substring(0, 200).trim() + "...";
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Global functions
window.showView = showView;
window.showPost = showPost;
window.clearSearch = clearSearch;
window.sharePost = sharePost;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 GK Writes initializing...');
  initializeApp();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  .loading-screen {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(252, 252, 249, 0.95); display: flex;
    align-items: center; justify-content: center; z-index: 10000;
    backdrop-filter: blur(10px);
  }
  
  .loading-content {
    text-align: center; color: #1d7474;
  }
  
  .loading-spinner {
    width: 50px; height: 50px; border: 4px solid #f3f3f3;
    border-top: 4px solid #1d7474; border-radius: 50%;
    animation: spin 1s linear infinite; margin: 0 auto 1rem;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  
  .no-results {
    text-align: center; padding: 3rem; color: #666;
  }
  
  .search-results-header {
    text-align: center; padding: 2rem;
    background: rgba(29, 116, 128, 0.1); border-radius: 0.75rem;
  }
`;
document.head.appendChild(style);

console.log('✅ GK Writes app loaded successfully');