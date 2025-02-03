// NAVIGATION MENU TOGGLE
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close"),
      navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}

if (navClose) {
  navClose.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}

// REMOVE MENU MOBILE
navLinks.forEach((n) => n.addEventListener("click", () => navMenu.classList.remove("show-menu")));

// ACCORDION SKILLS
const skillsContent = document.querySelectorAll(".skills__content"),
      skillsHeaders = document.querySelectorAll(".skills__header");

skillsHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const parentContent = header.parentNode;
    // Toggle open/close classes
    parentContent.classList.toggle("skills__open");
    parentContent.classList.toggle("skills__close");
    
    // Close other skills if needed (optional)
    skillsContent.forEach(content => {
      if (content !== parentContent && content.classList.contains("skills__open")) {
        content.classList.remove("skills__open");
        content.classList.add("skills__close");
      }
    });
  });
});

// SERVICES MODAL
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modalViews[index].classList.add("active-modal");
  });
});

modalCloses.forEach(modalClose => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove("active-modal");
    });
  });
});

// PORTFOLIO SWIPER
const swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

// CHANGE BACKGROUND HEADER
const scrollHeader = () => {
  const nav = document.getElementById("header");
  nav.classList.toggle("scroll-header", window.scrollY >= 80);
};
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  scrollUp.classList.toggle("show-scroll", window.scrollY >= 560);
};
window.addEventListener("scroll", scrollUp);

// DARK LIGHT THEME
const themeButton = document.getElementById("theme-button"),
      darkTheme = "dark-theme",
      iconTheme = "uil-sun";

// Functions to get current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Apply stored theme if exists
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {
  document.body.classList.toggle(darkTheme, selectedTheme === "dark");
  themeButton.classList.toggle(iconTheme, selectedIcon === "uil-moon");
}

// Theme toggle on button click
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  // Store selected theme and icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});