
// MENU NAVIGASI MOBILE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
      menuToggle.textContent = "✕";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}

// MENUTUP MENU SETELAH LINK DIKLIK

if (navLinks) {
  const links = navLinks.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");

      if (menuToggle) {
        menuToggle.textContent = "☰";
      }
    });
  });
}

// TAHUN OTOMATIS PADA FOOTER

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {
  element.textContent = new Date().getFullYear();
});

// EFEK ANIMASI SAAT SCROLL

const lessonBoxes = document.querySelectorAll(
  ".lesson-box, .material-card"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  lessonBoxes.forEach(function (box) {
    box.classList.add("reveal");
    observer.observe(box);
  });
}
