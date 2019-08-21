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

//////intersection observer

let observers = [];

startup();

function startup() {
  let wrapper = document.querySelector(".wrapper");

  // Options for the observers

  let observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: []
  };

  let thresholdSets = [
    [],
    [],
    [],
    [],
    []
    // [0, 0.25, 0.5, 0.75, 1.0]
  ];

  for (let i = 0; i <= 1.0; i += 0.01) {
    thresholdSets[0].push(i);
    thresholdSets[1].push(i);
    thresholdSets[2].push(i);
    thresholdSets[3].push(i);
    thresholdSets[4].push(i);
  }

  // Add each box, creating a new observer for each

  for (let i = 0; i < 5; i++) {
    let boxID = "section" + (i + 1);

    observerOptions.threshold = thresholdSets[i];
    observers[i] = new IntersectionObserver(
      intersectionCallback,
      observerOptions
    );
    observers[i].observe(document.querySelector("." + boxID));
  }
}

function intersectionCallback(entries) {
  entries.forEach(function(entry) {
    let visiblePct = Math.floor(entry.intersectionRatio * 100) + "%";
    const name = document.querySelector(".header__title");

    const navView = document.querySelector(".current-view");
    const navName = document.querySelector(".current-title");

    if (entry.intersectionRatio > 0.5) {
      // console.log(entry.target.id + " ponad 50%! " + visiblePct);
      name.innerHTML = entry.target.dataset.title;
      // navTitle.innerHTML = "/ 04 " + entry.target.dataset.title;
      navName.innerHTML = "&nbsp/ 04 " + entry.target.dataset.title;
      if ((entry.target.dataset.title = "Home")) {
        navView.innerHTML = "01 ";
      } else navView.innerHTML = "05 ";
      //   navView.innerHTML = "01 ";
      // } else if ((entry.target.dataset.title = "About")) {
      //   navView.innerHTML = "02 ";
      // } else if ((entry.target.dataset.title = "Skills")) {
      //   navView.innerHTML = "03 ";
      // } else if ((entry.target.dataset.title = "Projects")) {
      //   navView.innerHTML = "04 ";
      // } else if ((entry.target.dataset.title = "Contact")) {
      //   navView.innerHTML = "05 ";
      // } else navView.innerHTML = "05 ";
    }
  });
}

///preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  const body = document.querySelectorAll(".anim-paused");
  const transElements = document.querySelectorAll(".preload");

  preloader.classList.add("preload-finish");

  setTimeout(function() {
    body.forEach(item => item.classList.remove("anim-paused"));
    transElements.forEach(item => item.classList.remove("preload"));
  }, 200);
});
