# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a beautiful dark theme with purple accents, smooth animations, and dynamic content management.

## 🚀 Features

- **Modern Design**: Dark theme with purple gradient accents using a custom color palette
- **Responsive**: Fully responsive design that works on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion animations for page transitions and hover effects
- **Dynamic Content**: Easy-to-update project and blog content via JSON files
- **TypeScript**: Full TypeScript support for better development experience
- **Performance Optimized**: Optimized for fast loading and smooth interactions

## 🎨 Design

- **Color Palette**: Custom dark theme with lavender and ultra-violet accents
- **Typography**: Inter font for body text, JetBrains Mono for code
- **Glass Effects**: Modern glassmorphism design elements
- **Gradients**: Beautiful gradient backgrounds and text effects

## 📱 Pages

1. **Home**: Hero section with animated background and call-to-action buttons
2. **About**: Bio, skills, experience, and education sections
3. **Projects**: Dynamic project gallery with filtering and search
4. **Contact**: Contact form with validation and social links
5. **Blog**: Blog posts with search and tag filtering

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anishtaa/Portfolio-website.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Customizing Content

#### Projects
Edit `src/data/projects.json` to update your projects:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project Title",
      "description": "Project description...",
      "image": "project-image-url",
      "techStack": ["React", "TypeScript"],
      "category": "Web Application",
      "githubLink": "https://github.com/...",
      "liveLink": "https://project-demo.com",
      "featured": true
    }
  ]
}
```

#### Personal Information
Update the following files with your information:
- `src/pages/Home.tsx` - Name, tagline, and description
- `src/pages/About.tsx` - Bio, skills, experience, and education
- `src/pages/Contact.tsx` - Contact information and social links

#### Colors
The color palette is defined in `tailwind.config.js`. You can customize the colors by modifying the `colors` section.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically build and deploy your site
   - Your site will be available at `https://your-portfolio.vercel.app`

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 📝 Customization Guide

### Changing Colors
1. Update the color values in `tailwind.config.js`
2. Modify the gradient classes in `src/index.css`
3. Update any hardcoded color values in components

### Adding Animations
1. Import Framer Motion components
2. Use `motion` components with animation props
3. Add `useInView` hook for scroll-triggered animations

### Styling Components
1. Use Tailwind CSS classes for styling
2. Create custom CSS classes in `src/index.css` for complex styles
3. Use the glass effect class for modern card designs

## 🔍 SEO Optimization

The portfolio includes:
- Meta tags for social sharing
- Open Graph tags for Facebook/LinkedIn
- Twitter Card tags
- Semantic HTML structure
- Optimized images and lazy loading

## 📱 Mobile Optimization

- Responsive design with mobile-first approach
- Touch-friendly navigation
- Optimized images for mobile devices
- Smooth scrolling and animations

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Lazy Loading**: Images load as they come into view
3. **Code Splitting**: React Router automatically splits code by routes
4. **Minification**: Build process minifies CSS and JavaScript

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [Unsplash](https://unsplash.com/) for sample images


---

Made with ❤️ by Anishta M


