const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

const galleryImages = [
  "WhatsApp Image 2025-12-12 at 15.58.35 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.36.jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.38.jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.35 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.37 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.34 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.34.jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.35 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.35.jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.36 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.36 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.36 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.37 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.37 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.37.jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.38 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.38 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.38 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.38 (4).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.39 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.39 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 15.58.39.jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.26 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.26 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.26 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.26.jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.27 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.27 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.27 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.27.jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.28 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.28 (2).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.28 (3).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.28.jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.29 (1).jpeg",
  "WhatsApp Image 2025-12-12 at 17.42.29.jpeg"
];

function resizeCanvas() {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const cssWidth = window.innerWidth;
  const cssHeight = window.innerHeight;

  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  canvas.width = Math.floor(cssWidth * dpr);
  canvas.height = Math.floor(cssHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

let particles = [];
let particleCount = 0;

class Particle {
  constructor() {
    this.reset(true);
  }

  reset(skipRandomY = false) {
    this.x = Math.random() * window.innerWidth;
    this.y = skipRandomY ? Math.random() * window.innerHeight : window.innerHeight;
    this.speed = Math.random() / 5 + 0.1;
    this.opacity = Math.random() * 0.6 + 0.2;
  }

  update() {
    this.y -= this.speed;
    if (this.y < -10) this.reset();
  }

  draw() {
    ctx.fillStyle = `rgba(${255 - (Math.random() * 255) / 2}, 255, 255, ${this.opacity})`;
    ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
  }
}

function calculateParticleCount() {
  return Math.floor((window.innerWidth * window.innerHeight) / 6000);
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  for (const particle of particles) {
    particle.update();
    particle.draw();
  }
  requestAnimationFrame(animate);
}

function onResize() {
  resizeCanvas();
  particleCount = calculateParticleCount();
  initParticles();
}

window.addEventListener("resize", onResize);

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const basePath = "pics copy/";
  const wideEvery = 7;
  const tallEvery = 5;

  grid.innerHTML = "";

  galleryImages.forEach((fileName, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";

    if (index % wideEvery === 2) button.classList.add("gallery-item--wide");
    else if (index % tallEvery === 3) button.classList.add("gallery-item--tall");

    const img = document.createElement("img");
    img.loading = "lazy";
    img.decoding = "async";
    img.src = encodeURI(basePath + fileName);
    img.alt = `Gallery image ${index + 1}`;

    button.appendChild(img);
    button.addEventListener("click", () => openLightbox(index));
    grid.appendChild(button);
  });
}

let galleryExpanded = false;

function collapseGalleryToRows(maxRows) {
  const grid = document.getElementById("galleryGrid");
  const moreBtn = document.getElementById("galleryMore");
  if (!grid || !moreBtn) return;

  const items = Array.from(grid.querySelectorAll(".gallery-item"));
  if (!items.length) {
    moreBtn.hidden = true;
    return;
  }

  for (const item of items) item.hidden = false;

  const gridTop = grid.getBoundingClientRect().top;
  const tolerance = 6;
  const rowTops = [];

  for (const item of items) {
    const top = item.getBoundingClientRect().top - gridTop;
    if (!rowTops.some((t) => Math.abs(t - top) <= tolerance)) rowTops.push(top);
  }

  rowTops.sort((a, b) => a - b);

  if (rowTops.length <= maxRows) {
    moreBtn.hidden = true;
    return;
  }

  const allowed = rowTops.slice(0, maxRows);
  for (const item of items) {
    const top = item.getBoundingClientRect().top - gridTop;
    const isAllowed = allowed.some((t) => Math.abs(t - top) <= tolerance);
    item.hidden = !isAllowed;
  }

  moreBtn.hidden = false;
}

function setupGalleryShowMore() {
  const moreBtn = document.getElementById("galleryMore");
  if (!moreBtn) return;

  moreBtn.addEventListener("click", () => {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    galleryExpanded = true;
    for (const item of grid.querySelectorAll(".gallery-item")) item.hidden = false;
    moreBtn.hidden = true;
  });

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (galleryExpanded) return;
    if (resizeTimer) window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      collapseGalleryToRows(3);
    }, 120);
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.querySelector("[data-lightbox-close]");
const prevBtn = document.querySelector("[data-lightbox-prev]");
const nextBtn = document.querySelector("[data-lightbox-next]");

let lightboxIndex = 0;

function setLightboxIndex(nextIndex) {
  if (!lightboxImg) return;
  const total = galleryImages.length || 1;
  lightboxIndex = ((nextIndex % total) + total) % total;
  lightboxImg.src = encodeURI(`pics copy/${galleryImages[lightboxIndex]}`);
  lightboxImg.alt = `Gallery image ${lightboxIndex + 1}`;
}

function openLightbox(index) {
  if (!lightbox || !lightboxImg || !galleryImages.length) return;
  setLightboxIndex(index);
  if (typeof lightbox.showModal === "function") lightbox.showModal();
  else lightbox.setAttribute("open", "");
}

function closeLightbox() {
  if (!lightbox) return;
  if (typeof lightbox.close === "function") lightbox.close();
  else lightbox.removeAttribute("open");
}

closeBtn?.addEventListener("click", closeLightbox);
prevBtn?.addEventListener("click", () => setLightboxIndex(lightboxIndex - 1));
nextBtn?.addEventListener("click", () => setLightboxIndex(lightboxIndex + 1));

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

window.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.hasAttribute("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") setLightboxIndex(lightboxIndex - 1);
  if (e.key === "ArrowRight") setLightboxIndex(lightboxIndex + 1);
});

onResize();
animate();
renderGallery();
setupGalleryShowMore();
requestAnimationFrame(() => requestAnimationFrame(() => collapseGalleryToRows(3)));
