// Diccionario de Traducciones Bilingüe (Español / Inglés) para Más Conexión Salud · Cartagena
const translations = {
  es: {
    // Navbar
    nav_brand: "MÁS CONEXIÓN SALUD",
    nav_city: "CARTAGENA",
    nav_home: "Inicio",
    nav_surgical: "Servicios Quirúrgicos",
    nav_wellness: "Servicios Wellness",
    nav_contact: "Contáctanos",
    nav_cta: "Agendar valoración gratuita",
    
    // Hero
    hero_eyebrow: "MÁS CONEXIÓN SALUD · CARTAGENA",
    hero_title: "Opérate en Cartagena con <span class=\"accent-underline\">alguien a tu lado</span> en cada paso",
    hero_subtitle: "Te guiamos paso a paso: valoración previa, cirujano y clínica de confianza, hotel de recuperación y acompañamiento real hasta tu último control.",
    hero_cta: "Agendar valoración gratuita",
    hero_cta_sub: "Valoración gratuita · Sin compromiso · Presupuesto claro desde el inicio",
    hero_badge_hotel: "Hotel de recuperación frente al mar",
    hero_badge_bilingual: "Atención 100% bilingüe y personalizada",
    
    // Trust Bar
    trust_1: "ACOMPAÑAMIENTO PRESENCIAL",
    trust_2: "ATENCIÓN PERSONALIZADA",
    trust_3: "VALORACIÓN SIN COSTO",
    trust_4: "SEGUIMIENTO AL VOLVER",

    // Section 03 - Questions
    q_title: "Las tres preguntas que te harás antes de viajar",
    q1_num: "1",
    q1_q: "¿Y si algo se complica y no conozco a nadie allí?",
    q1_a: "Tienes equipo médico en la ciudad y una persona de guardia que contesta el teléfono las 24 horas.",
    q2_num: "2",
    q2_q: "¿Quién me acompaña cuando salga del quirófano?",
    q2_a: "Alguien del equipo está contigo en la clínica y en el hotel desde que sales de recuperación.",
    q3_num: "3",
    q3_q: "¿Cómo organizo el viaje, los controles y la recuperación?",
    q3_a: "Organizamos hotel, controles y fechas, y te decimos cuándo viajar. Así compras tu tiquete con todo definido.",
    q_footer: "Nosotros nos encargamos de las tres",

    // Section 04 - How it works
    step_title: "Cómo es estar acompañado, paso por paso",
    step_subtitle: "Desde la primera llamada hasta el último control, hay alguien del equipo pendiente de ti.",
    step1_num: "01",
    step1_title: "Hablamos antes de que decidas",
    step1_desc: "Nos cuentas qué te pasa y qué te da miedo. Te decimos con franqueza si Cartagena es una buena opción para tu caso.",
    step2_num: "02",
    step2_title: "Recibes el plan por escrito",
    step2_desc: "Qué te van a hacer, quién lo hace, cuántas noches te quedas y qué cuesta. Todo antes de que reserves un vuelo.",
    step3_num: "03",
    step3_title: "Llegas y alguien te espera",
    step3_desc: "Te recibimos en el aeropuerto y te acompañamos a la clínica, al hotel y a los controles posteriores.",
    step4_num: "04",
    step4_title: "Vuelves con seguimiento",
    step4_desc: "Seguimos en contacto cuando vuelvas, para los controles y las dudas de la recuperación.",

    // Section 05 - Video Teresa
    video_title: "Te mostramos cómo es tu experiencia antes de que viajes",
    video_badge: "CONOCE NUESTRA METODOLOGÍA",
    video_quote: "“Acompañar a alguien lejos de su casa es un trabajo de todos los días.”",
    video_author: "TERESA, FUNDADORA",
    video_cta: "Ver mensaje de Teresa",

    // Section 06 - Included / Not Included
    inc_title: "Qué cubre el acompañamiento y qué no",
    inc_subtitle: "Preferimos decírtelo antes de que lo preguntes. Lo que no entra también aparece en esta lista.",
    inc_heading: "Incluye",
    inc_item_1: "Valoración médica inicial y lectura de tus exámenes",
    inc_item_2: "Cirujano, anestesiólogo y equipo quirúrgico certificado",
    inc_item_3: "Traslados en Cartagena: aeropuerto, clínica y hotel",
    inc_item_4: "Hotel y acompañamiento diario durante la recuperación",
    inc_item_5: "Controles postoperatorios y contacto con tu médico en tu país",
    not_inc_heading: "No incluye",
    not_inc_item_1: "Tiquetes aéreos y trámites de visa",
    not_inc_item_2: "Exámenes adicionales que no estén en el plan escrito",
    not_inc_item_3: "Tratamientos o complicaciones que aparezcan después de la cirugía",
    not_inc_item_4: "Gastos personales y acompañantes adicionales fuera del plan",

    // Section 07 - Services
    serv_title: "Servicios a tu disposición, con el tiempo que pide cada uno",
    serv_subtitle: "Cada servicio pide un tiempo distinto de preparación, de quirófano y de estadía. Abre el detalle de cada uno para ver los días que te toca apartar.",
    tab_surgical: "Servicios Quirúrgicos",
    tab_wellness: "Servicios Wellness & Recuperación",
    serv_btn_details: "Conocer detalles",

    // Surgical Services
    s_facial_title: "Refresh Facial Avanzado",
    s_facial_desc: "Rejuvenece el rostro y el cuello reposicionando los tejidos que el envejecimiento fue bajando con naturalidad.",
    s_facial_time: "2 días previos · 2 h cirugía · 1 día hospital · 13 a 15 días en Cartagena",

    s_bariatric_title: "Cirugía Bariátrica",
    s_bariatric_desc: "Reduce el tamaño del estómago o modifica el tránsito digestivo para bajar de peso, controlar diabetes y apnea del sueño.",
    s_bariatric_time: "2 días previos · 2 h cirugía · 2 días hospital · 13 a 15 días en Cartagena",

    s_joints_title: "Reemplazos Articulares",
    s_joints_desc: "Reemplazo de rodilla y cadera para eliminar el dolor crónico y devolver el movimiento activo con rehabilitación guiada.",
    s_joints_time: "3 días previos · 2.5 h cirugía · 3 días hospital · 14 a 18 días en Cartagena",

    s_penile_title: "Implante Peneano",
    s_penile_desc: "Solución definitiva para la disfunción eréctil severa mediante prótesis hidráulicas de última generación.",
    s_penile_time: "2 días previos · 2 a 5 h cirugía · 1 día hospital · mínimo 8 días en Cartagena",

    // Wellness Services
    s_hotel_title: "Estadía en Hotel Boutique de Recuperación",
    s_hotel_desc: "Habitaciones acondicionadas ergonómicamente para pacientes, dieta balanceada prescrita por nutricionista y atención de enfermería 24/7.",
    s_hotel_time: "Alojamiento con vista al mar · Enfermería de guardia · Asistencia de movilidad",

    s_lymph_title: "Drenaje Linfático Postquirúrgico",
    s_lymph_desc: "Sesiones especializadas con fisioterapeutas certificados para desinflamar, acelerar la cicatrización y evitar fibrosis.",
    s_lymph_time: "Paquetes de 5 a 10 sesiones en la comodidad de tu suite hotelera",

    s_hyperbaric_title: "Terapia de Cámara Hiperbárica",
    s_hyperbaric_desc: "Oxigenación celular profunda al 100% que triplica la regeneración de tejidos y optimiza la respuesta inmunológica.",
    s_hyperbaric_time: "Sesiones de 60 minutos · Equipos de estándar médico internacional",

    s_nutrition_title: "Nutrición y Longevidad Metabólica",
    s_nutrition_desc: "Planes nutricionales antiinflamatorios diseñados para tu perfil metabólico antes, durante y después del procedimiento.",
    s_nutrition_time: "Consulta personalizada · Menús curados para el hotel · Seguimiento digital",

    // Section 08 - Why Cartagena
    why_title: "Por qué hacerlo en Cartagena",
    why_subtitle: "Operarte lejos de casa no tiene que ser difícil. En Cartagena encuentras especialistas de confianza, un plan claro y un lugar cálido para recuperarte con calma.",
    why1_title: "Calidad médica de confianza",
    why1_desc: "Te atienden cirujanos y clínicas con trayectoria comprobada, y nosotros validamos tu caso antes de que viajes.",
    why2_title: "Recuperación en un destino que te hace bien",
    why2_desc: "Te recuperas en un hotel pensado para pacientes, en una ciudad cálida, segura para el visitante y llena de historia y brisa marina.",
    why3_title: "Todo coordinado y en tu idioma",
    why3_desc: "Te recibimos, te alojamos y estamos contigo en cada paso, para que tú solo pienses en recuperarte sin estrés logístico.",
    why4_title: "Sabes cuánto pagas antes de viajar",
    why4_desc: "Antes de comprar tu pasaje, recibes un plan con el costo del procedimiento, el hotel y la logística, sin cargos ocultos.",
    why_img_caption: "Paciente recuperándose viendo el atardecer sobre el centro histórico de Cartagena",
    why_cta: "Agendar valoración gratuita",

    // Section 09 - Team
    team_title: "Profesionales que acompañan tu proceso",
    team_subtitle: "Antes de decidir te damos su nombre, su especialidad y cómo te acompaña.",
    team1_name: "Dra. Clara Torres",
    team1_role: "Cirujana ortopédica",
    team1_desc: "Opera en Cartagena y realiza la consulta y valoración virtual contigo antes del viaje.",
    team2_name: "Dra. Inés",
    team2_role: "Anestesióloga",
    team2_desc: "Te explica a fondo el protocolo de anestesia antes de que firmes cualquier consentimiento.",
    team3_name: "Teresa Torres",
    team3_role: "Fundadora & Concierge Médica",
    team3_desc: "Está contigo presencialmente en la clínica y en los controles diarios en el hotel.",

    // Section 10 - Final CTA
    cta_box_title: "Cuéntanos tu caso y te decimos cómo podemos ayudarte",
    cta_box_subtitle: "Te contesta una persona del equipo médico. La primera conversación es sin costo ni compromiso.",
    cta_box_btn: "Agendar valoración gratuita",
    cta_box_footer: "Atención en tu idioma · Valoración sin costo · Respuesta en menos de 24h",

    // Section 11 - Download Guide
    guide_eyebrow: "GUÍA DESCARGABLE GRATUITA",
    guide_title: "Guía para operarte fuera de tu país",
    guide_desc: "Qué preguntar antes de decidir, cómo organizar el viaje y qué llevar en tu maleta médica. La escribimos con las dudas reales que nos llegan cada semana.",
    guide_btn: "Descargar guía gratuita (PDF)",
    guide_downloaded: "¡Guía lista para descarga!",

    // Footer
    foot_about: "Más Conexión Salud",
    foot_desc: "Cirugía y recuperación médica acompañada en Cartagena, Colombia. Calidad asistencial internacional con calidez humana.",
    foot_loc: "Bocagrande, Cartagena · Colombia",
    foot_col1_title: "NAVEGACIÓN",
    foot_nav_how: "Cómo funciona",
    foot_nav_serv: "Servicios",
    foot_nav_why: "Por qué Cartagena",
    foot_nav_team: "Equipo médico",
    foot_col2_title: "RECURSOS",
    foot_res_guide: "Guía descargable",
    foot_res_video: "Video de Teresa",
    foot_res_prep: "Qué traer y cómo viajar",
    foot_col3_title: "CONTACTO",
    foot_con_wa: "WhatsApp Directo",
    foot_con_mail: "contacto@masconexionsalud.com",
    foot_con_ig: "Instagram",
    foot_con_how: "Cómo llegar a Cartagena",
    foot_copy: "© 2026 Más Conexión Salud · Cartagena, Colombia",
    foot_legal1: "Aviso legal",
    foot_legal2: "Privacidad",
    foot_legal3: "Consentimiento informado",

    // Modals
    modal_val_title: "Solicitar Valoración Médica Gratuita",
    modal_val_sub: "Completa el formulario y un especialista de nuestro equipo se comunicará contigo confidencialmente.",
    form_name: "Nombre completo",
    form_phone: "WhatsApp con código de país (ej. +1 / +57)",
    form_email: "Correo electrónico",
    form_service: "¿Qué procedimiento o servicio te interesa?",
    form_select_opt: "Selecciona una opción...",
    form_country: "País y ciudad de residencia",
    form_notes: "Cuéntanos detalles de tu caso o dudas previas",
    form_submit: "Enviar y agendar valoración",
    form_success: "¡Mensaje recibido con éxito! Nos comunicaremos contigo en menos de 24 horas hábiles.",
    form_whatsapp_alt: "¿Prefieres escribirnos directamente?",
    form_whatsapp_btn: "Chatear por WhatsApp ahora",

    modal_detail_title: "Detalles del Procedimiento",
    modal_detail_prep: "Días previos:",
    modal_detail_surg: "Tiempo en quirófano:",
    modal_detail_stay: "Hospitalización:",
    modal_detail_city: "Estadía recomendada en Cartagena:",
    modal_detail_cta: "Solicitar cotización de este servicio",
    modal_close: "Cerrar"
  },

  en: {
    // Navbar
    nav_brand: "MÁS CONEXIÓN SALUD",
    nav_city: "CARTAGENA",
    nav_home: "Home",
    nav_surgical: "Surgical Services",
    nav_wellness: "Wellness Services",
    nav_contact: "Contact Us",
    nav_cta: "Book Free Consultation",

    // Hero
    hero_eyebrow: "MÁS CONEXIÓN SALUD · CARTAGENA",
    hero_title: "Undergo surgery in Cartagena with <span class=\"accent-underline\">someone by your side</span> every step of the way",
    hero_subtitle: "We guide you step by step: pre-travel clinical evaluation, trusted surgeon and accredited clinic, boutique recovery hotel, and continuous companion care until your final post-op clearance.",
    hero_cta: "Book free consultation",
    hero_cta_sub: "Free consultation · No commitment · Clear itemized pricing from day one",
    hero_badge_hotel: "Oceanfront medical recovery hotel",
    hero_badge_bilingual: "100% bilingual & personalized care",

    // Trust Bar
    trust_1: "IN-PERSON COMPANION CARE",
    trust_2: "TAILORED ATTENTION",
    trust_3: "NO-COST CLINICAL EVALUATION",
    trust_4: "POST-TRAVEL CONTINUOUS FOLLOW-UP",

    // Section 03 - Questions
    q_title: "The three questions you will ask yourself before traveling",
    q1_num: "1",
    q1_q: "What if complications arise and I don't know anyone there?",
    q1_a: "You have a dedicated medical team in Cartagena and an on-call care coordinator answering 24/7.",
    q2_num: "2",
    q2_q: "Who is with me once I leave the operating room?",
    q2_a: "A member of our team is by your bedside at the clinic and in your hotel suite from the moment you exit recovery.",
    q3_num: "3",
    q3_q: "How do I organize travel, check-ups, and recovery time?",
    q3_a: "We coordinate your hotel stay, clinical check-ups, and precise dates before you fly. You purchase your plane tickets with total clarity.",
    q_footer: "We take care of all three for you",

    // Section 04 - How it works
    step_title: "What it looks like to be truly accompanied, step by step",
    step_subtitle: "From your initial call to your final clearance, a dedicated team member is looking after you.",
    step1_num: "01",
    step1_title: "We speak before you commit",
    step1_desc: "You share your medical goals and anxieties. We tell you honestly whether Cartagena is the right destination for your case.",
    step2_num: "02",
    step2_title: "You receive your written care plan",
    step2_desc: "Exact procedure details, credentialed surgical team, recovery hotel nights, and all-inclusive pricing. All before booking flights.",
    step3_num: "03",
    step3_title: "You land and a friendly face is waiting",
    step3_desc: "We greet you at the airport gate and escort you to your hotel, the surgical facility, and all follow-up appointments.",
    step4_num: "04",
    step4_title: "You return home with ongoing support",
    step4_desc: "We stay in close touch once you are back home to oversee your milestones and coordinate with your primary doctor.",

    // Section 05 - Video Teresa
    video_title: "Discover your patient journey before you travel",
    video_badge: "OUR METHODOLOGY",
    video_quote: "“Accompanying someone far away from their home is a daily commitment of care and empathy.”",
    video_author: "TERESA, FOUNDER",
    video_cta: "Watch Teresa's message",

    // Section 06 - Included / Not Included
    inc_title: "What is included in your care and what is not",
    inc_subtitle: "We believe in radical transparency. What is not covered is clearly listed up front.",
    inc_heading: "What is Included",
    inc_item_1: "Initial virtual medical evaluation and specialist review of exams",
    inc_item_2: "Board-certified surgeon, anesthesiologist, and surgical facility fees",
    inc_item_3: "Private ground transportation in Cartagena: airport, clinic, and hotel",
    inc_item_4: "Recovery hotel accommodation and daily in-person patient coordination",
    inc_item_5: "Post-op follow-ups and continuity of care communication with your home doctor",
    not_inc_heading: "What is Not Included",
    not_inc_item_1: "International airline tickets and visa application fees",
    not_inc_item_2: "Elective laboratory tests not pre-specified in the written plan",
    not_inc_item_3: "Unforeseen secondary medical treatments unrelated to surgery",
    not_inc_item_4: "Personal shopping expenses and additional travel companions' meals",

    // Section 07 - Services
    serv_title: "Available services, with the exact timeline required for each",
    serv_subtitle: "Every procedure requires a dedicated schedule for pre-op testing, surgery, and restful recovery. Open each card to plan your travel calendar.",
    tab_surgical: "Surgical Procedures",
    tab_wellness: "Wellness & Recovery Services",
    serv_btn_details: "View Details & Timeline",

    // Surgical Services
    s_facial_title: "Advanced Facial Refresh",
    s_facial_desc: "Restores facial and neck contours by gently repositioning deeper tissues for an elegant, natural outcome.",
    s_facial_time: "2 pre-op days · 2 hrs surgery · 1 hospital night · 13 to 15 days in Cartagena",

    s_bariatric_title: "Bariatric Metabolic Surgery",
    s_bariatric_desc: "Sleeve gastrectomy or gastric bypass to achieve lasting weight loss, improve diabetes, and eliminate sleep apnea.",
    s_bariatric_time: "2 pre-op days · 2 hrs surgery · 2 hospital nights · 13 to 15 days in Cartagena",

    s_joints_title: "Joint Replacement Surgery",
    s_joints_desc: "Precision knee and hip replacement designed to eliminate chronic joint pain and restore mobility with guided physical rehab.",
    s_joints_time: "3 pre-op days · 2.5 hrs surgery · 3 hospital nights · 14 to 18 days in Cartagena",

    s_penile_title: "Penile Prosthesis Implant",
    s_penile_desc: "Gold-standard definitive treatment for severe erectile dysfunction using modern inflatable multicomponent implants.",
    s_penile_time: "2 pre-op days · 2 to 5 hrs surgery · 1 hospital night · minimum 8 days in Cartagena",

    // Wellness Services
    s_hotel_title: "Boutique Medical Recovery Hotel",
    s_hotel_desc: "Ergonomically equipped private suites for surgical patients, chef-curated anti-inflammatory dining, and 24/7 nursing assistance.",
    s_hotel_time: "Oceanview suites · On-duty nursing · Mobility and care assistance",

    s_lymph_title: "Post-Surgical Lymphatic Drainage",
    s_lymph_desc: "Specialized manual therapy by certified physiotherapists to reduce swelling, stimulate circulation, and prevent fibrosis.",
    s_lymph_time: "Packages of 5 to 10 clinical sessions in the comfort of your suite",

    s_hyperbaric_title: "Hyperbaric Oxygen Therapy",
    s_hyperbaric_desc: "High-concentration 100% medical oxygen chambers to accelerate tissue regeneration and boost natural immunity.",
    s_hyperbaric_time: "60-minute sessions · International hospital-grade medical chambers",

    s_nutrition_title: "Metabolic Nutrition & Longevity",
    s_nutrition_desc: "Personalized anti-inflammatory meal protocols crafted for your specific surgical recovery and long-term vitality.",
    s_nutrition_time: "Personal consultation · Tailored hotel menus · Ongoing digital check-ins",

    // Section 08 - Why Cartagena
    why_title: "Why undergo surgery in Cartagena",
    why_subtitle: "Having medical treatment abroad doesn't have to feel daunting. In Cartagena you will find premier surgeons, total logistical clarity, and a warm Caribbean setting to recuperate peacefully.",
    why1_title: "Trustworthy medical excellence",
    why1_desc: "You are treated by accredited surgeons in certified hospital facilities, with pre-travel clinical case validation.",
    why2_title: "Recovery in a healing destination",
    why2_desc: "Heal in a serene oceanfront hotel tailored for recovery, in a safe, warm city steeped in history, music, and Caribbean breezes.",
    why3_title: "Seamless coordination in your language",
    why3_desc: "We pick you up, host you, and remain alongside you at every juncture, so your sole focus is healing without logistical worry.",
    why4_title: "Transparent upfront pricing",
    why4_desc: "Before purchasing plane tickets, you receive an itemized proposal covering clinical fees, hotel, and private transfers—no surprise costs.",
    why_img_caption: "Patient resting on the balcony watching the sunset over Cartagena's historic skyline",
    why_cta: "Book free consultation",

    // Section 09 - Team
    team_title: "The care professionals guiding your journey",
    team_subtitle: "Before deciding, you know their credentials, specialties, and exact role in your care.",
    team1_name: "Dr. Clara Torres",
    team1_role: "Orthopedic & Joint Surgeon",
    team1_desc: "Performs complex joint surgeries in Cartagena and conducts your comprehensive virtual evaluation before departure.",
    team2_name: "Dr. Inés",
    team2_role: "Lead Anesthesiologist",
    team2_desc: "Explains anesthesia safety protocols and sedation procedures prior to signing any medical consent forms.",
    team3_name: "Teresa Torres",
    team3_role: "Founder & Medical Concierge",
    team3_desc: "Provides in-person companionship at the hospital, during transfers, and oversees daily recovery check-ins at your hotel.",

    // Section 10 - Final CTA
    cta_box_title: "Share your case with us and let us show you how we can help",
    cta_box_subtitle: "You will speak directly with our clinical coordination team. Your initial consultation is completely free of charge.",
    cta_box_btn: "Book free consultation",
    cta_box_footer: "Bilingual care · Free consultation · Response within 24 business hours",

    // Section 11 - Download Guide
    guide_eyebrow: "FREE PATIENT DOWNLOADABLE GUIDE",
    guide_title: "Essential Guide to Surgery Abroad",
    guide_desc: "Crucial questions to ask surgeons, packing checklist for international recovery, and timeline tips. Written straight from real patient experiences.",
    guide_btn: "Download Free Guide (PDF)",
    guide_downloaded: "Guide downloaded successfully!",

    // Footer
    foot_about: "Más Conexión Salud",
    foot_desc: "Surgical travel and compassionate recovery concierge in Cartagena, Colombia. Global healthcare standards paired with genuine Caribbean warmth.",
    foot_loc: "Bocagrande, Cartagena · Colombia",
    foot_col1_title: "NAVIGATION",
    foot_nav_how: "How it works",
    foot_nav_serv: "Services",
    foot_nav_why: "Why Cartagena",
    foot_nav_team: "Medical team",
    foot_col2_title: "RESOURCES",
    foot_res_guide: "Downloadable guide",
    foot_res_video: "Teresa's video",
    foot_res_prep: "What to pack and travel tips",
    foot_col3_title: "CONTACT",
    foot_con_wa: "Direct WhatsApp",
    foot_con_mail: "contacto@masconexionsalud.com",
    foot_con_ig: "Instagram",
    foot_con_how: "Traveling to Cartagena",
    foot_copy: "© 2026 Más Conexión Salud · Cartagena, Colombia",
    foot_legal1: "Legal notice",
    foot_legal2: "Privacy policy",
    foot_legal3: "Informed consent",

    // Modals
    modal_val_title: "Request Your Free Medical Evaluation",
    modal_val_sub: "Fill out the short form below and a clinical coordinator will reach out to you discreetly.",
    form_name: "Full name",
    form_phone: "WhatsApp number with country code (e.g. +1 / +57)",
    form_email: "Email address",
    form_service: "Which procedure or service are you interested in?",
    form_select_opt: "Select an option...",
    form_country: "Country and city of residence",
    form_notes: "Tell us a bit about your case or any pre-existing concerns",
    form_submit: "Submit & Schedule Consultation",
    form_success: "Thank you! We have received your request and will contact you within 24 business hours.",
    form_whatsapp_alt: "Prefer to message us immediately?",
    form_whatsapp_btn: "Chat via WhatsApp now",

    modal_detail_title: "Procedure Timeline & Overview",
    modal_detail_prep: "Pre-op prep days:",
    modal_detail_surg: "Operating time:",
    modal_detail_stay: "Hospital stay:",
    modal_detail_city: "Recommended stay in Cartagena:",
    modal_detail_cta: "Request a personalized quote for this procedure",
    modal_close: "Close"
  }
};
