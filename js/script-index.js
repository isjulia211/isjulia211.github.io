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
