# WITECH - IT Software Tech & Solutions

A modern, responsive website for an IT solutions company built with cutting-edge web technologies.

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router v6
- **State Management**: Redux Toolkit
- **Package Manager**: Yarn

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Stats.tsx       # Statistics display
│   ├── Services.tsx    # Services overview
│   ├── Features.tsx    # Features section
│   ├── Testimonials.tsx # Customer testimonials
│   └── Footer.tsx      # Footer navigation
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Services.tsx    # Services detail page
│   ├── About.tsx       # About us page
│   └── Contact.tsx     # Contact form page
├── store/              # Redux state management
│   ├── index.ts        # Store configuration
│   └── slices/
│       └── authSlice.ts # Authentication state
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
├── App.css             # App styles
└── index.css           # Global styles with Tailwind
```

## ⚙️ Configuration Files

- **vite.config.ts** - Vite configuration
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.js** - Tailwind CSS customization
- **postcss.config.js** - PostCSS configuration
- **package.json** - Dependencies and scripts

## 🎨 Color Scheme

- **Primary**: Gold (#FDB913)
- **Dark Background**: #1a1a1a
- **Dark Gray**: #2a2a2a

## 📋 Features

- ✅ Responsive design optimized for mobile and desktop
- ✅ Modern hero section with call-to-actions
- ✅ Services showcase with hover effects
- ✅ Customer testimonials section
- ✅ Contact form with validation
- ✅ Redux state management setup
- ✅ TypeScript support for type safety
- ✅ SEO-friendly structure

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or npm 9+
- Yarn package manager (recommended)

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Run linting
yarn lint
```

## 🌐 Pages

### Home (`/`)
- Hero section with call-to-action buttons
- Statistics display showing company metrics
- Services overview
- Features and benefits
- Customer testimonials

### Services (`/services`)
- Detailed service descriptions
- Feature lists for each service
- Call-to-action button
- Grid layout with 4 service offerings

### About (`/about`)
- Company story and mission
- Team member showcase
- Company values
- Professional photos

### Contact (`/contact`)
- Contact information (address, phone, email)
- Business hours
- Contact form with validation
- Form submission handling

## 🔧 Available Scripts

```bash
# Development
yarn dev           # Start development server at http://localhost:5173

# Production
yarn build         # Build for production
yarn preview       # Preview production build locally

# Code Quality
yarn lint          # Run ESLint
```

## 🛠️ Component Details

### Header
- Responsive navigation with route links
- Logo with company name
- Get Started button

### Hero
- Full-width background image
- Large heading and description
- Dual action buttons

### Services
- 3-column grid layout
- Service cards with icons
- Hover effects and descriptions

### Testimonials
- Customer quotes and ratings
- Customer profile images
- Star ratings system

### Contact Form
- Full validation
- Responsive design
- Form state management

## 📱 Images

The project uses free placeholder images from Unsplash:
- Team and banner images from `unsplash.com`
- Images are referenced via direct URLs
- Replace with your own images as needed

To use your own images:
1. Replace the image URLs in components
2. Ensure images are optimized for web
3. Use a CDN for better performance

## 🎨 Tailwind CSS Classes

Key utility classes used throughout:
- `bg-dark`, `bg-gold` - Custom background colors
- `text-gold` - Gold text color
- `max-w-7xl` - Content max-width container
- `flex`, `grid` - Layout utilities
- `hover:` - Hover states
- `transition` - Smooth animations

## 🔐 Redux State Management

### Auth Slice
- **State**: `isLoggedIn`, `user`
- **Actions**: `login(username)`, `logout()`

Extend the store by:
1. Creating new slices in `src/store/slices/`
2. Adding them to the store configuration
3. Using `useAppDispatch` and `useAppSelector` hooks

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - DOM rendering
- `react-router-dom` - Routing
- `@reduxjs/toolkit` - State management
- `react-redux` - React-Redux bindings

### Development
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `postcss` & `autoprefixer` - CSS processing
- `eslint` - Code linting

## 🚀 Deployment

The project builds to a `dist/` directory that can be deployed to any static hosting:

```bash
# Build
yarn build

# Deploy the dist folder to your hosting provider
# Popular options: Vercel, Netlify, GitHub Pages, AWS S3, etc.
```

## 🤝 Contributing

Feel free to extend this template by:
- Adding more pages
- Creating additional Redux slices
- Customizing Tailwind colors
- Adding new components

## 📄 License

This project is open source and available for modification and distribution.

## 💡 Future Enhancements

- [ ] Add blog section
- [ ] Implement search functionality
- [ ] Add product/portfolio showcase
- [ ] Integrate with backend API
- [ ] Add authentication system
- [ ] Implement dark mode toggle
- [ ] Add internationalization (i18n)
- [ ] Progressive Web App (PWA) features

---

**Created with ❤️ using modern web technologies**
