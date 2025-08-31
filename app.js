// Application State
let posts = [];
let currentView = 'home';
let currentPost = null;
let currentCategory = 'all';
let editingPostId = null;
let currentMediaType = null; // 'image' or 'gif'

// Enhanced sample data with images and GIFs
const sampleData = {
  "samplePosts": [
    {
      "id": 1,
      "title": "Lord Vishnu: The Preserver of the Universe in Hindu Mythology",
      "content": "Lord Vishnu stands as one of the most revered deities in Hinduism, forming part of the holy Trinity (Trimurti) alongside Brahma the creator and Shiva the destroyer. Known as the preserver and protector of the universe, Vishnu embodies the principle of maintaining cosmic order and righteousness (dharma).\n\n[img]https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80[/img]\n[caption]Lord Vishnu in traditional iconography with four arms and divine attributes[/caption]\n\nVishnu is traditionally depicted with blue skin, symbolizing his infinite nature like the endless sky and ocean. He carries four symbolic items: the conch shell (Shankha) representing the primordial sound of creation, the discus (Chakra) symbolizing the mind and the destruction of evil, the mace (Gada) representing physical and mental strength, and the lotus flower (Padma) symbolizing purity and spiritual liberation.\n\nThe most fascinating aspect of Vishnu's mythology is his ten avatars (Dashavatara), divine incarnations that descend to Earth during times of great crisis. These include Matsya (the fish), Kurma (the turtle), Varaha (the boar), Narasimha (the man-lion), Vamana (the dwarf), Parashurama (the warrior), Rama (the prince), Krishna (the divine cowherd), Buddha (the enlightened one), and Kalki (the future avatar).\n\n[img]https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80[/img]\n[caption]The ten avatars of Lord Vishnu depicted in traditional art[/caption]\n\nAmong these, Rama and Krishna are the most celebrated. Lord Rama, hero of the Ramayana, exemplifies the ideal ruler and devotee, whose exile and battle against the demon king Ravana teaches lessons about duty, honor, and righteousness. Lord Krishna, central figure of the Mahabharata and speaker of the Bhagavad Gita, represents divine love, wisdom, and the path to spiritual liberation.\n\nVishnu's consort, Lakshmi, is the goddess of wealth and prosperity. Together, they reside in Vaikuntha, a spiritual realm of eternal bliss. Vishnu is often depicted resting on the cosmic serpent Shesha, floating on the ocean of milk, from whose navel springs a lotus containing Brahma.\n\nThe worship of Vishnu spans centuries and continues to be central to many Hindu traditions, particularly Vaishnavism, which considers him the supreme deity from whom all other gods emerge.",
      "category": "Hindu Mythology",
      "author": "GK Writes",
      "date": "2025-08-30",
      "tags": ["Vishnu", "Hindu Gods", "Dashavatar", "Rama", "Krishna", "Hinduism"],
      "excerpt": "Discover the divine nature of Lord Vishnu, the preserver of the universe, and explore his ten avatars that have shaped Hindu philosophy and culture for millennia.",
      "readTime": "9 min read",
      "featured": true,
      "featuredImage": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "id": 2,
      "title": "Lord Shiva: The Cosmic Dancer and Destroyer",
      "content": "Lord Shiva, one of the most complex and fascinating deities in the Hindu pantheon, embodies the apparent contradiction of destruction and creation, asceticism and sensuality, stillness and cosmic dance. As the third member of the Hindu Trinity, Shiva represents the principle of dissolution that makes renewal possible.\n\n[gif]https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif[/gif]\n[caption]The cosmic dance of Nataraja representing the rhythm of the universe[/caption]\n\nShiva is most commonly depicted in his form as Nataraja, the cosmic dancer, performing the Tandava dance that maintains the rhythm of the universe. This iconic image shows him dancing within a ring of fire, symbolizing the continuous cycle of creation, preservation, and destruction. His dance represents the five cosmic functions: creation, preservation, destruction, concealing grace, and revealing grace.\n\nThe symbolism surrounding Shiva is rich and profound. His third eye (Trinetra) represents spiritual insight and the power to see beyond the physical world. When opened in anger, it has the power to destroy anything in its gaze. The serpent around his neck symbolizes his mastery over time and death, while the crescent moon on his forehead represents the cyclical nature of time.\n\n[img]https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80[/img]\n[caption]Lord Shiva in meditation, representing the ascetic aspect of divinity[/caption]\n\nShiva's matted hair holds the sacred river Ganga, which descended from heaven to earth through his locks to save humanity. His blue throat (Neelkanth) comes from drinking the poison that emerged during the churning of the cosmic ocean, saving the universe from destruction while keeping the poison from harming others.\n\nAs an ascetic, Shiva is often depicted meditating in the Himalayas, covered in ash and animal skins, representing renunciation of worldly pleasures. Yet he is also Ardhanarisvara, half-man and half-woman, united with his consort Parvati, symbolizing the unity of masculine and feminine principles in creation.\n\nShiva's sons include Ganesha, the remover of obstacles, and Kartikeya (Murugan), the god of war. His devotees, known as Shaivites, worship him in various forms including the Shiva Lingam, an abstract representation of his creative energy.\n\nThe festival of Maha Shivaratri celebrates Shiva's cosmic dance and his marriage to Parvati, drawing millions of devotees who observe fasting and night-long vigils in his honor.",
      "category": "Hindu Mythology",
      "author": "GK Writes",
      "date": "2025-08-28",
      "tags": ["Shiva", "Nataraja", "Hindu Trinity", "Cosmic Dance", "Destruction", "Creation"],
      "excerpt": "Explore the paradoxical nature of Lord Shiva, the cosmic dancer who destroys to create, and understand his central role in Hindu philosophy and spirituality.",
      "readTime": "8 min read",
      "featured": false,
      "featuredImage": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "id": 3,
      "title": "Ganesha: The Beloved Elephant-Headed God",
      "content": "Lord Ganesha, one of the most beloved and widely worshipped deities in Hinduism, holds the unique position of being invoked before beginning any new venture, learning, or religious ceremony. Known as Vighnaharta (remover of obstacles) and Vinayaka (supreme leader), Ganesha's distinctive elephant head and human body make him instantly recognizable across Hindu culture.\n\n[img]https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80[/img]\n[caption]Lord Ganesha, the remover of obstacles and patron of new beginnings[/caption]\n\nThe most popular legend of Ganesha's birth tells of how Parvati created him from turmeric paste while bathing, breathing life into the figure to guard her privacy. When Shiva returned and was denied entry by the unknown boy, a battle ensued that resulted in Ganesha's head being severed. To console the distraught Parvati, Shiva replaced the head with that of the first creature found - an elephant - and brought Ganesha back to life, declaring him the leader of all ganas (attendants).\n\nGanesha's physical form is rich with symbolism. His large elephant head represents wisdom and intelligence, while his small eyes encourage concentration and focus. His big ears signify the importance of listening, while his small mouth suggests speaking less and thinking more. His large belly contains infinite universes, and his single tusk (he broke the other to write the Mahabharata) represents the ability to overcome dualities.\n\n[gif]https://media.giphy.com/media/l4FGGafcOHmrlQxG0/giphy.gif[/gif]\n[caption]The festival of Ganesh Chaturthi celebrated with joy and devotion[/caption]\n\nGanesha's four hands typically hold symbolic objects: a rope (to pull devotees closer to truth), an axe (to cut through attachments), a modak (sweet representing the rewards of spiritual seeking), and a lotus (representing enlightenment). His vehicle, a mouse named Mushika, symbolizes the mind that can gnaw through anything but becomes disciplined under Ganesha's guidance.\n\nThe festival of Ganesh Chaturthi, celebrated with great enthusiasm across India, particularly in Maharashtra, honors Ganesha's birth. During this festival, elaborate clay statues of Ganesha are installed in homes and public spaces, worshipped for several days, and then immersed in water bodies, symbolizing the cycle of creation and dissolution.\n\nGanesha is also revered as the patron of arts and sciences and the lord of beginnings. Students invoke his blessings before exams, businesses seek his favor for prosperity, and his image adorns the beginning of books, particularly in Indian tradition.\n\nBeyond India, Ganesha worship has spread throughout Southeast Asia, with significant temples and festivals in Thailand, Indonesia, and other countries, showing his universal appeal as a deity who helps overcome life's obstacles.",
      "category": "Hindu Mythology",
      "author": "GK Writes",
      "date": "2025-08-26",
      "tags": ["Ganesha", "Elephant God", "Vighnaharta", "Hindu Festivals", "Ganesh Chaturthi"],
      "excerpt": "Meet Lord Ganesha, the elephant-headed god who removes obstacles and blesses new beginnings, beloved across India and beyond for his wisdom and benevolence.",
      "readTime": "7 min read",
      "featured": false,
      "featuredImage": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "id": 4,
      "title": "The Mahabharata: India's Greatest Epic and Its Divine Teachings",
      "content": "The Mahabharata stands as one of the longest epic poems in world literature and the most important text in Hindu tradition. With over 100,000 verses, it is often called the 'fifth Veda' and contains within it the Bhagavad Gita, one of Hinduism's most sacred texts.\n\n[img]https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80[/img]\n[caption]Ancient Sanskrit manuscripts preserving the wisdom of the Mahabharata[/caption]\n\nThe epic centers around the great war between two groups of cousins - the righteous Pandavas and their morally ambiguous cousins, the Kauravas - fighting for control of the kingdom of Hastinapur. But the Mahabharata is far more than a war story; it is a profound meditation on duty (dharma), righteousness, and the complexities of moral choice.\n\nThe five Pandava brothers each represent different aspects of human nature: Yudhishthira embodies righteousness and truth, Bhima represents strength and courage, Arjuna symbolizes skill and dedication, while the twins Nakula and Sahadeva represent beauty and wisdom respectively. Their shared wife, Draupadi, born from fire, represents the earth itself and the divine feminine principle.\n\nKrishna plays a central role as Arjuna's charioteer and divine guide. His teachings to Arjuna on the battlefield of Kurukshetra, when the warrior prince hesitates to fight his own relatives, form the Bhagavad Gita. In this dialogue, Krishna reveals his divine nature and explains the paths to spiritual liberation: through action (karma yoga), devotion (bhakti yoga), and knowledge (jnana yoga).\n\n[gif]https://media.giphy.com/media/3o6Zt6ML6BklcajpeE/giphy.gif[/gif]\n[caption]The eternal teaching of the Bhagavad Gita on the battlefield of Kurukshetra[/caption]\n\nThe epic explores complex moral questions that remain relevant today. Characters like Karna, born to a low caste but possessing noble qualities, challenge social hierarchies. Bhishma's oath of celibacy and loyalty leads to tragic consequences. Draupadi's humiliation in the royal court becomes a catalyst for war and raises questions about honor, justice, and the treatment of women.\n\nThe war itself, lasting eighteen days, represents the cosmic battle between good and evil, with divine weapons and supernatural elements highlighting the epic's mythological dimension. The aftermath shows the hollow victory of the Pandavas, who win the war but lose almost everything they fought for, teaching profound lessons about the pyrrhic nature of violence.\n\nThe Mahabharata's influence on Indian culture, law, politics, and spirituality cannot be overstated. Its stories have been retold in countless regional versions, theatrical performances, films, and television series. The epic's central message - that dharma is complex and situational rather than absolute - continues to provide guidance for navigating moral dilemmas in contemporary life.",
      "category": "Indian History",
      "author": "GK Writes",
      "date": "2025-08-22",
      "tags": ["Mahabharata", "Krishna", "Bhagavad Gita", "Pandavas", "Dharma", "Indian Epic"],
      "excerpt": "Delve into the Mahabharata, India's greatest epic that weaves together divine wisdom, complex moral dilemmas, and timeless teachings about duty and righteousness.",
      "readTime": "10 min read",
      "featured": false,
      "featuredImage": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      "id": 5,
      "title": "The Rise and Fall of Zeus: King of the Greek Gods",
      "content": "Zeus, the mighty ruler of Mount Olympus, stands as one of the most powerful and complex figures in Greek mythology. Born to the Titans Cronus and Rhea, Zeus's story begins with prophecy and patricide. His father, fearing that one of his children would overthrow him, devoured each newborn. However, Rhea managed to save Zeus by hiding him in a cave on Crete and feeding Cronus a stone wrapped in swaddling clothes instead.\n\n[img]https://images.unsplash.com/photo-1578662747735-1b3ab6ee6d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80[/img]\n[caption]Zeus wielding his legendary thunderbolt, symbol of divine authority[/caption]\n\nAs Zeus grew to manhood, he fulfilled the prophecy by leading a war against the Titans, known as the Titanomachy. With the help of his brothers Poseidon and Hades, and the Cyclopes who forged his legendary thunderbolt, Zeus emerged victorious. The defeated Titans were imprisoned in Tartarus, and the three brothers divided the world among themselves - Zeus taking the sky, Poseidon the sea, and Hades the underworld.\n\nZeus's reign was marked by both justice and passion. He was known for his numerous affairs with both goddesses and mortal women, resulting in many legendary offspring including Athena, Apollo, Artemis, Hercules, and Perseus. His wife Hera, goddess of marriage, was notorious for her jealousy and revenge against Zeus's lovers and their children.\n\nThe king of gods was not without his flaws. His impulsive nature and tendency toward wrath often caused problems for both gods and mortals. Yet he also served as the ultimate arbiter of justice and the protector of guests, suppliants, and the weak. The Olympic Games were held in his honor, and his oracle at Dodona was one of the most revered in the ancient world.\n\nZeus's influence extended far beyond Greek borders, being identified with Jupiter by the Romans and influencing countless other mythological traditions throughout the Mediterranean and beyond.",
      "category": "Greek Mythology",
      "author": "GK Writes",
      "date": "2025-08-20",
      "tags": ["Zeus", "Greek Gods", "Mount Olympus", "Titans", "Ancient Greece"],
      "excerpt": "Explore the epic tale of Zeus, from his dramatic birth to his reign as king of the gods, and discover how this powerful deity shaped ancient Greek religion and culture.",
      "readTime": "8 min read",
      "featured": false,
      "featuredImage": "https://images.unsplash.com/photo-1578662747735-1b3ab6ee6d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ],
  "categories": [
    "Hindu Mythology",
    "Indian History",
    "Ancient Gods",
    "Greek Mythology",
    "Egyptian History",
    "Norse Legends",
    "Roman Empire",
    "Medieval History",
    "World Mythology",
    "Asian History",
    "Archaeological Discoveries"
  ]
};

// Initialize the application
function initializeApp() {
  // Load sample data
  posts = [...sampleData.samplePosts];
  
  // Set up event listeners
  setupEventListeners();
  
  // Show initial view
  showView('home');
  
  // Render content
  renderPosts();
  renderSidebar();
}

// Enhanced Event listeners with media support
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
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Post form
  const postForm = document.getElementById('post-form');
  if (postForm) {
    postForm.addEventListener('submit', handlePostSubmission);
  }
  
  // Preview button
  const previewBtn = document.getElementById('preview-btn');
  if (previewBtn) {
    previewBtn.addEventListener('click', showPreview);
  }
  
  // Save draft button
  const saveDraftBtn = document.getElementById('save-draft-btn');
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', saveDraft);
  }
  
  // Edit post button
  const editPostBtn = document.getElementById('edit-post-btn');
  if (editPostBtn) {
    editPostBtn.addEventListener('click', editCurrentPost);
  }
  
  // Enhanced editor toolbar
  setupEditorToolbar();
  
  // Featured image preview
  setupFeaturedImagePreview();
  
  // Media insertion
  setupMediaInsertion();
  
  // Image modal
  setupImageModal();
}

// Editor toolbar setup
function setupEditorToolbar() {
  const boldBtn = document.getElementById('bold-btn');
  const italicBtn = document.getElementById('italic-btn');
  const headingBtn = document.getElementById('heading-btn');
  const imageBtn = document.getElementById('image-btn');
  const gifBtn = document.getElementById('gif-btn');
  const quoteBtn = document.getElementById('quote-btn');
  const listBtn = document.getElementById('list-btn');
  
  if (boldBtn) boldBtn.addEventListener('click', () => insertFormatting('**', '**'));
  if (italicBtn) italicBtn.addEventListener('click', () => insertFormatting('*', '*'));
  if (headingBtn) headingBtn.addEventListener('click', () => insertFormatting('## ', ''));
  if (imageBtn) imageBtn.addEventListener('click', () => showMediaInsertion('image'));
  if (gifBtn) gifBtn.addEventListener('click', () => showMediaInsertion('gif'));
  if (quoteBtn) quoteBtn.addEventListener('click', () => insertFormatting('> ', ''));
  if (listBtn) listBtn.addEventListener('click', () => insertFormatting('- ', ''));
}

// Featured image preview setup
function setupFeaturedImagePreview() {
  const previewBtn = document.getElementById('preview-featured-image');
  const removeBtn = document.getElementById('remove-featured-image');
  const input = document.getElementById('featured-image-input');
  
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      const url = input.value.trim();
      if (url) {
        showFeaturedImagePreview(url);
      }
    });
  }
  
  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      input.value = '';
      hideFeaturedImagePreview();
    });
  }
  
  if (input) {
    input.addEventListener('input', () => {
      if (!input.value.trim()) {
        hideFeaturedImagePreview();
      }
    });
  }
}

// Media insertion setup
function setupMediaInsertion() {
  const insertBtn = document.getElementById('insert-media');
  const cancelBtn = document.getElementById('cancel-media');
  
  if (insertBtn) {
    insertBtn.addEventListener('click', insertMediaIntoContent);
  }
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', hideMediaInsertion);
  }
}

// Image modal setup
function setupImageModal() {
  const modal = document.getElementById('image-modal');
  const closeBtn = document.getElementById('modal-close');
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeImageModal);
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeImageModal();
      }
    });
  }
  
  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeImageModal();
    }
  });
}

// Formatting functions
function insertFormatting(before, after) {
  const textarea = document.getElementById('content-input');
  if (!textarea) return;
  
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selectedText = textarea.value.substring(start, end);
  const replacement = before + selectedText + after;
  
  textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
  textarea.focus();
  
  // Set cursor position
  const newPos = start + before.length + selectedText.length + after.length;
  textarea.setSelectionRange(newPos, newPos);
}

// Featured image preview functions
function showFeaturedImagePreview(url) {
  const preview = document.getElementById('featured-image-preview');
  const img = document.getElementById('featured-image-preview-img');
  
  if (preview && img) {
    img.src = url;
    img.onerror = () => {
      alert('Invalid image URL. Please check the URL and try again.');
      hideFeaturedImagePreview();
    };
    img.onload = () => {
      preview.classList.remove('hidden');
    };
  }
}

function hideFeaturedImagePreview() {
  const preview = document.getElementById('featured-image-preview');
  if (preview) {
    preview.classList.add('hidden');
  }
}

// Media insertion functions
function showMediaInsertion(type) {
  const mediaSection = document.getElementById('media-insertion');
  const urlInput = document.getElementById('media-url-input');
  const captionInput = document.getElementById('media-caption-input');
  
  if (mediaSection) {
    currentMediaType = type;
    urlInput.placeholder = `Enter ${type} URL`;
    captionInput.placeholder = `Caption for ${type} (optional)`;
    mediaSection.classList.remove('hidden');
    urlInput.focus();
  }
}

function hideMediaInsertion() {
  const mediaSection = document.getElementById('media-insertion');
  const urlInput = document.getElementById('media-url-input');
  const captionInput = document.getElementById('media-caption-input');
  
  if (mediaSection) {
    mediaSection.classList.add('hidden');
    urlInput.value = '';
    captionInput.value = '';
    currentMediaType = null;
  }
}

function insertMediaIntoContent() {
  const urlInput = document.getElementById('media-url-input');
  const captionInput = document.getElementById('media-caption-input');
  const textarea = document.getElementById('content-input');
  
  const url = urlInput.value.trim();
  const caption = captionInput.value.trim();
  
  if (!url || !textarea) return;
  
  let mediaCode = '';
  if (currentMediaType === 'image') {
    mediaCode = `[img]${url}[/img]`;
  } else if (currentMediaType === 'gif') {
    mediaCode = `[gif]${url}[/gif]`;
  }
  
  if (caption) {
    mediaCode += `\n[caption]${caption}[/caption]`;
  }
  
  // Insert at cursor position
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = textarea.value.substring(0, start) + '\n\n' + mediaCode + '\n\n' + textarea.value.substring(end);
  
  // Update cursor position
  const newPos = start + mediaCode.length + 4;
  textarea.setSelectionRange(newPos, newPos);
  textarea.focus();
  
  hideMediaInsertion();
}

// Image modal functions
function openImageModal(src, caption = '') {
  const modal = document.getElementById('image-modal');
  const img = document.getElementById('modal-image');
  const captionEl = document.getElementById('modal-caption');
  
  if (modal && img) {
    img.src = src;
    if (captionEl) {
      captionEl.textContent = caption;
      captionEl.style.display = caption ? 'block' : 'none';
    }
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Enhanced post content processing
function processPostContent(content) {
  if (!content) return '';
  
  let processedContent = content;
  
  // Process images
  processedContent = processedContent.replace(/\[img\](.*?)\[\/img\]/g, (match, url) => {
    return `<img src="${url}" alt="Post image" class="content-image" onclick="openImageModal('${url}')" loading="lazy">`;
  });
  
  // Process GIFs
  processedContent = processedContent.replace(/\[gif\](.*?)\[\/gif\]/g, (match, url) => {
    return `<img src="${url}" alt="Animated GIF" class="content-gif" loading="lazy">`;
  });
  
  // Process captions
  processedContent = processedContent.replace(/\[caption\](.*?)\[\/caption\]/g, (match, caption) => {
    return `<div class="image-caption">${caption}</div>`;
  });
  
  // Process line breaks into paragraphs
  const paragraphs = processedContent.split('\n\n').filter(p => p.trim());
  return paragraphs.map(paragraph => {
    // Don't wrap images and captions in p tags
    if (paragraph.includes('<img') || paragraph.includes('image-caption') || paragraph.includes('content-gif')) {
      return paragraph;
    }
    return `<p>${paragraph.trim()}</p>`;
  }).join('');
}

// View management
function showView(viewName) {
  // Hide all views
  document.querySelectorAll('.view').forEach(view => {
    view.classList.add('hidden');
  });
  
  // Show selected view
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.remove('hidden');
    currentView = viewName;
    
    // Special handling for different views
    if (viewName === 'create') {
      resetCreateForm();
    }
  }
}

// Enhanced post rendering with featured images
function renderPosts() {
  const postsGrid = document.getElementById('posts-grid');
  const featuredPost = document.getElementById('featured-post');
  
  if (!postsGrid) return;
  
  // Filter posts based on current category
  let filteredPosts = posts;
  if (currentCategory !== 'all') {
    filteredPosts = posts.filter(post => post.category === currentCategory);
  }
  
  // Render featured post
  const featured = filteredPosts.find(post => post.featured);
  if (featured && featuredPost) {
    featuredPost.innerHTML = createFeaturedPostHTML(featured);
    
    // Add click listener to featured post
    featuredPost.addEventListener('click', () => showPost(featured.id));
  }
  
  // Render regular posts (excluding featured)
  const regularPosts = filteredPosts.filter(post => !post.featured);
  postsGrid.innerHTML = regularPosts.map(post => createPostCardHTML(post)).join('');
  
  // Add click listeners to post cards
  postsGrid.addEventListener('click', (e) => {
    const postCard = e.target.closest('.post-card');
    if (postCard) {
      const postId = parseInt(postCard.getAttribute('data-post-id'));
      showPost(postId);
    }
  });
}

function createFeaturedPostHTML(post) {
  const featuredImageHTML = post.featuredImage ? 
    `<div class="post-featured-image">
      <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
    </div>` : '';
    
  return `
    <div class="featured-post-content" data-post-id="${post.id}">
      ${featuredImageHTML}
      <header class="featured-post-header">
        <div class="featured-post-meta">
          <span class="featured-badge">Featured</span>
          <span class="post-category">${post.category}</span>
          <span class="post-date">${formatDate(post.date)}</span>
          <span class="post-read-time">${post.readTime}</span>
        </div>
        <h2 class="featured-post-title">${post.title}</h2>
        <div class="post-author">By <strong>${post.author}</strong></div>
      </header>
      <p class="featured-post-excerpt">${post.excerpt}</p>
      <footer class="featured-post-footer">
        <div class="post-tags">
          ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <button class="btn btn--primary">Read More</button>
      </footer>
    </div>
  `;
}

function createPostCardHTML(post) {
  const cardImageHTML = post.featuredImage ? 
    `<div class="post-card-image">
      <img src="${post.featuredImage}" alt="${post.title}" loading="lazy">
    </div>` : '';
    
  return `
    <article class="post-card" data-post-id="${post.id}">
      ${cardImageHTML}
      <div class="post-card-content">
        <header class="post-card-meta">
          <span class="post-category">${post.category}</span>
          <span class="post-date">${formatDate(post.date)}</span>
          <span class="post-read-time">${post.readTime}</span>
        </header>
        <h3 class="post-card-title">${post.title}</h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
        <footer class="post-card-footer">
          <span>By <strong>${post.author}</strong></span>
          <div class="post-tags">
            ${post.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </footer>
      </div>
    </article>
  `;
}

// Enhanced individual post display
function showPost(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  
  currentPost = post;
  
  // Populate featured image
  const featuredImageContainer = document.getElementById('post-featured-image');
  if (featuredImageContainer) {
    if (post.featuredImage) {
      featuredImageContainer.innerHTML = `<img src="${post.featuredImage}" alt="${post.title}" loading="lazy">`;
      featuredImageContainer.style.display = 'block';
    } else {
      featuredImageContainer.style.display = 'none';
    }
  }
  
  // Populate post view elements
  document.getElementById('post-category').textContent = post.category;
  document.getElementById('post-date').textContent = formatDate(post.date);
  document.getElementById('post-read-time').textContent = post.readTime;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-author').textContent = post.author;
  document.getElementById('post-content').innerHTML = processPostContent(post.content);
  
  // Populate tags
  const tagsContainer = document.getElementById('post-tags');
  tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  showView('post');
}

// Enhanced search functionality
function performSearch() {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.toLowerCase().trim();
  
  if (!query) {
    renderPosts();
    return;
  }
  
  const searchResults = posts.filter(post => 
    post.title.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query) ||
    post.tags.some(tag => tag.toLowerCase().includes(query)) ||
    post.category.toLowerCase().includes(query)
  );
  
  displaySearchResults(searchResults, query);
}

function displaySearchResults(results, query) {
  const postsGrid = document.getElementById('posts-grid');
  const featuredPost = document.getElementById('featured-post');
  
  if (featuredPost) {
    featuredPost.innerHTML = `
      <div class="search-results-header">
        <h3>Search Results for "${query}" (${results.length} found)</h3>
        <button class="btn btn--secondary" onclick="clearSearch()">Clear Search</button>
      </div>
    `;
  }
  
  if (results.length === 0) {
    postsGrid.innerHTML = '<p class="no-results">No posts found matching your search.</p>';
    return;
  }
  
  postsGrid.innerHTML = results.map(post => createPostCardHTML(post)).join('');
  
  // Add click listeners
  postsGrid.addEventListener('click', (e) => {
    const postCard = e.target.closest('.post-card');
    if (postCard) {
      const postId = parseInt(postCard.getAttribute('data-post-id'));
      showPost(postId);
    }
  });
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  renderPosts();
}

// Category filtering
function filterByCategory(category) {
  currentCategory = category;
  showView('home');
  renderPosts();
}

// Enhanced create/edit post functionality
function resetCreateForm() {
  const form = document.getElementById('post-form');
  if (form) {
    form.reset();
  }
  
  const createTitle = document.getElementById('create-title');
  if (createTitle) {
    createTitle.textContent = editingPostId ? 'Edit Post' : 'Write New Post';
  }
  
  // Hide featured image preview
  hideFeaturedImagePreview();
  hideMediaInsertion();
  
  // If editing, populate form with existing data
  if (editingPostId) {
    populateEditForm();
  }
}

function populateEditForm() {
  const post = posts.find(p => p.id === editingPostId);
  if (!post) return;
  
  document.getElementById('title-input').value = post.title;
  document.getElementById('category-select').value = post.category;
  document.getElementById('tags-input').value = post.tags.join(', ');
  document.getElementById('content-input').value = post.content;
  
  if (post.featuredImage) {
    document.getElementById('featured-image-input').value = post.featuredImage;
    showFeaturedImagePreview(post.featuredImage);
  }
}

function handlePostSubmission(e) {
  e.preventDefault();
  
  const formData = {
    title: document.getElementById('title-input').value,
    category: document.getElementById('category-select').value,
    tags: document.getElementById('tags-input').value.split(',').map(tag => tag.trim()),
    content: document.getElementById('content-input').value,
    featuredImage: document.getElementById('featured-image-input').value.trim() || null
  };
  
  if (editingPostId) {
    updatePost(editingPostId, formData);
  } else {
    createNewPost(formData);
  }
}

function createNewPost(formData) {
  const newPost = {
    id: Math.max(...posts.map(p => p.id)) + 1,
    title: formData.title,
    content: formData.content,
    category: formData.category,
    author: "GK Writes",
    date: new Date().toISOString().split('T')[0],
    tags: formData.tags,
    excerpt: extractExcerpt(formData.content),
    readTime: calculateReadTime(formData.content),
    featured: false,
    featuredImage: formData.featuredImage
  };
  
  posts.unshift(newPost);
  showView('home');
  renderPosts();
  renderSidebar();
  
  // Show success message
  alert('Post published successfully!');
}

function updatePost(postId, formData) {
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex === -1) return;
  
  posts[postIndex] = {
    ...posts[postIndex],
    title: formData.title,
    content: formData.content,
    category: formData.category,
    tags: formData.tags,
    excerpt: extractExcerpt(formData.content),
    featuredImage: formData.featuredImage
  };
  
  editingPostId = null;
  showView('home');
  renderPosts();
  renderSidebar();
  
  alert('Post updated successfully!');
}

function extractExcerpt(content) {
  // Remove image/gif tags and captions for excerpt
  let cleanContent = content.replace(/\[img\].*?\[\/img\]/g, '');
  cleanContent = cleanContent.replace(/\[gif\].*?\[\/gif\]/g, '');
  cleanContent = cleanContent.replace(/\[caption\].*?\[\/caption\]/g, '');
  
  return cleanContent.substring(0, 200) + "...";
}

function editCurrentPost() {
  if (!currentPost) return;
  
  editingPostId = currentPost.id;
  showView('create');
}

// Enhanced preview functionality
function showPreview() {
  const formData = {
    title: document.getElementById('title-input').value,
    category: document.getElementById('category-select').value,
    tags: document.getElementById('tags-input').value.split(',').map(tag => tag.trim()),
    content: document.getElementById('content-input').value,
    featuredImage: document.getElementById('featured-image-input').value.trim() || null
  };
  
  // Populate featured image in preview
  const previewFeaturedImage = document.getElementById('preview-featured-image');
  if (previewFeaturedImage) {
    if (formData.featuredImage) {
      previewFeaturedImage.innerHTML = `<img src="${formData.featuredImage}" alt="${formData.title}" loading="lazy">`;
      previewFeaturedImage.style.display = 'block';
    } else {
      previewFeaturedImage.style.display = 'none';
    }
  }
  
  // Populate preview
  document.getElementById('preview-category').textContent = formData.category;
  document.getElementById('preview-date').textContent = formatDate(new Date().toISOString().split('T')[0]);
  document.getElementById('preview-title').textContent = formData.title;
  document.getElementById('preview-content').innerHTML = processPostContent(formData.content);
  document.getElementById('preview-tags').innerHTML = 
    formData.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  showView('preview');
}

function saveDraft() {
  alert('Draft saved! (In a real application, this would save to local storage or server)');
}

// Sidebar rendering
function renderSidebar() {
  const recentPostsContainer = document.getElementById('sidebar-recent-posts');
  if (!recentPostsContainer) return;
  
  const recentPosts = posts.slice(0, 5);
  
  recentPostsContainer.innerHTML = recentPosts.map(post => `
    <div class="recent-post-item" onclick="showPost(${post.id})">
      <h4 class="recent-post-title">${post.title}</h4>
      <div class="recent-post-meta">
        ${post.category} • ${formatDate(post.date)}
      </div>
    </div>
  `).join('');
}

// Utility functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  // Remove image/gif tags for more accurate word count
  const cleanContent = content.replace(/\[img\].*?\[\/img\]/g, '').replace(/\[gif\].*?\[\/gif\]/g, '');
  const words = cleanContent.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Image lazy loading
function setupLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          img.classList.remove('image-loading');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => {
      img.classList.add('image-loading');
      imageObserver.observe(img);
    });
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
  setupLazyLoading();
});

// Global functions for inline event handlers
window.showView = showView;
window.showPost = showPost;
window.clearSearch = clearSearch;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;