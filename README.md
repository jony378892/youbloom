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
│   │   ├── Button.jsx
│   │   ├── Loading.jsx
│   │   ├── Navbar.jsx
│   │   ├── Post.jsx
│   │   └── SearchBox.jsx
│   ├── contexts/            # Context API setup
│   │   ├── UserContext.jsx
│   │   └── UserProvider.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useUser.jsx
│   ├── Layouts/             # Layout components
│   │   └── RootLayout.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── PostDetail.jsx
│   ├── routes/              # Router configuration
│   │   └── router.js
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
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

- Search posts by title or description
- Real-time filtering as you type
- Clear button to reset search

## 🎨 UI Components

### Post Card

- Responsive grid layout (1-4 columns)
- Beautiful image with hover zoom effect
- Post ID badge
- Title and description preview
- "More Info" button with arrow icon

### SearchBox

- Icon-based search input
- Clear button functionality
- Real-time search filtering
- Full-width responsive design

### Navigation

- Top navigation bar
- Back button on detail pages
- Responsive links and routing

## 📦 Dependencies

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

## 🌐 API

The application uses the JSONPlaceholder API for mock data:

- Posts: `https://jsonplaceholder.typicode.com/posts`
- Images: `https://picsum.photos/` for random post images

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet**: 2-3 columns layout
- **Desktop**: 3-4 columns layout

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
