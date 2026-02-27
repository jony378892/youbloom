# 🌸 YouBloom

A modern, responsive blog application built with **React** and **Vite**. Discover, search, and read engaging blog posts with a beautiful, user-friendly interface.

## ✨ Features

- 🔐 **Phone Number Authentication** - Secure login with country code validation (+254)
- 📚 **Post Browsing** - Explore a collection of blog posts with elegant card layouts
- 🔍 **Real-time Search** - Filter posts by title or description instantly
- 📖 **Post Details** - View complete post information with enhanced typography and styling
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- 🎨 **Modern UI/UX** - Beautiful interface with Tailwind CSS
- ⚡ **Global State Management** - Context API for user and post data
- 🧪 **Jest Testing** - Unit tests included for components and functionality

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **Bun** (latest) or npm package manager
- Modern web browser with ES6+ support

## 🛠️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/jony378892/youbloom.git
cd youbloom
```

2. **Install dependencies:**

```bash
bun install
# or
npm install
```

3. **Set up environment variables (if needed):**

Create a `.env.local` file in the root directory and add any required environment variables.

## ▶️ Running the Application

### Development Mode

Start the development server with hot module replacement (HMR):

```bash
bun dev
# or
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

### Run Tests

```bash
bun run test
# or
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
youbloom/
├── src/
│   ├── components/                # Reusable UI components
│   │   ├── Footer.jsx             # Application footer
│   │   ├── Loading.jsx            # Loading spinner component
│   │   ├── Logo.jsx               # Logo component
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── Post.jsx               # Blog post card component
│   │   ├── Post.test.js           # Tests for Post component
│   │   └── SearchField.jsx        # Search input component
│   ├── contexts/                  # Context API setup
│   │   ├── PostContext.jsx        # Post context definition
│   │   └── PostProvider.jsx       # Post provider wrapper
│   ├── hooks/                     # Custom React hooks
│   │   ├── useAuth.jsx            # Authentication hook
│   │   └── usePost.jsx            # Post data hook
│   ├── Layouts/                   # Layout components
│   │   └── RootLayout.jsx         # Root layout wrapper
│   ├── pages/                     # Page components
│   │   ├── Home.jsx               # Home page with post grid
│   │   ├── Login.jsx              # Login page
│   │   └── PostDetail.jsx         # Individual post detail page
│   ├── routes/                    # Router configuration
│   │   └── router.jsx             # Route definitions
│   ├── utils/                     # Utility functions
│   ├── assets/                    # Static assets
│   │   └── react.svg
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Application entry point
├── public/                        # Static assets
├── .eslintrc.config.js            # ESLint configuration
├── babel.config.cjs               # Babel configuration
├── jest.config.cjs                # Jest testing configuration
├── jest.setup.js                  # Jest setup file
├── vite.config.js                 # Vite configuration
├── vercel.json                    # Vercel deployment config
├── bunfig.toml                    # Bun configuration
├── package.json                   # Project dependencies and scripts
├── bun.lock                       # Bun lock file
└── README.md                      # Project documentation
```

## 🔐 Authentication

### Login Features

- ✓ Phone number input with country code validation
- ✓ Format: `+254XXXXXXXXX`
- ✓ Mock authentication system
- ✓ Real-time form validation
- ✓ Error messages for invalid inputs
- ✓ Automatic redirect to home page on successful login

### Test Credentials

- **Phone Number**: `+254712345678`

## 🔍 Search & Filter Features

- **Real-time Search** - Search posts by title or body description
- **Instant Filtering** - Results update as you type
- **Clear Function** - Reset search with one click
- **Full-text Search** - Searches across all post content
- **Case-insensitive** - Matching works regardless of case
- **Post Count** - Shows total posts found

## 🎨 Component Overview

### Post Card (`Post.jsx`)

- Responsive grid layout (1-4 columns based on screen size)
- Beautiful image with hover zoom effect
- Post ID badge
- Title and description preview with line clamping
- "More Info" button with arrow icon
- Smooth transitions and animations
- Click to view post details

### SearchField (`SearchField.jsx`)

- Interactive search input
- Clear button functionality
- Real-time search filtering
- Full-width responsive design
- Placeholder text for guidance

### Navigation (`Navbar.jsx`)

- Top navigation bar with logo
- Responsive layout
- Logo component for branding
- Navigation between pages

### Loading State (`Loading.jsx`)

- Centered spinning loader
- Full-height component
- Animated loading indicator

### Footer (`Footer.jsx`)

- Application footer with branding
- Company information

## 📦 Technology Stack

### Frontend Framework

- **React 19.2.0** - UI library for building interactive interfaces
- **Vite 7.3.1** - Lightning-fast build tool and dev server
- **React Router 7.13.1** - Client-side routing and navigation

### Styling

- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **React Icons 5.5.0** - Beautiful icon library

### State Management & Notifications

- **Context API** - Global state management
- **React Hot Toast 2.6.0** - Toast notifications

### Testing & Quality

- **Jest 30.2.0** - JavaScript testing framework
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - DOM matcher utilities
- **jsdom 28.1.0** - JavaScript implementation of DOM

## 🌐 API Integration

The application uses the **JSONPlaceholder API** for mock data:

- **Posts API**: `https://jsonplaceholder.typicode.com/posts`
- **Images**: `https://picsum.photos/` for random post images
- Fetches top 20 posts for display
- Automatic error handling and loading states

## 📱 Responsive Design

### Breakpoints

- **Mobile (xs)** - Single column layout
- **Small Mobile (sm)** - Optimized for small screens
- **Tablet (md, lg)** - 2-3 columns layout
- **Desktop (xl)** - 4 columns layout
- **Ultra-wide (2xl)** - Enhanced spacing

Uses Tailwind CSS responsive utilities for seamless adaptation across devices.

## 🔧 Technical Implementation

### State Management

- **Context API** - Global state for posts and authentication
- **PostProvider** - Manages post data, loading, error, and search state
- **PostContext** - Centralized context for all post-related data
- **usePost Hook** - Custom hook for accessing post data
- **useAuth Hook** - Custom hook for authentication logic

### Data Flow

1. **Fetch Posts** - Load posts from JSONPlaceholder API on app mount
2. **Store State** - Save posts in PostContext with loading/error states
3. **Search Filter** - Filter posts based on user search input
4. **Display Results** - Render filtered posts with pagination support

### Error Handling

- **Loading State** - Shows spinner while fetching data
- **Error State** - Displays error messages if API fails
- **Empty State** - Shows message when no posts match search criteria
- **Toast Notifications** - User feedback for actions

## 🧪 Testing

The project includes Jest configuration for unit testing:

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

Tests are included for:

- Component rendering
- User interactions
- State management
- Utility functions

## 🔧 Configuration Files

- `vite.config.js` - Vite build configuration with React plugin
- `jest.config.cjs` - Jest testing framework configuration
- `babel.config.cjs` - Babel transpiler configuration
- `eslint.config.js` - Code linting rules and standards
- `bunfig.toml` - Bun package manager configuration
- `vercel.json` - Vercel deployment settings

## 🚀 Deployment

### Vercel Deployment

The project is configured for Vercel deployment:

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

Current live deployment: `https://youbloom-rosy.vercel.app/`

### Vite Config

- React Fast Refresh enabled
- ESLint rules configured
- Optimized for development and production builds

### Tailwind CSS

- Utility-first CSS framework
- Custom responsive design
- Modern color palette

## 🚀 Deployment

To deploy the application:

1. Build the project:

```bash
bun run build
```

2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)
