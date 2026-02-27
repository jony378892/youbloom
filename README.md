# YouBloom

A modern, responsive blog application built with React and Vite. Browse posts, search by title or description, view detailed post information, and authenticate with phone number verification.

## 🚀 Features

- **Phone Number Authentication** - Secure login with country code validation (+254)
- **Post Browsing** - Browse a collection of posts with beautiful card layouts
- **Search Functionality** - Filter posts by title or description in real-time
- **Post Details** - View complete post information with enhanced typography and styling
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Context API** - Global state management for user and post data
- **Modern Styling** - Beautiful UI with Tailwind CSS

## 📋 Prerequisites

- Node.js (v16 or higher)
- Bun or npm package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/jony378892/youbloom.git
cd youbloom
```

2. Install dependencies:

```bash
bun install
# or
npm install
```

## ▶️ Running the Application

### Development Mode

```bash
bun dev
# or
npm run dev
```

The app will be available at `https://youbloom-rosy.vercel.app/`

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

## 📁 Project Structure

```
youbloom/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── Post.jsx
│   │   └── SearchField.jsx
│   ├── contexts/            # Context API setup
│   │   ├── PostContext.jsx
│   │   └── PostProvider.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.jsx
│   │   └── usePost.jsx
│   ├── Layouts/             # Layout components
│   │   └── RootLayout.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── PostDetail.jsx
│   ├── routes/              # Router configuration
│   │   └── router.jsx
│   ├── assets/              # Static assets
│   │   └── react.svg
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── vercel.json              # Vercel deployment config
└── README.md
```

## 🔐 Authentication

### Login Features

- Phone number input with country code validation
- Format: `+254XXXXXXXXX`
- Mock authentication with test credential: `+254712345678`
- Real-time form validation
- Error messages for invalid inputs
- Automatic redirect to home page on successful login

### Test Credentials

- **Phone Number**: `+254712345678`

## 🔍 Search Functionality

- Search posts by title or body description
- Real-time filtering as you type
- Clear button to reset search
- Full-text search across all posts
- Case-insensitive matching

## 🎨 UI Components

### Post Card (`Post.jsx`)

- Responsive grid layout (1-4 columns based on screen size)
- Beautiful image with hover zoom effect
- Post ID badge
- Title and description preview with line clamping
- "More Info" button with arrow icon
- Smooth transitions and animations

### SearchField (`SearchField.jsx`)

- Interactive search input
- Clear button functionality with cancel icon
- Real-time search filtering
- Full-width responsive design
- Placeholder text for guidance

### Navigation (`Navbar.jsx`)

- Top navigation bar with logo
- Back button on detail pages
- Responsive layout
- Logo component for branding

### Loading (`Loading.jsx`)

- Centered spinning loader icon
- Full-height component
- Animated loading state

### Footer (`Footer.jsx`)

- Application footer with branding

## 📦 Dependencies

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library (including react-icons)

## 🌐 API Integration

The application uses the JSONPlaceholder API for mock data:

- **Posts API**: `https://jsonplaceholder.typicode.com/posts`
- **Images**: `https://picsum.photos/` for random post images
- Fetches top 20 posts for display
- Automatic error handling for API failures

## 📱 Responsive Breakpoints

- **Mobile (xs)**: Single column layout
- **Tablet (md - lg)**: 2-3 columns layout
- **Desktop (xl)**: 4 columns layout
- Tailwind CSS breakpoints used for responsive design

## 🔧 Technical Implementation

### State Management

- **Context API** - Global state management for posts and user authentication
- **PostProvider** - Manages post data, loading, error, and search state
- **PostContext** - Centralized context for post-related data
- **usePost Hook** - Custom hook for accessing post context

### Loading & Error Handling

- **Loading State** - Shows spinner while fetching posts
- **Error State** - Displays error messages if API fails
- **Empty State** - Shows message when no posts match search criteria

### Search Implementation

- Real-time filtering using `.includes()` method
- Searches both post title and body content
- Case-insensitive search
- Trims whitespace for accurate matching

## 🔧 Configuration

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

## 👨‍💻 Author

Created with ❤️ for Jony
