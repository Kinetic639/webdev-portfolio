// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".menu__item");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
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

//skills script

// const icon = document.querySelector(".icon");
// const iconHtml = document.querySelector(".icon-html");
// const modal = document.querySelector(".skills-modal");
// const iconCss = document.querySelector(".icon-css");
// const iconSass = document.querySelector(".icon-sass");
// const iconJs = document.querySelector(".icon-js");

// let showModal = false;

// icon.addEventListener("click", toggleModal);

// function toggleModal() {
//   if (!showModal) {
//     // console.log(this.classList);

//     modal.classList.add("show");
//     // Set Menu State
//     showModal = true;
//   } else {
//     // Set Menu State
//     modal.classList.remove("show");
//     showModal = false;
//   }
// }

// modal.addEventListener("click", closeModal);

// function closeModal() {
//   modal.classList.remove("show");
//   showModal = false;
// }
const htmlInfo =
  "HTML5 – język wykorzystywany do tworzenia i prezentowania stron internetowych www. Jest rozwinięciem języka HTML 4 i jego XML-owej odmiany (XHTML 1), opracowywane w ramach prac grupy roboczej WHATWG (Web Hypertext Application Technology Working Group) i W3C[1].";
const cssInfo =
  "Kaskadowe arkusze stylów (ang. Cascading Style Sheets, w skrócie CSS) – język służący do opisu formy prezentacji (wyświetlania) stron WWW. CSS został opracowany przez organizację W3C w 1996 r. jako potomek języka DSSSL przeznaczony do używania w połączeniu z SGML-em. Pierwszy szkic CSS zaproponował w 1994 r. Håkon Wium Lie[1].";
const sassInfo =
  "Sass to preprocesor CSS, który pozwala na znacznie szybszą i wydajniejszą pracę z arkuszami stylów. Dlaczego tak jest? W dalszej części artykułu postaram Ci to pokazać. Preprocesory pozwalają na programowanie wśród arkuszy stylów, co daje ogromne możliwości przyspieszenia pracy.";
const javascriptInfo =
  "JavaScript (w skrócie JS) – skryptowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich[4]. Pod koniec lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39[5].";
$(".icon").click(function() {
  if ($(this).hasClass("icon-html")) {
    $(".modal-1__title").text("Html5");
    $(".modal-1__text").text(htmlInfo);
    $(".skills-modal__1").addClass("show");
  } else if ($(this).hasClass("icon-css")) {
    $(".modal-1__title").text("Css3");
    $(".modal-1__text").text(cssInfo);
    $(".skills-modal__1").addClass("show");
  } else if ($(this).hasClass("icon-sass")) {
    $(".modal-1__title").text("Sass");
    $(".modal-1__text").text(sassInfo);
    $(".skills-modal__1").addClass("show");
  } else if ($(this).hasClass("icon-js")) {
    $(".modal-1__title").text("Javascript");
    $(".modal-1__text").text(javascriptInfo);

    $(".skills-modal__1").addClass("show");
  } else if ($(this).hasClass("icon-vscode")) {
    $(".modal-2__title").text("Visual Studio Code");
    $(".skills-modal__2").addClass("show");
  } else if ($(this).hasClass("icon-xd")) {
    $(".modal-2__title").text("Adobe XD");
    $(".skills-modal__2").addClass("show");
  } else if ($(this).hasClass("icon-figma")) {
    $(".modal-2__title").text("Figma");
    $(".skills-modal__2").addClass("show");
  }
});

$(".skills-modal").click(function() {
  $(this).removeClass("show");
});

document.getElementById("main").addEventListener("scroll", myFunction);

function myFunction() {
  if (bounding.bottom >= 600) {
    console.log("In the home!");
  } else {
    console.log("Not in the viewport... whomp whomp");
  }
}

var home = document.querySelector(".section-home");
var about = document.querySelector(".section-about");
var skills = document.querySelector(".section-skills");
var projects = document.querySelector(".section-projects");
var contact = document.querySelector(".section-contact");

// Get it's position in the viewport
var bounding = home.getBoundingClientRect();
var bounding = about.getBoundingClientRect();
var bounding = skills.getBoundingClientRect();
var bounding = projects.getBoundingClientRect();
var bounding = contact.getBoundingClientRect();

// Log the results
console.log(home.getBoundingClientRect());
console.log(about.getBoundingClientRect());
console.log(skills.getBoundingClientRect());
console.log(projects.getBoundingClientRect());
console.log(contact.getBoundingClientRect());
