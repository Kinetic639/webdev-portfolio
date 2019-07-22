// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const menuFooter = document.querySelector("footer");
const menuSocial = document.querySelector(".menu-social");
// const menuWrapper = document.querySelector(".menu-wrapper");
const navItems = document.querySelectorAll(".menu__item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    // menuWrapper.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // menuFooter.classList.add("show");
    // menuSocial.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    // menuWrapper.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    // menuFooter.classList.remove("show");
    // menuSocial.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

menuNav.addEventListener("click", closeMenu);

function closeMenu() {
  menuBtn.classList.remove("close");
  menuNav.classList.remove("show");
  menuBranding.classList.remove("show");
  showMenu = false;
}
