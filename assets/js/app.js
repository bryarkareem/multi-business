/**
 * Multi Business for Training and Consultancy
 * Light Theme + Original Layout + Bilingual (EN / KU) + Dynamic Admin CMS Store
 */

const STORAGE_KEY = "mb_cms_data_v1";

const DEFAULT_CMS_DATA = {
  settings: {
    address_en: "32 Park Street, Opposite to Empire, Erbil",
    address_ku: "شەقامی ٣٢ پارک، بەرامبەر ئێمپایەر، هەولێر",
    phone1: "+964 750 699 5950",
    phone2: "+964 750 277 3575",
    email: "info@multibusiness.krd",
    youtubeUrl: "https://www.youtube.com/embed/1IyXhEO8Oo0",
    instagram: "https://www.instagram.com/multi.business.consultancy/",
    whatsapp: "https://wa.me/9647506995950",
    facebook: "https://www.facebook.com/Multi.Business.Consultancy/"
  },
  slides: [
    {
      id: "slide-1",
      title_en: "Multi Business",
      title_ku: "مەڵتی بزنس (Multi Business)",
      subtitle_en: "For Training and Consulting",
      subtitle_ku: "بۆ ڕاهێنان و ڕاوێژکاری",
      btn_en: "Contact Us",
      btn_ku: "پەیوەندیمان پێوە بکە",
      link: "contact.html",
      image: "assets/images/slide-handshake.jpg"
    },
    {
      id: "slide-2",
      title_en: "Brian Tracy",
      title_ku: "بڕایان ترەیسی (Brian Tracy)",
      subtitle_en: "Meet our programs",
      subtitle_ku: "پڕۆگرامە جیهانییەکانمان بناسە",
      btn_en: "Programs",
      btn_ku: "پڕۆگرامەکان",
      link: "brian-tracy.html#programs",
      image: "assets/images/slide-business-bg.jpg"
    },
    {
      id: "slide-3",
      title_en: "Meet our Services",
      title_ku: "خزمەتگوزارییەکانمان بناسە",
      subtitle_en: "Comprehensive Training & Strategic Consulting in Erbil",
      subtitle_ku: "ڕاهێنانی گشتگیر و ڕاوێژکاری ستراتیژی لە هەولێر",
      btn_en: "Read More",
      btn_ku: "زیاتر بخوێنەوە",
      link: "services.html",
      image: "assets/images/slide-discussion.jpg"
    }
  ],
  activities: [
    {
      id: "act-1",
      title_en: "Sales Private Training",
      title_ku: "ڕاهێنانی تایبەتی فرۆشتن",
      desc_en: "Holding a private sales training for a local company.",
      desc_ku: "ئەنجامدانی خولی ڕاهێنانی تایبەتی فرۆشتن بۆ کۆمپانیایەکی ناوخۆیی.",
      category_en: "Corporate Training",
      category_ku: "ڕاهێنانی کۆمپانیاکان",
      date: "2024-08",
      image: "assets/images/private-training.jpg"
    },
    {
      id: "act-2",
      title_en: "Business Package Training",
      title_ku: "پاکێجی ڕاهێنانی بازرگانی",
      desc_en: "24 hours business training for a group of business owners in Erbil.",
      desc_ku: "٢٤ کاتژمێر ڕاهێنانی بازرگانی بۆ گروپێک لە خاوەنکارانی شاری هەولێر.",
      category_en: "Business Package",
      category_ku: "پاکێجی بازرگانی",
      date: "2024-08",
      image: "assets/images/business-package.jpg"
    },
    {
      id: "act-3",
      title_en: "HRM Training",
      title_ku: "ڕاهێنانی سەرچاوە مرۆییەکان (HRM)",
      desc_en: "3 days HRM training for a group of administrative staff and human resources employees.",
      desc_ku: "٣ ڕۆژ ڕاهێنانی بەڕێوەبردنی سەرچاوە مرۆییەکان بۆ ستافی کارگێڕی و فەرمانبەرانی HR.",
      category_en: "HRM Workshop",
      category_ku: "سەرچاوە مرۆییەکان",
      date: "2024-08",
      image: "assets/images/hrm-training.png"
    }
  ],
  programs: [
    {
      id: "bts-1",
      category: "bts",
      title_en: "EXECUTIVE DEVELOPMENT",
      title_ku: "پەرەپێدانی بەڕێوەبەران (Executive Development)",
      desc_en: "Master the skills you need to move into the top 10% of achievers in your field.",
      desc_ku: "فێربوونی ئەو کارامەییانەی پێویستن بۆ چوونە ناو ١٠٪ی سەرکەوتووترین کەسەکان لە بوارەکەتدا.",
      image: "assets/images/exec-dev.jpg"
    },
    {
      id: "bts-2",
      category: "bts",
      title_en: "PERFORM AT YOUR BEST",
      title_ku: "باشترین ئاستی خۆت پێشکەش بکە",
      desc_en: "Why are some people more successful than others? Find out with our most popular program.",
      desc_ku: "بۆچی هەندێک کەس لەوانی تر سەرکەوتووترن؟ لە ڕێگەی بەناوبانگترین پڕۆگراممانەوە بیدۆزەرەوە.",
      image: "assets/images/perform-best.jpg"
    },
    {
      id: "bts-3",
      category: "bts",
      title_en: "SUPERIOR SELLING SKILLS",
      title_ku: "کارامەییە باڵاکانی فرۆشتن",
      desc_en: "A company’s survival is dependent on sales. Create a winning sales team and lead the market.",
      desc_ku: "مانەوەی کۆمپانیا پەیوەستە بە فرۆشتنەوە. تیمێکی براوەی فرۆشتن دروست بکە و پێشەنگی بازاڕ بە.",
      image: "assets/images/superior-selling.jpg"
    },
    {
      id: "bts-4",
      category: "bts",
      title_en: "WIN RESALES AND REFERRALS",
      title_ku: "بەدەستهێنانی دووبارە فرۆشتنەوە و پێشنیارکردن",
      desc_en: "Build relationships that lead to repeat sales and long-term customers. Advance your skills.",
      desc_ku: "پەیوەندییەکی بەهێز دروست بکە کە ببێتە هۆی دووبارە کڕینەوە و کڕیاری درێژخایەن.",
      image: "assets/images/win-resales.jpg"
    },
    {
      id: "bts-5",
      category: "bts",
      title_en: "HIGH PERFORMANCE LEADERSHIP",
      title_ku: "سەرکردایەتی ئاست بەرز",
      desc_en: "Learn the ideas, strategies, and techniques used by all highly-effective managers and leaders.",
      desc_ku: "فێری ئەو بیرۆکە، ستراتیژی و تەکنیکانە ببە کە لەلایەن سەرکردە و بەڕێوەبەرە کاراکانەوە بەکاردەهێنرێن.",
      image: "assets/images/leadership.jpg"
    },
    {
      id: "bts-6",
      category: "bts",
      title_en: "MANAGE YOUR TIME",
      title_ku: "بەڕێوەبردنی کات",
      desc_en: "Understand the psychology of time management, alleviate constraints, and achieve more faster!",
      desc_ku: "لە دەروونناسی بەڕێوەبردنی کات تێبگە، بەربەستەکان کەم بکەرەوە و لە کاتێکی کەمتردا زیاتر بەدەست بهێنە!",
      image: "assets/images/manage-time.jpg"
    },
    {
      id: "bts-7",
      category: "bts",
      title_en: "FAST TRACK TO SUCCESS",
      title_ku: "ڕێگای خێرا بەرەو سەرکەوتن",
      desc_en: "Discover the ‘best of the best’ of peak performance, sales strategy, and leadership principles.",
      desc_ku: "باشترین بنەماکانی ئەدای بەرز، ستراتیژی فرۆشتن و سەرکردایەتی بدۆزەرەوە.",
      image: "assets/images/fast-track.jpg"
    },
    {
      id: "bts-8",
      category: "bts",
      title_en: "ACCELERATED PROGRAMS",
      title_ku: "پڕۆگرامە خێراکان (Accelerated)",
      desc_en: "These dynamic workshops focus on the vital essentials for managers and sales teams.",
      desc_ku: "ئەم وۆرکشۆپە چالاکانە تیشک دەخەنە سەر پێداویستییە گرنگەکان بۆ بەڕێوەبەران و تیمەکانی فرۆشتن.",
      image: "assets/images/accelerated.jpg"
    }
  ]
};

const STATIC_I18N = {
  en: {
    dir: "ltr",
    nav_home: "Home",
    nav_bts: "Brian Tracy ▾",
    nav_about_bts: "About BTS",
    nav_bts_programs: "Programs",
    nav_services: "Services",
    nav_trainings: "Trainings",
    nav_about: "About",
    nav_contact: "Contact",
    nav_admin: "Admin Panel",
    care_heading: "We care about your business",
    blurb1_title: "Invest in Yourself",
    blurb1_desc: "The more you learn, the more you earn.",
    blurb2_title: "Mindset",
    blurb2_desc: "Change yourself, change the world.",
    blurb3_title: "Take Action",
    blurb3_desc: "Practice and taking action make you perfect.",
    quote_text: '"Successful people are always looking for opportunities to help others."',
    quote_author: "– Brian Tracy –",
    activities_heading: "Activities & News",
    activities_sub: "Our latest trainings, workshops, and corporate events in Erbil.",
    run_day_text: "Either you run the day or the day runs you...",
    footer_visit: "Visit Us",
    footer_call: "Call Us",
    footer_email: "Email Us",
    footer_copy: "© Multi Business for Training and Consultancy",
    /* Subpages */
    services_title: "Our Services",
    services_sub: "At Multi Business Company, we are dedicated to empowering our clients through high-quality training and consulting services.",
    srv_training_title: "Training",
    srv_training_desc: "We provide comprehensive training courses tailored to various industries, with a specialization in real estate, marketing and Sales. Our programs cover property management, real estate development, investment analysis, marketing strategies, and legal frameworks.",
    srv_consulting_title: "Consulting",
    srv_consulting_desc: "Our consulting services offer expert guidance and strategic support for individuals and organizations. With a focus on real estate, we provide custom solutions including strategic planning, market research, feasibility studies, investment portfolio analysis, and property acquisitions.",
    plans_heading: "Our Business Plans",
    plan1_title: "Plan 1: Training Programs",
    plan1_desc: "We develop customized training programs that cater to the specific needs of our clients. Our courses cover sales and customer service training, digital marketing strategies, brand management, and communication skills.",
    plan2_title: "Plan 2: Marketing Strategy Consulting",
    plan2_desc: "We provide strategic marketing consulting services to assist companies in developing effective marketing strategies, conducting market research, competitor analysis, and target audience profiling.",
    plan3_title: "Plan 3: Long-Term Partnerships",
    plan3_desc: "We aim to build long-term partnerships with our clients, providing continuous support, refresher training sessions, updates on industry trends, and evolving marketing strategies.",
    trainings_title: "Trainings",
    trainings_sub: "Explore our specialized corporate training tracks and professional courses.",
    tr_1: "Marketing",
    tr_2: "Sales",
    tr_3: "Customer Service",
    tr_4: "Finance Management",
    tr_5: "Leadership Training",
    about_title: "About Us",
    about_welcome: "Welcome to Multi Business!",
    about_body: "We are thrilled to have you here and introduce you to our comprehensive training courses and consulting services. Whether you are an individual looking to enhance your skills or an organization seeking expert guidance, we are dedicated to helping you achieve your goals. Our team of experienced instructors and consultants brings a wealth of expertise, particularly in the real estate industry.",
    mission_title: "Our Mission",
    mission_desc: "Our mission is to empower individuals and organizations through comprehensive training and consulting services, enabling them to thrive in the dynamic business environment.",
    vision_title: "Our Vision",
    vision_desc: "Our vision is to be a trusted partner for training and consulting services, renowned for our industry expertise and commitment to excellence.",
    contact_title: "Contact Us",
    contact_sub: "Reach out to our team in Erbil for training inquiries and consulting appointments.",
    bts_hero_title: "Turn Your Entire Company into a Dream Team",
    bts_hero_sub: "Exclusive Training in Leadership, Sales and Team Building. With smart learning, we help companies maintain a competitive advantage through clarity and strategic alignment.",
    bts_explore_btn: "Explore BTS Programs",
    bts_pdf_btn: "📄 Download Program Index (PDF)",
    bts_way_title: "Give Brian Tracy Solutions 3 Months, and You Won’t Recognise Your Team",
    bts_way_sub: "If your staff isn’t looking forward to going to work, it is because of one factor: Disharmony. Clean this up, and motivation takes care of itself.",
    bts_w1_title: "Employee Profile Assessments",
    bts_w1_desc: "We make sure you have the right people in their right roles and responsibilities using expert hiring and performance appraisal tools.",
    bts_w2_title: "Communication Training",
    bts_w2_desc: "Engaging training for executives, managers, and frontline staff on how to communicate seamlessly, quickly, and effectively.",
    bts_w3_title: "Motivation Enhancement",
    bts_w3_desc: "What employees want more than money is purpose + appreciation. We show you how to make each one feel valued and dedicated.",
    bts_w4_title: "Ready-to-Go Training",
    bts_w4_desc: "Online training, workbooks, and structured in-person programs to bring your staff to top morale and productivity right away.",
    bts_programs_heading: "Brian Tracy Programs",
    bts_programs_sub: "Discover our 8 signature Brian Tracy programs delivered by Multi Business in Erbil.",
    bts_trusted_heading: "Trusted Worldwide"
  },
  ku: {
    dir: "rtl",
    nav_home: "سەرەکی",
    nav_bts: "بڕایان ترەیسی ▾",
    nav_about_bts: "دەربارەی BTS",
    nav_bts_programs: "پڕۆگرامەکان",
    nav_services: "خزمەتگوزارییەکان",
    nav_trainings: "ڕاهێنانەکان",
    nav_about: "دەربارەی ئێمە",
    nav_contact: "پەیوەندی",
    nav_admin: "پانێڵی ئەدمین",
    care_heading: "ئێمە گرنگی بە کار و بازرگانییەکەت دەدەین",
    blurb1_title: "وەبەرهێنان لە خۆتدا بکە",
    blurb1_desc: "چەندە زیاتر فێربیت، هێندە زیاتر بەدەست دەهێنیت.",
    blurb2_title: "بیرکردنەوە (Mindset)",
    blurb2_desc: "خۆت بگۆڕە، جیهان دەگۆڕیت.",
    blurb3_title: "هەنگاوی کرداری بنێ",
    blurb3_desc: "ئەزموون و کارکردن دەتگەیەنێتە لووتکەی تەواوەتی.",
    quote_text: '"کەسانی سەرکەوتوو هەمیشە بەدوای دەرفەتدا دەگەڕێن بۆ یارمەتیدانی ئەوانی تر."',
    quote_author: "– بڕایان ترەیسی –",
    activities_heading: "چالاکییەکان و هەواڵەکان",
    activities_sub: "نوێترین خولەکانی ڕاهێنان، وۆرکشۆپ و چالاکییەکانمان لە هەولێر.",
    run_day_text: "یا تۆ ڕۆژەکەت بەڕێوە دەبەیت، یان ڕۆژەکەت تۆ بەڕێوە دەبات...",
    footer_visit: "سەردانمان بکەن",
    footer_call: "پەیوەندیمان پێوە بکەن",
    footer_email: "ئیمەیڵمان بۆ بنێرن",
    footer_copy: "© مەڵتی بزنس بۆ ڕاهێنان و ڕاوێژکاری",
    /* Subpages */
    services_title: "خزمەتگوزارییەکانمان",
    services_sub: "لە کۆمپانیای مەڵتی بزنس، ئێمە پابەندین بە بەهێزکردنی کڕیارەکانمان لە ڕێگەی خزمەتگوزاری ڕاهێنان و ڕاوێژکاری ئاست بەرز.",
    srv_training_title: "ڕاهێنان (Training)",
    srv_training_desc: "ئێمە خولی ڕاهێنانی گشتگیر پێشکەش دەکەین کە تایبەتمەندە بە کەرتە جیاوازەکان، بەتایبەتی لە بواری خانووبەرە، بازاڕگەری و فرۆشتن. پڕۆگرامەکانمان بەڕێوەبردنی موڵک، پەرەپێدانی خانووبەرە، شیکردنەوەی وەبەرهێنان و ستراتیژی بازاڕگەری دەگرێتەوە.",
    srv_consulting_title: "ڕاوێژکاری (Consulting)",
    srv_consulting_desc: "خزمەتگوزارییە ڕاوێژکارییەکانمان ڕێنمایی پسپۆڕانە و پاڵپشتی ستراتیژی پێشکەش بە تاک و دامەزراوەکان دەکات، بە جەختکردنەوە لەسەر کەرتی خانووبەرە، توێژینەوەی بازاڕ و دراسەی جەدوا.",
    plans_heading: "پلانە بازرگانییەکانمان",
    plan1_title: "پلانی ١: پڕۆگرامەکانی ڕاهێنان",
    plan1_desc: "ئێمە پڕۆگرامی ڕاهێنانی تایبەتمەند دادەڕێژین کە لەگەڵ پێداویستییەکانی کڕیارەکانمان دەگونجێت لە بوارەکانی فرۆشتن، خزمەتگوزاری کڕیاران، بازاڕگەری دیجیتاڵی و کارامەییەکانی پەیوەندیکردن.",
    plan2_title: "پلانی ٢: ڕاوێژکاری ستراتیژی بازاڕگەری",
    plan2_desc: "پێشکەشکردنی ڕاوێژکاری ستراتیژی بازاڕگەری بۆ یارمەتیدانی کۆمپانیاکان لە ئەنجامدانی توێژینەوەی بازاڕ، شیکردنەوەی رکابەرەکان و دیاریکردنی جەماوەری ئامانج.",
    plan3_title: "پلانی ٣: هاوبەشی درێژخایەن",
    plan3_desc: "ئامانجمان بنیاتنانی هاوبەشییەکی درێژخایەنە لەگەڵ کڕیارەکانمان بۆ دابینکردنی پاڵپشتی بەردەوام و نوێکردنەوەی ستراتیژییەکانی گەشەکردن.",
    trainings_title: "خولەکانی ڕاهێنان",
    trainings_sub: "بوارە تایبەتمەندەکانی ڕاهێنانی کۆمپانیاکان و خولە پیشەییەکانمان بناسە.",
    tr_1: "بازاڕگەری (Marketing)",
    tr_2: "فرۆشتن (Sales)",
    tr_3: "خزمەتگوزاری کڕیاران",
    tr_4: "بەڕێوەبردنی دارایی",
    tr_5: "ڕاهێنانی سەرکردایەتی",
    about_title: "دەربارەی ئێمە",
    about_welcome: "بەخێربێن بۆ کۆمپانیای مەڵتی بزنس!",
    about_body: "خۆشحاڵین بە ناساندنی خولە گشتگیرەکانی ڕاهێنان و خزمەتگوزارییە ڕاوێژکارییەکانمان. چ وەک تاکێک کە دەتەوێت تواناکانت پەرەپێبدەیت یان وەک کۆمپانیایەک کە بەدوای ڕێنمایی پسپۆڕانەدا دەگەڕێیت، ئێمە لێرەین بۆ گەیشتن بە ئامانجەکانت.",
    mission_title: "پەیامی ئێمە (Mission)",
    mission_desc: "پەیامی ئێمە بەهێزکردنی تاک و دامەزراوەکانە لە ڕێگەی ڕاهێنان و ڕاوێژکاری گشتگیرەوە بۆ سەرکەوتن لە ژینگەی بازرگانیدا.",
    vision_title: "دیدگای ئێمە (Vision)",
    vision_desc: "دیدگای ئێمە بوون بە هاوبەشێکی متمانەپێکراوە لە بواری ڕاهێنان و ڕاوێژکاریدا کە بە پسپۆڕی و پابەندبوون بە نایابییەوە ناسراوە.",
    contact_title: "پەیوەندیمان پێوە بکەن",
    contact_sub: "پەیوەندی بکە بە تیمەکەمان لە هەولێر بۆ زانیاری لەسەر خولەکان و دیاریکردنی کاتی ڕاوێژکاری.",
    bts_hero_title: "تەواوی کۆمپانیاکەت بگۆڕە بۆ تیمێکی نموونەیی (Dream Team)",
    bts_hero_sub: "ڕاهێنانی تایبەت لە بواری سەرکردایەتی، فرۆشتن و بنیاتنانی تیم. بە فێربوونی زیرەکانە یارمەتی کۆمپانیاکان دەدەین پێشەنگی خۆیان بپارێزن.",
    bts_explore_btn: "پڕۆگرامەکانی بڕایان ترەیسی ببینە",
    bts_pdf_btn: "📄 داگرتنی ڕێبەری پڕۆگرامەکان (PDF)",
    bts_way_title: "٣ مانگ بدە بە Brian Tracy Solutions، گۆڕانکارییەکی بێهاوتا لە تیمەکەتدا دەبینیت",
    bts_way_sub: "ئەگەر کارمەندەکانت بە دڵخۆشییەوە نایەنە سەر کار، هۆکارەکەی ناهاوهەنگییە (Disharmony). کاتێک هاوهەنگی دروست دەبێت، هاندان و دڵسۆزی خۆکارانە زیاد دەکات.",
    bts_w1_title: "هەڵسەنگاندنی پڕۆفایلی کارمەندان",
    bts_w1_desc: "دڵنیا دەبینەوە لەوەی کەسی گونجاو لە شوێن و بەرپرسیارێتی گونجاودایە لە ڕێگەی ئامرازەکانی دامەزراندن و هەڵسەنگاندنی ئەدا.",
    bts_w2_title: "ڕاهێنانی پەیوەندیکردن (Communication)",
    bts_w2_desc: "ڕاهێنانی کاریگەر بۆ بەڕێوەبەرە باڵاکان و کارمەندان لەسەر چۆنیەتی پەیوەندیکردنی خێرا و بێ گرێ و گۆڵ.",
    bts_w3_title: "بەرزکردنەوەی ئاستی هاندان (Motivation)",
    bts_w3_desc: "ئەوەی کارمەندان زیاتر لە پارە دەیانەوێت ئامانج و پێزانینە. فێرتان دەکەین چۆن هەر تاکێک هەست بە گرنگی و دڵسۆزی بکات.",
    bts_w4_title: "پڕۆگرامی ئامادە بۆ جێبەجێکردن",
    bts_w4_desc: "ڕاهێنانی ڕاستەوخۆ، پەرتووکی کار و پڕۆگرامی ڕێکخراو بۆ بەرزکردنەوەی ورە و بەرهەمداری ستافەکەت.",
    bts_programs_heading: "پڕۆگرامەکانی بڕایان ترەیسی",
    bts_programs_sub: "٨ پڕۆگرامە سەرەکییەکەی بڕایان ترەیسی بناسە کە لەلایەن مەڵتی بزنس لە هەولێر پێشکەش دەکرێن.",
    bts_trusted_heading: "متمانەپێکراو لە سەرتاسەری جیهاندا"
  }
};

window._remoteCMSData = null;

function normalizeCMSData(parsed) {
  return {
    settings: { ...DEFAULT_CMS_DATA.settings, ...(parsed.settings || {}) },
    slides: Array.isArray(parsed.slides) && parsed.slides.length ? parsed.slides : DEFAULT_CMS_DATA.slides,
    activities: Array.isArray(parsed.activities) ? parsed.activities : DEFAULT_CMS_DATA.activities,
    programs: Array.isArray(parsed.programs) && parsed.programs.length ? parsed.programs : DEFAULT_CMS_DATA.programs
  };
}

// Load CMS Data (prefers fetched data/cms.json, falls back to localStorage / defaults)
window.getCMSData = function () {
  if (window._remoteCMSData) {
    return window._remoteCMSData;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return normalizeCMSData(JSON.parse(raw));
    }
  } catch (e) {
    console.warn("CMS storage load error:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
};

window.loadRemoteCMSData = async function () {
  if (window.location.protocol === "file:") return null;
  try {
    const res = await fetch("data/cms.json?v=" + Date.now(), { cache: "no-store" });
    if (!res.ok) return null;
    const parsed = await res.json();
    window._remoteCMSData = normalizeCMSData(parsed);
    renderDynamicSlider();
    renderDynamicActivities();
    renderDynamicPrograms();
    renderDynamicSettings();
    window.dispatchEvent(new CustomEvent("cmsDataLoaded", { detail: window._remoteCMSData }));
    return window._remoteCMSData;
  } catch (e) {
    console.warn("Remote cms.json fetch failed, using fallback:", e);
    return null;
  }
};

window.saveCMSData = function (data) {
  window._remoteCMSData = normalizeCMSData(data);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(window._remoteCMSData));
};

window.resetCMSData = function () {
  localStorage.removeItem(STORAGE_KEY);
  window._remoteCMSData = JSON.parse(JSON.stringify(DEFAULT_CMS_DATA));
  return window._remoteCMSData;
};

// Current Language Getter / Setter (Strictly 'en' or 'ku')
window.getCurrentLang = function () {
  const saved = localStorage.getItem("mb_lang");
  return saved === "ku" ? "ku" : "en";
};

window.setLanguage = function (langCode) {
  const lang = langCode === "ku" ? "ku" : "en";
  localStorage.setItem("mb_lang", lang);

  const dict = STATIC_I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;

  // Update static data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update active state on language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Re-render dynamic CMS sections in the selected language
  renderDynamicSlider();
  renderDynamicActivities();
  renderDynamicPrograms();
  renderDynamicSettings();
};

// 1. Dynamic Hero Slider Renderer & Controller
let currentSlideIndex = 0;
let slideInterval = null;

window.renderDynamicSlider = function () {
  const wrapper = document.getElementById("heroSlidesWrapper");
  const dotsWrap = document.getElementById("heroSliderDots");
  if (!wrapper) return;

  const data = getCMSData();
  const slides = data.slides || [];
  const lang = getCurrentLang();

  if (currentSlideIndex >= slides.length) currentSlideIndex = 0;

  wrapper.innerHTML = slides
    .map((s, idx) => {
      const title = lang === "ku" ? s.title_ku || s.title_en : s.title_en;
      const subtitle = lang === "ku" ? s.subtitle_ku || s.subtitle_en : s.subtitle_en;
      const btnText = lang === "ku" ? s.btn_ku || s.btn_en : s.btn_en;
      return `
        <div class="hero-slide ${idx === currentSlideIndex ? "active" : ""}" style="background-image: url('${s.image}');">
          <div class="hero-slide-overlay"></div>
          <div class="hero-slide-content">
            <h2 class="hero-slide-title">${title}</h2>
            ${subtitle ? `<p class="hero-slide-subtitle">${subtitle}</p>` : ""}
            ${
              btnText
                ? `<a href="${s.link || "#"}" class="btn btn-teal">${btnText}</a>`
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  if (dotsWrap) {
    dotsWrap.innerHTML = slides
      .map(
        (_, idx) =>
          `<button type="button" class="slider-dot ${idx === currentSlideIndex ? "active" : ""}" onclick="goToSlide(${idx})" aria-label="Slide ${idx + 1}"></button>`
      )
      .join("");
  }
};

window.goToSlide = function (index) {
  const data = getCMSData();
  const count = (data.slides || []).length;
  if (!count) return;
  currentSlideIndex = (index + count) % count;

  document.querySelectorAll(".hero-slide").forEach((el, idx) => {
    el.classList.toggle("active", idx === currentSlideIndex);
  });
  document.querySelectorAll(".slider-dot").forEach((el, idx) => {
    el.classList.toggle("active", idx === currentSlideIndex);
  });
  restartSliderTimer();
};

window.nextSlide = function () {
  goToSlide(currentSlideIndex + 1);
};

window.prevSlide = function () {
  goToSlide(currentSlideIndex - 1);
};

function restartSliderTimer() {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(() => {
    if (document.getElementById("heroSlidesWrapper")) {
      goToSlide(currentSlideIndex + 1);
    }
  }, 5000);
}

// 2. Dynamic Activities / News Renderer
window.renderDynamicActivities = function () {
  const grid = document.getElementById("activitiesGrid");
  if (!grid) return;

  const data = getCMSData();
  const activities = data.activities || [];
  const lang = getCurrentLang();

  if (activities.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:#64748b;">No activities or news published yet.</p>`;
    return;
  }

  grid.innerHTML = activities
    .map(item => {
      const title = lang === "ku" ? item.title_ku || item.title_en : item.title_en;
      const desc = lang === "ku" ? item.desc_ku || item.desc_en : item.desc_en;
      const cat = lang === "ku" ? item.category_ku || item.category_en : item.category_en;
      return `
        <article class="activity-card">
          <div class="activity-img-wrap">
            <img src="${item.image}" alt="${title}" loading="lazy" />
            ${cat ? `<span class="activity-badge">${cat}</span>` : ""}
          </div>
          <div class="activity-body">
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>
        </article>
      `;
    })
    .join("");
};

// 3. Dynamic Brian Tracy & Corporate Programs Renderer
window.renderDynamicPrograms = function () {
  const grid = document.getElementById("programsGrid");
  if (!grid) return;

  const data = getCMSData();
  const programs = data.programs || [];
  const lang = getCurrentLang();

  grid.innerHTML = programs
    .map(prog => {
      const title = lang === "ku" ? prog.title_ku || prog.title_en : prog.title_en;
      const desc = lang === "ku" ? prog.desc_ku || prog.desc_en : prog.desc_en;
      return `
        <article class="program-card">
          <img src="${prog.image}" alt="${title}" loading="lazy" />
          <div class="program-card-body">
            <h3>${title}</h3>
            <p>${desc}</p>
            <a href="contact.html" class="btn btn-outline btn-sm" style="width:100%;">
              ${lang === "ku" ? "داواکردنی پڕۆگرام" : "Inquire Now"}
            </a>
          </div>
        </article>
      `;
    })
    .join("");
};

// 4. Dynamic Settings (Address, Phones, Email, Socials)
window.renderDynamicSettings = function () {
  const data = getCMSData();
  const s = data.settings || DEFAULT_CMS_DATA.settings;
  const lang = getCurrentLang();
  const address = lang === "ku" ? s.address_ku || s.address_en : s.address_en;

  document.querySelectorAll("[data-cms='address']").forEach(el => (el.textContent = address));
  document.querySelectorAll("[data-cms='phone1']").forEach(el => (el.textContent = s.phone1));
  document.querySelectorAll("[data-cms='phone2']").forEach(el => (el.textContent = s.phone2));
  document.querySelectorAll("[data-cms='email']").forEach(el => (el.textContent = s.email));

  const ytFrame = document.getElementById("btsYoutubeIframe");
  if (ytFrame && s.youtubeUrl && ytFrame.getAttribute("data-src") !== s.youtubeUrl) {
    ytFrame.setAttribute("data-src", s.youtubeUrl);
  }
};

// Video Cover Click Handler
window.playHeroVideo = function () {
  const overlay = document.getElementById("videoCoverOverlay");
  const iframe = document.getElementById("btsYoutubeIframe");
  if (overlay && iframe) {
    const src = iframe.getAttribute("data-src") || "https://www.youtube.com/embed/1IyXhEO8Oo0";
    iframe.src = src + (src.includes("?") ? "&autoplay=1" : "?autoplay=1");
    overlay.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("mainNavLinks");
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Initialize language & render CMS sections
  setLanguage(getCurrentLang());
  loadRemoteCMSData();

  if (document.getElementById("heroSlidesWrapper")) {
    restartSliderTimer();
  }
});
