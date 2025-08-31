// Firebase Configuration for GK Writes Blog
// Your actual Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyBk8Ja9oM4_YzXhSPqukC1G_vL4UgOWaLU",
  authDomain: "gk-writes-blog.firebaseapp.com",
  projectId: "gk-writes-blog", 
  storageBucket: "gk-writes-blog.firebasestorage.app",
  messagingSenderId: "951666268968",
  appId: "1:951666268968:web:9e5291a8fcf145b42f8e1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Firebase Service for blog operations
const FirebaseService = {
  // Save new post to Firestore
  async savePost(postData) {
    try {
      const docRef = await db.collection('posts').add({
        ...postData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      console.log('✅ Post saved with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ Error saving post:', error);
      throw error;
    }
  },

  // Load posts from Firestore with pagination
  async loadPosts(limit = 10, lastDoc = null) {
    try {
      let query = db.collection('posts')
        .orderBy('createdAt', 'desc')
        .limit(limit);
      
      if (lastDoc) {
        query = query.startAfter(lastDoc);
      }
      
      const snapshot = await query.get();
      const posts = [];
      let lastVisible = null;
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        posts.push({
          id: doc.id,
          ...data,
          date: data.createdAt ? data.createdAt.toDate().toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        });
        lastVisible = doc;
      });
      
      return { posts, lastVisible };
    } catch (error) {
      console.error('❌ Error loading posts:', error);
      return { posts: [], lastVisible: null };
    }
  },

  // Update existing post
  async updatePost(postId, postData) {
    try {
      await db.collection('posts').doc(postId).update({
        ...postData,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      
      console.log('✅ Post updated successfully');
    } catch (error) {
      console.error('❌ Error updating post:', error);
      throw error;
    }
  },

  // Delete post
  async deletePost(postId) {
    try {
      await db.collection('posts').doc(postId).delete();
      console.log('✅ Post deleted successfully');
    } catch (error) {
      console.error('❌ Error deleting post:', error);
      throw error;
    }
  },

  // Search posts (client-side filtering for simplicity)
  async searchPosts(searchTerm) {
    try {
      const snapshot = await db.collection('posts')
        .orderBy('createdAt', 'desc')
        .get();
      
      const allPosts = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        allPosts.push({
          id: doc.id,
          ...data,
          date: data.createdAt ? data.createdAt.toDate().toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        });
      });
      
      // Filter results based on search term
      const searchResults = allPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
      
      return searchResults;
    } catch (error) {
      console.error('❌ Error searching posts:', error);
      return [];
    }
  }
};

// Sample posts for initialization (will be added only if database is empty)
const samplePosts = [
  {
    title: "The Complete Dashavatar: Ten Divine Incarnations of Lord Vishnu",
    content: `The Dashavatar represents one of the most profound concepts in Hindu mythology - the ten divine incarnations of Lord Vishnu that appeared throughout cosmic history to restore dharma and guide humanity.

## The Ten Sacred Incarnations

**1. Matsya (The Fish Avatar)**
When the great deluge threatened to destroy all life, Vishnu incarnated as Matsya, a mighty fish, to save Manu and the seeds of creation. This avatar represents the preservation of life through the darkest times.

**2. Kurma (The Turtle Avatar)**
During the churning of the cosmic ocean, Vishnu became Kurma, the great turtle, to support Mount Mandara on his shell. This incarnation symbolizes the stable foundation necessary for any great endeavor.

**3. Varaha (The Boar Avatar)**
When the demon Hiranyaksha dragged the Earth to the ocean's depths, Vishnu manifested as Varaha, the cosmic boar, to rescue and restore the world to its rightful place.

**4. Narasimha (The Lion-Man Avatar)**
To protect his devotee Prahlada from the demon king Hiranyakasipu, Vishnu appeared as Narasimha - half-man, half-lion - demonstrating that divine protection transcends all limitations.

**5. Vamana (The Dwarf Avatar)**
When King Bali's power threatened cosmic balance, Vishnu came as Vamana, a humble dwarf Brahmin, teaching that small things can contain infinite potential and the importance of knowing one's place in the cosmic order.

**6. Parashurama (The Warrior with the Axe)**
Born to restore justice when the warrior class became corrupt, Parashurama wielded his divine axe to eliminate those who abused power, showing that sometimes force is necessary to restore dharma.

**7. Rama (The Ideal King)**
The beloved prince of Ayodhya, Rama exemplifies dharmic living, perfect kingship, and righteous conduct. His story teaches that leadership requires sacrifice and that duty often demands difficult personal choices.

**8. Krishna (The Divine Teacher)**
Perhaps the most complete avatar, Krishna served as cowherd, prince, and divine guide. His teachings in the Bhagavad Gita provide timeless wisdom about duty, devotion, and the nature of reality.

**9. Buddha (The Enlightened One)**
Vishnu incarnated as Buddha to reform excessive ritualism and guide seekers toward enlightenment through compassion, representing the evolution of spiritual thought.

**10. Kalki (The Future Avatar)**
Yet to appear, Kalki will arrive at the end of the current dark age riding a white horse, wielding a blazing sword to destroy evil and establish a new golden age.

## The Deeper Significance

The Dashavatar is not merely a collection of stories but a profound teaching about evolution - both cosmic and personal. The avatars progress from aquatic life through various forms to fully realized human consciousness, mirroring the very evolution of life itself.

Each avatar also represents different approaches to crisis: preservation, protection, restoration, reformation, teaching, and ultimate transformation. Together, they teach us that the divine manifests in whatever form is needed to restore righteousness and guide humanity toward spiritual evolution.

The message remains eternal: no matter how dark things become, divine intervention will ultimately restore dharma and begin new cycles of spiritual growth.`,
    category: "Hindu Mythology",
    author: "GK Writes",
    tags: ["Dashavatar", "Vishnu", "Hindu Mythology", "Divine Incarnations", "Dharma"],
    excerpt: "Explore the ten divine incarnations of Lord Vishnu that appeared throughout cosmic history to restore dharma and guide humanity through crisis and transformation.",
    readTime: "12 min read",
    featured: true
  },
  {
    title: "Lord Shiva: The Cosmic Dancer and Divine Paradox",
    content: `Lord Shiva stands as one of the most enigmatic and powerful deities in the Hindu pantheon. Known as the destroyer within the Trinity, Shiva embodies the cosmic principle that destruction and creation are two sides of the same eternal dance.

## The Many Faces of Shiva

Shiva is simultaneously the ascetic meditating in the Himalayas and the cosmic dancer maintaining the rhythm of the universe. This paradox reflects the complex nature of existence itself - that within stillness lies infinite movement, and within destruction lies the seed of creation.

As Nataraja, the cosmic dancer, Shiva performs the Tandava - the dance that maintains cosmic balance. His dance represents five cosmic functions: creation (Srishti), preservation (Sthiti), destruction (Samhara), concealing grace (Tirobhava), and revealing grace (Anugraha).

## Symbolism and Sacred Elements

Every aspect of Shiva carries profound meaning. His third eye represents spiritual insight and the power to see beyond physical reality. The crescent moon on his forehead symbolizes the cycles of time, while the serpent around his neck shows his mastery over death and rebirth.

The sacred river Ganga flowing from his matted hair tells the story of how he broke the force of the celestial river's descent to Earth, saving humanity while sanctifying the water. His blue throat (Neelkanth) comes from drinking the cosmic poison during the churning of the ocean, demonstrating divine sacrifice for the welfare of all beings.

## The Supreme Yogi

As Mahayogi, Shiva represents the ultimate ascetic, sitting in meditation on Mount Kailash. In this aspect, he teaches the path of renunciation and inner realization. Yet he is also the ideal householder, married to Parvati and father to Ganesha and Kartikeya, showing that spiritual realization is possible in all walks of life.

## Worship and Festivals

The festival of Maha Shivaratri celebrates Shiva's cosmic nature and his marriage to Parvati. Devotees observe fasts, perform night-long vigils, and offer prayers throughout the night, recognizing that Shiva's grace is available to all sincere seekers.

Shiva's worship often focuses on the Shiva Lingam, an abstract symbol representing the formless divine consciousness that pervades all existence. This worship emphasizes that ultimate reality transcends all forms while being present in all forms.

The teachings of Shiva remind us that transformation often requires destruction of old patterns, that stillness and movement coexist, and that the divine encompasses all paradoxes within its infinite nature.`,
    category: "Hindu Mythology", 
    author: "GK Writes",
    tags: ["Shiva", "Nataraja", "Hindu Mythology", "Cosmic Dance", "Meditation"],
    excerpt: "Discover the paradoxical nature of Lord Shiva - the cosmic dancer who embodies both destruction and creation, asceticism and divine marriage, stillness and eternal movement.",
    readTime: "8 min read",
    featured: false
  },
  {
    title: "Ganesha: The Beloved Remover of Obstacles",
    content: `Lord Ganesha holds a special place in Hindu worship as the deity invoked at the beginning of any new venture. Known as Vighnaharta (remover of obstacles) and Vinayaka (supreme leader), Ganesha's elephant head and rotund form are instantly recognizable symbols of wisdom, prosperity, and good fortune.

## The Divine Birth

The most beloved story of Ganesha's origin tells how Parvati created him from turmeric paste while preparing for her bath. She breathed life into the figure and asked him to guard the entrance while she bathed. When Shiva returned and was denied entry by the unfamiliar guardian, a battle ensued that resulted in Ganesha losing his head.

To restore life and console Parvati, Shiva replaced Ganesha's head with that of an elephant - the first creature his attendants found. This dramatic birth story symbolizes the replacement of human ego (the original head) with divine wisdom (the elephant head).

## Sacred Symbolism

Every aspect of Ganesha's form carries deep spiritual meaning. His large elephant head represents wisdom and the ability to remove obstacles through intelligence rather than force. His small eyes encourage focus and attention to detail, while his large ears remind us to listen carefully.

His rotund belly symbolizes the ability to digest all experiences - both positive and negative - and his single tusk (he broke the other to write the Mahabharata) represents the sacrifice of the material for the spiritual.

## The Divine Scribe

According to tradition, Ganesha served as the scribe for the sage Vyasa while he composed the Mahabharata. The condition was that Vyasa would recite continuously without pause, and Ganesha would write without stopping to rest. When his pen broke, Ganesha broke off his own tusk to continue writing, demonstrating dedication to preserving divine knowledge.

## Festivals and Worship

Ganesh Chaturthi, celebrating Ganesha's birth, is one of India's most joyous festivals. Elaborate clay statues are installed, worshipped for days, and then ceremoniously immersed in water bodies. This ritual represents the cycle of creation, worship, and dissolution that governs all existence.

Before beginning studies, starting businesses, or embarking on journeys, devotees seek Ganesha's blessings. His worship emphasizes that obstacles are often opportunities for growth and that wisdom can transform challenges into stepping stones.

The beloved elephant-headed god teaches us that true strength lies in gentleness, that wisdom is more powerful than force, and that with divine grace, no obstacle is insurmountable.`,
    category: "Hindu Mythology",
    author: "GK Writes", 
    tags: ["Ganesha", "Hindu Mythology", "Obstacles", "Wisdom", "Festivals"],
    excerpt: "Learn about Lord Ganesha, the beloved elephant-headed deity who removes obstacles and blesses new beginnings, and discover the profound symbolism behind his unique form.",
    readTime: "6 min read",
    featured: false
  }
];

// Helper function to calculate reading time
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Initialize sample data if database is empty
async function initializeSampleData() {
  try {
    const { posts } = await FirebaseService.loadPosts(1);
    
    if (posts.length === 0) {
      console.log('📝 Database is empty. Initializing with sample posts...');
      
      for (const post of samplePosts) {
        await FirebaseService.savePost(post);
        console.log(`✅ Added sample post: ${post.title}`);
      }
      
      console.log('✅ Sample data initialization complete!');
    } else {
      console.log('📚 Database already has posts. Skipping sample data initialization.');
    }
  } catch (error) {
    console.error('❌ Error initializing sample data:', error);
  }
}

console.log('🔥 Firebase configuration loaded successfully!');
console.log('📊 Your Firebase project: gk-writes-blog');