"use client";

import { useEffect, useMemo, useState } from "react";

import { ArrowUpRight } from "../arrow-up-right";

type Locale = "kg" | "en";
type Region =
  | "all"
  | "asia"
  | "europe"
  | "middle-east"
  | "americas"
  | "africa"
  | "oceania";
type StayType =
  | "all"
  | "city"
  | "boutique"
  | "heritage"
  | "beach"
  | "wellness";

const hotels = [
  {
    rank: 1,
    name: "Rosewood Hong Kong",
    location: { kg: "Гонконг, Кытай", en: "Hong Kong, China" },
    region: "asia",
    type: "city",
    code: "HKG",
    text: {
      kg: "Victoria Harbour жээгиндеги панорамалык көрүнүштөрү, жеке батлер кызматы жана өзгөчө гастрономиясы бар бийик шаардык резиденция.",
      en: "A vertical waterfront estate with panoramic Victoria Harbour views, personal butler service and destination dining.",
    },
  },
  {
    rank: 2,
    name: "Four Seasons Bangkok",
    location: { kg: "Бангкок, Таиланд", en: "Bangkok, Thailand" },
    region: "asia",
    type: "city",
    code: "BKK",
    text: {
      kg: "Чао Прайя дарыясынын жээгиндеги заманбап шаардык курорт: чоң мейкиндиктер, искусство жана мыкты ресторандар.",
      en: "A contemporary urban resort on the Chao Phraya River, combining generous spaces, art and world-class dining.",
    },
  },
  {
    rank: 3,
    name: "Capella Bangkok",
    location: { kg: "Бангкок, Таиланд", en: "Bangkok, Thailand" },
    region: "asia",
    type: "wellness",
    code: "BKK",
    text: {
      kg: "Дарыяга караган 101 бөлмө жана вилла, тынч атмосфера жана жеке маршруттарды түзгөн Capella Culturists кызматы.",
      en: "A serene riverside retreat with 101 river-facing rooms and villas, plus highly personal Capella Culturist service.",
    },
  },
  {
    rank: 4,
    name: "Passalacqua",
    location: { kg: "Комо көлү, Италия", en: "Lake Como, Italy" },
    region: "europe",
    type: "boutique",
    code: "COM",
    text: {
      kg: "XVIII кылымдагы виллада жайгашкан 24 бөлмөлүү камерный отель — 2025-жылдын Европадагы мыкты жана мыкты бутик-отели.",
      en: "An intimate 24-room retreat in an 18th-century villa, named Europe’s Best Hotel and Best Boutique Hotel for 2025.",
    },
  },
  {
    rank: 5,
    name: "Raffles Singapore",
    location: { kg: "Сингапур", en: "Singapore" },
    region: "asia",
    type: "heritage",
    code: "SIN",
    text: {
      kg: "1899-жылдан берки тарых, ак колониалдык архитектура, легендарлуу батлер кызматы жана Singapore Sling мекени.",
      en: "A grande dame since 1899, known for white colonial architecture, legendary butler service and the Singapore Sling.",
    },
  },
  {
    rank: 6,
    name: "Atlantis The Royal",
    location: { kg: "Дубай, БАЭ", en: "Dubai, UAE" },
    region: "middle-east",
    type: "beach",
    code: "DXB",
    text: {
      kg: "Palm Jumeirah аралындагы масштабдуу жээк курорту, белгилүү ресторандар жана 2025-жылдын Best Beach Hotel сыйлыгы.",
      en: "A spectacular Palm Jumeirah resort with celebrated restaurants and the 2025 Best Beach Hotel award.",
    },
  },
  {
    rank: 8,
    name: "Chablé Yucatán",
    location: { kg: "Чочола, Мексика", en: "Chocholá, Mexico" },
    region: "americas",
    type: "wellness",
    code: "MID",
    text: {
      kg: "Юкатандын жаратылышына аралашкан hacienda-курорт: жеке casitaлар, cenote жанындагы spa жана майя салттары.",
      en: "A hacienda retreat immersed in Yucatán nature, with private casitas, a cenote-side spa and Mayan traditions.",
    },
  },
  {
    rank: 11,
    name: "Copacabana Palace",
    location: { kg: "Рио-де-Жанейро, Бразилия", en: "Rio de Janeiro, Brazil" },
    region: "americas",
    type: "beach",
    code: "RIO",
    text: {
      kg: "Копакабана жээгиндеги легендарлуу Art Deco сарайы — Рионун энергиясы, тарыхы жана майрамдык атмосферасы.",
      en: "A legendary Art Deco palace on Copacabana Beach, capturing Rio’s energy, history and celebratory spirit.",
    },
  },
  {
    rank: 12,
    name: "Capella Sydney",
    location: { kg: "Сидней, Австралия", en: "Sydney, Australia" },
    region: "oceania",
    type: "heritage",
    code: "SYD",
    text: {
      kg: "Калыбына келтирилген тарыхый имараттагы тынч люкс-отель, Сидней булуңуна жана Opera Houseка жакын.",
      en: "Quiet luxury inside a restored heritage landmark, moments from Sydney Harbour and the Opera House.",
    },
  },
  {
    rank: 13,
    name: "Royal Mansour Marrakech",
    location: { kg: "Марракеш, Марокко", en: "Marrakech, Morocco" },
    region: "africa",
    type: "heritage",
    code: "RAK",
    text: {
      kg: "Жеке riadдардан турган медина ичиндеги сарай: марокколук кол өнөрчүлүк, купуялык жана өзгөчө сервис.",
      en: "A palace within the medina composed of private riads, showcasing Moroccan craft, privacy and exceptional service.",
    },
  },
  {
    rank: 16,
    name: "Claridge’s",
    location: { kg: "Лондон, Улуу Британия", en: "London, United Kingdom" },
    region: "europe",
    type: "city",
    code: "LON",
    text: {
      kg: "Mayfair жүрөгүндөгү британдык классика: Art Deco интерьерлери, салттуу чай жана кылдат жекече мамиле.",
      en: "A Mayfair icon defined by Art Deco interiors, celebrated afternoon tea and polished personal service.",
    },
  },
  {
    rank: 17,
    name: "Four Seasons Astir Palace",
    location: { kg: "Афина, Греция", en: "Athens, Greece" },
    region: "europe",
    type: "beach",
    code: "ATH",
    text: {
      kg: "Афина Ривьерасындагы жарым арал курорту: жеке пляждар, Эгей деңизинин көрүнүшү жана шаарга оңой жетүү.",
      en: "A peninsula resort on the Athens Riviera with private beaches, Aegean views and easy access to the city.",
    },
  },
] as const;

const copy = {
  kg: {
    back: "Башкы бет",
    navigation: "Мейманканалар навигациясы",
    heroLabel: "GLOBAL SELECTION · 2025",
    heroTitle: "Дүйнөнүн",
    heroAccent: "мыкты отелдери",
    heroText:
      "Шаардык иконалардан алыскы курортторго чейин — ар бир сапар үчүн кылдат тандалган коллекция.",
    expertiseLabel: "GLOBAL TRAVEL SOLUTIONS · HOTEL EXPERTISE",
    expertiseTitle: "Дүйнөнүн эң мыкты отелдери — сиздин сапарыңыз үчүн.",
    expertiseText:
      "Биз дүйнөнүн алдыңкы мейманканалары, жеке виллалары жана өзгөчө курорттору менен иштейбиз. Ар бир сунуш сиздин стилиңизге, даталарыңызга жана каалоолоруңузга жараша түзүлөт.",
    expertiseNote: "Өзгөчө сапарлар жекече мамиледен башталат.",
    searchLabel: "Отель издөө",
    searchPlaceholder: "Аталышы же багыты",
    regionLabel: "Регион",
    typeLabel: "Формат",
    all: "Баары",
    regions: {
      asia: "Азия",
      europe: "Европа",
      "middle-east": "Жакынкы Чыгыш",
      americas: "Америка",
      africa: "Африка",
      oceania: "Океания",
    },
    types: {
      city: "Шаар",
      boutique: "Бутик",
      heritage: "Тарыхый",
      beach: "Жээк",
      wellness: "Wellness",
    },
    found: "отель табылды",
    rank: "2025 рейтингинде",
    request: "Тандоону талкуулоо",
    emptyTitle: "Бул фильтрлер боюнча отель табылган жок.",
    emptyText: "Башка регионду же форматты тандап көрүңүз.",
    source:
      "Коллекция The World’s 50 Best Hotels 2025 рейтингинин негизинде түзүлдү.",
    sourceLink: "Рейтингди көрүү",
    contactTitle: "Так мейманкананы биз менен тандаңыз.",
    contactText:
      "Сиздин даталарыңызды, форматты жана каалоолорду эске алып, жеткиликтүүлүктү жана өзгөчө шарттарды текшеребиз.",
    contactButton: "Бизге жазыңыз",
  },
  en: {
    back: "Home",
    navigation: "Hotels navigation",
    heroLabel: "GLOBAL SELECTION · 2025",
    heroTitle: "The world’s",
    heroAccent: "finest hotels",
    heroText:
      "From city icons to remote retreats, a considered collection for every kind of journey.",
    expertiseLabel: "GLOBAL TRAVEL SOLUTIONS · HOTEL EXPERTISE",
    expertiseTitle: "The world’s finest hotels, chosen for your journey.",
    expertiseText:
      "We work with leading hotels, private villas and remarkable resorts across the world. Every recommendation is shaped around your style, dates and preferences.",
    expertiseNote: "Exceptional journeys begin with a personal approach.",
    searchLabel: "Search hotels",
    searchPlaceholder: "Name or destination",
    regionLabel: "Region",
    typeLabel: "Stay style",
    all: "All",
    regions: {
      asia: "Asia",
      europe: "Europe",
      "middle-east": "Middle East",
      americas: "Americas",
      africa: "Africa",
      oceania: "Oceania",
    },
    types: {
      city: "City",
      boutique: "Boutique",
      heritage: "Heritage",
      beach: "Beach",
      wellness: "Wellness",
    },
    found: "hotels found",
    rank: "in the 2025 ranking",
    request: "Discuss this stay",
    emptyTitle: "No hotels match these filters.",
    emptyText: "Try another region or stay style.",
    source:
      "The collection is based on The World’s 50 Best Hotels 2025 ranking.",
    sourceLink: "View the ranking",
    contactTitle: "Let us find the right hotel for you.",
    contactText:
      "Share your dates, travel style and preferences. We will check availability and preferred conditions.",
    contactButton: "Contact us",
  },
} as const;

const regionOptions: Region[] = [
  "all",
  "asia",
  "europe",
  "middle-east",
  "americas",
  "africa",
  "oceania",
];

const typeOptions: StayType[] = [
  "all",
  "city",
  "boutique",
  "heritage",
  "beach",
  "wellness",
];

export default function HotelsPage() {
  const [locale, setLocale] = useState<Locale>("kg");
  const [region, setRegion] = useState<Region>("all");
  const [stayType, setStayType] = useState<StayType>("all");
  const [query, setQuery] = useState("");
  const t = copy[locale];

  useEffect(() => {
    const requestedLocale = new URLSearchParams(window.location.search).get("lang");
    if (requestedLocale === "en") {
      setLocale("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "kg" ? "ky" : "en";
  }, [locale]);

  const filteredHotels = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return hotels.filter((hotel) => {
      const matchesRegion = region === "all" || hotel.region === region;
      const matchesType = stayType === "all" || hotel.type === stayType;
      const searchable = `${hotel.name} ${hotel.location[locale]}`.toLocaleLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || searchable.includes(normalizedQuery);

      return matchesRegion && matchesType && matchesQuery;
    });
  }, [locale, query, region, stayType]);

  return (
    <main className="hotel-page" data-locale={locale}>
      <section className="hotel-hero">
        <div className="hotel-hero-image" aria-hidden="true" />
        <header className="hotel-nav shell">
          <a
            className="brand"
            href={`/?lang=${locale}`}
            aria-label="Global Travel Solutions LLC"
          >
            <span className="brand-mark">G</span>
            <span>
              GLOBAL TRAVEL SOLUTIONS <i>LLC</i>
            </span>
          </a>

          <nav aria-label={t.navigation}>
            <a href={`/?lang=${locale}`}>← {t.back}</a>
            <a href="#collection">{t.regionLabel}</a>
          </nav>

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
        </header>

        <div className="hotel-hero-copy shell">
          <div className="eyebrow">{t.heroLabel}</div>
          <h1>
            {t.heroTitle}
            <br />
            <em>{t.heroAccent}</em>
          </h1>
          <p>{t.heroText}</p>
        </div>
      </section>

      <section className="hotel-expertise" aria-label={t.expertiseLabel}>
        <div className="shell">
          <div className="hotel-expertise-mark" aria-hidden="true">GTS</div>
          <div>
            <p className="eyebrow">{t.expertiseLabel}</p>
            <h2>{t.expertiseTitle}</h2>
          </div>
          <div className="hotel-expertise-copy">
            <p>{t.expertiseText}</p>
            <span>{t.expertiseNote}</span>
          </div>
        </div>
      </section>

      <section className="hotel-collection" id="collection">
        <div className="shell">
          <div className="hotel-filters">
            <label className="hotel-search">
              <span>{t.searchLabel}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.searchPlaceholder}
              />
            </label>

            <fieldset>
              <legend>{t.regionLabel}</legend>
              <div className="filter-pills">
                {regionOptions.map((option) => (
                  <button
                    type="button"
                    className={region === option ? "active" : ""}
                    onClick={() => setRegion(option)}
                    aria-pressed={region === option}
                    key={option}
                  >
                    {option === "all" ? t.all : t.regions[option]}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>{t.typeLabel}</legend>
              <div className="filter-pills">
                {typeOptions.map((option) => (
                  <button
                    type="button"
                    className={stayType === option ? "active" : ""}
                    onClick={() => setStayType(option)}
                    aria-pressed={stayType === option}
                    key={option}
                  >
                    {option === "all" ? t.all : t.types[option]}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="hotel-results-count" aria-live="polite">
            <span>{String(filteredHotels.length).padStart(2, "0")}</span>
            {t.found}
          </div>

          {filteredHotels.length > 0 ? (
            <div className="hotel-grid">
              {filteredHotels.map((hotel) => (
                <article
                  className="hotel-card"
                  data-region={hotel.region}
                  key={hotel.name}
                >
                  <div className="hotel-card-visual" aria-hidden="true">
                    <span>{hotel.code}</span>
                    <strong>{String(hotel.rank).padStart(2, "0")}</strong>
                  </div>
                  <div className="hotel-card-body">
                    <div className="hotel-card-meta">
                      <span>{hotel.location[locale]}</span>
                      <span>
                        № {hotel.rank} {t.rank}
                      </span>
                    </div>
                    <h2>{hotel.name}</h2>
                    <p>{hotel.text[locale]}</p>
                    <div className="hotel-card-footer">
                      <span>{t.regions[hotel.region]}</span>
                      <span>{t.types[hotel.type]}</span>
                      <a href={`/?lang=${locale}#contact`}>
                        {t.request}{" "}
                        <b>
                          <ArrowUpRight />
                        </b>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="hotel-empty">
              <strong>{t.emptyTitle}</strong>
              <p>{t.emptyText}</p>
            </div>
          )}

          <p className="hotel-source">
            {t.source}{" "}
            <a
              href="https://www.theworlds50best.com/hotels/list/1-50"
              target="_blank"
              rel="noreferrer"
            >
              {t.sourceLink} <ArrowUpRight />
            </a>
          </p>
        </div>
      </section>

      <section className="hotel-contact">
        <div className="shell">
          <span>GLOBAL TRAVEL SOLUTIONS LLC</span>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a href={`/?lang=${locale}#contact`}>
            {t.contactButton}{" "}
            <b>
              <ArrowUpRight />
            </b>
          </a>
        </div>
      </section>
    </main>
  );
}
