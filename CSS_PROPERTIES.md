# Tailwind CSS Complete Property Reference

## Installation & Setup

```bash
npm install
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Core CSS Properties in Tailwind

### 1. Display & Layout

| Property | Utility | Example |
|----------|---------|---------|
| display: flex | `flex` | `<div class="flex">` |
| display: grid | `grid` | `<div class="grid">` |
| display: block | `block` | `<div class="block">` |
| display: inline | `inline` | `<span class="inline">` |
| flex-direction | `flex-col` | `<div class="flex flex-col">` |
| justify-content | `justify-center` | `<div class="flex justify-center">` |
| align-items | `items-center` | `<div class="flex items-center">` |
| gap | `gap-4` | `<div class="flex gap-4">` |

### 2. Typography

| Property | Classes | Example |
|----------|---------|---------|
| font-size | `text-sm` to `text-5xl` | `<p class="text-lg">` |
| font-weight | `font-thin` to `font-black` | `<p class="font-bold">` |
| line-height | `leading-tight` to `leading-loose` | `<p class="leading-relaxed">` |
| letter-spacing | `tracking-tight`, `tracking-wide` | `<p class="tracking-wide">` |
| text-align | `text-left`, `text-center`, `text-right` | `<p class="text-center">` |
| text-color | `text-gray-900`, `text-blue-600` | `<p class="text-blue-600">` |

### 3. Background & Colors

| Property | Examples | Utility |
|----------|----------|---------|
| background-color | All colors 50-900 | `bg-blue-600` |
| background-gradient | `from-*`, `to-*`, direction | `bg-gradient-to-r from-blue-400 to-purple-600` |
| background-image | `bg-opacity-*` | `bg-blue-600 bg-opacity-75` |

### 4. Spacing

| Property | Utilities | Example |
|----------|-----------|---------|
| margin | `m-4`, `mt-2`, `mr-6`, `mb-4`, `ml-3`, `mx-auto` | `<div class="m-4">` |
| padding | `p-4`, `pt-2`, `pr-6`, `pb-4`, `pl-3`, `px-4` | `<div class="p-4">` |
| gap | `gap-2` to `gap-12` | `<div class="flex gap-4">` |

### 5. Borders & Radius

| Property | Utilities | Example |
|----------|-----------|---------|
| border-width | `border`, `border-2`, `border-4` | `<div class="border-2">` |
| border-color | `border-blue-600` | `<div class="border border-blue-600">` |
| border-radius | `rounded`, `rounded-lg`, `rounded-full` | `<div class="rounded-lg">` |
| border-style | `border-solid`, `border-dashed` | `<div class="border-dashed">` |

### 6. Shadows & Effects

| Property | Utilities | Example |
|----------|-----------|---------|
| box-shadow | `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl` | `<div class="shadow-lg">` |
| opacity | `opacity-0` to `opacity-100` | `<div class="opacity-75">` |
| transition | `transition`, `transition-all` | `<div class="transition-all">` |
| duration | `duration-200`, `duration-300` | `<div class="duration-300">` |

### 7. Transforms

| Property | Utilities | Example |
|----------|-----------|---------|
| scale | `scale-100` to `scale-150` | `hover:scale-110` |
| rotate | `rotate-0` to `rotate-180` | `hover:rotate-12` |
| translate | `translate-x-*`, `translate-y-*` | `hover:translate-x-2` |
| skew | `skew-x-*`, `skew-y-*` | `skew-y-3` |

### 8. Positioning

| Property | Utilities | Example |
|----------|-----------|---------|
| position | `relative`, `absolute`, `fixed`, `sticky` | `<div class="relative">` |
| top/right/bottom/left | `top-0`, `right-4`, `bottom-2` | `<div class="absolute top-0 right-0">` |
| z-index | `z-0` to `z-50` | `<div class="z-50">` |

### 9. Size

| Property | Utilities | Example |
|----------|-----------|---------|
| width | `w-full`, `w-1/2`, `w-32` | `<div class="w-full">` |
| height | `h-full`, `h-32` | `<div class="h-32">` |
| min-width | `min-w-0`, `min-w-max` | `<div class="min-w-24">` |
| max-width | `max-w-*`, `max-w-6xl` | `<div class="max-w-6xl">` |

### 10. Responsive Design

| Breakpoint | Default | Usage |
|------------|---------|-------|
| sm | 640px | `sm:text-lg` |
| md | 768px | `md:flex` |
| lg | 1024px | `lg:grid-cols-3` |
| xl | 1280px | `xl:text-2xl` |
| 2xl | 1536px | `2xl:w-1/3` |

### 11. State Variants

| State | Utilities | Example |
|-------|-----------|---------|
| hover | `hover:bg-blue-700` | Auto applied on hover |
| focus | `focus:outline-none`, `focus:ring-2` | On input focus |
| active | `active:translate-y-0` | On element active state |
| disabled | `disabled:opacity-50` | For disabled elements |
| group-hover | `group-hover:scale-110` | Hover on parent group |

### 12. Animations

| Animation | Utilities | Example |
|-----------|-----------|---------|
| pulse | `animate-pulse` | `<div class="animate-pulse">` |
| spin | `animate-spin` | `<div class="animate-spin">` |
| bounce | `animate-bounce` | `<div class="animate-bounce">` |
| ping | `animate-ping` | `<div class="animate-ping">` |

## Custom Components in This Project

```css
/* Button Primary */
.btn-primary {
  @apply px-6 py-3 bg-blue-600 text-white font-semibold 
         rounded-lg hover:bg-blue-700 transition-colors 
         duration-200 shadow-md hover:shadow-lg;
}

/* Card */
.card {
  @apply bg-white rounded-lg shadow-md p-6 
         hover:shadow-xl transition-shadow duration-300;
}

/* Input Field */
.input-field {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg 
         focus:outline-none focus:ring-2 focus:ring-blue-500 
         focus:border-transparent;
}
```

## Common Patterns

### Centered Container
```html
<div class="max-w-6xl mx-auto px-4">
  Content centered with padding
</div>
```

### Gradient Background
```html
<div class="bg-gradient-to-r from-blue-600 to-purple-600">
  Gradient content
</div>
```

### Flex with Gap
```html
<div class="flex items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

### Responsive Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  Cards here
</div>
```

### Hover with Transform
```html
<div class="hover:shadow-xl hover:-translate-y-2 transition-all">
  Hover me
</div>
```

### Button with All States
```html
<button class="px-6 py-3 bg-blue-600 text-white rounded-lg 
               hover:bg-blue-700 active:bg-blue-800 
               focus:outline-none focus:ring-2 focus:ring-offset-2
               transition-all duration-300">
  Click me
</button>
```

## Tailwind Config Customization

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { /* custom colors */ },
      spacing: { /* custom spacing */ },
      borderRadius: { /* custom radii */ },
      boxShadow: { /* custom shadows */ },
      animation: { /* custom animations */ },
    },
  },
  plugins: [],
}
```

## Tips & Tricks

1. **Mobile First**: Always write mobile styles first, then add responsive variants
2. **Use Components**: Extract repeated utility patterns into custom components
3. **Extend Config**: Customize the theme in `tailwind.config.js` instead of writing CSS
4. **PurgeCSS**: Tailwind automatically removes unused styles in production
5. **Arbitrary Values**: Use `class="w-[42px]"` for custom values not in config

## Performance

- **Development**: Full CSS file (~50KB)
- **Production**: Purged CSS file (~10-15KB after compression)
- **No Runtime**: All CSS is static, no performance overhead

---

For more information, visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
