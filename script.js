
// ===============================
// SUPABASE CONFIGURATION
// ===============================

const SUPABASE_URL = "https://rwckczbnykqijiiwzuox.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_nq9A1I7-Oxan16bVbABtNA_Fcf7fQqI";

// Membuat koneksi ke Supabase
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// ===============================
// NAVBAR MOBILE
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===============================
// TAHUN OTOMATIS
// ===============================

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===============================
// ANIMASI SCROLL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

revealElements.forEach((element) => {
  observer.observe(element);
});
