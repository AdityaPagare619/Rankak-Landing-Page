# Rankak Mobile Landing Page 🚀

> The AI That Actually Knows JEE.

A premium, high-performance mobile landing page for Rankak, featuring immersive motion design, gamified UI elements, and a seamless "app-like" experience on the web.

## 🌟 Key Features
*   **Motion-First Design**: Physics-based animations, scroll-linked parallax, and micro-interactions using Framer Motion.
*   **Gamified UX**: "Victory Wall", "Command Center", and interactive mascot elements.
*   **Performance Optimized**: Vite-powered build, optimized assets, and code splitting.
*   **Production Ready**: Supabase integration for waitlist management and Vercel-ready configuration.

## 🛠️ Tech Stack
*   **Framework**: React + Vite
*   **Styling**: Tailwind CSS + Custom Design System
*   **Animation**: Framer Motion + Lottie
*   **Backend**: Supabase (PostgreSQL)
*   **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/rankak-mobile-landing.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## 🔐 Security & Architecture
This project uses a **Supabase** backend with strict Row Level Security (RLS).
*   **Public Access**: Restricted to `INSERT` only for the `early_access_users` table.
*   **Data Safety**: No public `SELECT`, `UPDATE`, or `DELETE` permissions.
*   **Keys**: The `VITE_SUPABASE_ANON_KEY` is safe to expose on the client side as it is restricted by RLS policies.

## 📂 Project Structure
```
src/
├── assets/         # Optimized static assets (WebP, SVG)
├── components/     # React components (Mobile & Desktop)
├── hooks/          # Custom hooks (useDeviceType, etc.)
├── lib/            # Utilities (Supabase client)
└── styles/         # Global styles and Tailwind config
```

## 🌍 Deployment
See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions on connecting your domain (`rankak.in`) via Vercel.

---
© 2025 Rankak. All rights reserved.
