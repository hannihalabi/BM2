const GALLERY_FILES_RAW = [
  '1.jpeg',
  '2.jpeg',
  '3.jpeg',
  '4.jpeg',
  '5.jpeg',
  '6.jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.34 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.34.jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.35 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.35.jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.36 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.36 (2).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.36 (3).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.36.jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.37 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.37 (3).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.37.jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.38 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.38 (2).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.38 (4).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.38.jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.39 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.39 (2).jpeg',
  'WhatsApp Image 2025-12-12 at 15.58.39.jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.26 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.26 (2).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.26.jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.27 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.27 (2).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.27 (3).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.27.jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.28 (1).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.28 (2).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.28 (3).jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.28.jpeg',
  'WhatsApp Image 2025-12-12 at 17.42.29.jpeg',
];

const getLeadingNumber = (filename) => {
  const match = /^(\d+)/.exec(filename);
  return match ? Number.parseInt(match[1], 10) : null;
};

const GALLERY_FILES = [...GALLERY_FILES_RAW].sort((a, b) => {
  const aNum = getLeadingNumber(a);
  const bNum = getLeadingNumber(b);
  if (aNum !== null && bNum !== null) return aNum - bNum || a.localeCompare(b);
  if (aNum !== null) return -1;
  if (bNum !== null) return 1;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
});

const toGallerySrc = (filename) => encodeURI(`pics copy/${filename}`);

const setupGallery = () => {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const showMoreBtn = document.getElementById('galleryMore');

  const dialog = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = dialog?.querySelector('[data-lightbox-close]');
  const prevBtn = dialog?.querySelector('[data-lightbox-prev]');
  const nextBtn = dialog?.querySelector('[data-lightbox-next]');

  let currentIndex = 0;

  const openLightbox = (index) => {
    if (!(dialog instanceof HTMLDialogElement) || !(lightboxImg instanceof HTMLImageElement)) return;
    currentIndex = ((index % GALLERY_FILES.length) + GALLERY_FILES.length) % GALLERY_FILES.length;
    lightboxImg.src = toGallerySrc(GALLERY_FILES[currentIndex]);
    lightboxImg.alt = `Gallery image ${currentIndex + 1}`;
    dialog.showModal();
    closeBtn?.focus?.();
  };

  const closeLightbox = () => {
    if (!(dialog instanceof HTMLDialogElement)) return;
    dialog.close();
    if (lightboxImg instanceof HTMLImageElement) lightboxImg.removeAttribute('src');
  };

  const go = (dir) => openLightbox(currentIndex + dir);

  closeBtn?.addEventListener('click', closeLightbox);
  prevBtn?.addEventListener('click', () => go(-1));
  nextBtn?.addEventListener('click', () => go(1));

  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeLightbox();
  });

  dialog?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') go(-1);
    if (event.key === 'ArrowRight') go(1);
  });

  const batchSize = 12;
  let renderedCount = 0;

  const layoutClassForIndex = (index) => {
    if (index % 11 === 3) return 'gallery-item--wide';
    if (index % 9 === 5) return 'gallery-item--tall';
    return '';
  };

  const renderNextBatch = () => {
    const nextCount = Math.min(GALLERY_FILES.length, renderedCount + batchSize);
    for (let i = renderedCount; i < nextCount; i++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = ['gallery-item', layoutClassForIndex(i)].filter(Boolean).join(' ');
      button.setAttribute('aria-label', `Open image ${i + 1}`);
      button.addEventListener('click', () => openLightbox(i));

      const img = document.createElement('img');
      img.src = toGallerySrc(GALLERY_FILES[i]);
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';

      button.appendChild(img);
      grid.appendChild(button);
    }

    renderedCount = nextCount;

    if (showMoreBtn instanceof HTMLElement) {
      showMoreBtn.style.display = renderedCount >= GALLERY_FILES.length ? 'none' : '';
    }
  };

  showMoreBtn?.addEventListener('click', renderNextBatch);
  renderNextBatch();
};

const setupMobileViewportVideoAutoplay = () => {
  const video = document.querySelector('#video video');
  if (!(video instanceof HTMLVideoElement)) return;

  const isMobile =
    (window.matchMedia?.('(pointer: coarse)').matches ?? false) ||
    (window.matchMedia?.('(max-width: 900px)').matches ?? false);
  if (!isMobile) return;

  video.playsInline = true;
  video.setAttribute('playsinline', '');

  const frame = video.closest('.video-frame');
  const soundButton = document.createElement('button');
  soundButton.type = 'button';
  soundButton.className = 'video-sound-toggle';
  soundButton.textContent = 'Tap for sound';
  frame?.appendChild(soundButton);

  const pauseIfPlaying = () => {
    if (video.paused) return;
    video.pause();
  };

  pauseIfPlaying();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseIfPlaying();
  });

  let hasUserScrolled = false;
  let inView = false;
  let needsGestureForSound = false;

  const updateSoundButton = () => {
    if (!(soundButton instanceof HTMLElement)) return;
    soundButton.style.display = needsGestureForSound && inView ? '' : 'none';
  };

  const setMuted = (muted) => {
    video.muted = muted;
    video.defaultMuted = muted;
    if (muted) video.setAttribute('muted', '');
    else video.removeAttribute('muted');
  };

  const tryPlayWithSoundThenFallback = async () => {
    if (document.hidden) return;
    if (!hasUserScrolled) return;
    if (!inView) return;
    if (!video.paused) return;

    setMuted(false);
    if (video.volume === 0) video.volume = 1;

    try {
      await video.play();
      needsGestureForSound = false;
      updateSoundButton();
    } catch {
      // Most mobile browsers block autoplay with sound; fallback to muted autoplay.
      needsGestureForSound = true;
      setMuted(true);
      updateSoundButton();
      try {
        await video.play();
      } catch {
        // Ignore.
      }
    }
  };

  const tryEnableSoundOnGesture = async () => {
    if (!needsGestureForSound) return;
    if (!inView) return;
    setMuted(false);
    if (video.volume === 0) video.volume = 1;
    try {
      await video.play();
      needsGestureForSound = false;
      updateSoundButton();
    } catch {
      // Ignore.
    }
  };

  soundButton.addEventListener('click', (event) => {
    event.preventDefault();
    tryEnableSoundOnGesture();
  });

  document.addEventListener('pointerdown', tryEnableSoundOnGesture, { passive: true });
  document.addEventListener('touchstart', tryEnableSoundOnGesture, { passive: true });
  document.addEventListener('click', tryEnableSoundOnGesture);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        inView = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        updateSoundButton();
        if (inView) tryPlayWithSoundThenFallback();
        else pauseIfPlaying();
      },
      { threshold: [0, 0.25, 1], rootMargin: '20% 0px 20% 0px' },
    );

    observer.observe(video);
  }

  const check = () => {
    const rect = video.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const visiblePx = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
    const ratio = rect.height > 0 ? Math.max(0, Math.min(1, visiblePx / rect.height)) : 0;
    inView = ratio >= 0.25;
    updateSoundButton();
    if (inView) tryPlayWithSoundThenFallback();
    else pauseIfPlaying();
  };

  let ticking = false;
  const onScroll = () => {
    hasUserScrolled = true;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      check();
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  updateSoundButton();
};

setupGallery();
setupMobileViewportVideoAutoplay();
