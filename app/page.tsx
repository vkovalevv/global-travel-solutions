"use client";

import { useEffect, useState } from "react";

import { ArrowUpRight } from "./arrow-up-right";

type Locale = "kg" | "en";

const services = [
  {
    number: "01",
    title: {
      kg: "Мейманканалар",
      en: "Hotels",
    },
    text: {
      kg: "Өзгөчө шарттар, сейрек номер категориялары жана дүйнөнүн мыкты мейманканаларында жогорку деңгээлдеги тосуп алуу.",
      en: "Preferred terms, rare room categories and impeccable welcomes at the world’s finest hotels.",
    },
    tag: "STAY",
    image: "/images/hotels.jpg",
  },
  {
    number: "02",
    title: {
      kg: "Транспорт",
      en: "Transport",
    },
    text: {
      kg: "Жеке авиация, яхталар, айдоочусу бар автоунаалар жана ашыкча күтүүсүз татаал логистика.",
      en: "Private aviation, yachts, chauffeured cars and complex logistics without unnecessary waiting.",
    },
    tag: "MOVE",
    image: "/images/transport.jpg",
  },
  {
    number: "03",
    title: {
      kg: "Билим берүү",
      en: "Education",
    },
    text: {
      kg: "Мектептерди, университеттерди жана жеке программаларды тандоо. Арыздан көчүп барууга чейин коштоо.",
      en: "Selection of schools, universities and individual programmes, with support from application to relocation.",
    },
    tag: "GROW",
    image: "/images/education.jpg",
  },
  {
    number: "04",
    title: {
      kg: "Консьерж",
      en: "Concierge",
    },
    text: {
      kg: "Күнүмдүк тапшырмалар үчүн бир байланыш: ресторан ээлөөдөн ачык сатыкта жок нерсени табууга чейин.",
      en: "One point of contact for everyday requests, from restaurant reservations to sourcing what is not publicly available.",
    },
    tag: "LIVE",
    image: "/images/concierge.jpg",
  },
  {
    number: "05",
    title: {
      kg: "Иш-чаралар",
      en: "Events",
    },
    text: {
      kg: "Жабык премьералар, спорт, маданият жана жеке иш-чаралар — дүйнө жүзү боюнча жеткиликтүүлүк жана уюштуруу.",
      en: "Private premieres, sport, culture and exclusive events, with access and organisation worldwide.",
    },
    tag: "FEEL",
    image: "/images/events.jpg",
  },
];

const translations = {
  kg: {
    nav: {
      about: "Биз жөнүндө",
      services: "Кызматтар",
      approach: "Ыкма",
      contact: "Байланыш",
      navigation: "Негизги навигация",
      openMenu: "Менюну ачуу",
      home: "Global Travel Solutions LLC — башкы бетке",
    },
    hero: {
      first: "Дүйнө,",
      accent: "сизге",
      last: "ылайыкташкан",
      text: "Кадимки издөөдөн табылбаган саякаттарды, билим алууну жана иш-чараларды уюштурабыз.",
      servicesLabel: "Кызматтарды көрүү",
    },
    about: {
      label: "БИЗ ЖӨНҮНДӨ",
      leadBefore: "Биз — формалдуулуктан ",
      leadAccent: "өз убактысын",
      leadAfter: " жогору баалагандар үчүн жеке lifestyle-офис.",
      text: "Global Travel Solutions LLC жергиликтүү тажрыйбаны жана эл аралык өнөктөштөр тармагын бириктирет. Биз бардык процессти өз мойнубузга алабыз: тапшырманы түшүнөбүз, так варианттарды сунуштайбыз жана акыркы деталга чейин жаныңызда болобуз.",
      support: "чек арасыз жана убакыт алкактарына карабай колдоо",
      telephone: "Тел.",
    },
    services: {
      label: "КЫЗМАТТАР",
      title: "Бардык керектүү нерсе.",
      accent: "Андан да көбүрөөк.",
      text: "Кыска өтүнүчтөн көп айлык долбоорго чейин — бирдей көңүл буруу жана жоопкерчилик менен.",
      discuss: "Кызматты талкуулоо:",
    },
    approach: {
      label: "БИЗДИН ЫКМА",
      title: "Каталог эмес.",
      accent: "Жеке сценарий.",
      text: "Биз даяр сунуштан эмес, баарлашуудан баштайбыз. Контекстти, адаттарды жана айтылбаган күтүүлөрдү угабыз — ошондуктан натыйжа табигый сезилет.",
      steps: ["Угабыз", "Түзөбүз", "Коштоп жүрөбүз"],
    },
    world: {
      label: "ЧЕК АРАСЫЗ",
      title: "Керектүү жерде.",
      accent: "Керектүү учурда.",
      text: "Негизги багыттардагы ишенимдүү өнөктөштөр менен иштейбиз жана кайда болбоңуз, дайыма байланыштабыз.",
      citiesLabel: "Биз иштеген шаарлар",
      cities: ["Лондон", "Дубай", "Париж", "Милан", "Нью-Йорк", "Сингапур", "Токио", "Москва"],
    },
    contact: {
      label: "БАЙЛАНЫШТАР",
      intro: "Бир сүйлөшүү мүмкүнчүлүктөрдүн бүтүндөй дүйнөсүн ача алат.",
      first: "Биз сиз үчүн",
      accent: "эмне кыла аларыбызды",
      last: "айтып бериңиз",
      top: "Жогору",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      approach: "Approach",
      contact: "Contact",
      navigation: "Main navigation",
      openMenu: "Open menu",
      home: "Global Travel Solutions LLC — home",
    },
    hero: {
      first: "A world",
      accent: "tailored",
      last: "to you",
      text: "We arrange travel, education and events that cannot be found through an ordinary search.",
      servicesLabel: "View services",
    },
    about: {
      label: "ABOUT US",
      leadBefore: "A personal lifestyle office for those who value ",
      leadAccent: "their time",
      leadAfter: " above formality.",
      text: "Global Travel Solutions LLC brings together local expertise and an international network of partners. We take care of the entire journey: understanding the brief, presenting precise options and staying close through every last detail.",
      support: "support across borders and time zones",
      telephone: "Tel.",
    },
    services: {
      label: "SERVICES",
      title: "Everything you need.",
      accent: "And a little more.",
      text: "From a quick request to a months-long project, with the same level of attention and responsibility.",
      discuss: "Discuss service:",
    },
    approach: {
      label: "OUR APPROACH",
      title: "Not a catalogue.",
      accent: "A personal scenario.",
      text: "We begin with a conversation, not a ready-made offer. We listen for context, habits and unspoken expectations, so the result feels entirely natural.",
      steps: ["Listen", "Create", "Accompany"],
    },
    world: {
      label: "WITHOUT BORDERS",
      title: "The right place.",
      accent: "The right moment.",
      text: "We work with trusted partners in key destinations and stay connected wherever you are.",
      citiesLabel: "Cities we serve",
      cities: ["London", "Dubai", "Paris", "Milan", "New York", "Singapore", "Tokyo", "Moscow"],
    },
    contact: {
      label: "CONTACT",
      intro: "One conversation can open up a world of possibilities.",
      first: "Tell us what",
      accent: "we can do",
      last: "for you",
      top: "Back to top",
    },
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("kg");
  const t = translations[locale];

  useEffect(() => {
    const requestedLocale = new URLSearchParams(window.location.search).get("lang");
    if (requestedLocale === "en") {
      setLocale("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "kg" ? "ky" : "en";
  }, [locale]);

  return (
    <main data-locale={locale}>
      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        <header className="nav shell">
          <a
            className="brand"
            href="#top"
            aria-label={t.nav.home}
          >
            <span className="brand-mark">G</span>
            <span>
              GLOBAL TRAVEL SOLUTIONS <i>LLC</i>
            </span>
          </a>

          <nav className="desktop-nav" aria-label={t.nav.navigation}>
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#approach">{t.nav.approach}</a>
          </nav>

          <div className="nav-actions">
            <div className="language-switch" role="group" aria-label="Language">
              <button
                type="button"
                className={locale === "kg" ? "active" : ""}
                onClick={() => setLocale("kg")}
                aria-pressed={locale === "kg"}
              >
                KG
              </button>
              <button
                type="button"
                className={locale === "en" ? "active" : ""}
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>

            <a className="nav-contact" href="#contact">
              {t.nav.contact}{" "}
              <span>
                <ArrowUpRight />
              </span>
            </a>

            <details className="mobile-menu">
              <summary aria-label={t.nav.openMenu}>
                <span />
                <span />
              </summary>
              <div>
                <a href="#about">{t.nav.about}</a>
                <a href="#services">{t.nav.services}</a>
                <a href="#approach">{t.nav.approach}</a>
                <a href="#contact">{t.nav.contact}</a>
              </div>
            </details>
          </div>
        </header>

        <div className="hero-content shell">
          <div className="eyebrow">PERSONAL LIFESTYLE OFFICE · WORLDWIDE</div>
          <h1>
            {t.hero.first}
            <br />
            <em>{t.hero.accent}</em>
            <br />
            {t.hero.last}
          </h1>
          <div className="hero-bottom">
            <p>{t.hero.text}</p>
            <a className="circle-link" href="#services" aria-label={t.hero.servicesLabel}>
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-side">54.5260° N · 15.2551° E</div>
      </section>

      <section className="intro" id="about">
        <div className="shell intro-grid">
          <div className="section-label">
            <span>01</span>
            <p>{t.about.label}</p>
          </div>
          <div className="intro-copy">
            <p className="lead">
              {t.about.leadBefore}
              <em>{t.about.leadAccent}</em>
              {t.about.leadAfter}
            </p>
            <div className="intro-details">
              <div className="about-info">
                <p>{t.about.text}</p>
                <address className="company-details">
                  <strong>Global Travel Solutions LlC</strong>
                  <span>
                    Apt. 17, 6 Yubileynaya Street, Zarechnoe, Alamudun District,
                    Chuy Region, Kyrgyz Republic
                  </span>
                  <a href="tel:+996554155955">
                    {t.about.telephone}: +996 554 155 955
                  </a>
                  <a href="mailto:global74gts@gmail.com">
                    global74gts@gmail.com
                  </a>
                </address>
              </div>
              <div className="fact">
                <strong>24 / 7</strong>
                <span>{t.about.support}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="shell">
          <div className="services-heading">
            <div className="section-label light">
              <span>02</span>
              <p>{t.services.label}</p>
            </div>
            <h2>
              {t.services.title}
              <br />
              <em>{t.services.accent}</em>
            </h2>
            <p>{t.services.text}</p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div
                  className="service-photo"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden="true"
                />
                <div className="service-top">
                  <span>{service.number}</span>
                  <span>{service.tag}</span>
                </div>
                <div className="service-bottom">
                  <div>
                    <h3>{service.title[locale]}</h3>
                    <p>{service.text[locale]}</p>
                  </div>
                  <a
                    href={
                      service.number === "01"
                        ? `/hotels?lang=${locale}`
                        : "#contact"
                    }
                    aria-label={`${t.services.discuss} ${service.title[locale]}`}
                  >
                    <ArrowUpRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approach-image" aria-hidden="true" />
        <div className="approach-content shell">
          <div className="section-label light">
            <span>03</span>
            <p>{t.approach.label}</p>
          </div>
          <div className="approach-card">
            <span className="quote">“</span>
            <h2>
              {t.approach.title}
              <br />
              <em>{t.approach.accent}</em>
            </h2>
            <p>{t.approach.text}</p>
            <div className="steps">
              {t.approach.steps.map((step, index) => (
                <div key={step}>
                  <span>0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="world">
        <div className="shell world-grid">
          <div className="section-label">
            <span>04</span>
            <p>{t.world.label}</p>
          </div>
          <div>
            <h2>
              {t.world.title}
              <br />
              <em>{t.world.accent}</em>
            </h2>
            <p>{t.world.text}</p>
          </div>
        </div>
        <div className="city-ticker" aria-label={t.world.citiesLabel}>
          <div>
            {[...t.world.cities, ...t.world.cities].map((city, index) => (
              <span key={`${city}-${index}`}>
                {city} <i>✦</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell">
          <div className="contact-top">
            <div className="section-label light">
              <span>05</span>
              <p>{t.contact.label}</p>
            </div>
            <p>{t.contact.intro}</p>
          </div>

          <h2>
            {t.contact.first}
            <br />
            <em>{t.contact.accent}</em>
            <br />
            {t.contact.last}
          </h2>

          <div className="contact-actions">
            <a
              className="email-link"
              href="mailto:global74gts@gmail.com"
            >
              global74gts@gmail.com{" "}
              <span>
                <ArrowUpRight />
              </span>
            </a>
            <div className="messengers">
              <a href="tel:+996554155955">
                +996 554 155 955 <ArrowUpRight />
              </a>
            </div>
          </div>

          <footer>
            <a className="brand footer-brand" href="#top">
              <span className="brand-mark">G</span>
              <span>
                GLOBAL TRAVEL SOLUTIONS <i>LLC</i>
              </span>
            </a>
            <p>
              © 2026 Global Travel Solutions LLC. Worldwide lifestyle
              management.
            </p>
            <a href="#top">{t.contact.top} ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
