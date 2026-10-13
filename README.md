# React + Tailwind CSS Project

A complete React setup with Tailwind CSS featuring all CSS properties and a comprehensive demonstration of modern web development practices.

## 📋 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── Forms.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 CSS Properties Included

### Layout & Display
- Flexbox (`flex`, `flex-wrap`, `gap`, etc.)
- Grid Layout (`grid`, `grid-cols-*`, etc.)
- Display properties (`block`, `inline`, `flex`, `grid`)
- Positioning (`relative`, `absolute`, `sticky`)

### Typography
- Font sizes (`text-xs` to `text-5xl`)
- Font weights (`font-thin` to `font-black`)
- Font families (custom configured)
- Line height (`leading-tight` to `leading-loose`)
- Letter spacing (`tracking-tight` to `tracking-wide`)
- Text alignment (`text-center`, `text-left`, etc.)

### Colors & Backgrounds
- Color palette (50-900 shades)
- Gradient backgrounds (`bg-gradient-to-r`, etc.)
- Opacity utilities
- Custom colors in config

### Spacing
- Margin (`m-*`, `mt-*`, `mx-*`, etc.)
- Padding (`p-*`, `pt-*`, `px-*`, etc.)
- Gap utilities for flex/grid
- Custom spacing values

### Borders & Radius
- Border widths (`border`, `border-2`, `border-4`)
- Border colors
- Border styles (`border-dashed`, `border-dotted`)
- Border radius (`rounded`, `rounded-lg`, `rounded-full`)
- Individual border sides (`border-t`, `border-r`, etc.)

### Shadows & Effects
- Box shadows (`shadow`, `shadow-md`, `shadow-lg`)
- Hover effects and transitions
- Animations (`animate-pulse`, custom animations)
- Transforms (`scale`, `rotate`, `translate`)

### Responsive Design
- Mobile-first breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`)
- Responsive utilities for all properties
- Media query support

### Effects & Interactions
- Transitions and animations
- Hover states
- Focus states
- Active states
- Opacity and visibility

## 🔧 Configuration

### Tailwind Config (tailwind.config.js)
Customize:
- Color palette
- Typography
- Spacing scale
- Border radius
- Box shadows
- Animations

### PostCSS Config (postcss.config.js)
- Tailwind CSS processing
- Autoprefixer for vendor prefixes

### Vite Config (vite.config.js)
- React plugin
- Dev server settings
- Build optimization

## 🧩 Components

### Header
Navigation component with responsive menu

### Hero
Eye-catching banner with gradient background

### Features
Card grid showcasing key features

### Button
Reusable button component with multiple variants

### Card
Flexible card component for content organization

### Forms
Form elements with input validation

## 💡 CSS Properties Showcase

The application demonstrates:

1. **Display Properties**: flex, grid, block, inline-block
2. **Background & Colors**: solid colors, gradients, opacity
3. **Borders**: different widths, styles, and radius
4. **Text**: all font sizes, weights, and styles
5. **Shadows**: multiple shadow levels with hover effects
6. **Positioning**: absolute, relative, sticky positioning
7. **Transforms**: scale, rotate, translate effects
8. **Animations**: pulse and custom animations

## 🎯 Interactive Features

- Counter component for state management
- Form submission with validation
- Hover effects and transitions
- Responsive grid layouts
- Modal-ready components

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🌙 Dark Mode Support

The Tailwind config is set up to support dark mode. Add `dark:` prefix to utilities for dark mode styling.

## 🔗 Useful Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [PostCSS Documentation](https://postcss.org)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding!** 🚀
