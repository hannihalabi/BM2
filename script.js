const GALLERY_FILES_RAW = [
  '046652d5-02a8-4623-a80e-a8085d705fca.JPG',
  '071ce6b8-19da-46d1-81cd-88341e2d5fa3.JPG',
  '0aae89fc-c3a9-4a12-a5d0-462fb6a9b6e9.JPG',
  '0cc77388-fec9-4443-af50-e5122b74c6c6.JPG',
  '0d99518d-6765-40e8-b474-f3b8db18d665.JPG',
  '0e4106aa-c81d-400e-9e37-ddc9fbe620bb.JPG',
  '195f1d0c-6d3d-45ea-af7e-d9a78f9ac754.JPG',
  '1c83df20-8ad3-4b02-b192-18d73098f9c1.JPG',
  '27342f8d-4c61-427e-b414-ae1f3738e3fd.JPG',
  '2e881430-a258-4989-b954-d79415e42f54.JPG',
  '326a772d-92a7-43d3-96f2-ece62a560c11.JPG',
  '35f9b39e-81b9-47cd-8836-338dbab5b22f.JPG',
  '3782ffcc-267d-4a84-9430-f5770cabba0d.JPG',
  '378854cb-27c5-4b63-89e2-bdb6007e5ab5.JPG',
  '37e1df03-6b2f-46ee-afaa-c814a99c60d5.JPG',
  '3ae76efb-1ddd-4c02-bd4d-26ee1e105f04.JPG',
  '3e535a5a-1923-4997-b01f-f1dcfa8ee3cf.JPG',
  '420ce601-3a67-4cba-a818-4ac0763f24b1.JPG',
  '4770c2b4-49fd-4c4e-885c-1e729a0f371a.JPG',
  '52423cdf-7fad-42bc-b988-45180dca7019.JPG',
  '56971607-f5e4-43b4-b42c-afc421e50656.JPG',
  '5abe7afd-eccd-4998-9032-5fa87f25b737.JPG',
  '5bbc07a1-4847-4513-aea7-439810f26bf0.JPG',
  '5c0583f6-221b-4786-9c1b-06cdbfee4221.JPG',
  '67072a22-dd54-499e-8980-690e999cec0d.JPG',
  '6ab9ba65-c6fa-4afd-a68b-751856a489b5.JPG',
  '6aec5d14-7cdb-4d6a-b8ce-fb469ef83686.JPG',
  '772b03f8-44d1-4913-a124-a55398521599.JPG',
  '78fb7d80-d313-4268-bf3a-3e5ba2137135.JPG',
  '7c7dbe28-29c5-473b-8fe2-1c4bc4467a82.JPG',
  '7d75e540-95b1-4302-9058-212e5d19067b.JPG',
  '83a850c8-391f-4f4c-bc97-14e21a57061d.JPG',
  '84cf7d51-e61b-4854-a9f6-b3aa5b90a7b3.JPG',
  '85f9d07b-2391-4c61-b297-d98a55875ff4.JPG',
  '8abfe48a-00ad-46f8-ba76-f10a29532f83.JPG',
  '8fa82a74-1533-4710-9388-a35bc5e66012.JPG',
  '916ba68a-ab20-4488-ba46-4632cc0d22fb.JPG',
  '9324ad38-7952-4df8-a75b-64997799af70.JPG',
  '99c1a150-ae0f-4b56-9919-20233e80441b.JPG',
  '9cf3b989-c19f-471d-bd93-270ab9275bbe.JPG',
  '9e0b3e10-a41c-4f06-8d4c-900ce17ee136.JPG',
  '9eeb2ec4-221a-4053-a183-be55552852d4.JPG',
  'a2938fae-4262-4cae-a428-eab8a6815359.JPG',
  'a295a6cb-3f22-4f10-8b74-5afca61fa1c4.JPG',
  'a5ec5fac-8830-4f6f-9727-bbdd8d42892e.JPG',
  'a9c095cf-ac68-449c-8782-9e387cc8d98b.JPG',
  'b16fb936-9833-4031-913d-814d20a35528.JPG',
  'b9bca5bd-3bd7-4535-987a-dd6a637fa8e7.JPG',
  'bb3e86d2-5279-44fd-b292-11cfc6e47a2d.JPG',
  'bbf7b7e7-4844-41c7-81e2-929dc464211e.JPG',
  'bf7610a1-432c-4872-a0de-2dbea6f837a7.JPG',
  'bfa6b242-e655-4541-9703-08b1966e8390.JPG',
  'c1782bfe-bbf9-4843-ace3-4ca95fbfaee6.JPG',
  'c1bf083f-c961-4456-9ad5-bf9ec92f6beb.JPG',
  'c21a4db3-2188-4a98-8cf1-5762fff43fc1.JPG',
  'c29364cd-6872-44a2-85fc-59e8a70ee9bf.JPG',
  'c4e5ac76-e47b-4773-a5ef-d75631151c5b.JPG',
  'c81edf87-7601-412f-ba76-d6430f49848b.JPG',
  'c8c7eece-0bad-4e71-b3b1-4aad65beb1e5.JPG',
  'cbb58b21-53aa-40db-be53-6c18af6903d1.JPG',
  'ccb0b167-8366-4e90-9d16-9e1d21369d4e.JPG',
  'cffaa490-c9e6-40b9-8cc6-893246da1af3.JPG',
  'd00d0cd5-519d-45ce-a26a-35abcbf79eaa.JPG',
  'd25d6e74-ccd7-47f1-ad79-4f8c2672ff49.JPG',
  'd2cb8154-ab58-4fe4-a955-800ddc91a77c.JPG',
  'd5e2dc83-bb22-4fc2-854c-ec053071b48a.JPG',
  'ddb127d7-74bb-4120-8f03-f522d2f0e61b.JPG',
  'df4f4cd7-bb0f-4b29-83f0-ef43a4374a91.JPG',
  'df813db5-d7fa-431e-a832-930a5a8cf6da.JPG',
  'e6fa6257-8369-4074-8662-2e3aa058a22b.JPG',
  'eb03782f-5613-40f6-ad35-710f25643de4.JPG',
  'ee92af9c-1e89-4cbf-9fb7-a380e9b6aba0.JPG',
  'ef5c672b-519b-41d5-8bd9-5ba73a99d7ff.JPG',
  'f044a1a4-f9ff-436b-8b39-dedccf6e63b7.JPG',
  'f0513154-b277-44ab-a8d7-8ba4d350bd80.JPG',
  'f53b5445-4987-4956-9690-9ec17c168bd4.JPG',
  'f6dfd7db-048b-490d-b126-b1cf2ad4c277.JPG',
  'f7ca8241-b05f-4419-9342-ca173e9d85a9.JPG',
  'fc25aa09-faab-472c-adc1-75e33639b5da.JPG',
  'fd8e34be-a9dc-4ca2-8a62-7e0781b5112a.JPG',
  'fdf8a241-be83-4604-8860-0b1f5032d61e.JPG',
  'fecd16b9-9558-4a2e-9d0a-0605f633d47a.JPG',
  'ff93e1d6-aa2b-455d-b2a5-db78f232f2ab.JPG',
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

const SHEET_CONFIG = {
  sheetId: '1z0sGYdKz6QzpyX904lH4hu7WMBse1_HF8je_qfVetHE',
  gid: '0',
  maxRows: 12,
};

const EVENTS_INITIAL_COUNT = 3;

const EVENT_HEADER_KEYS = {
  date: ['date', 'datum'],
  time: ['time', 'tid'],
  venue: ['venue', 'scene', 'stage', 'plats'],
  city: ['city', 'stad', 'ort', 'location', 'place'],
  title: ['title', 'event', 'gig', 'name', 'event name', 'name of event'],
  link: ['link', 'url', 'tickets', 'ticket'],
  linkText: ['link text', 'linktext', 'cta', 'button'],
  note: ['note', 'info', 'details', 'extra'],
};

const IMAGE_SHEET_CONFIG = {
  sheetName: 'Bilder',
  intervalMs: 4200,
};

const IMAGE_HEADER_KEYS = {
  link: ['link', 'links', 'url', 'image', 'img', 'photo', 'bild', 'lank', 'lankar', 'lank till bild', 'bildlank'],
  date: ['date', 'datum', 'datum for event', 'event date'],
};

const trackEvent = (name, params = {}) => {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
};

const toGallerySrc = (filename) => encodeURI(`Bm-pics/${filename}`);

const parseCsv = (text) => {
  const rows = [];
  let row = [];
  let cell = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        const nextChar = text[i + 1];
        if (nextChar === '"') {
          cell += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      continue;
    }

    if (char === ',') {
      row.push(cell);
      cell = '';
      continue;
    }

    if (char === '\n') {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    if (char === '\r') {
      continue;
    }

    cell += char;
  }

  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
};

const toLocalISODate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const extractIsoDate = (value) => {
  if (!value) return '';
  const trimmed = value.trim();
  const ymdMatch = /(\d{4})[./-](\d{2})[./-](\d{2})/.exec(trimmed);
  if (ymdMatch) {
    const [, year, month, day] = ymdMatch;
    return `${year}-${month}-${day}`;
  }
  const dmyMatch = /(\d{2})[./-](\d{2})[./-](\d{4})/.exec(trimmed);
  if (dmyMatch) {
    const [, day, month, year] = dmyMatch;
    return `${year}-${month}-${day}`;
  }
  return '';
};

const toIsoDate = (value) => {
  const iso = extractIsoDate(value);
  if (iso) return iso;
  const parsed = Date.parse(value);
  if (!Number.isNaN(parsed)) return toLocalISODate(new Date(parsed));
  return '';
};

const normalizeHeader = (value) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const isPastIsoDate = (isoDate, todayIso) => {
  if (!isoDate || !todayIso) return false;
  return isoDate < todayIso;
};

const getEarliestIsoDate = (dates) =>
  dates.reduce((earliest, date) => {
    if (!date) return earliest;
    if (!earliest) return date;
    return date < earliest ? date : earliest;
  }, '');

const normalizeImageLink = (link) => {
  if (!link) return '';
  const trimmed = link.trim();
  if (!trimmed) return '';

  if (trimmed.includes('drive.google.com')) {
    const fileMatch = /\/file\/d\/([^/]+)/.exec(trimmed);
    const idMatch = /[?&]id=([^&]+)/.exec(trimmed);
    const id = fileMatch?.[1] || idMatch?.[1];
    if (id) return `https://lh3.googleusercontent.com/d/${id}=w1600`;
  }

  return trimmed;
};

const findHeaderIndex = (headers, candidates) => {
  const normalized = headers.map((header) => normalizeHeader(header));
  for (const candidate of candidates) {
    const index = normalized.indexOf(normalizeHeader(candidate));
    if (index !== -1) return index;
  }
  return -1;
};

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
  const supportsObserver = 'IntersectionObserver' in window;
  const galleryObserver = supportsObserver
    ? new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            if (!(img instanceof HTMLImageElement)) return;
            const dataSrc = img.dataset.src;
            if (dataSrc) {
              img.src = dataSrc;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          });
        },
        { rootMargin: '200px 0px' },
      )
    : null;

  const lazyLoadImage = (img, src) => {
    if (!galleryObserver) {
      img.src = src;
      return;
    }
    img.dataset.src = src;
    galleryObserver.observe(img);
  };

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
  let useSpecialLayout = false;

  const getBatchSize = () => {
    if (window.matchMedia?.('(max-width: 520px)').matches) return 9; // 3 columns * 3 rows
    if (window.matchMedia?.('(max-width: 920px)').matches) return 6; // 2 columns * 3 rows
    return 12; // 4 items/row (12-col grid with span-3 items) * 3 rows
  };

  const layoutClassForIndex = (index) => {
    if (!useSpecialLayout) return '';
    if (index % 11 === 3) return 'gallery-item--wide';
    if (index % 9 === 5) return 'gallery-item--tall';
    return '';
  };

  const renderNextBatch = () => {
    const nextCount = Math.min(GALLERY_FILES.length, renderedCount + getBatchSize());
    for (let i = renderedCount; i < nextCount; i++) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = ['gallery-item', layoutClassForIndex(i)].filter(Boolean).join(' ');
      button.setAttribute('aria-label', `Open image ${i + 1}`);
      button.addEventListener('click', () => openLightbox(i));

      const img = document.createElement('img');
      img.alt = `Black Moose live photo ${i + 1}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.setAttribute('fetchpriority', 'low');
      lazyLoadImage(img, toGallerySrc(GALLERY_FILES[i]));

      button.appendChild(img);
      grid.appendChild(button);
    }

    renderedCount = nextCount;

    if (showMoreBtn instanceof HTMLElement) {
      showMoreBtn.style.display = renderedCount >= GALLERY_FILES.length ? 'none' : '';
    }
  };

  showMoreBtn?.addEventListener('click', () => {
    useSpecialLayout = true;
    renderNextBatch();
  });
  renderNextBatch();
};

const setupEventsFromSheet = () => {
  const list = document.getElementById('eventsList');
  const empty = document.getElementById('eventsEmpty');
  const showMoreBtn = document.getElementById('eventsMore');
  const showAllBtn = document.getElementById('eventsAll');
  const dialog = document.getElementById('eventsDialog');
  const dialogList = document.getElementById('eventsDialogList');
  const dialogEmpty = document.getElementById('eventsDialogEmpty');
  const dialogClose = dialog?.querySelector('[data-events-close]');
  if (!(list instanceof HTMLElement) || !(empty instanceof HTMLElement)) return;

  const { sheetId, gid, maxRows } = SHEET_CONFIG;

  if (!sheetId) {
    empty.textContent = 'Add your Google Sheet ID in script.js to show dates here.';
    if (showMoreBtn instanceof HTMLElement) showMoreBtn.style.display = 'none';
    if (showAllBtn instanceof HTMLElement) showAllBtn.style.display = 'none';
    return;
  }

  if (dialog instanceof HTMLDialogElement) {
    dialogClose?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&gid=${encodeURIComponent(
    gid,
  )}`;

  empty.textContent = 'Loading dates...';

  fetch(sheetUrl, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error('Failed to load sheet');
      return response.text();
    })
    .then((text) => {
      const rows = parseCsv(text);
      if (!rows.length) {
        empty.textContent = 'No dates yet.';
        if (showMoreBtn instanceof HTMLElement) showMoreBtn.style.display = 'none';
        if (showAllBtn instanceof HTMLElement) showAllBtn.style.display = 'none';
        return;
      }

      const headers = rows[0].map((header) => header.trim());
      const dataRows = rows.slice(1).filter((row) => row.some((cell) => cell.trim() !== ''));

      if (!dataRows.length) {
        empty.textContent = 'No dates yet.';
        if (showMoreBtn instanceof HTMLElement) showMoreBtn.style.display = 'none';
        if (showAllBtn instanceof HTMLElement) showAllBtn.style.display = 'none';
        return;
      }

      const indexes = {
        date: findHeaderIndex(headers, EVENT_HEADER_KEYS.date),
        time: findHeaderIndex(headers, EVENT_HEADER_KEYS.time),
        venue: findHeaderIndex(headers, EVENT_HEADER_KEYS.venue),
        city: findHeaderIndex(headers, EVENT_HEADER_KEYS.city),
        title: findHeaderIndex(headers, EVENT_HEADER_KEYS.title),
        link: findHeaderIndex(headers, EVENT_HEADER_KEYS.link),
        linkText: findHeaderIndex(headers, EVENT_HEADER_KEYS.linkText),
        note: findHeaderIndex(headers, EVENT_HEADER_KEYS.note),
      };

      const getValue = (row, index) => {
        if (index < 0) return '';
        const value = row[index];
        return value ? value.trim() : '';
      };

      const limit = maxRows && maxRows > 0 ? Math.min(dataRows.length, maxRows) : dataRows.length;
      const todayIso = toLocalISODate(new Date());

      const buildEvent = (row) => {
        const event = {
          date: getValue(row, indexes.date),
          time: getValue(row, indexes.time),
          venue: getValue(row, indexes.venue),
          city: getValue(row, indexes.city),
          title: getValue(row, indexes.title),
          link: getValue(row, indexes.link),
          linkText: getValue(row, indexes.linkText),
          note: getValue(row, indexes.note),
        };

        if (!Object.values(event).some((value) => value)) return null;
        const eventIsoDate = extractIsoDate(event.date);
        return { ...event, isoDate: eventIsoDate };
      };

      const allEvents = dataRows.map(buildEvent).filter(Boolean);
      const upcomingEvents = allEvents
        .slice(0, limit)
        .filter((event) => !(event.isoDate && isPastIsoDate(event.isoDate, todayIso)));

      if (!upcomingEvents.length) {
        empty.textContent = allEvents.length ? 'No upcoming events yet.' : 'No events found. Check your column headers.';
        if (showMoreBtn instanceof HTMLElement) showMoreBtn.style.display = 'none';
        if (showAllBtn instanceof HTMLElement) showAllBtn.style.display = 'none';
        return;
      }

      const futureIsoDates = upcomingEvents
        .map((event) => event.isoDate)
        .filter((isoDate) => isoDate && isoDate > todayIso);
      const nextIsoDate = getEarliestIsoDate(futureIsoDates);

      const makeCard = (event) => {
        const card = document.createElement('article');
        card.className = 'event-card';

        const dateText = [event.date, event.time].filter(Boolean).join(' · ') || 'Date TBA';
        const dateEl = document.createElement('p');
        dateEl.className = 'event-date';
        dateEl.textContent = dateText;
        const isoDate = event.isoDate;
        if (isoDate && isoDate === todayIso) {
          card.classList.add('event-card--today');
          dateEl.classList.add('event-date--today');
        } else if (isoDate && isoDate === nextIsoDate) {
          card.classList.add('event-card--next');
          dateEl.classList.add('event-date--next');
        }
        const details = document.createElement('div');
        details.className = 'event-details';
        details.appendChild(dateEl);

        const titleText = event.title || event.venue || event.city || 'Live date';
        const locationBits = [];
        if (event.title) {
          if (event.venue) locationBits.push(event.venue);
          if (event.city) locationBits.push(event.city);
        } else if (event.venue && event.city) {
          locationBits.push(event.city);
        }
        const locationText = locationBits
          .filter(Boolean)
          .filter((value, index, arr) => arr.indexOf(value) === index)
          .join(' · ');
        const infoLine = locationText ? `${titleText}, ${locationText}` : titleText;

        const titleEl = document.createElement('h4');
        titleEl.className = 'event-title';
        titleEl.textContent = infoLine;
        details.appendChild(titleEl);

        if (event.note) {
          const noteEl = document.createElement('p');
          noteEl.className = 'event-note';
          noteEl.textContent = event.note;
          details.appendChild(noteEl);
        }

        card.appendChild(details);

        if (event.link) {
          const link = document.createElement('a');
          link.className = 'cta-pill event-link';
          link.href = event.link;
          link.target = '_blank';
          link.rel = 'noopener';
          link.textContent = event.linkText || 'Tickets';
          card.appendChild(link);
        } else {
          card.classList.add('event-card--nolink');
        }

        return card;
      };

      const cards = upcomingEvents.map(makeCard);
      const allCards = allEvents.map(makeCard);
      const fragment = document.createDocumentFragment();
      const initialCount = Math.min(EVENTS_INITIAL_COUNT, cards.length);
      cards.slice(0, initialCount).forEach((card) => fragment.appendChild(card));

      list.innerHTML = '';
      empty.remove();
      list.appendChild(fragment);

      if (dialogList instanceof HTMLElement && dialogEmpty instanceof HTMLElement) {
        if (!allCards.length) {
          dialogEmpty.textContent = 'No events to show.';
        } else {
          dialogList.innerHTML = '';
          const dialogFragment = document.createDocumentFragment();
          allCards.forEach((card) => dialogFragment.appendChild(card));
          dialogEmpty.remove();
          dialogList.appendChild(dialogFragment);
        }
      }

      if (showMoreBtn instanceof HTMLElement) {
        if (cards.length > initialCount) {
          showMoreBtn.style.display = 'inline-flex';
          showMoreBtn.addEventListener(
            'click',
            () => {
              const rest = document.createDocumentFragment();
              cards.slice(initialCount).forEach((card) => rest.appendChild(card));
              list.appendChild(rest);
              showMoreBtn.style.display = 'none';
              if (showAllBtn instanceof HTMLElement) showAllBtn.style.display = 'inline-flex';
            },
            { once: true },
          );
        } else {
          showMoreBtn.style.display = 'none';
        }
      }

      if (showAllBtn instanceof HTMLButtonElement && dialog instanceof HTMLDialogElement) {
        showAllBtn.addEventListener('click', () => {
          dialog.showModal();
          dialogClose?.focus?.();
        });
      }
    })
    .catch(() => {
      empty.textContent = 'Unable to load dates right now.';
      if (showMoreBtn instanceof HTMLElement) showMoreBtn.style.display = 'none';
      if (showAllBtn instanceof HTMLElement) showAllBtn.style.display = 'none';
    });
};

const setupEventImageRotator = () => {
  const wrapper = document.getElementById('eventsRotator');
  const img = document.getElementById('eventsRotatorImg');
  const empty = document.getElementById('eventsRotatorEmpty');
  if (!(wrapper instanceof HTMLElement) || !(img instanceof HTMLImageElement) || !(empty instanceof HTMLElement)) return;

  const { sheetId } = SHEET_CONFIG;
  if (!sheetId) {
    empty.textContent = 'Add your Google Sheet ID in script.js to show images here.';
    return;
  }

  const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
    IMAGE_SHEET_CONFIG.sheetName,
  )}`;

  fetch(sheetUrl, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) throw new Error('Failed to load images');
      return response.text();
    })
    .then((text) => {
      const rows = parseCsv(text);
      if (!rows.length) {
        empty.textContent = 'No upcoming event images yet.';
        return;
      }

      const headers = rows[0].map((header) => header.trim());
      const linkIndex = findHeaderIndex(headers, IMAGE_HEADER_KEYS.link);
      const dateIndex = findHeaderIndex(headers, IMAGE_HEADER_KEYS.date);
      const hasHeaders = linkIndex !== -1 || dateIndex !== -1;
      const dataRows = hasHeaders ? rows.slice(1) : rows;

      const todayIso = toLocalISODate(new Date());
      const items = dataRows
        .map((row) => {
          const rawLink = hasHeaders
            ? (row[linkIndex !== -1 ? linkIndex : 0] || '').trim()
            : (row[0] || '').trim();
          const link = normalizeImageLink(rawLink);
          const dateValue = hasHeaders
            ? (row[dateIndex !== -1 ? dateIndex : 1] || '').trim()
            : (row[1] || '').trim();
          const isoDate = toIsoDate(dateValue);
          if (!link) return null;
          return { link, isoDate };
        })
        .filter(Boolean)
        .filter((item) => item.isoDate && item.isoDate >= todayIso);

      if (!items.length) {
        empty.textContent = 'No upcoming event images yet.';
        return;
      }

      const nearestDate = getEarliestIsoDate(items.map((item) => item.isoDate));
      const nearestItems = items.filter((item) => item.isoDate === nearestDate);
      if (!nearestItems.length) {
        empty.textContent = 'No upcoming event images yet.';
        return;
      }

      let currentIndex = 0;
      let timerId = null;
      let inView = true;

      const showImage = (index) => {
        const item = nearestItems[index];
        if (!item) return;
        img.classList.remove('is-visible');
        const preloader = new Image();
        preloader.onload = () => {
          img.src = item.link;
          img.alt = 'Upcoming event';
          empty.style.display = 'none';
          requestAnimationFrame(() => img.classList.add('is-visible'));
        };
        preloader.onerror = () => {
          empty.textContent = 'Image link is not accessible.';
          empty.style.display = '';
        };
        preloader.src = item.link;
      };

      const nextImage = () => {
        currentIndex = (currentIndex + 1) % nearestItems.length;
        showImage(currentIndex);
      };

      const start = () => {
        if (timerId || nearestItems.length < 2 || !inView) return;
        timerId = window.setInterval(nextImage, IMAGE_SHEET_CONFIG.intervalMs);
      };

      const stop = () => {
        if (!timerId) return;
        window.clearInterval(timerId);
        timerId = null;
      };

      showImage(currentIndex);

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            inView = entry ? entry.isIntersecting : true;
            if (inView) start();
            else stop();
          },
          { threshold: 0.2 },
        );
        observer.observe(wrapper);
      }

      start();
    })
    .catch(() => {
      empty.textContent = 'Unable to load event images right now.';
    });
};

const setupPerformanceOptimizations = () => {
  const body = document.body;
  if (!body) return;

  let heroInView = true;

  const updatePausedState = () => {
    const shouldPause = document.hidden || !heroInView;
    body.classList.toggle('effects-paused', shouldPause);
  };

  const enableEffects = () => {
    if (body.classList.contains('effects-ready')) return;
    body.classList.add('effects-ready');
    updatePausedState();
  };

  const onFirstInput = () => {
    enableEffects();
    window.removeEventListener('pointerdown', onFirstInput);
    window.removeEventListener('touchstart', onFirstInput);
    window.removeEventListener('scroll', onFirstInput);
    window.removeEventListener('keydown', onFirstInput);
  };

  window.addEventListener('pointerdown', onFirstInput, { passive: true });
  window.addEventListener('touchstart', onFirstInput, { passive: true });
  window.addEventListener('scroll', onFirstInput, { passive: true });
  window.addEventListener('keydown', onFirstInput);

  document.addEventListener('visibilitychange', updatePausedState);

  const header = document.querySelector('.header');
  if ('IntersectionObserver' in window && header instanceof HTMLElement) {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        heroInView = entry ? entry.isIntersecting : true;
        updatePausedState();
      },
      { threshold: 0.1 },
    );
    observer.observe(header);
  }
};

const setupMobileEmbedReveal = () => {
  const sections = [
    { id: 'soundcloud', cardSelector: '.soundcloud-card' },
    { id: 'spotify', cardSelector: '.spotify-card' },
  ];

  const isMobile = () => window.matchMedia?.('(max-width: 700px)').matches ?? false;

  sections.forEach(({ id, cardSelector }) => {
    const section = document.getElementById(id);
    if (!section) return;

    const button = section.querySelector(`[data-embed-toggle="${id}"]`);
    const cards = section.querySelectorAll(cardSelector);

    if (!(button instanceof HTMLButtonElement)) return;

    if (cards.length <= 1) {
      button.style.display = 'none';
      return;
    }

    const updateButtonState = () => {
      if (!isMobile()) {
        button.style.display = 'none';
        button.setAttribute('aria-expanded', 'false');
        return;
      }

      const expanded = section.classList.contains('is-expanded');
      button.style.display = expanded ? 'none' : '';
      button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    button.addEventListener('click', () => {
      section.classList.add('is-expanded');
      updateButtonState();
    });

    updateButtonState();
    window.addEventListener('resize', updateButtonState, { passive: true });
  });
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

const setupBookingDialog = () => {
  const dialog = document.getElementById('bookingDialog');
  if (!(dialog instanceof HTMLDialogElement)) return;

  const closeBtn = dialog.querySelector('[data-booking-close]');

  const open = (source) => {
    trackEvent('booking_dialog_open', { source: source || 'unknown' });
    dialog.showModal();
    closeBtn?.focus?.();
  };

  const close = () => dialog.close();

  document.querySelectorAll('.book-cta, .bio-cta').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const source = button.classList.contains('book-cta') ? 'hero' : 'bio';
      trackEvent('book_now_click', { source });
      open(source);
    });
  });

  document.querySelectorAll('.booking-email, .booking-cta').forEach((link) => {
    link.addEventListener('click', () => {
      const contact = link.getAttribute('data-contact') || 'unknown';
      trackEvent('booking_email_click', { contact });
    });
  });

  closeBtn?.addEventListener('click', close);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) close();
  });
};

setupGallery();
setupEventsFromSheet();
setupEventImageRotator();
setupPerformanceOptimizations();
setupMobileEmbedReveal();
setupMobileViewportVideoAutoplay();
setupBookingDialog();
