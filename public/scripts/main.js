// =============================================
// Scripts globales — JorgeCorp
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar íconos de Lucide
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // =============================================
  // 1. NAVBAR: efecto scroll + menú móvil
  // =============================================
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("navHamburger");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".navbar__link");

  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  function toggleMobileMenu() {
    const isOpen = navMenu.classList.contains("open");
    navMenu.classList.toggle("open");
    navOverlay.classList.toggle("active");
    hamburger.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(!isOpen));
    document.body.style.overflow = isOpen ? "" : "hidden";
  }

  function closeMobileMenu() {
    navMenu.classList.remove("open");
    navOverlay.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", toggleMobileMenu);
  navOverlay.addEventListener("click", closeMobileMenu);
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // =============================================
  // 2. PARALLAX EN HERO
  // =============================================
  const heroBg = document.getElementById("heroBg");

  function handleParallax() {
    if (window.innerWidth > 768) {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector(".hero")?.offsetHeight;
      if (heroHeight && scrolled < heroHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.35}px) scale(1.1)`;
      }
    }
  }

  window.addEventListener("scroll", handleParallax, { passive: true });

  // =============================================
  // 3. SCROLL REVEAL (Intersection Observer)
  // =============================================
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // =============================================
  // 4. BOTÓN VOLVER ARRIBA
  // =============================================
  const backToTop = document.getElementById("backToTop");

  function handleBackToTopVisibility() {
    if (window.scrollY > 600) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleBackToTopVisibility, {
    passive: true,
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // =============================================
  // 5. LIGHTBOX
  // =============================================
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxClose = document.getElementById("lightboxClose");
  const galleryItems = document.querySelectorAll(".gallery__item");

  function openLightbox(imgSrc, imgAlt) {
    lightboxImage.src = imgSrc;
    lightboxImage.alt = imgAlt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      lightboxImage.src = "";
      lightboxImage.alt = "";
    }, 300);
  }

  galleryItems.forEach((item) => {
    const img = item.querySelector("img");
    const imgSrc = img.src.replace("w=600", "w=1200");
    const imgAlt = img.alt;

    item.addEventListener("click", () => openLightbox(imgSrc, imgAlt));
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(imgSrc, imgAlt);
      }
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });

  // =============================================
  // 6. FORMULARIO DE CONTACTO (simulación)
  // =============================================
  const contactForm = document.getElementById("contactForm");

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector(".btn");
    const originalHTML = btn.innerHTML;

    btn.innerHTML = '<i data-lucide="check-circle"></i> ¡Mensaje enviado!';
    btn.style.background = "var(--color-accent-green)";
    if (typeof lucide !== "undefined") lucide.createIcons();

    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = "";
      if (typeof lucide !== "undefined") lucide.createIcons();
      contactForm.reset();
    }, 3000);
  });

  // =============================================
  // 7. AÑO ACTUAL EN FOOTER
  // =============================================
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // =============================================
  // 8. NAVEGACIÓN ACTIVA
  // =============================================
  const sections = document.querySelectorAll("section[id]");

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`,
            );
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-80px 0px -50% 0px",
    },
  );

  sections.forEach((section) => navObserver.observe(section));
});
