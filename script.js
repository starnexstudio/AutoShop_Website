// ===================================================================
// AUTO XHEVITI — Script bazë: reveal on scroll + navbar scroll state
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --- Reveal on scroll ---
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));

  // --- Navbar background on scroll ---
  const navbar = document.querySelector(".navbar");

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // --- Contact form: parandalon submit default (placeholder, pa backend) ---
  // --- Contact form: parandalon submit default (placeholder, pa backend) ---
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name =
      form.querySelector('input[placeholder="Emri juaj"]').value;

    const phone =
      form.querySelector('input[placeholder="Numri i telefonit"]').value;

    const car =
      form.querySelector('input[placeholder="Modeli i makinës"]').value;

    const message =
      form.querySelector("textarea").value;

    const text =
`Pershendetje Auto Xheviti!

Emri: ${name}
Telefoni: ${phone}
Modeli i makines: ${car}

Mesazhi:
${message}`;

    window.open(
      `https://wa.me/355692745532?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  });
}
const starnexCredit = document.querySelector(".starnex-credit");

if(starnexCredit){

    const originalText = "StarNex Studio";

    starnexCredit.addEventListener("mouseenter", () => {
        starnexCredit.textContent = "Visit StarNex Studio";
    });

    starnexCredit.addEventListener("mouseleave", () => {
        starnexCredit.textContent = originalText;
    });

}
});

/* ---- Navbar shrink on scroll ---- */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---- Reveal on scroll ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Hamburger menu ---- */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
  document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});
});