# Dipali Vitthal Parkhede – Premium Full Stack Developer Portfolio

A modern, high-performance, and responsive personal portfolio built for **Dipali Vitthal Parkhede** (Full Stack Developer based in Pune, Maharashtra).

Designed with a sleek **Deep Navy (#0B1020)** developer aesthetic, **Electric Violet (#8B5CF6)** and **Cyan Blue (#38BDF8)** glowing gradients, interactive glassmorphic cards, active scroll tracking, dynamic project modals, and an in-app interactive resume viewer with print/PDF support.

---

## 🚀 Live Preview & Architecture

- **Primary Stack**: React.js 18 + Vite + Tailwind CSS + Lucide Icons
- **Theme**: Automatic Dark / Light mode toggle with persistent `localStorage` support
- **Design Tokens**:
  - Primary Dark Background: `#0B1020` (Deep Navy)
  - Secondary Dark Background: `#111827`
  - Primary Accent: `#8B5CF6` (Electric Violet)
  - Secondary Accent: `#38BDF8` (Cyan Blue)
  - Highlights: `#A78BFA`
  - Text: `#F8FAFC` (Main), `#94A3B8` (Muted)

---

## 🌟 Key Sections & Features

1. **Sticky Navigation Bar**:
   - Monogram logo `DP` with violet-cyan gradient border
   - IntersectionObserver scroll spy highlighting the current active section
   - Smooth scrolling across all sections
   - Working dark/light theme switch
   - "Download Resume" quick-action button
   - Responsive slide-in mobile navigation menu

2. **Hero Section**:
   - Animated typewriter headline: cycling through *Full Stack Developer*, *React.js Developer*, *Frontend Developer*, and *Software Developer*
   - Interactive developer terminal displaying structured profile object
   - Floating tech stack badges (`React & Next.js`, `Node.js & MongoDB`) with ambient glow effects
   - Verified credentials badge (1+ Year Experience, 96% NPTEL Java)
   - Quick links to GitHub, LinkedIn, and direct email

3. **About Me**:
   - Executive profile overview & technical philosophy
   - 4 verified information cards: *1+ Year Experience*, *MCA Student*, *4 Featured Projects*, *Multiple Technical Certifications*
   - Visual milestone journey: *BCA @ G. S. College (7.64 CGPA)* → *AWS Linux Intern @ Smart Software Services* → *Frontend Developer @ Primexop* → *MCA @ SPPU IICMR (8.62 CGPA)*

4. **Technical Skills**:
   - Interactive categorization: *Programming Languages*, *Frontend*, *Backend*, *Databases*, *Cloud & DevOps*, *Developer Tools*, *Soft Skills*
   - Filter chips to view skills by category
   - Evidence-based level badges (*Proficient*, *Advanced*, *Hands-on*) with specific context notes

5. **Work Experience**:
   - **Frontend Developer** (Primexop, Freelancing | Jan 2024 – May 2025)
   - **AWS Linux Intern** (Smart Software Services Pvt. Ltd. | Mar 2024 – Sep 2024)
   - Concrete responsibility bullet points and technology tags

6. **Featured Projects**:
   - **JobConnect** (*Special Visual Priority* | Independently Developed Full Stack MERN Web Application)
   - **KrushiMitra AI** (Academic / Collaborative | AI & Machine Learning with EfficientNet-B0)
   - **Breast Cancer Diagnostic Prediction** (Academic / Collaborative | Healthcare ML)
   - **House Price Valuation Engine** (Academic / Collaborative | Real Estate ML Regression)
   - Category filter pills (*All Projects*, *Full Stack Development*, *AI & Machine Learning*, *Healthcare*, *Academic Projects*)
   - Direct GitHub repository links
   - Interactive **Project Detail Modal** showcasing architecture breakdown, user workflows, and stack specifications

7. **Academic Qualifications**:
   - **Master of Computer Applications (MCA)** – IICMR Nigdi, Savitribai Phule Pune University (8.62 CGPA)
   - **Bachelor of Computer Applications (BCA)** – G. S. College, Sant Gadge Baba Amravati University (7.64 CGPA)

8. **Certifications & Gallery**:
   - NPTEL Elite Certification in Programming in Java (96% Score)
   - Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
   - Oracle Cloud Infrastructure Data Science Professional
   - Certificate Course for Linux & AWS Professional (Nexus)
   - AI Python Programming – 200 Hours (ID Tech Solutions / NSDC)
   - Dynamic **Certificate Details Modal** with credential verification references

9. **Professional Achievements**:
   - Concrete cards highlighting verified milestones: Independent MERN architecture, 96% NPTEL score, OCI credentials, and production frontend engineering

10. **Interactive Resume Modal**:
    - Complete, high-definition developer resume rendered directly inside the portfolio
    - 1-click **Print / Save as PDF** (`window.print()`) configured with clean print styling

11. **Contact Section**:
    - Direct communication channels: Email, LinkedIn, GitHub, and Location (Pune)
    - 1-click **Copy Email** action with visual checkmark confirmation
    - Contact form with validation, loading animation, and functional mail client fallback

12. **Footer & Back to Top**:
    - Monogram, copyright year dynamically generated, quick navigation links, and floating scroll-to-top button

---

## 📁 Project Directory Structure

```text
dipali-portfolio/
├── index.html                  # SEO-optimized HTML with OpenGraph tags & custom favicon
├── package.json                # Project dependencies and build scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom theme tokens, colors & glow animations
├── vite.config.js              # Vite bundler configuration
├── public/
│   └── favicon.svg             # Violet & Cyan developer brand monogram
└── src/
    ├── main.jsx                # Application root entry
    ├── App.jsx                 # Main layout & section orchestration
    ├── index.css               # Base Tailwind, glassmorphism, scrollbars & themes
    ├── data/
    │   ├── personalInfo.js     # Bio, contact, stats, and journey data
    │   ├── skills.js           # Categorized technical skills
    │   ├── projects.js         # Detailed project data, architecture & links
    │   ├── experience.js       # Professional employment history
    │   ├── education.js        # Degrees, universities, and CGPA
    │   └── certifications.js   # Verified certifications & credentials
    └── components/
        ├── Navbar.jsx          # Sticky header with active scroll spy & mobile menu
        ├── Hero.jsx            # Hero section with animated typing & code card
        ├── About.jsx           # Profile narrative, stats & journey timeline
        ├── Skills.jsx          # Interactive skill categories & badges
        ├── Experience.jsx      # Work experience timeline
        ├── Projects.jsx        # Project cards with filters & featured spotlight
        ├── ProjectModal.jsx    # In-depth project architecture & features modal
        ├── Education.jsx       # Academic qualifications
        ├── Certifications.jsx  # Certification gallery
        ├── CertificateModal.jsx# Verified certificate credential modal
        ├── Achievements.jsx    # Verified accomplishments
        ├── ResumeModal.jsx     # In-app resume viewer with 1-click PDF print
        ├── Contact.jsx         # Contact channels & validated message form
        ├── Footer.jsx          # Dynamic footer & navigation
        ├── ThemeToggle.jsx     # Dark / Light mode toggle
        └── BackToTop.jsx       # Floating scroll-to-top button
```

---

## 🛠️ Local Development & Running

### 1. Navigate to the project directory:
```bash
cd "C:\Users\Dipali\.gemini\antigravity\scratch\dipali-portfolio"
```

### 2. Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for production:
```bash
npm run build
```
The optimized static bundle is generated in the `dist/` directory.

### 4. Preview the production build locally:
```bash
npm run preview
```

---

## 🚢 Deployment Instructions

### Deploy to Vercel (Recommended - 1 Click)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete premium full stack portfolio"
   git branch -M main
   git remote add origin https://github.com/dipaliparkhede/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and import the repository.
3. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository on [Netlify](https://netlify.com).
2. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy site**.
