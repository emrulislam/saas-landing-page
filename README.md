# 🚀 SaaSify - Modern SaaS Landing Page

A responsive **SaaS landing page** built with **React, Tailwind CSS, and DaisyUI**.  
Features a sticky header with scroll-spy, smooth navigation, responsive pricing section, testimonials, and a clean footer with social links.

## 🌐 Live Website

[Visit Live Website](https://landing-page-3m6.pages.dev//)

## 💻 Desktop, 📱 Mobile & 📱 Tablet Preview

<p align="center">
  <img src="./public/screenshots/desktop-mockup.png" alt="Desktop" height="250"/>
  <img src="./public/screenshots/tablet-mockup.png" alt="Tablet" height="250"/>
  <img src="./public/screenshots/iphone-mockup.png" alt="iPhone" height="250"/>
</p>

---

## ✨ Features

- 📌 **Sticky Navbar** — Always visible at the top while scrolling.
- 🔍 **Scroll Spy Navigation** — Highlights the active section while scrolling.
- 📱 **Responsive Design** — Fully mobile-friendly with dropdown menu.
- 🎨 **Tailwind + DaisyUI** — Modern styling with utility-first classes.
- 💰 **Pricing Section** — Styled cards for showcasing plans.
- 💬 **Testimonials Section** — Customer feedback display.
- 🔗 **Footer with Social Links** — Responsive links that stack on mobile.
- ⚡ **Fast & Lightweight** — Built with React + Vite.

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/) + [React Router](https://reactrouter.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)

---

## 📂 Project Structure

```bash
src/
├── components/                 # All components & sections
│   ├── CTA.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Home.jsx                # (section, not the main page)
│   ├── Pricing.jsx
│   ├── PricingCard.jsx
│   └── Testimonials.jsx
│
├── layout/                     # Layout wrappers
│   └── MainLayout.jsx
│
├── pages/                      # Route-level pages
│   └── Home.jsx                # Main Home page
│
├── App.jsx                     # App entry (routes + layout)
├── main.jsx                    # ReactDOM entry
└── index.css                   # Tailwind styles