# suman-portfolio

My Personal Developer Portfolio Website

# Suman Maity — React Portfolio

A static, responsive personal portfolio built with React, Vite and plain CSS. It has no backend or database.

## Run locally

1. Install Node.js (LTS).
2. Extract this project.
3. Open a terminal inside the project folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite (normally http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Personalise before publishing

Edit `src/data/portfolio.js`:

- Replace the example email address.
- Replace GitHub and LinkedIn profile URLs.
- Replace the phone placeholder or remove the phone field if not needed.
- Check all education details and percentages.
- Update skills to reflect your actual current proficiency.
- Add or update project links and descriptions.

Add your own portrait:

- Put your photo in `public/profile.jpg`.
- The hero section automatically shows an initials fallback if the photo is missing.

Add your actual resume:

- Put your PDF in `public/resume.pdf`.
- The Resume button links to that file. Do not publish a placeholder or someone else's resume.

## Project structure

```text
suman-portfolio/
├── public/
│   ├── profile.jpg       # Add your own photo
│   └── resume.pdf        # Add your own resume PDF
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Important accuracy note

The education and project details are prefilled from the information currently available. Review them before sharing the website publicly. The contact details are intentionally placeholders.
