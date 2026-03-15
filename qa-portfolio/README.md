# QA Engineer Portfolio — Next.js

A pixel-perfect QA Engineer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, matching the provided design screenshots.

---

## 🚀 Quick Deploy to Vercel (Recommended)

### Option A — GitHub + Vercel (Easiest)

1. **Create a GitHub repo** and push this code:
```bash
cd qa-portfolio
git init
git add .
git commit -m "Initial commit: QA Portfolio"
git remote add origin https://github.com/YOUR_USERNAME/qa-portfolio.git
git push -u origin main
```

2. **Go to [vercel.com](https://vercel.com)** → Sign in → "Add New Project"
3. **Import your GitHub repo**
4. Vercel auto-detects Next.js — click **Deploy**
5. ✅ Your site is live in ~2 minutes!

---

### Option B — Vercel CLI (Direct)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd qa-portfolio

# Install dependencies
npm install

# Deploy
vercel

# Follow the prompts — say yes to defaults
# For production deployment:
vercel --prod
```

---

## 💻 Local Development

```bash
cd qa-portfolio
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📁 Project Structure

```
qa-portfolio/
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page (assembles all sections)
│   └── globals.css      # Global styles & CSS variables
├── components/
│   ├── Navbar.tsx       # Fixed nav with smooth scroll
│   ├── Hero.tsx         # Hero with code block animation
│   ├── About.tsx        # About + stats grid
│   ├── Expertise.tsx    # 4 expertise cards
│   ├── Projects.tsx     # Expandable project case studies
│   ├── Tools.tsx        # Filterable tools grid + methodologies
│   ├── Certifications.tsx # Cert cards
│   ├── Contact.tsx      # Contact form with validation
│   └── Footer.tsx       # Footer
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 🎨 Design Details

- **Color scheme**: Dark (#0d0d0d bg, #1c1c1c cards) + Blue (#2563eb accent)
- **Typography**: Inter (body) + JetBrains Mono (code/logo)
- **Responsive**: Mobile, tablet, desktop breakpoints
- **Sections**: Hero → About → Expertise → Projects → Tools → Certifications → Contact

---

## ✏️ Customization

Replace placeholder content in each component:

| File | What to update |
|------|---------------|
| `components/Hero.tsx` | Tagline, stats |
| `components/About.tsx` | Bio text, competencies |
| `components/Projects.tsx` | Your real projects |
| `components/Certifications.tsx` | Your certs |
| `components/Contact.tsx` | Your email, phone, location |
| `app/layout.tsx` | SEO metadata (title, description) |

---

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Vercel** (deployment)
