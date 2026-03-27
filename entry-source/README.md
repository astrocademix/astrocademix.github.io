---
title: Clay Portfolio Website
emoji: 🚀
colorFrom: purple
colorTo: gray
sdk: vite
app_file: index.html
pinned: true
license: mit
tags:
  - react
  - tailwindcss
  - vite
  - portfolio
  - frontend
  - developer
  - netlify
  - website
---

[![Netlify Status](https://api.netlify.com/api/v1/badges/0b0a27f6-2bcf-4583-becd-31947550883c/deploy-status)](https://app.netlify.com/projects/clay-portfolio/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub last commit](https://img.shields.io/github/last-commit/McKlay/portfolio-website)
![GitHub stars](https://img.shields.io/github/stars/McKlay/portfolio-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/McKlay/portfolio-website?style=social)
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=McKlay.portfolio-website)

# Clay Mark Sarte — Portfolio Website

This is my personal space-themed portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
It showcases my skills in **Full Stack Development**, **AI/ML**, and **Embedded Systems**, with a clean and animated cosmic interface.

> 💫 Inspired by [spaceportfolio.netlify.app](https://clay-portfolio.netlify.app)

---

## 🌐 Live Demo

[![Open in Netlify](https://img.shields.io/badge/Open%20Live%20Netlify-%20clay--portfolio.netlify.app-blue?logo=netlify&style=flat-square)](https://clay-portfolio.netlify.app)

---

## Features

- Hero section with blackhole video + orbiting titles
- Global starfield background (WebGL preserved across routes)
- Responsive, animated layout for desktop and mobile
- Skills section with animated background (`skills.webm`)
- Modular Projects section with featured cards
- **`/projects` route** with categorized Project Gallery
- **ClayBot** AI Assistant embedded in all views

---

## ClayBot — Embedded ChatBot

**ClayBot** is an AI assistant embedded on the bottom-right of every page.

> "Hi! I'm ClayBot. Ask me anything about Clay's portfolio."

### Features:
- GPT-3.5-turbo powered assistant via OpenAI API
- Vector search over embedded `.md` project data (RAG-style)
- Powered by:
  - `FastAPI` backend (Render)
  - `text-embedding-3-small`
  - `Supabase pgvector`

### Backend Repo:
> [chatbot-backend](https://github.com/McKlay/claybot-backend)

---

## Folder Structure

```bash
portfolio-website/
│
├── .gitignore                 # Git ignored files (e.g., node_modules, env)
├── eslint.config.js           # ESLint configuration for code linting
├── index.html                 # Main HTML entry point for Vite
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Lockfile for reproducible installs
├── postcss.config.js          # PostCSS config (used by Tailwind)
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite bundler and build config
├── README.md                  # Project documentation
│
├── public/                    # Public assets (served statically)
│   ├── vite.svg               # Vite logo (default)
│   └── assets/
│       ├── images/            # Image files used across the site
│       └── videos/            # WebM videos like blackhole, skills, encryption
│
└── src/                       # Main source code
    ├── App.jsx                # Root component with routes or section logic
    ├── main.jsx               # React entry point (render, layout mount)
    ├── index.css              # Global Tailwind + base styles
    │
    ├── assets/                # Inline SVGs, logos, and misc assets
    │   └── react.svg
    │
    ├── components/            # All reusable, modular UI components
    │   ├── GlobalStarfield.jsx     # Persistent canvas starfield background
    │
    │   ├── chatbot/                # Chatbot UI + logic (ClayBot)
    │   │   ├── ActionProvider.jsx     # Handles chatbot responses
    │   │   ├── ChatBubble.css         # Bot/Message UI styles
    │   │   ├── ChatWidget.jsx        # Main chatbot floating widget
    │   │   ├── config.js             # Bot name, initial message
    │   │   └── MessageParser.js      # Parses user messages
    │
    │   ├── layout/                   # Layout components shared across pages
    │   │   ├── Navbar.jsx           # Top navigation bar
    │   │   └── Footer.jsx           # Footer with links
    │
    │   ├── sections/                # Section blocks for homepage + gallery
    │   │   ├── Encryption.jsx       # Animated “Security” themed section
    │   │   ├── Hero.jsx             # Top visual intro section
    │   │   ├── ProjectCard.jsx      # Project summary cards (used in homepage)
    │   │   ├── ProjectGallery.jsx   # Full gallery section (for `/projects`)
    │   │   ├── Projects.jsx         # Featured 3 projects (homepage)
    │   │   └── Skills.jsx           # Tech stack display with video background
    │
    │   └── sub/                     # Sub-components (atomic design)
    │       ├── OrbitIcons.jsx          # Rotating tech icons for hero
    │       ├── ProjectCardGallery.jsx  # Card for full gallery page
    │       └── RotatingTitles.jsx      # Animated profession titles in hero
    │
    ├── constants/               # Static data and content
    │   ├── PROJECT_DATA.js          # Featured homepage projects (3)
    │   └── PROJECT_GALLERY_DATA.js  # Full categorized list for `/projects`
    │
    ├── pages/                  # Route-based page components (React Router)
    │   └── Projects.jsx        # `/projects` route entry
    │
    └── utils/                  # Animation and helper utilities
        └── motion.js           # Framer Motion animation variants
````

---

## 📸 UI Preview

| Hero Section                                                                                                      | Projects Section                                                                                                          | Skills Section                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![hero](https://huggingface.co/datasets/McKlay/documentation-images/resolve/main/portfolio-website-data/Hero.png) | ![projects](https://huggingface.co/datasets/McKlay/documentation-images/resolve/main/portfolio-website-data/Projects.png) | ![skills](https://huggingface.co/datasets/McKlay/documentation-images/resolve/main/portfolio-website-data/Skills.png) |

---

## Run Locally

```bash
git clone https://github.com/McKlay/portfolio-website
cd portfolio-website
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## Deployment Notes

This project is part of a larger full-stack system.
You can view detailed deployment steps and architecture under:

> [`DEPLOYMENT_NOTES.md`](./DEPLOYMENT_NOTES.md)

---

## 👨‍💻 Author

Made by [Clay Mark Sarte](https://github.com/McKlay)  
Email: [sarteclaymark@gmail.com](mailto:sarteclaymark@gmail.com)

---

## License

MIT License — free to use, modify, and deploy.

---


