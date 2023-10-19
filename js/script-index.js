//mobile navigation hamburger
const hamburger = document.querySelector(".header-hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if (scrollY > 1 && scrollY < 600) {
    document.querySelector("header").classList.add("header-active");
  } else {
    const header = document.querySelector("header");
    // header.classList.remove("header-active");

    setTimeout(() => {
      header.classList.remove("header-active");
    }, 400);
  }

  // Scroll up button
  // const scrollUpBtn = document.querySelector(".scrollUp-btn");

  // if (scrollY > 250) {
  //   scrollUpBtn.classList.add("scrollUpBtn-active");
  // } else {
  //   scrollUpBtn.classList.remove("scrollUpBtn-active");
  // }

  // Nav link indicator

  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 100;

    let navId = document.querySelector(
      `.menu-content a[href='#${section.id}']`
    );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink");
    } else {
      navId.classList.remove("active-navlink");
    }

    navId.addEventListener("click", () => {
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    });
  });
});
//number increasing
let valueDisplays = document.querySelectorAll(".num");
let interval = 7000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 10;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
