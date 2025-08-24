# Chirag Bhoi Portfolio

Welcome to my personal portfolio, showcasing my skills as a Frontend Developer from Udaipur, Rajasthan. Built with React.js, TypeScript, and Tailwind CSS, this project highlights my ability to create responsive, accessible, and visually appealing web applications.

## Project Overview

This portfolio demonstrates my expertise in frontend development, featuring a clean design with gradient backgrounds, smooth hover effects, and accessible navigation. It includes sections for Home, About, and placeholders for Skills, Projects, and Contact, with plans to expand functionality in the future.

## Completed Work

- **Header**:
  - Sticky header with a gradient background (`from-[#0e7490] via-[#3b82f6] to-[#4f46e5]`).
  - Logo, navigation links (About, Skills, Project, Contact), and a resume button linking to a Google Drive file.
  - Accessibility with `aria-label` for navigation and resume link.
  - Hover effects on logo, nav links, and resume button.
- **Home Section**:
  - Hero section with a vibrant gradient (`from-[#9d174d] via-[#d946ef] to-[#f0abfc]`).
  - Introduction with name, title, and skills (React.js, TypeScript, Tailwind CSS).
  - Social media links (GitHub, X, LinkedIn) with `aria-label` for accessibility.
  - Hero image (`HeroSlider.jpg`) with lazy loading.
  - Responsive layout for desktop and mobile.
- **About Section**:
  - About Me section with matching gradient and responsive layout.
  - Introduction text and placeholder image (`about.jpg`).
  - Accessibility with `role="region"` and `aria-label="About Chirag Bhoi"`.
- **App Structure**:
  - Combines Header, Home, and About with a full-page gradient background.
  - Placeholder sections for Skills, Project, and Contact to support hash navigation.
- **HTML Setup**:
  - Standard Vite `index.html` with meta tags and favicon (to be updated).
- **Image Handling**:
  - Images placed in `public/assets/img/` to avoid Vite import errors (e.g., `logo.png`, `HeroSlider.jpg`).

## Future Features

- **Complete Sections**:
  - Add `Skills.tsx` with a visual showcase of technical skills (e.g., progress bars or icons).
  - Develop `Project.tsx` to display GitHub projects like `Random-password-generator` with live/demo links.
  - Create `Contact.tsx` with a contact form or details.
- **React Router**: Implement `react-router-dom` for smooth page navigation.
- **Animations**: Add Framer Motion for section transitions and interactive effects.
- **SEO Enhancements**: Include dynamic Open Graph tags and update `og:url` after deployment.
- **Resume Accessibility**: Host resume on a public platform (e.g., GitHub) for easier access.
- **Favicon**: Replace `vite.svg` with `logo.png` or a custom favicon.
- **Responsive Design**: Optimize mobile layouts for smaller font sizes and image scaling.
- **Dark Mode**: Add a toggle for dark/light mode.
- **Analytics**: Integrate Google Analytics to track visitor engagement.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chiragbhoi01/Chirag-Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Chirag-Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Dependencies

- **React.js**: Frontend framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **react-icons**: Social media and download icons
- **Vite**: Build tool

## Notes

- **Image Assets**: Place `logo.png`, `HeroSlider.jpg`, and `about.jpg` in `public/assets/img/` to avoid Vite import issues. If using `src/assets/img/`, ensure `vite.config.ts` has proper aliases.
- **Resume Link**: Update Google Drive sharing to "Anyone with the link" for accessibility.
- **Navigation**: Add sections with `id="skills"`, `id="project"`, and `id="contact"` to enable hash navigation.

## Contact

Reach out via:
- GitHub: [chiragbhoi01](https://github.com/chiragbhoi01)
- X: [@Mr_chirag_bhoi](https://x.com/Mr_chirag_bhoi)
- LinkedIn: [Chirag Bhoi](https://www.linkedin.com/in/chirag-bhoi-90b89b1b1)