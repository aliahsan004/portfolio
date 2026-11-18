(function () {
  const SITE_DATA = {
    name: 'Ali Ahsan',
    profileImages: [
      './assets/profile.png',
      './profile.png',
      './assets/profile.jpg',
      './profile.jpg',
      './assets/aistudio/profile_260087cf_260087cf.png',
      './assets/aistudio/profile_260087cf_260087cf.jpg',
      '../public/assets/aistudio/profile_260087cf_260087cf.png',
    ],
    orbitPortraitSources: [
      './assets/orbit-portrait.png',
      './orbit-portrait.png',
      './assets/aistudio/Pensive_Portrait_Among_Ferns_55becde6_55becde6.png',
      '../public/assets/aistudio/Pensive_Portrait_Among_Ferns_55becde6_55becde6.png',
    ],
    software: [
      {
        id: 'premiere',
        name: 'Adobe Premiere Pro',
        sources: [
          './assets/premiere.png',
          './premiere.png',
          './assets/aistudio/pngwing.com__2__fe0da38e_fe0da38e.png',
          '../public/assets/aistudio/pngwing.com__2__fe0da38e_fe0da38e.png',
        ],
      },
      {
        id: 'after-effects',
        name: 'Adobe After Effects',
        sources: [
          './assets/after-effects.png',
          './after-effects.png',
          './assets/aistudio/pngwing.com__1__a0731328_a0731328.png',
          '../public/assets/aistudio/pngwing.com__1__a0731328_a0731328.png',
        ],
      },
      {
        id: 'photoshop',
        name: 'Adobe Photoshop',
        sources: [
          './assets/photoshop.png',
          './photoshop.png',
          './assets/aistudio/pngwing.com_a6f271ee_a6f271ee.png',
          '../public/assets/aistudio/pngwing.com_a6f271ee_a6f271ee.png',
        ],
      },
      {
        id: 'illustrator',
        name: 'Adobe Illustrator',
        sources: [
          './assets/illustrator.png',
          './illustrator.png',
          './assets/aistudio/pngwing.com__3__4e43089c_4e43089c.png',
          '../public/assets/aistudio/pngwing.com__3__4e43089c_4e43089c.png',
        ],
      },
      {
        id: 'capcut',
        name: 'CapCut',
        sources: [
          './assets/capcut.png',
          './capcut.png',
          './assets/aistudio/capcut-icon_e669bbd3_e669bbd3.png',
          '../public/assets/aistudio/capcut-icon_e669bbd3_e669bbd3.png',
        ],
        isLightIcon: true,
      },
      {
        id: 'canva',
        name: 'Canva',
        sources: [
          './assets/canva.png',
          './canva.png',
          './assets/aistudio/pngwing.com__4__a9773094_a9773094.png',
          '../public/assets/aistudio/pngwing.com__4__a9773094_a9773094.png',
        ],
      },
    ],
    featuredVideo: {
      id: '6C86gUGVa9E',
      url: 'https://youtu.be/6C86gUGVa9E?si=W84CPHw-lmbYz1yZ',
      ratio: '16:9',
      title: 'Featured Video & Showcase Edit',
      category: 'Showreel',
    },
    otherVideos: [
      { id: 'ot8KECG5eIs', url: 'https://youtube.com/shorts/ot8KECG5eIs?feature=share', ratio: '9:16', title: 'Shorts Edit #1', category: 'Short-Form' },
      { id: 'ChaL0Y9ND9E', url: 'https://youtube.com/shorts/ChaL0Y9ND9E?feature=share', ratio: '9:16', title: 'Dynamic Reel #2', category: 'Retention Cut' },
      { id: 'Y8l5dhk3ttU', url: 'https://youtube.com/shorts/Y8l5dhk3ttU?feature=share', ratio: '9:16', title: 'Motion Cut #3', category: 'Motion Graphics' },
      { id: 'Z3_8VKYLTrU', url: 'https://youtube.com/shorts/Z3_8VKYLTrU?feature=share', ratio: '9:16', title: 'Rhythm & Pacing #4', category: 'Sound & Pacing' },
      { id: 'Et3Gs7GQecM', url: 'https://youtube.com/shorts/Et3Gs7GQecM?feature=share', ratio: '9:16', title: 'Visual Story Reel #5', category: 'Storytelling' },
      { id: 'E85T6g5b7BQ', url: 'https://youtube.com/shorts/E85T6g5b7BQ?feature=share', ratio: '9:16', title: 'Impact Motion Cut #6', category: 'Kinetic Type' },
    ],
    contact: {
      email: 'm.aliahsan.connect@gmail.com',
      whatsapp: '+8801896091200',
      facebook: 'https://www.facebook.com/share/1dyR8JXswh/',
      youtube: 'https://youtube.com/@aliahsan-ide?si=sxNusVAEZ3nWab55',
      instagram: 'https://www.instagram.com/ali.ahsan.2004/',
      behance: 'https://www.behance.net/aliahsan68',
    },
  };

  const TRANSLATIONS = {
    en: {
      langSwitch: 'BN',
      navHome: 'Home',
      navFeatured: 'Featured',
      navPortfolio: 'Portfolio',
      navAbout: 'About',
      navContact: 'Contact',
      availability: 'Available for Projects',
      heroRole: 'Video Editor & Motion Graphics Designer',
      btnWatchFeatured: 'Watch Featured Video ↓',
      btnContactMe: 'Contact Me',
      featuredKicker: 'Featured Showreel · 16:9 Cinema · 4K Master',
      featuredHeading: 'Featured Video',
      clickToStream: 'Click to Stream',
      openOriginal: 'Open original',
      portfolioKicker: 'Timeline Archive · Section 02',
      portfolioHeading: 'Selected Video Edits (6 Cuts)',
      portfolioHint: 'Click any thumbnail to play instantly',
      cutLabel: 'Cut',
      behanceKicker: 'Graphic Design Showcase · Behance Portfolio',
      behanceHeading: 'See My Graphic Designs',
      behanceSubtitle:
        'Want to explore my graphic design work? Thumbnails, posters, brand visuals, and creative layouts are curated on Behance.',
      behanceCta: 'View on Behance',
      orbitKicker: 'Creative Toolset · Craft & Precision',
      orbitHeading: 'Software & Motion Craft',
      aboutKicker: 'Philosophy & Story · Section 03',
      aboutHeading: 'About Me',
      bioIntro: "Hello! I'm Ali Ahsan.",
      bioP1:
        'My journey began with a simple curiosity for capturing moments, which quickly evolved into a lifelong obsession.',
      bioP2:
        "I believe that every frame should speak, every cut should breathe, and every story should resonate. Whether it's a commercial campaign, a cinematic travel film, or a personal brand story, I bring a unique blend of technical expertise and artistic intuition to the table.",
      bioP3:
        'My mission is simple: to create visuals that not only look beautiful but feel authentic.',
      seeMore: 'See More',
      seeLess: 'See Less',
      focusAreas: [
        { num: '01.', title: 'Visual Storytelling', desc: 'Crafting purposeful rhythm, emotional resonance, and clear message delivery.' },
        { num: '02.', title: 'Motion Graphics', desc: 'Designing modern kinetic typography, title sequences, and graphic overlays.' },
        { num: '03.', title: 'Modern Workflow', desc: 'Embracing rapid iteration, technical curiosity, and AI-assisted production.' },
      ],
      contactKicker: 'Get In Touch · Section 04',
      contactHeading: 'Let’s Create Something Impactful',
      contactSubtitle:
        'Have an upcoming project, content channel, or video editing requirement? Reach out directly through your preferred channel.',
      btnWhatsapp: 'WhatsApp',
      btnEmail: 'Email Me',
      footerRights: 'All rights reserved.',
      footerEdition: 'Designed by Ali Ahsan',
    },
    bn: {
      langSwitch: 'EN',
      navHome: 'হোম',
      navFeatured: 'ফিচার্ড',
      navPortfolio: 'পোর্টফোলিও',
      navAbout: 'পরিচিতি',
      navContact: 'যোগাযোগ',
      availability: 'নতুন কাজের জন্য প্রস্তুত',
      heroRole: 'ভিডিও এডিটর ও মোশন গ্রাফিক্স ডিজাইনার',
      btnWatchFeatured: 'ফিচার্ড ভিডিও দেখুন ↓',
      btnContactMe: 'যোগাযোগ করুন',
      featuredKicker: 'ফিচার্ড শো-রিল · ১৬:৯ সিনেম্যাটিক · ৪কে মাস্টার',
      featuredHeading: 'ফিচার্ড ভিডিও',
      clickToStream: 'প্লে করতে ক্লিক করুন',
      openOriginal: 'আসল ভিডিও দেখুন',
      portfolioKicker: 'টাইমলাইন আর্কাইভ · সেকশন ০২',
      portfolioHeading: 'নির্বাচিত ভিডিও এডিট (৬টি কাট)',
      portfolioHint: 'যেকোনো থাম্বনেইলে ক্লিক করে সরাসরি প্লে করুন',
      cutLabel: 'কাট',
      behanceKicker: 'গ্রাফিক ডিজাইন শোকেস · বিহ্যান্স পোর্টফোলিও',
      behanceHeading: 'আমার গ্রাফিক ডিজাইন দেখুন',
      behanceSubtitle:
        'আমার তৈরি গ্রাফিক ডিজাইন—থাম্বনেইল, পোস্টার, ব্র্যান্ড ভিজ্যুয়াল এবং ক্রিয়েটিভ কাজগুলো দেখতে চাইলে বিহ্যান্স প্রোফাইলে ভিজিট করুন।',
      behanceCta: 'বিহ্যান্সে দেখুন',
      orbitKicker: 'ক্রিয়েটিভ টুলসেট · দক্ষতা ও নিখুঁত কাজ',
      orbitHeading: 'সফটওয়্যার ও মোশন ক্রাফট',
      aboutKicker: 'দর্শন ও গল্প · সেকশন ০৩',
      aboutHeading: 'আমার সম্পর্কে',
      bioIntro: 'হ্যালো! আমি আলী আহসান।',
      bioP1:
        'মুহূর্তগুলোকে ফ্রেমবন্দী করার এক সরল কৌতূহল থেকেই আমার এই যাত্রার শুরু, যা আজ আমার আজীবনের প্যাশনে পরিণত হয়েছে।',
      bioP2:
        'আমি বিশ্বাস করি প্রতিটি ফ্রেমের কথা বলা উচিত, প্রতিটি কাটে প্রাণ থাকা উচিত এবং প্রতিটি গল্প দর্শকের হৃদয় স্পর্শ করা উচিত। তা হোক কোনো বাণিজ্যিক ক্যাম্পেইন, সিনেম্যাটিক ট্রাভেল ফিল্ম কিংবা পার্সোনাল ব্র্যান্ডের গল্প—আমি সৃজনশীল দৃষ্টিভঙ্গি এবং নিখুঁত টেকনিক্যাল দক্ষতার সমন্বয় ঘটিয়ে কাজ করি।',
      bioP3:
        'আমার লক্ষ্য একটাই—এমন ভিজ্যুয়াল তৈরি করা, যা কেবল দেখতেই সুন্দর নয়, বরং প্রাণবন্ত ও বাস্তবসম্মত অনুভূতি দেয়।',
      seeMore: 'আরও দেখুন',
      seeLess: 'কম দেখুন',
      focusAreas: [
        { num: '01.', title: 'ভিজ্যুয়াল স্টোরিটেলিং', desc: 'সঠিক ছন্দ, আবেগ এবং স্পষ্ট বার্তা প্রদানের মাধ্যমে গল্প বলা।' },
        { num: '02.', title: 'মোশন গ্রাফিক্স', desc: 'আধুনিক কাইনেটিক টাইপোগ্রাফি, টাইটেল সিকোয়েন্স এবং গ্রাফিক ওভারলে ডিজাইন।' },
        { num: '03.', title: 'আধুনিক ওয়ার্কফ্লো', desc: 'দ্রুত ও নির্ভুল কাজের জন্য আধুনিক টেকনোলজি ও AI-ভিত্তিক প্রোডাকশন।' },
      ],
      contactKicker: 'যোগাযোগ করুন · সেকশন ০৪',
      contactHeading: 'চলুন একসাথে দারুণ কিছু তৈরি করি',
      contactSubtitle:
        'আপনার আসন্ন কোনো প্রজেক্ট, কনটেন্ট চ্যানেল বা ভিডিও এডিটিংয়ের প্রয়োজন হলে সরাসরি নিচের মাধ্যমগুলোতে যোগাযোগ করতে পারেন।',
      btnWhatsapp: 'হোয়াটসঅ্যাপ',
      btnEmail: 'ইমেইল করুন',
      footerRights: 'সর্বস্বত্ব সংরক্ষিত।',
      footerEdition: 'ডিজাইন করেছেন আলী আহসান',
    },
  };

  let currentLang = 'en';
  try {
    if (localStorage.getItem('lang') === 'bn') currentLang = 'bn';
  } catch (_) {}

  let activeVideoKey = null;
  let isVideoPaused = false;
  let isAboutExpanded = false;
  let orbitSyncFn = null;
  let orbitScrollTrigger = null;

  // Helpers
  function attachImageFallback(imgEl, sources, onAllFailed) {
    if (!imgEl || !sources || !sources.length) return;
    let idx = 0;
    const advance = () => {
      idx += 1;
      if (idx < sources.length) {
        imgEl.src = sources[idx];
      } else if (typeof onAllFailed === 'function') {
        onAllFailed(imgEl);
      }
    };
    imgEl.addEventListener('error', advance);
    if (imgEl.getAttribute('src') === sources[0] && imgEl.complete && imgEl.naturalWidth === 0) {
      advance();
    } else if (imgEl.getAttribute('src') !== sources[0]) {
      imgEl.src = sources[0];
    }
  }

  function triggerRgbBurst(el) {
    if (!el) return;
    el.classList.remove('rgb-burst');
    void el.offsetWidth;
    el.classList.add('rgb-burst');
    window.setTimeout(() => {
      el.classList.remove('rgb-burst');
    }, 650);
  }

  function setPointerSpotlight(el, clientX, clientY, maxTilt, hoverScale, liftPx) {
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
    if (maxTilt > 0) {
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -maxTilt;
      const ry = ((x - cx) / cx) * maxTilt;
      el.style.transform = `perspective(700px) translateY(${liftPx}px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${hoverScale})`;
    }
  }

  function resetPointerSpotlight(el) {
    el.style.transform = '';
    el.style.removeProperty('--mouse-x');
    el.style.removeProperty('--mouse-y');
  }

  // Global interactive spotlight + touch RGB burst
  document.addEventListener('pointermove', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const target = e.target.closest('.interactive-light-btn, .video-light-card, .ios-liquid-glass, .ios-glass-card');
    if (!target) return;
    if (target.classList.contains('interactive-light-btn')) {
      setPointerSpotlight(target, e.clientX, e.clientY, 5, 1.03, -2);
    } else if (target.classList.contains('video-light-card')) {
      setPointerSpotlight(target, e.clientX, e.clientY, 3, 1.01, -4);
    } else {
      setPointerSpotlight(target, e.clientX, e.clientY, 0, 1, 0);
    }
  });

  document.addEventListener('pointerout', (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const target = e.target.closest('.interactive-light-btn, .video-light-card, .ios-liquid-glass, .ios-glass-card');
    if (target && !target.contains(e.relatedTarget)) {
      resetPointerSpotlight(target);
    }
  });

  document.addEventListener('touchstart', (e) => {
    const target = e.target.closest('.rgb-clickable, .interactive-light-btn, .video-light-card, .glass-nav-item, .orbit-glass-card');
    if (!target) return;
    const touch = e.touches[0];
    if (touch) {
      setPointerSpotlight(target, touch.clientX, touch.clientY, 0, 1, 0);
    }
    triggerRgbBurst(target);
  }, { passive: true });

  document.addEventListener('click', (e) => {
    const target = e.target.closest('.rgb-clickable, .interactive-light-btn, .glass-nav-item');
    if (target) triggerRgbBurst(target);
  });

  // Portrait images fallback
  const heroAvatarImg = document.getElementById('hero-avatar-img');
  const headerAvatarImg = document.getElementById('header-avatar-img');
  const orbitPortraitImg = document.getElementById('orbit-portrait-img');
  attachImageFallback(heroAvatarImg, SITE_DATA.profileImages);
  attachImageFallback(headerAvatarImg, SITE_DATA.profileImages);
  attachImageFallback(orbitPortraitImg, SITE_DATA.orbitPortraitSources);

  // =======================================================
  // 1. HEADER SCROLL DOCK + RESPONSIVE SCROLLED NAV BAR
  // =======================================================
  const headerBrand = document.getElementById('header-brand');
  const navLeftSpacer = document.getElementById('nav-left-spacer');
  const navMidSpacer = document.getElementById('nav-mid-spacer');
  const navRightSpacer = document.getElementById('nav-right-spacer');
  const primaryNav = document.getElementById('primary-nav');
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langGlobeIcon = langToggleBtn.querySelector('svg');
  const navLinks = Array.from(document.querySelectorAll('[data-nav-href]'));
  const heroAvatarSlot = document.getElementById('hero-avatar-slot');
  const heroAvatarGlide = document.getElementById('hero-avatar-glide');
  const headerCornerAnchor = document.getElementById('header-corner-anchor');

  function applyScrolledNavState(scrolled) {
    if (scrolled) {
      navLeftSpacer.classList.add('hidden');
      navRightSpacer.classList.add('hidden');
      headerBrand.classList.remove('hidden');
      headerBrand.classList.add('flex');
      navMidSpacer.classList.remove('hidden');

      primaryNav.className =
        'ios-liquid-glass ios-glass-sheen pointer-events-auto flex items-center rounded-full font-medium text-stone-200 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shrink gap-0 sm:gap-1.5 px-1 py-0.5 sm:px-2.5 sm:py-1.5 text-[8px] min-[360px]:text-[8.5px] min-[390px]:text-[9.5px] sm:text-sm transition-all duration-200';
      langToggleBtn.className =
        'glass-nav-item relative z-10 inline-flex items-center rounded-full border border-white/20 bg-white/10 font-mono font-bold text-white hover:border-noir-gold hover:text-noir-gold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold gap-0.5 sm:gap-1 px-1 py-0.5 min-[390px]:px-1.5 sm:px-2.5 sm:py-1.5 text-[8px] min-[360px]:text-[8.5px] min-[390px]:text-[9.5px] sm:text-xs';
      langGlobeIcon.setAttribute('class', 'relative z-10 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5');
    } else {
      navLeftSpacer.classList.remove('hidden');
      navRightSpacer.classList.remove('hidden');
      headerBrand.classList.add('hidden');
      headerBrand.classList.remove('flex');
      navMidSpacer.classList.add('hidden');

      primaryNav.className =
        'ios-liquid-glass ios-glass-sheen pointer-events-auto flex items-center rounded-full font-medium text-stone-200 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shrink gap-0.5 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1.5 text-[10.5px] min-[390px]:text-[11.5px] sm:text-sm transition-all duration-200';
      langToggleBtn.className =
        'glass-nav-item relative z-10 inline-flex items-center rounded-full border border-white/20 bg-white/10 font-mono font-bold text-white hover:border-noir-gold hover:text-noir-gold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1.5 text-[10.5px] min-[390px]:text-[11.5px] sm:text-xs';
      langGlobeIcon.setAttribute('class', 'relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5');
    }

    navLinks.forEach((link) => {
      const pad = scrolled
        ? 'px-1 py-0.5 min-[390px]:px-1.5 sm:px-3 sm:py-1.5'
        : 'px-1.5 py-0.5 min-[390px]:px-2 sm:px-3 sm:py-1.5';
      const isActive = link.dataset.active === 'true';
      link.className = `glass-nav-item relative z-10 rounded-full whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold ${pad} ${
        isActive
          ? 'bg-white/15 text-noir-gold shadow-[0_0_16px_rgba(229,163,56,0.35)]'
          : 'text-stone-200'
      }`;
    });
  }

  function setActiveNavSection(id) {
    navLinks.forEach((link) => {
      const active = link.getAttribute('data-nav-href') === id;
      link.dataset.active = active ? 'true' : 'false';
    });
    applyScrolledNavState(window.scrollY > 45);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('data-nav-href');
      if (href) setActiveNavSection(href);
    });
  });

  function updateTopHeroCornerGlide(scrollYPos) {
    const t = Math.min(1, Math.max(0, scrollYPos / 170));
    const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const slotRect = heroAvatarSlot.getBoundingClientRect();
    const targetRect = headerCornerAnchor.getBoundingClientRect();
    const slotCx = slotRect.left + slotRect.width / 2;
    const slotCy = slotRect.top + slotRect.height / 2;
    const targetCx = targetRect.left + targetRect.width / 2;
    const targetCy = targetRect.top + targetRect.height / 2;
    const targetScale = slotRect.width > 0 ? targetRect.width / slotRect.width : 0.16;

    const dx = (targetCx - slotCx) * eased;
    const dy = (targetCy - slotCy) * eased;
    const s = 1 + (targetScale - 1) * eased;
    const pillAlpha = Math.min(1, Math.max(0, (scrollYPos - 120) / 45));
    const heroAlpha = 1 - Math.min(1, Math.max(0, (scrollYPos - 135) / 35));

    heroAvatarGlide.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${s})`;
    heroAvatarGlide.style.opacity = String(heroAlpha);
    headerBrand.style.opacity = String(pillAlpha);
  }

  // Fast-scroll motion blur
  const scrollStage = document.getElementById('scroll-stage');
  let lastScrollY = window.scrollY;
  let lastTime = performance.now();
  let smoothVelocity = 0;
  let scrollIdleTimer = null;

  function applyFastScrollBlur(vel) {
    const absV = Math.abs(vel);
    if (absV < 200) {
      scrollStage.dataset.fastScroll = 'false';
      scrollStage.style.setProperty('--mb-blur', '0px');
      scrollStage.style.setProperty('--mb-blur-text', '0px');
      scrollStage.style.setProperty('--mb-echo-y', '0px');
      scrollStage.style.setProperty('--mb-echo-y2', '0px');
      scrollStage.style.setProperty('--mb-echo-alpha1', '0');
      scrollStage.style.setProperty('--mb-echo-alpha2', '0');
      scrollStage.style.setProperty('--mb-streak-opacity', '0');
      return;
    }
    const strength = Math.min(1, (absV - 200) / 2100);
    const dir = vel >= 0 ? 1 : -1;
    scrollStage.dataset.fastScroll = 'true';
    scrollStage.style.setProperty('--mb-blur', `${(strength * 1.4).toFixed(2)}px`);
    scrollStage.style.setProperty('--mb-blur-text', `${(strength * 0.9).toFixed(2)}px`);
    scrollStage.style.setProperty('--mb-echo-y', `${(-dir * strength * 9).toFixed(2)}px`);
    scrollStage.style.setProperty('--mb-echo-y2', `${(-dir * strength * 18).toFixed(2)}px`);
    scrollStage.style.setProperty('--mb-echo-alpha1', `${(strength * 0.34).toFixed(3)}`);
    scrollStage.style.setProperty('--mb-echo-alpha2', `${(strength * 0.16).toFixed(3)}`);
    scrollStage.style.setProperty('--mb-streak-opacity', `${(strength * 0.6).toFixed(3)}`);
  }

  function onScrollHandler() {
    const y = window.scrollY || 0;
    applyScrolledNavState(y > 45);
    updateTopHeroCornerGlide(y);

    const sections = ['#contact', '#about', '#videos', '#featured'];
    let current = '#home';
    for (const id of sections) {
      const el = document.querySelector(id);
      if (el && el.getBoundingClientRect().top <= 160) {
        current = id;
        break;
      }
    }
    setActiveNavSection(current);

    const now = performance.now();
    const dt = Math.max(now - lastTime, 8);
    const dy = y - lastScrollY;
    const instantV = (dy / dt) * 1000;
    smoothVelocity = smoothVelocity * 0.45 + instantV * 0.55;
    lastScrollY = y;
    lastTime = now;
    applyFastScrollBlur(smoothVelocity);

    if (scrollIdleTimer) window.clearTimeout(scrollIdleTimer);
    scrollIdleTimer = window.setTimeout(() => {
      smoothVelocity = 0;
      applyFastScrollBlur(0);
    }, 150);
  }

  window.addEventListener('scroll', onScrollHandler, { passive: true });
  window.addEventListener('resize', () => updateTopHeroCornerGlide(window.scrollY || 0), { passive: true });

  // =======================================================
  // 2. PHOTO LIGHTBOX MODAL
  // =======================================================
  const photoLightbox = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxThumb = document.getElementById('lightbox-thumb');

  function openPhotoModal(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Ali Ahsan';
    lightboxThumb.src = src;
    photoLightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closePhotoModal() {
    photoLightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.getElementById('hero-portrait-btn').addEventListener('click', () => {
    openPhotoModal(heroAvatarImg.currentSrc || heroAvatarImg.src, 'Ali Ahsan');
  });

  document.getElementById('orbit-portrait-btn').addEventListener('click', () => {
    openPhotoModal(orbitPortraitImg.currentSrc || orbitPortraitImg.src, 'Ali Ahsan');
  });

  document.getElementById('lightbox-close').addEventListener('click', closePhotoModal);
  photoLightbox.addEventListener('click', (e) => {
    if (e.target === photoLightbox || e.target === lightboxImg.parentElement) {
      closePhotoModal();
    }
  });

  // =======================================================
  // 3. YOUTUBE EMBED, FEATURED PLAYER & SHORTS CINEMA MODAL
  // =======================================================
  const mobileVideoModal = document.getElementById('mobile-video-modal');
  const mobileModalCard = document.getElementById('mobile-modal-card');
  const mobileModalMount = document.getElementById('mobile-modal-mount');
  const mobileModalMeta = document.getElementById('mobile-modal-meta');
  const mobileModalTitle = document.getElementById('mobile-modal-title');
  const featuredVideoCard = document.getElementById('featured-video-card');
  const featuredVideoMount = document.getElementById('featured-video-mount');
  const shortsGrid = document.getElementById('shorts-grid');

  function buildYouTubeEmbedUrl(videoId) {
    const origin =
      window.location && window.location.origin && window.location.origin.startsWith('http')
        ? `&origin=${encodeURIComponent(window.location.origin)}`
        : '';
    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1&enablejsapi=1${origin}`;
  }

  function getThumbUrl(videoId) {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }

  function attachYtListening(iframe) {
    iframe.addEventListener('load', () => {
      try {
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'listening' }), '*');
      } catch (_) {}
    });
  }

  function syncPlayingGlow() {
    featuredVideoCard.classList.toggle('video-is-playing', activeVideoKey === 'featured' && !isVideoPaused);
    mobileModalCard.classList.toggle('video-is-playing', Boolean(activeVideoKey && activeVideoKey !== 'featured' && !isVideoPaused));
    document.querySelectorAll('[data-short-card]').forEach((card) => {
      const id = card.getAttribute('data-short-card');
      card.classList.toggle('video-is-playing', activeVideoKey === id && !isVideoPaused);
    });
  }

  function stopActiveVideo() {
    activeVideoKey = null;
    isVideoPaused = false;
    mobileVideoModal.classList.add('hidden');
    mobileModalMount.innerHTML = '';
    document.body.style.overflow = '';
    renderFeaturedVideo();
    renderShortsGrid();
    syncPlayingGlow();
  }

  function playFeatured() {
    isVideoPaused = false;
    activeVideoKey = 'featured';
    mobileVideoModal.classList.add('hidden');
    mobileModalMount.innerHTML = '';
    renderFeaturedVideo();
    renderShortsGrid();
    syncPlayingGlow();
  }

  function playShort(video) {
    isVideoPaused = false;
    activeVideoKey = video.id;
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      mobileModalMeta.textContent = `${video.category} · ${video.ratio}`;
      mobileModalTitle.textContent = video.title;
      mobileModalMount.innerHTML = `<iframe src="${buildYouTubeEmbedUrl(video.id)}" title="${video.title}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      mobileVideoModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const iframe = mobileModalMount.querySelector('iframe');
      if (iframe) attachYtListening(iframe);
      renderFeaturedVideo();
      renderShortsGrid();
      syncPlayingGlow();
    } else {
      mobileVideoModal.classList.add('hidden');
      renderFeaturedVideo();
      renderShortsGrid();
      syncPlayingGlow();
    }
  }

  document.getElementById('mobile-modal-close').addEventListener('click', stopActiveVideo);
  mobileVideoModal.addEventListener('click', (e) => {
    if (e.target === mobileVideoModal) stopActiveVideo();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!photoLightbox.classList.contains('hidden')) closePhotoModal();
      if (!mobileVideoModal.classList.contains('hidden')) stopActiveVideo();
    }
  });

  window.addEventListener('message', (event) => {
    if (!event.origin || !event.origin.includes('youtube')) return;
    let data;
    try {
      data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
    } catch (_) {
      return;
    }
    if (!data) return;
    const playerState =
      data.event === 'onStateChange'
        ? data.info
        : data.info && typeof data.info.playerState === 'number'
          ? data.info.playerState
          : null;
    if (playerState === 0) {
      stopActiveVideo();
    } else if (playerState === 1 || playerState === 3) {
      isVideoPaused = false;
      syncPlayingGlow();
    } else if (playerState === 2) {
      isVideoPaused = true;
      syncPlayingGlow();
    }
  });

  function renderFeaturedVideo() {
    const t = TRANSLATIONS[currentLang];
    const vid = SITE_DATA.featuredVideo;
    if (activeVideoKey === 'featured') {
      featuredVideoMount.innerHTML = `<iframe src="${buildYouTubeEmbedUrl(vid.id)}" title="${vid.title}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      const iframe = featuredVideoMount.querySelector('iframe');
      if (iframe) attachYtListening(iframe);
      return;
    }

    featuredVideoMount.innerHTML = `
      <button type="button" id="play-featured-btn" aria-label="Play ${vid.title}" class="rgb-clickable relative w-full h-full block text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
        <img src="${getThumbUrl(vid.id)}" alt="${vid.title}" referrerPolicy="no-referrer" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div class="video-light-sweep" aria-hidden="true"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-noir-950/85 via-noir-950/20 to-black/30"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="rgb-clickable relative overflow-hidden w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-noir-gold text-noir-950 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(229,163,56,0.85)]">
            <span class="rgb-perimeter-glow" aria-hidden="true"></span>
            <svg class="relative z-10 w-5 h-5 sm:w-9 sm:h-9 fill-current ml-0.5 sm:ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </div>
        <div class="absolute bottom-2.5 left-3 right-3 gap-2 sm:bottom-5 sm:left-5 sm:right-5 sm:gap-3 flex items-end justify-between">
          <div class="min-w-0">
            <span class="block text-[11px] sm:text-xs font-mono text-noir-gold mb-0.5 sm:mb-1">${t.clickToStream}</span>
            <span class="card-title-glow text-white font-display font-bold text-[15px] sm:text-xl block truncate">${vid.title}</span>
          </div>
          <span class="font-mono text-[11px] sm:text-xs text-stone-300 tabular-nums shrink-0">${vid.ratio}</span>
        </div>
      </button>
    `;
    document.getElementById('play-featured-btn').addEventListener('click', () => {
      triggerRgbBurst(featuredVideoCard);
      playFeatured();
    });
  }

  function renderShortsGrid() {
    const t = TRANSLATIONS[currentLang];
    shortsGrid.innerHTML = '';

    SITE_DATA.otherVideos.forEach((video, idx) => {
      const isInline = activeVideoKey === video.id && window.innerWidth >= 640;
      const article = document.createElement('article');
      article.setAttribute('data-short-card', video.id);
      article.className = `video-light-card ios-glass-sheen group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 ${
        activeVideoKey === video.id && !isVideoPaused ? 'video-is-playing' : ''
      }`;

      article.innerHTML = `
        <span class="rgb-perimeter-glow" aria-hidden="true"></span>
        <div class="relative w-full aspect-[9/16] bg-noir-950 overflow-hidden">
          ${
            isInline
              ? `<iframe src="${buildYouTubeEmbedUrl(video.id)}" title="${video.title}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`
              : `<button type="button" data-play-short="${video.id}" aria-label="Play ${video.title}" class="rgb-clickable relative w-full h-full block text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
                  <img src="${getThumbUrl(video.id)}" alt="${video.title}" loading="lazy" decoding="async" referrerPolicy="no-referrer" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div class="video-light-sweep" aria-hidden="true"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="rgb-clickable relative overflow-hidden w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-noir-gold text-noir-950 flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_28px_rgba(229,163,56,0.85)]">
                      <span class="rgb-perimeter-glow" aria-hidden="true"></span>
                      <svg class="relative z-10 w-5 h-5 sm:w-7 sm:h-7 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </span>
                  </div>
                  <div class="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 flex flex-col items-end gap-0.5 text-right pointer-events-none">
                    <span class="px-1.5 py-0.5 rounded bg-black/55 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-stone-200 leading-none truncate max-w-[125px] sm:max-w-[140px]">${video.category}</span>
                    <span class="text-[10px] text-noir-gold/90 font-mono tabular-nums leading-none">${video.ratio}</span>
                  </div>
                </button>`
          }
        </div>
        <div class="p-2.5 sm:p-4 lg:p-5 flex items-center justify-between gap-2 sm:gap-4 border-t border-white/10 bg-white/[0.03] backdrop-blur-md mt-auto">
          <div class="min-w-0">
            <div class="text-[11px] sm:text-xs font-mono text-stone-400 tabular-nums mb-0.5 sm:mb-1 truncate">${t.cutLabel} ${String(idx + 1).padStart(2, '0')} · ${video.ratio}</div>
            <h3 class="card-title-glow font-display font-bold text-[13px] sm:text-sm lg:text-base text-stone-100 truncate">${video.title}</h3>
          </div>
          <a href="${video.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${video.title}" class="rgb-clickable relative overflow-hidden inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-2 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-medium text-stone-200 hover:text-noir-gold border border-white/15 bg-white/[0.05] hover:border-noir-gold transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
            <span class="rgb-perimeter-glow" aria-hidden="true"></span>
            <span class="hidden sm:inline relative z-10">Open</span>
            <svg class="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </a>
        </div>
      `;

      shortsGrid.appendChild(article);

      if (isInline) {
        const iframe = article.querySelector('iframe');
        if (iframe) attachYtListening(iframe);
      } else {
        const playBtn = article.querySelector(`[data-play-short="${video.id}"]`);
        if (playBtn) {
          playBtn.addEventListener('click', () => {
            triggerRgbBurst(article);
            playShort(video);
          });
        }
      }
    });
  }

  // =======================================================
  // 4. CONTINUOUS CIRCULAR ORBIT + GSAP SCROLL CHOREOGRAPHY
  // =======================================================
  const orbitStageEl = document.getElementById('orbit-about-stage');
  const orbitTrackEl = document.getElementById('orbit-sticky-track');
  const orbitWheelEl = document.getElementById('orbit-wheel');
  const orbitRingsEl = document.getElementById('orbit-rings');
  const orbitHeadingWrap = document.getElementById('orbit-heading-wrap');
  const orbitHeroSlot = document.getElementById('orbit-hero-slot');
  const orbitMovingPortrait = document.getElementById('orbit-moving-portrait');
  const orbitPortraitHalo = document.getElementById('orbit-portrait-halo');
  const aboutSlotEl = document.getElementById('about-slot');
  const aboutHeaderRight = document.getElementById('about-header-right');
  const aboutBodyEl = document.getElementById('about-body');
  const aboutFocusGrid = document.getElementById('about-focus-grid');

  const iconScrollEls = [];
  const iconCounterEls = [];
  const iconFloatEls = [];

  function buildOrbitIcons() {
    orbitWheelEl.innerHTML = '';
    iconScrollEls.length = 0;
    iconCounterEls.length = 0;
    iconFloatEls.length = 0;

    SITE_DATA.software.forEach((item, i) => {
      const angleDeg = i * 60 - 90;
      const spoke = document.createElement('div');
      spoke.className = 'absolute left-1/2 top-1/2 w-0 h-0';
      spoke.style.transform = `rotate(${angleDeg}deg)`;

      spoke.innerHTML = `
        <div style="transform: translateY(calc(var(--orbit-radius) * -1));">
          <div class="-translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] sm:w-16 sm:h-16 lg:w-[76px] lg:h-[76px]">
            <div data-icon-scroll class="w-full h-full pointer-events-auto">
              <div data-icon-counter class="w-full h-full">
                <div data-icon-float class="w-full h-full">
                  <div
                    role="button"
                    tabindex="0"
                    title="${item.name}"
                    aria-label="${item.name}"
                    class="orbit-glass-card group/icon w-full h-full rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-2.5 lg:p-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold"
                  >
                    <span class="rgb-perimeter-glow" aria-hidden="true"></span>
                    <img
                      src="${item.sources[0]}"
                      alt="${item.name}"
                      decoding="async"
                      class="relative z-10 w-full h-full object-contain select-none pointer-events-none ${item.isLightIcon ? 'rounded-lg sm:rounded-xl' : ''}"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const scrollWrap = spoke.querySelector('[data-icon-scroll]');
      const counterWrap = spoke.querySelector('[data-icon-counter]');
      const floatWrap = spoke.querySelector('[data-icon-float]');
      const card = spoke.querySelector('.orbit-glass-card');
      const img = spoke.querySelector('img');

      attachImageFallback(img, item.sources, (failed) => {
        const span = document.createElement('span');
        span.className = 'relative z-10 font-mono text-[10px] sm:text-xs font-bold text-stone-200 pointer-events-none';
        span.textContent = item.name.slice(0, 2).toUpperCase();
        failed.replaceWith(span);
      });

      card.addEventListener('pointermove', (e) => {
        if (e.pointerType && e.pointerType !== 'mouse') return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
        const rx = ((y - rect.height / 2) / (rect.height / 2)) * -12;
        const ry = ((x - rect.width / 2) / (rect.width / 2)) * 12;
        card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.18)`;
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
      card.addEventListener('click', () => {
        card.style.transform = '';
        triggerRgbBurst(card);
      });

      iconScrollEls.push(scrollWrap);
      iconCounterEls.push(counterWrap);
      iconFloatEls.push(floatWrap);
      orbitWheelEl.appendChild(spoke);
    });
  }

  function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
  }
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function initOrbitMotion() {
    buildOrbitIcons();

    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
      // Pure CSS rotation fallback if offline
      orbitWheelEl.classList.add('orbit-wheel-css-fallback');
      iconCounterEls.forEach((el, i) => {
        const angleDeg = i * 60 - 90;
        el.style.transform = `rotate(${-angleDeg}deg)`;
        el.classList.add('orbit-counter-css-fallback');
      });
      return;
    }

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const orbitDuration = 30;
    gsap.set(orbitWheelEl, { rotation: 0 });
    gsap.to(orbitWheelEl, {
      rotation: 360,
      duration: orbitDuration,
      repeat: -1,
      ease: 'none',
    });

    SITE_DATA.software.forEach((_, i) => {
      const angleDeg = i * 60 - 90;
      const counterEl = iconCounterEls[i];
      const floatEl = iconFloatEls[i];

      if (counterEl) {
        gsap.set(counterEl, { rotation: -angleDeg });
        gsap.to(counterEl, {
          rotation: '-=360',
          duration: orbitDuration,
          repeat: -1,
          ease: 'none',
        });
      }

      if (floatEl) {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.fromTo(
          floatEl,
          { x: -8 * dir, y: -4 * dir, rotation: -6 * dir },
          {
            x: 8 * dir,
            y: 4 * dir,
            rotation: 6 * dir,
            duration: 1.9 + (i % 3) * 0.35,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.24,
          }
        );
      }
    });

    function applyScrollProgress(progress) {
      const p = clamp(progress, 0, 1);

      const fadeT = clamp(p / 0.38, 0, 1);
      const iconOpacity = 1 - easeOutCubic(fadeT);
      const iconScale = 1 - 0.54 * easeInOutCubic(fadeT);

      iconScrollEls.forEach((wrapper) => {
        if (!wrapper) return;
        gsap.set(wrapper, { opacity: iconOpacity, scale: iconScale });
        wrapper.style.pointerEvents = iconOpacity > 0.08 ? 'auto' : 'none';
      });

      gsap.set(orbitRingsEl, {
        opacity: 1 - easeOutCubic(clamp(p / 0.34, 0, 1)),
        scale: 1 - 0.14 * easeInOutCubic(clamp(p / 0.34, 0, 1)),
      });

      const headingT = clamp(p / 0.3, 0, 1);
      gsap.set(orbitHeadingWrap, {
        opacity: 1 - easeOutCubic(headingT),
        y: -18 * easeInOutCubic(headingT),
      });

      const rawGlide = clamp((p - 0.22) / 0.72, 0, 1);
      const glideP = easeInOutCubic(rawGlide);
      const heroRect = orbitHeroSlot.getBoundingClientRect();
      const aboutRect = aboutSlotEl.getBoundingClientRect();
      const dx = aboutRect.left + aboutRect.width / 2 - (heroRect.left + heroRect.width / 2);
      const dy = aboutRect.top + aboutRect.height / 2 - (heroRect.top + heroRect.height / 2);
      const targetScale = heroRect.width > 0 ? aboutRect.width / heroRect.width : 1;

      gsap.set(orbitMovingPortrait, {
        x: dx * glideP,
        y: dy * glideP,
        scale: 1 + (targetScale - 1) * glideP,
      });

      gsap.set(orbitPortraitHalo, { opacity: 0.62 - 0.18 * glideP });

      const aboutT = clamp((p - 0.45) / 0.51, 0, 1);
      const easedAbout = easeOutCubic(aboutT);
      gsap.set(aboutHeaderRight, { opacity: easedAbout, y: (1 - easedAbout) * 24 });
      gsap.set(aboutBodyEl, { opacity: easedAbout, y: (1 - easedAbout) * 28 });

      const focusT = clamp((p - 0.62) / 0.36, 0, 1);
      const easedFocus = easeOutCubic(focusT);
      gsap.set(aboutFocusGrid, { opacity: easedFocus, y: (1 - easedFocus) * 20 });
    }

    orbitSyncFn = applyScrollProgress;
    orbitScrollTrigger = ScrollTrigger.create({
      trigger: orbitTrackEl,
      start: () => (window.innerWidth < 640 ? 'top 48px' : 'top 80px'),
      end: () => (window.innerWidth < 640 ? 'bottom 58%' : 'bottom 45%'),
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => applyScrollProgress(self.progress),
      onRefresh: (self) => applyScrollProgress(self.progress),
    });

    applyScrollProgress(orbitScrollTrigger.progress);

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(() => {
        ScrollTrigger.refresh();
        if (orbitScrollTrigger && orbitSyncFn) orbitSyncFn(orbitScrollTrigger.progress);
      });
      ro.observe(orbitStageEl);
    }
  }

  // =======================================================
  // 5. ABOUT ME MOBILE SEE MORE TOGGLE
  // =======================================================
  const aboutMoreBio = document.getElementById('about-more-bio');
  const aboutSeeMoreBtn = document.getElementById('about-see-more-btn');
  const aboutSeeMoreLabel = document.getElementById('about-see-more-label');
  const aboutSeeMoreIcon = document.getElementById('about-see-more-icon');

  function syncAboutExpandedUI() {
    const t = TRANSLATIONS[currentLang];
    if (isAboutExpanded) {
      aboutMoreBio.classList.remove('hidden');
      aboutMoreBio.classList.add('block', 'space-y-3.5');
      aboutFocusGrid.classList.remove('hidden');
      aboutFocusGrid.classList.add('grid');
      aboutSeeMoreLabel.textContent = t.seeLess;
      aboutSeeMoreIcon.style.transform = 'rotate(180deg)';
      aboutSeeMoreBtn.setAttribute('aria-expanded', 'true');
    } else {
      aboutMoreBio.classList.add('hidden');
      aboutMoreBio.classList.remove('block', 'space-y-3.5');
      aboutFocusGrid.classList.add('hidden');
      aboutFocusGrid.classList.remove('grid');
      aboutSeeMoreLabel.textContent = t.seeMore;
      aboutSeeMoreIcon.style.transform = 'rotate(0deg)';
      aboutSeeMoreBtn.setAttribute('aria-expanded', 'false');
    }

    requestAnimationFrame(() => {
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      if (orbitScrollTrigger && orbitSyncFn) orbitSyncFn(orbitScrollTrigger.progress);
    });
  }

  aboutSeeMoreBtn.addEventListener('click', () => {
    isAboutExpanded = !isAboutExpanded;
    syncAboutExpandedUI();
  });

  // =======================================================
  // 6. CONTACT BUTTONS & TRANSLATION ENGINE
  // =======================================================
  function renderContact() {
    const t = TRANSLATIONS[currentLang];
    const c = SITE_DATA.contact;
    const waDigits = c.whatsapp.replace(/\D/g, '');
    const container = document.getElementById('contact-buttons');

    container.innerHTML = `
      <a href="https://wa.me/${waDigits}" target="_blank" rel="noopener noreferrer" class="interactive-light-btn brand-btn-wa inline-flex items-center gap-2.5 sm:gap-3.5 px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-[#25D366] text-white font-bold text-sm shadow-xl whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
        <span class="rgb-perimeter-glow" aria-hidden="true"></span>
        <span class="wa-radar-ring" aria-hidden="true"></span>
        <svg class="brand-icon-wa relative z-10 w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
        </svg>
        <span class="relative z-10 tracking-wide">${t.btnWhatsapp}</span>
      </a>

      <a href="mailto:${c.email}" class="interactive-light-btn brand-btn-email inline-flex items-center gap-2.5 sm:gap-3.5 px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-noir-gold text-noir-950 font-bold text-sm shadow-xl whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
        <span class="rgb-perimeter-glow" aria-hidden="true"></span>
        <svg class="brand-icon-email relative z-10 w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform duration-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
        <span class="relative z-10 tracking-wide">${t.btnEmail}</span>
      </a>

      <a href="${c.youtube}" target="_blank" rel="noopener noreferrer" class="interactive-light-btn brand-btn-yt ios-liquid-glass inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl text-stone-100 text-sm font-semibold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
        <span class="rgb-perimeter-glow" aria-hidden="true"></span>
        <svg class="brand-icon-yt relative z-10 w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#FF0000] transition-transform duration-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
        <span class="relative z-10">YouTube</span>
      </a>

      <a href="${c.facebook}" target="_blank" rel="noopener noreferrer" class="interactive-light-btn brand-btn-fb ios-liquid-glass inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl text-stone-100 text-sm font-semibold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
        <span class="rgb-perimeter-glow" aria-hidden="true"></span>
        <svg class="brand-icon-fb relative z-10 w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#1877F2] transition-transform duration-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        <span class="relative z-10">Facebook</span>
      </a>

      <a href="${c.instagram}" target="_blank" rel="noopener noreferrer" class="interactive-light-btn brand-btn-insta ios-liquid-glass inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl text-stone-100 text-sm font-semibold whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noir-gold">
        <span class="rgb-perimeter-glow" aria-hidden="true"></span>
        <svg class="brand-icon-insta relative z-10 w-4 h-4 sm:w-5 sm:h-5 fill-current text-[#E4405F] transition-transform duration-300" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
        <span class="relative z-10">Instagram</span>
      </a>
    `;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch (_) {}
    const t = TRANSLATIONS[lang];

    document.getElementById('lang-switch-label').textContent = t.langSwitch;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    document.getElementById('hero-role').textContent = t.heroRole;
    document.getElementById('hero-availability').textContent = t.availability;
    document.getElementById('featured-kicker').textContent = t.featuredKicker;
    document.getElementById('featured-heading').textContent = t.featuredHeading;
    document.getElementById('portfolio-kicker').textContent = t.portfolioKicker;
    document.getElementById('portfolio-heading').textContent = t.portfolioHeading;
    document.getElementById('portfolio-hint').textContent = t.portfolioHint;
    document.getElementById('behance-kicker').textContent = t.behanceKicker;
    document.getElementById('behance-heading').textContent = t.behanceHeading;
    document.getElementById('behance-subtitle').textContent = t.behanceSubtitle;
    document.getElementById('behance-cta').textContent = t.behanceCta;
    document.getElementById('orbit-kicker').textContent = t.orbitKicker;
    document.getElementById('orbit-heading').textContent = t.orbitHeading;
    document.getElementById('about-kicker').textContent = t.aboutKicker;
    document.getElementById('about-heading').textContent = t.aboutHeading;
    document.getElementById('bio-intro').textContent = t.bioIntro;
    document.getElementById('bio-p1').textContent = t.bioP1;
    document.getElementById('bio-p2').textContent = t.bioP2;
    document.getElementById('bio-p3').textContent = t.bioP3;
    document.getElementById('contact-kicker').textContent = t.contactKicker;
    document.getElementById('contact-heading').textContent = t.contactHeading;
    document.getElementById('contact-subtitle').textContent = t.contactSubtitle;
    document.getElementById('footer-rights').textContent = t.footerRights;
    document.getElementById('footer-role').textContent = t.heroRole;
    document.getElementById('footer-edition').textContent = t.footerEdition;
    document.getElementById('lightbox-role').textContent = t.heroRole;

    aboutFocusGrid.innerHTML = t.focusAreas
      .map(
        (area) => `
        <div class="ios-glass-card group p-4 sm:p-5 rounded-xl sm:rounded-2xl space-y-1.5 sm:space-y-2 min-w-0 break-words">
          <h3 class="lighting-text-hover relative z-10 text-noir-gold font-mono text-sm font-semibold tabular-nums">${area.num} ${area.title}</h3>
          <p class="relative z-10 text-[13px] sm:text-sm text-stone-400 leading-relaxed">${area.desc}</p>
        </div>
      `
      )
      .join('');

    renderFeaturedVideo();
    renderShortsGrid();
    renderContact();
    syncAboutExpandedUI();
  }

  langToggleBtn.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'bn' : 'en');
  });

  // Boot
  document.getElementById('footer-year').textContent = String(new Date().getFullYear());
  initOrbitMotion();
  applyLanguage(currentLang);
  setActiveNavSection('#home');
  updateTopHeroCornerGlide(window.scrollY || 0);
})();
