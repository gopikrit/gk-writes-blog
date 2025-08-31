// Application State
let posts = [];
let currentView = 'home';
let currentPost = null;
let currentCategory = 'all';
let editingPostId = null;

// Updated sample data with Hindu god history and GK Writes branding
const sampleData = {
  "samplePosts": [
    {
      "id": 1,
      "title": "Lord Vishnu: The Preserver of the Universe in Hindu Mythology",
      "content": "Lord Vishnu stands as one of the most revered deities in Hinduism, forming part of the holy Trinity (Trimurti) alongside Brahma the creator and Shiva the destroyer. Known as the preserver and protector of the universe, Vishnu embodies the principle of maintaining cosmic order and righteousness (dharma).\n\nVishnu is traditionally depicted with blue skin, symbolizing his infinite nature like the endless sky and ocean. He carries four symbolic items: the conch shell (Shankha) representing the primordial sound of creation, the discus (Chakra) symbolizing the mind and the destruction of evil, the mace (Gada) representing physical and mental strength, and the lotus flower (Padma) symbolizing purity and spiritual liberation.\n\nThe most fascinating aspect of Vishnu's mythology is his ten avatars (Dashavatara), divine incarnations that descend to Earth during times of great crisis. These include Matsya (the fish), Kurma (the turtle), Varaha (the boar), Narasimha (the man-lion), Vamana (the dwarf), Parashurama (the warrior), Rama (the prince), Krishna (the divine cowherd), Buddha (the enlightened one), and Kalki (the future avatar).\n\nAmong these, Rama and Krishna are the most celebrated. Lord Rama, hero of the Ramayana, exemplifies the ideal ruler and devotee, whose exile and battle against the demon king Ravana teaches lessons about duty, honor, and righteousness. Lord Krishna, central figure of the Mahabharata and speaker of the Bhagavad Gita, represents divine love, wisdom, and the path to spiritual liberation.\n\nVishnu's consort, Lakshmi, is the goddess of wealth and prosperity. Together, they reside in Vaikuntha, a spiritual realm of eternal bliss. Vishnu is often depicted resting on the cosmic serpent Shesha, floating on the ocean of milk, from whose navel springs a lotus containing Brahma.\n\nThe worship of Vishnu spans centuries and continues to be central to many Hindu traditions, particularly Vaishnavism, which considers him the supreme deity from whom all other gods emerge.",
      "category": "Hindu Mythology",
      "author": "GK Writes",
      "date": "2025-08-30",
      "tags": ["Vishnu", "Hindu Gods", "Dashavatar", "Rama", "Krishna", "Hinduism"],
      "excerpt": "Discover the divine nature of Lord Vishnu, the preserver of the universe, and explore his ten avatars that have shaped Hindu philosophy and culture for millennia.",
      "readTime": "9 min read",
      "featured": true
    },
    {
      "id": 2,
      "title": "Lord Shiva: The Cosmic Dancer and Destroyer",
      "content": "Lord Shiva, one of the most complex and fascinating deities in the Hindu pantheon, embodies the apparent contradiction of destruction and creation, asceticism and sensuality, stillness and cosmic dance. As the third member of the Hindu Trinity, Shiva represents the principle of dissolution that makes renewal possible.\n\nShiva is most commonly depicted in his form as Nataraja, the cosmic dancer, performing the Tandava dance that maintains the rhythm of the universe. This iconic image shows him dancing within a ring of fire, symbolizing the continuous cycle of creation, preservation, and destruction. His dance represents the five cosmic functions: creation, preservation, destruction, concealing grace, and revealing grace.\n\nThe symbolism surrounding Shiva is rich and profound. His third eye (Trinetra) represents spiritual insight and the power to see beyond the physical world. When opened in anger, it has the power to destroy anything in its gaze. The serpent around his neck symbolizes his mastery over time and death, while the crescent moon on his forehead represents the cyclical nature of time.\n\nShiva's matted hair holds the sacred river Ganga, which descended from heaven to earth through his locks to save humanity. His blue throat (Neelkanth) comes from drinking the poison that emerged during the churning of the cosmic ocean, saving the universe from destruction while keeping the poison from harming others.\n\nAs an ascetic, Shiva is often depicted meditating in the Himalayas, covered in ash and animal skins, representing renunciation of worldly pleasures. Yet he is also Ardhanarisvara, half-man and half-woman, united with his consort Parvati, symbolizing the unity of masculine and feminine principles in creation.\n\nShiva's sons include Ganesha, the remover of obstacles, and Kartikeya (Murugan), the god of war. His devotees, known as Shaivites, worship him in various forms including the Shiva Lingam, an abstract representation of his creative energy.\n\nThe festival of Maha Shivaratri celebrates Shiva's cosmic dance and his marriage to Parvati, drawing millions of devotees who observe fasting and night-long vigils in his honor.",
      "category": "Hindu Mythology",
      "author": "GK Writes",
      "date": "2025-08-28",
      "tags": ["Shiva", "Nataraja", "Hindu Trinity", "Cosmic Dance", "Destruction", "Creation"],
      "excerpt": "Explore the paradoxical nature of Lord Shiva, the cosmic dancer who destroys to create, and understand his central role in Hindu philosophy and spirituality.",
      "readTime": "8 min read",
      "featured": false
    },
    {
      "id": 3,
      "title": "Ganesha: The Beloved Elephant-Headed God",
      "content": "Lord Ganesha, one of the most beloved and widely worshipped deities in Hinduism, holds the unique position of being invoked before beginning any new venture, learning, or religious ceremony. Known as Vighnaharta (remover of obstacles) and Vinayaka (supreme leader), Ganesha's distinctive elephant head and human body make him instantly recognizable across Hindu culture.\n\nThe most popular legend of Ganesha's birth tells of how Parvati created him from turmeric paste while bathing, breathing life into the figure to guard her privacy. When Shiva returned and was denied entry by the unknown boy, a battle ensued that resulted in Ganesha's head being severed. To console the distraught Parvati, Shiva replaced the head with that of the first creature found - an elephant - and brought Ganesha back to life, declaring him the leader of all ganas (attendants).\n\nGanesha's physical form is rich with symbolism. His large elephant head represents wisdom and intelligence, while his small eyes encourage concentration and focus. His big ears signify the importance of listening, while his small mouth suggests speaking less and thinking more. His large belly contains infinite universes, and his single tusk (he broke the other to write the Mahabharata) represents the ability to overcome dualities.\n\nGanesha's four hands typically hold symbolic objects: a rope (to pull devotees closer to truth), an axe (to cut through attachments), a modak (sweet representing the rewards of spiritual seeking), and a lotus (representing enlightenment). His vehicle, a mouse named Mushika, symbolizes the mind that can gnaw through anything but becomes disciplined under Ganesha's guidance.\n\nThe festival of Ganesh Chaturthi, celebrated with great enthusiasm across India, particularly in Maharashtra, honors Ganesha's birth. During this festival, elaborate clay statues of Ganesha are installed in homes and public spaces, worshipped for several days, and then immersed in water bodies, symbolizing the cycle of creation and dissolution.\n\nGanesha is also revered as the patron of arts and sciences and the lord of beginnings. Students invoke his blessings before exams, businesses seek his favor for prosperity, and his image adorns the beginning of books, particularly in Indian tradition.\n\nBeyond India, Ganesha worship has spread throughout Southeast Asia, with significant temples and festivals in Thailand, Indonesia, and other countries, showing his universal appeal as a deity who helps overcome life's obstacles.",
      "category": "Hindu Mythology",
      "author": "GK Writes",
      "date": "2025-08-26",
      "tags": ["Ganesha", "Elephant God", "Vighnaharta", "Hindu Festivals", "Ganesh Chaturthi"],
      "excerpt": "Meet Lord Ganesha, the elephant-headed god who removes obstacles and blesses new beginnings, beloved across India and beyond for his wisdom and benevolence.",
      "readTime": "7 min read",
      "featured": false
    },
    {
      "id": 4,
      "title": "The Mahabharata: India's Greatest Epic and Its Divine Teachings",
      "content": "The Mahabharata stands as one of the longest epic poems in world literature and the most important text in Hindu tradition. With over 100,000 verses, it is often called the 'fifth Veda' and contains within it the Bhagavad Gita, one of Hinduism's most sacred texts.\n\nThe epic centers around the great war between two groups of cousins - the righteous Pandavas and their morally ambiguous cousins, the Kauravas - fighting for control of the kingdom of Hastinapur. But the Mahabharata is far more than a war story; it is a profound meditation on duty (dharma), righteousness, and the complexities of moral choice.\n\nThe five Pandava brothers each represent different aspects of human nature: Yudhishthira embodies righteousness and truth, Bhima represents strength and courage, Arjuna symbolizes skill and dedication, while the twins Nakula and Sahadeva represent beauty and wisdom respectively. Their shared wife, Draupadi, born from fire, represents the earth itself and the divine feminine principle.\n\nKrishna plays a central role as Arjuna's charioteer and divine guide. His teachings to Arjuna on the battlefield of Kurukshetra, when the warrior prince hesitates to fight his own relatives, form the Bhagavad Gita. In this dialogue, Krishna reveals his divine nature and explains the paths to spiritual liberation: through action (karma yoga), devotion (bhakti yoga), and knowledge (jnana yoga).\n\nThe epic explores complex moral questions that remain relevant today. Characters like Karna, born to a low caste but possessing noble qualities, challenge social hierarchies. Bhishma's oath of celibacy and loyalty leads to tragic consequences. Draupadi's humiliation in the royal court becomes a catalyst for war and raises questions about honor, justice, and the treatment of women.\n\nThe war itself, lasting eighteen days, represents the cosmic battle between good and evil, with divine weapons and supernatural elements highlighting the epic's mythological dimension. The aftermath shows the hollow victory of the Pandavas, who win the war but lose almost everything they fought for, teaching profound lessons about the pyrrhic nature of violence.\n\nThe Mahabharata's influence on Indian culture, law, politics, and spirituality cannot be overstated. Its stories have been retold in countless regional versions, theatrical performances, films, and television series. The epic's central message - that dharma is complex and situational rather than absolute - continues to provide guidance for navigating moral dilemmas in contemporary life.",
      "category": "Indian History",
      "author": "GK Writes",
      "date": "2025-08-22",
      "tags": ["Mahabharata", "Krishna", "Bhagavad Gita", "Pandavas", "Dharma", "Indian Epic"],
      "excerpt": "Delve into the Mahabharata, India's greatest epic that weaves together divine wisdom, complex moral dilemmas, and timeless teachings about duty and righteousness.",
      "readTime": "10 min read",
      "featured": false
    },
    {
      "id": 5,
      "title": "The Rise and Fall of Zeus: King of the Greek Gods",
      "content": "Zeus, the mighty ruler of Mount Olympus, stands as one of the most powerful and complex figures in Greek mythology. Born to the Titans Cronus and Rhea, Zeus's story begins with prophecy and patricide. His father, fearing that one of his children would overthrow him, devoured each newborn. However, Rhea managed to save Zeus by hiding him in a cave on Crete and feeding Cronus a stone wrapped in swaddling clothes instead.\n\nAs Zeus grew to manhood, he fulfilled the prophecy by leading a war against the Titans, known as the Titanomachy. With the help of his brothers Poseidon and Hades, and the Cyclopes who forged his legendary thunderbolt, Zeus emerged victorious. The defeated Titans were imprisoned in Tartarus, and the three brothers divided the world among themselves - Zeus taking the sky, Poseidon the sea, and Hades the underworld.\n\nZeus's reign was marked by both justice and passion. He was known for his numerous affairs with both goddesses and mortal women, resulting in many legendary offspring including Athena, Apollo, Artemis, Hercules, and Perseus. His wife Hera, goddess of marriage, was notorious for her jealousy and revenge against Zeus's lovers and their children.\n\nThe king of gods was not without his flaws. His impulsive nature and tendency toward wrath often caused problems for both gods and mortals. Yet he also served as the ultimate arbiter of justice and the protector of guests, suppliants, and the weak. The Olympic Games were held in his honor, and his oracle at Dodona was one of the most revered in the ancient world.\n\nZeus's influence extended far beyond Greek borders, being identified with Jupiter by the Romans and influencing countless other mythological traditions throughout the Mediterranean and beyond.",
      "category": "Greek Mythology",
      "author": "GK Writes",
      "date": "2025-08-20",
      "tags": ["Zeus", "Greek Gods", "Mount Olympus", "Titans", "Ancient Greece"],
      "excerpt": "Explore the epic tale of Zeus, from his dramatic birth to his reign as king of the gods, and discover how this powerful deity shaped ancient Greek religion and culture.",
      "readTime": "8 min read",
      "featured": false
    },
    {
      "id": 6,
      "title": "Secrets of the Egyptian Pharaohs: Divine Rulers of the Nile",
      "content": "The pharaohs of ancient Egypt were more than mere kings - they were living gods, intermediaries between the divine realm and mortal world. For over three millennia, these god-kings ruled one of history's most enduring civilizations along the life-giving waters of the Nile River.\n\nThe concept of divine kingship was central to Egyptian society. The pharaoh was believed to be the earthly embodiment of Horus, the falcon-headed god, and after death would join his father Ra in the afterlife. This divine status gave pharaohs absolute authority over their subjects and made their word law.\n\nAmong the most famous pharaohs was Akhenaten (originally Amenhotep IV), who revolutionized Egyptian religion by promoting the worship of a single god, Aten, represented by the sun disk. His reign marked one of the most dramatic religious upheavals in ancient history, though his monotheistic experiment was short-lived.\n\nTutankhamun, the boy king who ascended to the throne at age nine, became history's most famous pharaoh not for his life but for his death. His intact tomb, discovered by Howard Carter in 1922, revealed the incredible wealth and artistry of royal burial practices.\n\nCleopatra VII, the last pharaoh of Egypt, was renowned for her intelligence, charisma, and political acumen. She spoke multiple languages, was educated in mathematics, philosophy, and rhetoric, and successfully ruled Egypt for nearly two decades before falling to Roman conquest.\n\nThe pharaohs built monuments that still inspire awe today - the Great Pyramid of Giza, the temples of Luxor and Karnak, and the magnificent tomb paintings in the Valley of the Kings. These structures were not merely displays of power but were deeply religious in purpose, designed to ensure the pharaoh's successful journey to the afterlife.",
      "category": "Egyptian History",
      "author": "GK Writes",
      "date": "2025-08-18",
      "tags": ["Pharaohs", "Ancient Egypt", "Divine Kingship", "Tutankhamun", "Cleopatra"],
      "excerpt": "Discover the fascinating world of Egyptian pharaohs, divine rulers who governed as living gods and left behind some of humanity's greatest monuments.",
      "readTime": "7 min read",
      "featured": false
    },
    {
      "id": 7,
      "title": "Odin and the Norse Pantheon: Gods of War and Wisdom",
      "content": "In the harsh landscapes of medieval Scandinavia, the Norse people worshipped a pantheon of powerful gods who embodied the struggles and values of warrior culture. At the head of this divine family stood Odin, the All-Father, a complex deity who ruled not through brute strength alone but through cunning, sacrifice, and an insatiable thirst for wisdom.\n\nOdin was a god of many faces - warrior, poet, magician, and wanderer. He was known to sacrifice his own eye at Mimir's well in exchange for wisdom, and to hang himself from Yggdrasil, the World Tree, for nine days and nights to learn the secrets of the runes. These acts of self-sacrifice demonstrated that even gods must pay a price for knowledge and power.\n\nValhalla, Odin's great hall, served as the afterlife destination for warriors who died bravely in battle. These einherjar (chosen slain) would feast and fight eternally, preparing for Ragnarok, the prophesied end of the world where gods and giants would engage in final, catastrophic battle.\n\nOdin's sons played crucial roles in Norse mythology. Thor, the thunder god, was beloved by common people as a protector against giants and evil forces. His mighty hammer Mjolnir was said to never miss its target and could level mountains. Baldr, the god of light and purity, was considered the most beautiful and beloved of all gods until his tragic death, orchestrated by the trickster Loki.\n\nThe Norse cosmology centered around Yggdrasil, the immense ash tree that connected the nine worlds. These realms included Asgard (home of the gods), Midgard (the human world), Jotunheim (land of the giants), and Hel (the realm of the dead), among others.\n\nUnlike many mythological traditions, Norse mythology acknowledged that the gods were not immortal or all-powerful. Ragnarok would see the death of most major deities, including Odin himself, though the world would be reborn afterward with a new generation of gods and humans.",
      "category": "Norse Legends",
      "author": "GK Writes",
      "date": "2025-08-15",
      "tags": ["Odin", "Norse Mythology", "Vikings", "Valhalla", "Ragnarok"],
      "excerpt": "Journey into the realm of Norse mythology where Odin the All-Father leads gods preparing for the end of the world in the ultimate battle of Ragnarok.",
      "readTime": "9 min read",
      "featured": false
    },
    {
      "id": 8,
      "title": "The Fall of Rome: How an Empire Crumbled",
      "content": "The fall of the Roman Empire stands as one of history's most significant events, marking the end of an era that had dominated the Mediterranean world for over a thousand years. The collapse was not sudden but rather a gradual decline that occurred over several centuries, with historians traditionally marking 476 CE as the end of the Western Roman Empire.\n\nMultiple factors contributed to Rome's decline. Economic troubles plagued the empire as heavy taxation, inflation, and disrupted trade routes weakened the financial foundation. The military, once Rome's greatest strength, became increasingly dependent on foreign mercenaries who lacked loyalty to Roman ideals.\n\nPolitical instability further weakened the empire. The third century saw the 'Crisis of the Third Century' or 'Military Anarchy,' during which over 20 emperors ruled in 50 years, most dying violent deaths. This constant upheaval prevented consistent governance and long-term planning.\n\nThe rise of Christianity fundamentally changed Roman society. While providing unity in some ways, it also shifted focus from civic duty to spiritual salvation, potentially weakening traditional Roman values of military service and civic participation.\n\nBarbarian invasions intensified pressure on Roman borders. Groups like the Visigoths, Vandals, and Huns pressed against Roman territories, sometimes as invaders, sometimes as federates (allied tribes). The sack of Rome by Alaric in 410 CE and later by Genseric in 455 CE symbolized Rome's vulnerability.\n\nThe division of the empire into Western and Eastern (Byzantine) halves in 285 CE, while initially strengthening administration, ultimately weakened overall imperial unity. The Eastern Empire would continue for another thousand years, but the Western Empire struggled with reduced resources and manpower.\n\nDespite its fall, Rome's legacy endured through law, language, architecture, and governmental concepts that continue to influence the modern world.",
      "category": "Roman Empire",
      "author": "GK Writes",
      "date": "2025-08-12",
      "tags": ["Roman Empire", "Fall of Rome", "Ancient History", "Barbarian Invasions"],
      "excerpt": "Explore the complex factors that led to the collapse of one of history's greatest empires and how Rome's fall changed the course of Western civilization.",
      "readTime": "6 min read",
      "featured": false
    },
    {
      "id": 9,
      "title": "Mayan Gods and the Calendar of Time",
      "content": "The ancient Maya developed one of the most sophisticated civilizations in pre-Columbian America, with a complex religious system centered around powerful deities who controlled every aspect of life, death, and the cosmos. Their intricate understanding of time and astronomy was deeply intertwined with their religious beliefs.\n\nKukulkan, the feathered serpent deity, was one of the most important gods in the Mayan pantheon. Similar to the Aztec Quetzalcoatl, Kukulkan was associated with wind, rain, and learning. The famous pyramid at Chichen Itza was built in his honor, and during the spring and autumn equinoxes, shadows create the illusion of a serpent descending the pyramid's steps.\n\nItzamna, the creator god, was believed to be the ruler of heaven and the inventor of writing. He was often depicted as an aged man with a prominent nose and was associated with the sky, night, and day. The Maya believed he could resurrect the dead and was responsible for bringing maize to humanity.\n\nThe Mayan calendar system was remarkably complex, consisting of multiple interlocking cycles. The most famous is the Long Count calendar, which tracked longer periods of time and sparked modern interest due to the end of a major cycle in 2012. However, the Maya also used the Haab (365-day solar calendar) and the Tzolk'in (260-day ritual calendar).\n\nXibalba, the Mayan underworld, played a central role in their mythology. The Popol Vuh, the Mayan creation myth, tells of the Hero Twins who journeyed to Xibalba and defeated the lords of death through cunning and skill, eventually becoming the sun and moon.\n\nMayan priests were skilled astronomers who tracked the movements of celestial bodies with incredible precision. They could predict eclipses, the cycles of Venus, and other astronomical events, which they believed were manifestations of divine will.",
      "category": "World Mythology",
      "author": "GK Writes",
      "date": "2025-08-10",
      "tags": ["Maya", "Kukulkan", "Ancient Calendars", "Mesoamerica", "Astronomy"],
      "excerpt": "Delve into the rich mythology of the ancient Maya and discover how their gods controlled time itself through sacred calendars and cosmic cycles.",
      "readTime": "7 min read",
      "featured": false
    },
    {
      "id": 10,
      "title": "Medieval Knights: Chivalry and the Code of Honor",
      "content": "The medieval knight represents one of history's most enduring symbols of honor, courage, and nobility. These mounted warriors dominated European battlefields for centuries and created a lasting cultural legacy through the ideals of chivalry.\n\nKnighthood emerged in the 9th and 10th centuries as a response to the collapse of Carolingian authority and the need for local defense against Viking raids, Magyar invasions, and internal conflicts. The feudal system provided the economic foundation for knighthood, as lords granted land (fiefs) to knights in exchange for military service.\n\nThe process of becoming a knight was lengthy and rigorous. Boys from noble families typically began as pages around age 7, learning basic skills, courtesy, and serving in noble households. At 14, they became squires, directly serving knights and learning combat skills, horsemanship, and weapon maintenance. Finally, around age 21, they could be dubbed knights in a ceremony that became increasingly elaborate and religious over time.\n\nChivalry, the code of conduct for knights, emphasized several key virtues: courage in battle, protection of the weak (especially women and children), loyalty to one's lord, courtesy in all dealings, and Christian faith. These ideals, while not always practiced, provided a moral framework that elevated knights above mere warriors.\n\nFamous knightly orders emerged, such as the Knights Templar, who protected Christian pilgrims in the Holy Land, and the Knights Hospitaller, who provided medical care to travelers. These military-religious orders combined monastic vows with martial prowess.\n\nKnights played crucial roles in major medieval conflicts, from the Crusades to the Hundred Years' War. However, the rise of professional armies, gunpowder weapons, and changing military tactics gradually diminished their battlefield importance by the late medieval period.\n\nThe Arthurian legends, though largely mythical, captured the romantic ideals of knighthood and continue to influence how we perceive medieval knights today.",
      "category": "Medieval History",
      "author": "GK Writes",
      "date": "2025-08-05",
      "tags": ["Knights", "Medieval", "Chivalry", "Feudalism", "Crusades"],
      "excerpt": "Discover the real history behind medieval knights, from their origins in feudal society to the development of chivalric ideals that still captivate us today.",
      "readTime": "8 min read",
      "featured": false
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

// Event listeners
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

// Post rendering
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
  return `
    <div class="featured-post-content" data-post-id="${post.id}">
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
  return `
    <article class="post-card" data-post-id="${post.id}">
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

// Individual post display
function showPost(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  
  currentPost = post;
  
  // Populate post view elements
  document.getElementById('post-category').textContent = post.category;
  document.getElementById('post-date').textContent = formatDate(post.date);
  document.getElementById('post-read-time').textContent = post.readTime;
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-author').textContent = post.author;
  document.getElementById('post-content').innerHTML = formatPostContent(post.content);
  
  // Populate tags
  const tagsContainer = document.getElementById('post-tags');
  tagsContainer.innerHTML = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  showView('post');
}

function formatPostContent(content) {
  return content.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join('');
}

// Search functionality
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

// Create/Edit post functionality
function resetCreateForm() {
  const form = document.getElementById('post-form');
  if (form) {
    form.reset();
  }
  
  const createTitle = document.getElementById('create-title');
  if (createTitle) {
    createTitle.textContent = editingPostId ? 'Edit Post' : 'Write New Post';
  }
  
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
}

function handlePostSubmission(e) {
  e.preventDefault();
  
  const formData = {
    title: document.getElementById('title-input').value,
    category: document.getElementById('category-select').value,
    tags: document.getElementById('tags-input').value.split(',').map(tag => tag.trim()),
    content: document.getElementById('content-input').value
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
    excerpt: formData.content.substring(0, 200) + "...",
    readTime: calculateReadTime(formData.content),
    featured: false
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
    excerpt: formData.content.substring(0, 200) + "..."
  };
  
  editingPostId = null;
  showView('home');
  renderPosts();
  renderSidebar();
  
  alert('Post updated successfully!');
}

function editCurrentPost() {
  if (!currentPost) return;
  
  editingPostId = currentPost.id;
  showView('create');
}

// Preview functionality
function showPreview() {
  const formData = {
    title: document.getElementById('title-input').value,
    category: document.getElementById('category-select').value,
    tags: document.getElementById('tags-input').value.split(',').map(tag => tag.trim()),
    content: document.getElementById('content-input').value
  };
  
  // Populate preview
  document.getElementById('preview-category').textContent = formData.category;
  document.getElementById('preview-date').textContent = formatDate(new Date().toISOString().split('T')[0]);
  document.getElementById('preview-title').textContent = formData.title;
  document.getElementById('preview-content').innerHTML = formatPostContent(formData.content);
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
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Global functions for inline event handlers
window.showView = showView;
window.showPost = showPost;
window.clearSearch = clearSearch;

// ===========================================
// INSTANT BLOG DATA STORAGE SOLUTION
// ===========================================
// Add this code to your existing app.js file
// Posts will be saved permanently in browser!

// ADD THESE FUNCTIONS TO YOUR EXISTING app.js:

// Save posts to browser localStorage
function savePosts() {
  try {
    localStorage.setItem('gk-writes-posts', JSON.stringify(posts));
    console.log('✅ Posts saved successfully');
  } catch (error) {
    console.error('❌ Error saving posts:', error);
    alert('Storage full! Please export your posts as backup.');
  }
}

// Load posts from localStorage
function loadPosts() {
  try {
    const savedPosts = localStorage.getItem('gk-writes-posts');
    if (savedPosts) {
      posts = JSON.parse(savedPosts);
      console.log('✅ Loaded', posts.length, 'posts from storage');
      return posts;
    } else {
      // First time - use sample data
      posts = [...sampleData.samplePosts];
      savePosts(); // Save sample data
      console.log('✅ Initialized with sample data');
      return posts;
    }
  } catch (error) {
    console.error('❌ Error loading posts:', error);
    posts = [...sampleData.samplePosts];
    return posts;
  }
}

// MODIFY YOUR EXISTING FUNCTIONS:

// Update createNewPost function (find and replace)
function createNewPost(formData) {
  const newPost = {
    id: Date.now(), // Unique timestamp ID
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
  savePosts(); // 🔥 ADD THIS LINE - SAVES TO STORAGE!
  
  showView('home');
  renderPosts();
  renderSidebar();
  
  alert('✅ Post published and saved permanently!');
}

// Update updatePost function (find and replace)
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
  
  savePosts(); // 🔥 ADD THIS LINE - SAVES TO STORAGE!
  
  editingPostId = null;
  showView('home');
  renderPosts();
  renderSidebar();
  
  alert('✅ Post updated and saved!');
}

// Update initializeApp function (find and replace)
function initializeApp() {
  // 🔥 CHANGE THIS LINE - LOAD FROM STORAGE FIRST:
  loadPosts(); // This replaces: posts = [...sampleData.samplePosts];
  
  // Keep everything else the same:
  setupEventListeners();
  showView('home');
  renderPosts();
  renderSidebar();
}

// BONUS: Add backup/restore functions

// Export all posts as JSON file (backup)
function exportPosts() {
  const dataStr = JSON.stringify(posts, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `gk-writes-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
  alert('✅ Posts exported successfully!');
}

// Import posts from JSON file
function importPosts(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedPosts = JSON.parse(e.target.result);
      if (confirm(`Import ${importedPosts.length} posts? This will replace all current posts.`)) {
        posts = importedPosts;
        savePosts();
        renderPosts();
        renderSidebar();
        alert('✅ Posts imported successfully!');
      }
    } catch (error) {
      alert('❌ Error importing posts. Please check the file format.');
      console.error(error);
    }
  };
  reader.readAsText(file);
}

// Delete post function
function deletePost(postId) {
  if (confirm('🗑️ Are you sure you want to delete this post?')) {
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
      const deletedPost = posts.splice(postIndex, 1)[0];
      savePosts(); // Save after deletion
      
      showView('home');
      renderPosts();
      renderSidebar();
      
      alert(`✅ "${deletedPost.title}" deleted successfully!`);
    }
  }
}

// Clear all data (reset to sample posts)
function resetBlog() {
  if (confirm('🚨 This will delete ALL posts and reset to sample data. Are you sure?')) {
    localStorage.removeItem('gk-writes-posts');
    posts = [...sampleData.samplePosts];
    savePosts();
    renderPosts();
    renderSidebar();
    alert('✅ Blog reset to sample data!');
  }
}

// Storage info function
function showStorageInfo() {
  const savedData = localStorage.getItem('gk-writes-posts');
  const sizeInBytes = savedData ? savedData.length : 0;
  const sizeInKB = (sizeInBytes / 1024).toFixed(2);
  const sizeInMB = (sizeInBytes / 1024 / 1024).toFixed(2);
  
  const info = `
📊 GK Writes Storage Information:

📝 Total Posts: ${posts.length}
💾 Storage Used: ${sizeInKB} KB (${sizeInMB} MB)
📅 Last Updated: ${new Date().toLocaleString()}

💡 Tips:
• Export your posts regularly as backup
• Browser storage limit: ~5-10 MB
• Data persists until browser cache cleared
• Works offline once loaded
  `;
  
  alert(info);
}

// ===========================================
// ADD THESE BUTTONS TO YOUR HTML (optional)
// ===========================================
/*
Add these buttons to your about page or create an admin panel:

<div class="admin-controls" style="margin: 20px 0; text-align: center;">
  <h3>📊 Blog Management</h3>
  
  <button onclick="exportPosts()" class="btn btn--secondary">
    📥 Export Posts (Backup)
  </button>
  
  <label for="import-file" class="btn btn--secondary" style="margin-left: 10px;">
    📤 Import Posts
    <input type="file" id="import-file" accept=".json" onchange="importPosts(event)" style="display: none;">
  </label>
  
  <button onclick="showStorageInfo()" class="btn btn--outline" style="margin-left: 10px;">
    ℹ️ Storage Info
  </button>
  
  <button onclick="resetBlog()" class="btn btn--secondary" style="margin-left: 10px; background: #e74c3c;">
    🔄 Reset Blog
  </button>
</div>
*/

// ===========================================
// INSTALLATION CHECKLIST
// ===========================================
/*
✅ STEP 1: Copy all functions above to your app.js file
✅ STEP 2: Update your 3 existing functions (createNewPost, updatePost, initializeApp)  
✅ STEP 3: Test by writing a new blog post
✅ STEP 4: Refresh page - your post should still be there!
✅ STEP 5: Add admin buttons to your HTML (optional)

🎉 DONE! Your blog now saves data permanently!

📝 What happens now:
• New posts are saved automatically
• Data persists after browser refresh
• Works offline once loaded  
• Export/import for backups
• Up to ~5MB storage (thousands of posts)
*/

