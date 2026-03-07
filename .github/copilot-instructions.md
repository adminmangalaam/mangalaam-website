# WITECH Project - Development Guidelines

This is a Vite React website project for an IT Software Tech & Solutions company, built with TypeScript, Tailwind CSS, React Router, and Redux Toolkit.

## Project Overview

- **Type**: Single Page Application (SPA)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **Package Manager**: Yarn

## Key Features Implemented

- ✅ Responsive multi-page website with 4 routes (Home, Services, About, Contact)
- ✅ Professional hero section with background images
- ✅ Services showcase with 3+ offerings
- ✅ Customer testimonials with ratings
- ✅ Contact form with validation
- ✅ Redux store setup with auth slice
- ✅ Tailwind CSS with custom colors (gold #FDB913, dark #1a1a1a)
- ✅ Fully typed TypeScript codebase

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Landing hero section
│   ├── Stats.tsx       # Company statistics
│   ├── Services.tsx    # Service cards
│   ├── Features.tsx    # Feature highlights
│   ├── Testimonials.tsx # Customer reviews
│   └── Footer.tsx      # Footer with links
├── pages/              # Route pages
│   ├── Home.tsx        # Home page
│   ├── Services.tsx    # Services detail
│   ├── About.tsx       # About company
│   └── Contact.tsx     # Contact form
├── store/              # Redux store
│   ├── index.ts        # Store config
│   └── slices/
│       └── authSlice.ts
├── App.tsx             # Route definitions
├── App.css             # App styles
├── main.tsx            # Entry point
└── index.css           # Tailwind imports
```

## Development Setup

### Prerequisites
- Node.js 18+
- Yarn package manager

### Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
# Opens at http://localhost:5173

# Build for production
yarn build

# Preview production build
yarn preview
```

## Configuration Files

- **vite.config.ts** - Vite build configuration
- **tsconfig.json** - TypeScript compiler options
- **tailwind.config.js** - Tailwind customization
- **postcss.config.js** - CSS processing
- **package.json** - Dependencies and scripts
- **.gitignore** - Git ignore rules

## Styling Guide

All styling uses Tailwind CSS utility classes. Custom colors are defined in `tailwind.config.js`:
- `bg-gold` / `text-gold` - Primary accent color
- `bg-dark` - Dark background (#1a1a1a)
- `bg-darkGray` - Secondary dark color (#2a2a2a)

## Image Management

- Images are free placeholders from Unsplash (external URLs)
- To use local images, place them in `public/` and reference them
- Replace placeholder URLs with your actual images in components

## Routing

React Router v6 is configured in `App.tsx`:
- `/` - Home page
- `/services` - Services detail page
- `/about` - About company page
- `/contact` - Contact form page

## State Management

Redux store is set up in `src/store/`:
- Auth slice handles login/logout state
- To add new state: create a new slice in `store/slices/`
- Use `useAppDispatch` and `useAppSelector` hooks in components

## Common Customization Tasks

### Add a New Page
1. Create a new file in `src/pages/YourPage.tsx`
2. Add route in `App.tsx`
3. Add navigation link in `Header.tsx`

### Customize Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      gold: '#FDB913',  // Change primary color
      dark: '#1a1a1a',  // Change dark color
    },
  },
}
```

### Add Redux State
1. Create slice in `src/store/slices/yourSlice.ts`
2. Import and add to `src/store/index.ts`
3. Use in components with Redux hooks

### Update Images
Replace image URLs in components. Search for:
- `unsplash.com` URLs in source files
- Update to your own image URLs or local paths

## Available Commands

```bash
yarn dev      # Start dev server
yarn build    # Production build
yarn preview  # Preview built site
yarn lint     # Run ESLint
```

## Performance Optimization

- Vite provides fast HMR (Hot Module Replacement)
- Tree-shaking of unused code in production
- Automatic code splitting via rollup
- Tailwind CSS purges unused styles in production

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES2020+ JavaScript support

## Troubleshooting

### Port Already in Use
```bash
yarn dev -- --port 3000
```

### Build Errors
1. Clear `node_modules` and reinstall: `rm -rf node_modules && yarn install`
2. Clear TypeScript cache: `yarn build --force`
3. Check TypeScript errors: `yarn build`

### Images Not Showing
- Ensure image URLs are valid and accessible
- Check that external image URLs are HTTPS
- For local images, place in `public/` folder

## Deployment

Build production version:
```bash
yarn build
```

Deploy the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Future Enhancement Ideas

- Add blog/news section
- Implement backend API integration
- Add authentication system
- Create admin dashboard
- Implement dark mode
- Add search functionality
- Multi-language support (i18n)
- PWA features

## Notes for Developers

- Keep components focused and reusable
- Use TypeScript for all new code
- Follow existing code style and naming conventions
- Always test responsive design (mobile, tablet, desktop)
- Test form validation before submitting
- Update this documentation when adding major features

---

Last updated: February 26, 2024
