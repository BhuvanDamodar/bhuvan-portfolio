<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Outfit&weight=700&size=36&duration=3000&pause=1000&color=6C63FF&center=true&vCenter=true&width=600&lines=Bhuvan+Damodar;Software+Engineer+%7C+Full-Stack+Developer;Building+Digital+Experiences" alt="Typing SVG" />
</p>

<p align="center">
  <a href="#-features"><img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Framer_Motion-11.18-FF0050?style=for-the-badge&logo=framer&logoColor=white" /></a>
  <a href="#-deployment"><img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" /></a>
  <a href="#-license"><img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge" /></a>
</p>

---

## 🚀 About

A modern, single-page portfolio website built with **React 18** — showcasing my projects, professional experience, education, and technical skills. The interface features a **glassmorphism** design system, smooth **Framer Motion** animations, and a fully functional **EmailJS**-powered contact form — all wrapped in a responsive layout that looks great on any device.

> **Live Site →** https://bhuvandamodar-portfolio.vercel.app

---

## ✨ Features

| Section | Highlights |
|---------|-----------|
| **Home** | Animated hero with profile photo, expandable "About Me" bio, and smooth-scroll CTA |
| **Projects** | Filterable project grid (Machine Learning · Web Development) with detail modals and GitHub links |
| **Experience** | Interactive timeline with alternating layout, slide-in animations, and company logos |
| **Education** | Academic background section with relevant coursework |
| **Skills** | Visual skill cards with proficiency levels and CDN-sourced icons |
| **Contact** | Client-side validated form powered by **EmailJS** with success modal feedback |
| **Navigation** | Sticky navbar with smooth scrolling via React Scroll + responsive hamburger menu |

### Design & UX

- 🎨 **Glassmorphism UI** — frosted-glass card effect across all sections
- 🎞️ **Framer Motion Animations** — fade-ins, scale transitions, hover/tap micro-interactions
- 📱 **Fully Responsive** — optimized for mobile, tablet, and desktop viewports
- 🔤 **Google Fonts** — clean typography using Open Sans

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 (Create React App) |
| **Animations** | Framer Motion |
| **Navigation** | React Scroll |
| **Icons** | React Icons + Simple Icons CDN |
| **Email** | EmailJS |
| **Analytics** | Vercel Analytics |
| **Styling** | Vanilla CSS with glassmorphism variables |
| **Fonts** | Google Fonts (Open Sans) |

---

## 📁 Project Structure

```
bhuvan-portfolio/
├── public/
│   ├── index.html            # HTML template & meta tags
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js                # Root component — section composition
│   ├── index.js              # React DOM entry point
│   ├── index.css             # Global reset & base styles
│   ├── components/
│   │   ├── Header.jsx        # Sticky navbar + hamburger menu
│   │   ├── Home.jsx          # Hero section with expandable bio
│   │   ├── Projects.jsx      # Filterable project grid + modals
│   │   ├── Experience.jsx    # Animated timeline
│   │   ├── Education.jsx     # Academic background
│   │   ├── Skills.jsx        # Skill cards with proficiency
│   │   ├── Contact.jsx       # EmailJS contact form
│   │   ├── Footer.jsx        # Footer links & credits
│   │   └── styles/           # Component-scoped CSS modules
│   └── resources/
│       └── photos/           # Profile & project images
├── .env                      # EmailJS credentials (not committed)
├── package.json
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** ≥ 16
- **npm** ≥ 8

### Installation

```bash
# Clone the repository
git clone https://github.com/BhuvanDamodar/bhuvan-portfolio.git
cd bhuvan-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root with your [EmailJS](https://www.emailjs.com/) credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

### Development

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page will hot-reload on changes.

### Production Build

```bash
npm run build
```

Generates an optimized production bundle in the `build/` directory.

---

## 🌐 Deployment

This project is optimized for **Vercel** (one-click deploy):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BhuvanDamodar/bhuvan-portfolio)

> **Note:** Remember to add your `.env` variables in the Vercel project settings under *Environment Variables*.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <sub>Designed & built by <strong>Bhuvan Damodar Anand</strong></sub>
</p>
