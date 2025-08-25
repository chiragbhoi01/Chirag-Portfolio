# Chirag Bhoi Portfolio

Welcome to my personal portfolio, showcasing my skills as a Frontend Developer from Udaipur, Rajasthan. Built with React.js, TypeScript, and Tailwind CSS, this project highlights my ability to create responsive, accessible, and visually appealing web applications.

## Project Overview

This portfolio demonstrates my expertise in frontend development, featuring a clean design with gradient backgrounds, smooth hover effects, and accessible navigation. It includes sections for Home, About, Skills, Projects, Contact, and Footer, with a cohesive and modern UI.

## Completed Work

- **Header**:
  - Sticky header with a gradient background (`from-[#0e7490] via-[#3b82f6] to-[#4f46e5]`).
  - Logo, navigation links (About, Skills, Project, Contact), and a resume button linking to a Google Drive file.
  - Hamburger menu for small devices with a dropdown navigation.
  - Accessibility with `aria-label` for navigation and resume link.
- **Home Section**:
  - Hero section with a vibrant gradient (`from-[#9d174d] via-[#d946ef] to-[#f0abfc]`).
  - Introduction with name, title, and skills (React.js, TypeScript, Tailwind CSS).
  - Social media links (GitHub, X, LinkedIn) with `aria-label`.
  - Hero image (`HeroSlider.jpg`) with lazy loading.
- **About Section**:
  - About Me section with matching gradient and responsive layout.
  - Introduction text and placeholder image (`about.jpg`).
  - Accessibility with `role="region"` and `aria-label="About Chirag Bhoi"`.
- **Skills Section**:
  - Skills section with a matching gradient and responsive grid layout.
  - Displays skills (HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS) with icons from `react-icons`.
  - Card-based design with hover effects and semi-transparent backgrounds.
  - Accessibility with `aria-label="Chirag Bhoi's Skills"`.
- **Projects Section**:
  - Projects section with a matching gradient and responsive grid layout.
  - Showcases four projects: Miss Gypsy (e-commerce), Personal Portfolio SPA, Weather Checker, and To-Do App.
  - Each project includes a screenshot, description, tech stack, highlights, and links (Live Demo, GitHub).
  - Accessibility with `aria-label` and `role="region"`.
- **Contact Section**:
  - Contact section with a matching gradient and responsive layout.
  - Features a form (Name, Email, Message) with client-side validation (required fields, email format, message length).
  - Uses a reusable `Input` component for form fields, supporting `<input>` and `<textarea>`.
  - Accessibility with `role="region"`, `aria-label="Contact Chirag Bhoi"`, `aria-required`, and `aria-live`.
- **Footer Section**:
  - Simple footer with a matching gradient (`from-[#0e7490] via-[#3b82f6] to-[#4f46e5]`).
  - Includes Marshalcraft logo, social media links (GitHub, X, LinkedIn), and a copyright notice.
  - Accessibility with `role="contentinfo"` and `aria-label`.

## Future Features

- **React Router**: Implement `react-router-dom` for smooth page navigation.
- **Animations**: Add Framer Motion for section transitions.
- **SEO Enhancements**: Include dynamic Open Graph tags.
- **Resume Accessibility**: Host resume on a public platform (e.g., GitHub).
- **Favicon**: Replace `vite.svg` with `logo.png`.
- **Dark Mode**: Add a toggle for dark/light mode.
- **Analytics**: Integrate Google Analytics.

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
- **react-icons**: Social media, skill, and footer icons
- **Vite**: Build tool

## Notes

- **Image Assets**: Place `logo.png`, `HeroSlider.jpg`, `about.jpg`, `miss-gypsy.jpg`, `portfolio.jpg`, `weather-checker.jpg`, and `todo-app.jpg` in `public/assets/img/` to avoid Vite import issues.
- **Resume Link**: Update Google Drive sharing to "Anyone with the link".

## Contact

Reach out via:
- GitHub: [chiragbhoi01](https://github.com/chiragbhoi01)
- X: [@Mr_chirag_bhoi](https://x.com/Mr_chirag_bhoi)
- LinkedIn: [Chirag Bhoi](https://www.linkedin.com/in/chirag-bhoi-90b89b1b1)