# GK Writes - History & Mythology Blog

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://yourusername.github.io/gk-writes-blog)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**GK Writes** is a beautiful, responsive blogging platform dedicated to exploring the rich tapestry of history and mythology from around the world. From ancient Hindu deities to Greek gods, from Egyptian pharaohs to Norse legends, this blog brings fascinating historical and mythological stories to life.

## ✨ Features

- **📱 Fully Responsive Design** - Works beautifully on desktop, tablet, and mobile
- **🎨 Beautiful UI** - Clean, scholarly design with warm color palette
- **📝 Rich Content Editor** - Write and format blog posts with ease
- **🔍 Advanced Search** - Search through posts by title, content, category, or tags
- **📚 Category System** - Organized categories including Hindu Mythology, Indian History, and World Mythology
- **🏷️ Tag Management** - Flexible tagging system for better content discovery
- **👁️ Live Preview** - Preview posts before publishing
- **📊 Reading Time Estimation** - Automatic calculation of estimated reading time
- **💾 Draft Support** - Save drafts and publish later

## 🚀 Live Demo

Visit the live demo at: **[https://yourusername.github.io/gk-writes-blog](https://yourusername.github.io/gk-writes-blog)**

## 📖 Sample Content Included

The blog comes pre-loaded with engaging articles about:

### 🕉️ Hindu Mythology
- **Lord Vishnu**: The Preserver of the Universe and his Dashavataras
- **Lord Shiva**: The Cosmic Dancer and Destroyer
- **Ganesha**: The Beloved Elephant-Headed God
- **The Mahabharata**: India's Greatest Epic

### 🏛️ World Mythology & History
- **Greek Gods**: Zeus and the Olympian pantheon
- **Egyptian History**: Pharaohs and divine rulers
- **Norse Legends**: Odin and the warrior gods
- **Roman Empire**: Rise and fall of a civilization
- **Mayan Culture**: Gods and calendar mysteries
- **Medieval History**: Knights and chivalry

## 🛠️ Installation & Setup

### Option 1: GitHub Pages (Recommended - Free Hosting)

1. **Fork this repository** or create a new one
2. **Upload the files**:
   - `index.html`
   - `style.css` 
   - `app.js`
   - `README.md`

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your blog**:
   - Your blog will be available at `https://yourusername.github.io/your-repo-name`
   - GitHub will email you when it's ready (usually 5-10 minutes)

### Option 2: Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/gk-writes-blog.git
   cd gk-writes-blog
   ```

2. **Open in browser**:
   - Open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```

## 📁 File Structure

```
gk-writes-blog/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── app.js              # JavaScript functionality
├── README.md           # Documentation (this file)
└── LICENSE             # MIT License (optional)
```

## 🎨 Customization

### Changing Site Information
Edit the site information in `app.js`:

```javascript
const siteInfo = {
  title: "Your Blog Name",
  tagline: "Your Custom Tagline",
  contactEmail: "your-email@gmail.com",
  about: "Your about text..."
};
```

### Adding New Categories
Add categories to the categories array in `app.js`:

```javascript
"categories": [
  "Hindu Mythology",
  "Your New Category",
  // ... more categories
]
```

### Customizing Colors
Modify the CSS color variables in `style.css`:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  /* ... more color customizations */
}
```

## 📝 Creating New Posts

1. Click **"Write New Post"** button
2. Fill in the post details:
   - **Title**: Your post title
   - **Category**: Select from dropdown
   - **Tags**: Comma-separated tags
   - **Content**: Your article content

3. Use **"Preview"** to see how it looks
4. Click **"Publish Post"** when ready

### Post Structure
Posts support:
- **Multiple paragraphs** (separate with double line breaks)
- **Automatic read time calculation**
- **Tag system** for better organization
- **Category classification**
- **Author attribution**

## 🔧 Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks required
- **Responsive Design** - Mobile-first approach
- **Client-side Storage** - All data stored in browser memory
- **No Backend Required** - Perfect for static hosting
- **SEO Friendly** - Semantic HTML structure

## 🌟 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow existing code style
2. Test on multiple devices
3. Ensure accessibility compliance
4. Update documentation as needed

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 📞 Contact

**Email**: [tgkrishna23@gmail.com](mailto:tgkrishna23@gmail.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the rich traditions of world mythology and history
- Special focus on Hindu mythology and Indian cultural heritage
- Designed for storytellers, historians, and mythology enthusiasts

---

**Made with ❤️ for preserving and sharing the stories that shaped our world**

### 🎯 Quick Start Checklist

- [ ] Download all 3 files (index.html, style.css, app.js)
- [ ] Create GitHub repository named `gk-writes-blog`
- [ ] Upload files to repository
- [ ] Enable GitHub Pages in repository settings
- [ ] Customize site information in app.js
- [ ] Add your first blog post
- [ ] Share your blog URL!

Happy blogging! 🚀