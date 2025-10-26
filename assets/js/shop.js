// ==============================
// offer.js
// Kích hoạt hiệu ứng cuộn (fade-in) cho từng section
// ==============================

const categories = document.querySelectorAll('.category-item');
const productLists = document.querySelectorAll('.product-list');

categories.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove old active
    categories.forEach(b => b.classList.remove('active'));
    productLists.forEach(p => p.classList.remove('active'));

    // add new active
    btn.classList.add('active');
    document.getElementById(btn.dataset.category).classList.add('active');
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  const sections = document.querySelectorAll('.offer, .hero-content, .categories');
  sections.forEach((el) => observer.observe(el));

  // Xử lý nút category chọn active
  const catBtns = document.querySelectorAll('.cat-btn');
  catBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      catBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Hiệu ứng nút CTA trong hero (scroll xuống offers)
  const exploreBtn = document.querySelector('.btn-main');
  exploreBtn.addEventListener('click', () => {
    document.querySelector('.offers').scrollIntoView({ behavior: 'smooth' });
  });
});
// ================= Carousel Logic =================
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentSlide = 0;
const items = document.querySelectorAll(".product-card");
const totalItems = items.length;
const visibleCount = 4;
const totalSlides = Math.ceil(totalItems / visibleCount);

function updateCarousel() {
  const width = items[0].offsetWidth + 20; // khoảng cách gap
  const offset = currentSlide * width * visibleCount;
  track.style.transform = `translateX(-${offset}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) currentSlide++;
  else currentSlide = 0;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) currentSlide--;
  else currentSlide = totalSlides - 1;
  updateCarousel();
});
