document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });
});

// Animação para a Hero Section e Seção Sobre
document.addEventListener("DOMContentLoaded", function () {
  // Lottie Animations
  lottie.loadAnimation({
    container: document.getElementById("lottie-hero"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/animation.json",
  });

  lottie.loadAnimation({
    container: document.getElementById("lottie-sobre"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/about.json",
  });

  // Menu mobile
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navList = document.querySelector(".nav-list");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("active");
    });

    // Fecha o menu quando um item é clicado
    document.querySelectorAll(".nav-list a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
      });
    });
  }

  // Inicializa AOS
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000, // duração da animação em ms
      once: true, // anima apenas uma vez ao rolar
    });
  }

  // Smooth scroll para links âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Ajuste para o header
          behavior: "smooth",
        });
      }
    });
  });
});

// Lightbox functions
function openLightbox(imageSrc, captionText) {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImage");
  const caption = document.getElementById("lightboxCaption");

  if (modal && modalImg && caption) {
    modal.style.display = "flex";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;

    // Fechar ao clicar fora da imagem
    modal.onclick = function (e) {
      if (e.target === modal) {
        closeLightbox();
      }
    };

    // Fechar com ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.style.display = "none";
  }
}
