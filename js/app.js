/**
 * MÁS CONEXIÓN SALUD · CARTAGENA
 * Lógica de Interacciones, Internacionalización Bilingüe (ES/EN) y Componentes UI
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado Global
  const state = {
    currentLang: localStorage.getItem('mcs_lang') || 'es',
    activeServiceCategory: 'surgical', // 'surgical' o 'wellness'
    sliderIndex: 0
  };

  // Referencias DOM
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileOverlay = document.querySelector('.mobile-drawer-overlay');
  const langBtns = document.querySelectorAll('.lang-btn');

  // Modales
  const bookingModal = document.getElementById('modal-booking');
  const serviceDetailModal = document.getElementById('modal-service-detail');
  const videoModal = document.getElementById('modal-video');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

  // Slider de Servicios
  const servicesTrack = document.getElementById('services-track');
  const sliderPrevBtn = document.getElementById('slider-prev');
  const sliderNextBtn = document.getElementById('slider-next');
  const sliderCounter = document.getElementById('slider-counter');
  const tabBtns = document.querySelectorAll('.tab-btn');

  // Datos detallados de servicios para el Modal
  const serviceDetailsData = {
    es: {
      facial: {
        title: "Refresh Facial Avanzado",
        desc: "Rejuvenece el rostro y el cuello reposicionando los tejidos que el envejecimiento fue bajando, logrando un aspecto fresco y completamente natural.",
        prep: "2 días de valoración y exámenes en Cartagena",
        surg: "Aprox. 2 horas",
        stay: "1 día de hospitalización / observación",
        city: "13 a 15 días en la ciudad para retiro de puntos y controles"
      },
      bariatric: {
        title: "Cirugía Bariátrica (Manga o Bypass)",
        desc: "Procedimiento laparoscópico mínimamente invasivo para reducción gástrica, remisión del síndrome metabólico y pérdida ponderal controlada.",
        prep: "2 días previos con dieta líquida y valoración multidisciplinar",
        surg: "Aprox. 2 horas",
        stay: "2 días de hospitalización clínica",
        city: "13 a 15 días en Cartagena con acompañamiento nutricional"
      },
      joints: {
        title: "Reemplazos Articulares (Cadera / Rodilla)",
        desc: "Sustitución protésica de alta precisión con tecnología biomédica avanzada para erradicar el dolor articular y recuperar la movilidad funcional.",
        prep: "3 días previos de estudios biomecánicos e imágenes",
        surg: "2.5 horas en quirófano",
        stay: "3 días de estancia hospitalaria",
        city: "14 a 18 días en Cartagena con fisioterapia inicial"
      },
      penile: {
        title: "Implante Peneano Hidráulico",
        desc: "Colocación de prótesis hidráulica de 3 componentes para el tratamiento definitivo de la disfunción eréctil orgánica severa.",
        prep: "2 días previos de exámenes prequirúrgicos",
        surg: "2 a 5 horas",
        stay: "1 día de hospitalización",
        city: "Mínimo 8 días en Cartagena para curaciones y seguimiento"
      },
      hotel: {
        title: "Estadía en Hotel Boutique de Recuperación",
        desc: "Habitaciones acondicionadas con camas clínicas confortables, aire purificado, gastronomía antiinflamatoria personalizada y enfermería disponible.",
        prep: "Coordinación previa de requerimientos de movilidad",
        surg: "N/A (Cuidado continuo)",
        stay: "Durante toda tu estadía postoperatoria",
        city: "Ubicado en el exclusivo sector de Bocagrande frente al mar"
      },
      lymph: {
        title: "Drenaje Linfático Manual y Fisioterapia",
        desc: "Terapia descongestiva suave realizada por kinesiólogos certificados para movilizar edemas, acelerar la adhesión tisular y prevenir fibrosis.",
        prep: "Inicia según indicación médica del cirujano (día 2 o 3)",
        surg: "45 a 60 minutos por sesión",
        stay: "Realizado en la tranquilidad de tu suite hotelera",
        city: "Paquetes de 5 a 10 sesiones durante tu estadía"
      },
      hyperbaric: {
        title: "Terapia de Cámara Hiperbárica",
        desc: "Inhalación de oxígeno medicinal puro al 100% bajo presión atmosférica aumentada para multiplicar la angiogénesis y reparar tejidos.",
        prep: "Evaluación médica de descompresión",
        surg: "Sesiones de 60 minutos",
        stay: "Ambulatorio con traslados privados",
        city: "Protocolos recomendados de 5 a 8 sesiones"
      },
      nutrition: {
        title: "Nutrición y Longevidad Metabólica",
        desc: "Diseño de regímenes nutricionales adaptados para optimizar la coagulación, evitar el estreñimiento postoperatorio y desinflamar el organismo.",
        prep: "Evaluación metabólica virtual antes del viaje",
        surg: "N/A",
        stay: "Menús coordinados directamente con el chef del hotel",
        city: "Acompañamiento presencial y soporte remoto"
      }
    },
    en: {
      facial: {
        title: "Advanced Facial Refresh",
        desc: "Restores facial and neck anatomy by gently repositioning deeper structural tissues for a remarkably rejuvenated and natural appearance.",
        prep: "2 pre-op days for lab panels & in-person surgical review",
        surg: "Approx. 2 hours",
        stay: "1 day clinical observation",
        city: "13 to 15 days in Cartagena for suture removal and check-ups"
      },
      bariatric: {
        title: "Bariatric Metabolic Surgery",
        desc: "Minimally invasive laparoscopic procedure designed for sustained weight reduction, diabetes remission, and overall health restoration.",
        prep: "2 pre-op days with liquid dietary protocol and evaluations",
        surg: "Approx. 2 hours",
        stay: "2 days hospital stay",
        city: "13 to 15 days in Cartagena with nutritional coordination"
      },
      joints: {
        title: "Joint Replacement Surgery",
        desc: "High-precision hip or knee arthroplasty using state-of-the-art prosthetic biomaterials to eradicate chronic joint pain.",
        prep: "3 pre-op days for specialized imaging and pre-clearance",
        surg: "Approx. 2.5 hours",
        stay: "3 days clinical hospital stay",
        city: "14 to 18 days in Cartagena with guided initial physical rehab"
      },
      penile: {
        title: "Penile Prosthesis Implant",
        desc: "Gold-standard implantation of 3-piece inflatable hydraulic prostheses for the definitive resolution of organic erectile dysfunction.",
        prep: "2 pre-op days for urological pre-surgical tests",
        surg: "2 to 5 hours",
        stay: "1 day clinical hospital stay",
        city: "Minimum 8 days in Cartagena for wound checks and follow-up"
      },
      hotel: {
        title: "Boutique Medical Recovery Hotel",
        desc: "Private oceanview suites tailored for surgical recovery, with anti-inflammatory meal service and on-call nursing support.",
        prep: "Pre-arranged mobility and dietary setup",
        surg: "N/A (Continuous companion care)",
        stay: "Full duration of your post-op recovery period",
        city: "Situated in prestigious Bocagrande directly facing the sea"
      },
      lymph: {
        title: "Manual Post-Op Lymphatic Drainage",
        desc: "Gentle specialized decongestive massage performed by licensed physiotherapists to ease swelling and prevent tissue fibrosis.",
        prep: "Initiated per surgeon's clearance (typically day 2 or 3)",
        surg: "45 to 60 minutes per session",
        stay: "Administered in the privacy of your hotel suite",
        city: "Packages of 5 to 10 sessions during your stay"
      },
      hyperbaric: {
        title: "Hyperbaric Oxygen Chamber Therapy",
        desc: "100% medical oxygen delivered under gentle barometric pressure to stimulate cellular angiogenesis and cut healing times in half.",
        prep: "Medical chamber pre-clearance",
        surg: "60-minute individual sessions",
        stay: "Outpatient session with private roundtrip transfers",
        city: "Customized protocols of 5 to 8 chamber sessions"
      },
      nutrition: {
        title: "Metabolic Nutrition & Longevity",
        desc: "Targeted clinical nutrition plans curated to accelerate wound recovery, optimize bowel mobility, and minimize systemic inflammation.",
        prep: "Virtual metabolic consultation prior to flight departure",
        surg: "N/A",
        stay: "Dietary protocols coordinated with recovery hotel culinary staff",
        city: "Daily check-ins during your stay and post-travel digital support"
      }
    }
  };

  /* ========================================================================
     1. INTERNACIONALIZACIÓN (ES / EN)
     ======================================================================== */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    state.currentLang = lang;
    localStorage.setItem('mcs_lang', lang);
    document.documentElement.lang = lang;

    // Actualizar botones de idioma en el header y cajón móvil
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Actualizar elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Actualizar placeholders
    const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderEls.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang][key] !== undefined) {
        el.setAttribute('placeholder', translations[lang][key]);
      }
    });

    // Actualizar título de la página
    if (lang === 'es') {
      document.title = "Más Conexión Salud · Cartagena | Cirugía y Recuperación Acompañada";
    } else {
      document.title = "Más Conexión Salud · Cartagena | Accompanied Surgery & Medical Travel";
    }

    // Actualizar textos dinámicos del slider si hay un modal abierto
    updateServiceDetailsIfOpen();
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
    });
  });

  // Inicializar idioma
  applyLanguage(state.currentLang);

  /* ========================================================================
     2. NAVBAR SCROLL & MENÚ RESPONSIVO
     ======================================================================== */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function toggleMobileMenu() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileToggle.classList.add('open');
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileToggle.classList.remove('open');
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
  }

  // Cerrar menú móvil al hacer clic en un enlace de navegación
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ========================================================================
     3. SLIDER DE SERVICIOS (QUIRÚRGICOS VS WELLNESS) Y AUTOPLAY
     ======================================================================== */
  let autoplayTimer = null;
  const AUTOPLAY_INTERVAL_MS = 3800; // 3.8 segundos por tarjeta

  function getVisibleCards() {
    return Array.from(servicesTrack.querySelectorAll(`.service-card[data-category="${state.activeServiceCategory}"]`));
  }

  function updateSliderPosition() {
    const visibleCards = getVisibleCards();
    const totalVisible = visibleCards.length;

    if (totalVisible === 0) return;

    // Validar límites
    if (state.sliderIndex >= totalVisible) {
      state.sliderIndex = Math.max(0, totalVisible - 1);
    }
    if (state.sliderIndex < 0) {
      state.sliderIndex = 0;
    }

    // Ocultar tarjetas que no pertenecen a la categoría actual
    const allCards = servicesTrack.querySelectorAll('.service-card');
    allCards.forEach(card => {
      if (card.dataset.category === state.activeServiceCategory) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    // Calcular desplazamiento
    const cardWidth = visibleCards[0].offsetWidth + 28; // ancho + gap
    servicesTrack.style.transform = `translateX(-${state.sliderIndex * cardWidth}px)`;

    // Actualizar contador
    const currentFormatted = String(state.sliderIndex + 1).padStart(2, '0');
    const totalFormatted = String(totalVisible).padStart(2, '0');
    if (sliderCounter) {
      sliderCounter.textContent = `${currentFormatted} / ${totalFormatted}`;
    }

    // Actualizar botones prev / next
    if (sliderPrevBtn) {
      sliderPrevBtn.disabled = state.sliderIndex === 0;
    }
    if (sliderNextBtn) {
      // Si en pantallas anchas se muestran varias tarjetas a la vez
      const viewportWidth = servicesTrack.parentElement.offsetWidth;
      const cardsInViewport = Math.floor(viewportWidth / cardWidth) || 1;
      const maxIndex = Math.max(0, totalVisible - cardsInViewport);
      sliderNextBtn.disabled = state.sliderIndex >= maxIndex;
    }
  }

  function startAutoplay() {
    stopAutoplay();
    // No iniciar si hay algún modal abierto o si la pestaña no es visible
    if (document.querySelector('.modal-backdrop.active')) return;

    autoplayTimer = setInterval(() => {
      const visibleCards = getVisibleCards();
      if (!visibleCards || visibleCards.length === 0) return;

      const cardWidth = visibleCards[0].offsetWidth + 28;
      const viewportWidth = servicesTrack.parentElement.offsetWidth;
      const cardsInViewport = Math.floor(viewportWidth / cardWidth) || 1;
      const maxIndex = Math.max(0, visibleCards.length - cardsInViewport);

      if (state.sliderIndex < maxIndex) {
        state.sliderIndex++;
      } else {
        state.sliderIndex = 0; // Regresar cíclicamente al inicio
      }
      updateSliderPosition();
    }, AUTOPLAY_INTERVAL_MS);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (sliderPrevBtn && sliderNextBtn) {
    sliderPrevBtn.addEventListener('click', () => {
      stopAutoplay();
      if (state.sliderIndex > 0) {
        state.sliderIndex--;
        updateSliderPosition();
      }
      startAutoplay();
    });

    sliderNextBtn.addEventListener('click', () => {
      stopAutoplay();
      const visibleCards = getVisibleCards();
      const cardWidth = visibleCards[0].offsetWidth + 28;
      const viewportWidth = servicesTrack.parentElement.offsetWidth;
      const cardsInViewport = Math.floor(viewportWidth / cardWidth) || 1;
      const maxIndex = Math.max(0, visibleCards.length - cardsInViewport);

      if (state.sliderIndex < maxIndex) {
        state.sliderIndex++;
      } else {
        state.sliderIndex = 0;
      }
      updateSliderPosition();
      startAutoplay();
    });
  }

  // Pausar con hover sobre el carrusel o controles
  const sliderViewport = servicesTrack.parentElement;
  if (sliderViewport) {
    sliderViewport.addEventListener('mouseenter', stopAutoplay);
    sliderViewport.addEventListener('mouseleave', () => {
      if (!document.querySelector('.modal-backdrop.active')) {
        startAutoplay();
      }
    });
  }

  const sliderControlsEl = document.querySelector('.slider-controls');
  if (sliderControlsEl) {
    sliderControlsEl.addEventListener('mouseenter', stopAutoplay);
    sliderControlsEl.addEventListener('mouseleave', () => {
      if (!document.querySelector('.modal-backdrop.active')) {
        startAutoplay();
      }
    });
  }

  // Pestañas Quirúrgicos / Wellness
  tabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      tabBtns.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeServiceCategory = tab.dataset.tab;
      state.sliderIndex = 0;
      updateSliderPosition();
      startAutoplay();
    });
  });

  // Clic en la tarjeta completa del servicio para abrir detalles y detener autoplay
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      stopAutoplay();
      const link = card.querySelector('.btn-detail-link');
      if (link && link.dataset.service) {
        showServiceDetail(link.dataset.service);
      }
    });
  });

  window.addEventListener('resize', () => {
    updateSliderPosition();
  });

  // Inicializar slider tras render y arrancar autoplay
  setTimeout(() => {
    updateSliderPosition();
    startAutoplay();
  }, 200);

  /* ========================================================================
     4. GESTIÓN DE MODALES (VALORACIÓN, DETALLES Y VIDEO)
     ======================================================================== */
  function openModal(modal) {
    if (!modal) return;
    stopAutoplay();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    startAutoplay();
  }

  // Cerrar modales con el botón X o clic fuera
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      closeModal(modal);
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  // Botones para abrir el modal de valoración
  document.querySelectorAll('.btn-open-booking').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
      openModal(bookingModal);
    });
  });

  // Botón para abrir el video de Teresa
  const videoPlayBtn = document.querySelector('.video-play-btn');
  const videoCardTrigger = document.querySelector('.video-thumb-container');
  if (videoPlayBtn && videoModal) {
    videoPlayBtn.addEventListener('click', () => openModal(videoModal));
  }
  if (videoCardTrigger && videoModal) {
    videoCardTrigger.addEventListener('click', () => openModal(videoModal));
  }

  // Modal Detalle de Servicios
  let currentDetailServiceKey = null;

  document.querySelectorAll('.btn-detail-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceKey = btn.dataset.service;
      showServiceDetail(serviceKey);
    });
  });

  function showServiceDetail(serviceKey) {
    currentDetailServiceKey = serviceKey;
    const lang = state.currentLang;
    const data = serviceDetailsData[lang][serviceKey];

    if (!data) return;

    document.getElementById('detail-modal-title').textContent = data.title;
    document.getElementById('detail-modal-desc').textContent = data.desc;
    document.getElementById('detail-val-prep').textContent = data.prep;
    document.getElementById('detail-val-surg').textContent = data.surg;
    document.getElementById('detail-val-stay').textContent = data.stay;
    document.getElementById('detail-val-city').textContent = data.city;

    openModal(serviceDetailModal);
  }

  function updateServiceDetailsIfOpen() {
    if (serviceDetailModal && serviceDetailModal.classList.contains('active') && currentDetailServiceKey) {
      showServiceDetail(currentDetailServiceKey);
    }
  }

  // Enlazar botón del modal de detalle con el modal de valoración
  const detailCtaBtn = document.getElementById('detail-modal-cta-btn');
  if (detailCtaBtn) {
    detailCtaBtn.addEventListener('click', () => {
      closeModal(serviceDetailModal);
      const serviceSelect = document.getElementById('field-service');
      if (serviceSelect && currentDetailServiceKey) {
        serviceSelect.value = currentDetailServiceKey;
      }
      setTimeout(() => {
        openModal(bookingModal);
      }, 200);
    });
  }

  /* ========================================================================
     5. ENVÍO DEL FORMULARIO DE VALORACIÓN & WHATSAPP
     ======================================================================== */
  const bookingForm = document.getElementById('booking-form');
  const formFeedback = document.getElementById('form-feedback');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('field-name').value;
      const phone = document.getElementById('field-phone').value;
      const service = document.getElementById('field-service').value;
      const country = document.getElementById('field-country').value;
      const notes = document.getElementById('field-notes').value;

      // Mostrar feedback amigable
      if (formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.textContent = translations[state.currentLang].form_success;
      }

      // Preparar enlace de WhatsApp para abrir de inmediato
      const textMsg = encodeURIComponent(
        `Hola Más Conexión Salud, mi nombre es ${name}. Me interesa información sobre ${service}. Mi país/ciudad es ${country}. Nota: ${notes}`
      );
      const whatsappUrl = `https://wa.me/573000000000?text=${textMsg}`;

      setTimeout(() => {
        // Opción de continuar en WhatsApp si el usuario lo desea
        const confirmMsg = state.currentLang === 'es' 
          ? "¿Deseas abrir WhatsApp para enviar este mensaje directamente a un coordinador?" 
          : "Would you like to open WhatsApp to send this message directly to a care coordinator?";
        if (confirm(confirmMsg)) {
          window.open(whatsappUrl, '_blank');
        }
        bookingForm.reset();
        setTimeout(() => {
          closeModal(bookingModal);
          if (formFeedback) formFeedback.style.display = 'none';
        }, 3000);
      }, 800);
    });
  }

  /* ========================================================================
     6. DESCARGA SIMULADA DE LA GUÍA MÉDICA
     ======================================================================== */
  const guideDownloadBtn = document.getElementById('btn-download-guide');
  if (guideDownloadBtn) {
    guideDownloadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = state.currentLang;
      const notice = lang === 'es'
        ? "Iniciando descarga: 'Guia-Operarse-En-Cartagena-MCS.pdf'. ¡Gracias por tu interés!"
        : "Starting download: 'Surgery-In-Cartagena-Patient-Guide-MCS.pdf'. Thank you for your interest!";
      alert(notice);
    });
  }

  /* ========================================================================
     7. PARALLAX SUTIL DE PROFUNDIDAD (solo transform · GPU)
     Los anclas visuales viajan un poco más lento que el scroll.
     ======================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const PARALLAX_TARGETS = [
    { selector: '.hero-image-card',       speed: 0.15, limit: 70 },
    { selector: '.video-thumb-container', speed: 0.10, limit: 60 },
    { selector: '.why-image-card',        speed: 0.12, limit: 70 },
    { selector: '.final-cta-bg-layer',    speed: 0.25, limit: 220 }
  ].map(({ selector, speed, limit }) => ({ el: document.querySelector(selector), speed, limit }));

  let parallaxItems = [];
  let parallaxTicking = false;

  function cacheParallaxPositions() {
    // Neutralizar transforms antes de medir posiciones reales (evita deriva acumulada)
    PARALLAX_TARGETS.forEach(({ el }) => { if (el) el.style.transform = ''; });

    parallaxItems = PARALLAX_TARGETS
      .filter(({ el }) => el !== null)
      .map(({ el, speed, limit }) => {
        const rect = el.getBoundingClientRect();
        return {
          el,
          speed,
          limit,
          centerDoc: rect.top + window.scrollY + rect.height / 2,
          margin: rect.height / 2 + window.innerHeight
        };
      });

    updateParallax();
  }

  function updateParallax() {
    parallaxTicking = false;
    const viewportCenter = window.scrollY + window.innerHeight / 2;

    parallaxItems.forEach(({ el, speed, limit, centerDoc, margin }) => {
      // Saltar elementos fuera del viewport (con margen)
      if (Math.abs(centerDoc - viewportCenter) > margin) return;

      // Lag real: el elemento se atrasa respecto al scroll (viaja más lento).
      // El clamp (limit) acota el recorrido máximo para no salirse de su sección.
      const raw = (viewportCenter - centerDoc) * speed;
      const delta = Math.max(-limit, Math.min(limit, raw));
      el.style.transform = `translate3d(0, ${delta.toFixed(2)}px, 0)`;
    });
  }

  if (!prefersReducedMotion) {
    window.addEventListener('scroll', () => {
      if (parallaxTicking) return;
      parallaxTicking = true;
      requestAnimationFrame(updateParallax);
    }, { passive: true });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(cacheParallaxPositions, 150);
    });

    // Re-cachear cuando termina la carga (fuentes/imágenes pueden desplazar el layout)
    window.addEventListener('load', cacheParallaxPositions);

    // Cache inicial tras el render del layout
    setTimeout(cacheParallaxPositions, 100);
  }

  /* ========================================================================
     8. BOTÓN FLOTANTE WHATSAPP
     Se muestra solo al hacer scroll
     ======================================================================== */
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) {
    const toggleWhatsapp = () => {
      if (window.scrollY > 10) {
        whatsappFloat.classList.add('visible');
      } else {
        whatsappFloat.classList.remove('visible');
      }
    };

    toggleWhatsapp();
    window.addEventListener('scroll', toggleWhatsapp, { passive: true });
  }
});
