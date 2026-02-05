# Anish Maisekar - Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark/light mode toggle, and the Infinite Menu component for navigation.

![Portfolio Preview](./screenshot.png)

## Features

- **Modern Design**: Clean, professional aesthetic with a cybersecurity/tech theme
- **Infinite Menu Navigation**: Smooth, interactive navigation from ReactBits
- **Dark/Light Mode**: Seamless theme switching with persistent preference
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Built with Vite for fast development and optimized builds

## Sections

1. **Hero**: Introduction with animated background and social links
2. **About**: Professional summary, education, and quick stats
3. **Skills**: Interactive skill visualization with tabbed categories
4. **Projects**: Featured projects with detailed descriptions
5. **Certifications**: Professional certifications showcase
6. **Contact**: Contact form and social media links

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Custom dark/light mode implementation

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or extract the project files)
```bash
cd anish-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your profile photo**
   - Copy your profile photo to the `public/` folder
   - Name it `profile-photo.jpg`

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

### Customizing Content

All content is stored in `src/data/content.js`. You can easily update:

- Personal information
- Skills and proficiency levels
- Project details
- Certifications
- Contact information
- Navigation items

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist/` folder.

## Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist/` folder to Netlify's deploy dashboard.

### 3. GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

## Project Structure

```
anish-portfolio/
├── public/
│   ├── profile-photo.jpg    # Your profile photo
│   └── vite.svg
├── src/
│   ├── components/          # Reusable components
│   │   ├── InfiniteMenu.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/             # React context
│   │   └── ThemeContext.jsx
│   ├── data/                # Content data
│   │   └── content.js
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization Guide

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
  cyber: {
    // Your custom accent colors
  }
}
```

### Updating Content

Edit `src/data/content.js` to update all text content, skills, projects, and certifications.

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `App.jsx`
3. Add navigation item to `navigationItems` in `content.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Lazy loading for below-fold content
- Smooth animations with GPU acceleration
- Minimal JavaScript bundle size

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email**: anishmaisekar@outlook.com
- **LinkedIn**: https://linkedin.com/in/anish-maisekar-508158298
- **GitHub**: https://github.com/notanishm

---

Built with ❤️ by Anish Maisekar