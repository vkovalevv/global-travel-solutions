const services = [
  {
    number: "01",
    title: "Отели",
    text: "Особые условия, редкие категории номеров и безупречный приём в лучших отелях мира.",
    tag: "STAY",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Транспорт",
    text: "Частная авиация, яхты, автомобили с водителем и сложная логистика без лишних ожиданий.",
    tag: "MOVE",
    image:
      "https://images.unsplash.com/photo-1625513123245-fcb02d69ad12?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Образование",
    text: "Подбор школ, университетов и индивидуальных программ. Сопровождение от заявки до переезда.",
    tag: "GROW",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Консьерж",
    text: "Один контакт для повседневных задач: от брони ресторана до поиска того, чего нет в открытой продаже.",
    tag: "LIVE",
    image:
      "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Мероприятия",
    text: "Закрытые премьеры, спорт, культура и частные события — доступ и организация по всему миру.",
    tag: "FEEL",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
  },
];

const cities = [
  "Лондон",
  "Дубай",
  "Париж",
  "Милан",
  "Нью-Йорк",
  "Сингапур",
  "Токио",
  "Москва",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        <header className="nav shell">
          <a
            className="brand"
            href="#top"
            aria-label="Global Travel Solutions LLC — на главную"
          >
            <span className="brand-mark">G</span>
            <span>
              GLOBAL TRAVEL SOLUTIONS <i>LLC</i>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Основная навигация">
            <a href="#about">О нас</a>
            <a href="#services">Сервисы</a>
            <a href="#approach">Подход</a>
          </nav>

          <a className="nav-contact" href="#contact">
            Связаться <span>↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Открыть меню">
              <span />
              <span />
            </summary>
            <div>
              <a href="#about">О нас</a>
              <a href="#services">Сервисы</a>
              <a href="#approach">Подход</a>
              <a href="#contact">Связаться</a>
            </div>
          </details>
        </header>

        <div className="hero-content shell">
          <div className="eyebrow">PERSONAL LIFESTYLE OFFICE · WORLDWIDE</div>
          <h1>
            Мир,
            <br />
            <em>настроенный</em>
            <br />
            под вас
          </h1>
          <div className="hero-bottom">
            <p>
              Организуем путешествия, образование и события, которые невозможно
              найти в обычном поиске.
            </p>
            <a className="circle-link" href="#services" aria-label="Смотреть сервисы">
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
            <p>О НАС</p>
          </div>
          <div className="intro-copy">
            <p className="lead">
              Мы — персональный lifestyle-офис для тех, кто ценит{" "}
              <em>своё время</em> выше формальностей.
            </p>
            <div className="intro-details">
              <div className="about-info">
                <p>
                  Global Travel Solutions LLC объединяет локальную экспертизу и
                  международную сеть партнёров. Мы берём на себя весь путь:
                  понимаем задачу, предлагаем точные варианты и остаёмся рядом до
                  последней детали.
                </p>
                <address className="company-details">
                  <strong>Global Travel Solutions LlC</strong>
                  <span>
                    Apt. 17, 6 Yubileynaya Street, Zarechnoe, Alamudun District,
                    Chuy Region, Kyrgyz Republic
                  </span>
                  <a href="tel:+996554155955">Tel: +996 554 155 955</a>
                  <a href="mailto:global74gts@gmail.com">
                    global74gts@gmail.com
                  </a>
                </address>
              </div>
              <div className="fact">
                <strong>24 / 7</strong>
                <span>поддержка без границ и часовых поясов</span>
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
              <p>СЕРВИСЫ</p>
            </div>
            <h2>
              Всё необходимое.
              <br />
              <em>И немного больше.</em>
            </h2>
            <p>
              От короткой просьбы до многомесячного проекта — с одним уровнем
              внимания и ответственности.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
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
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <a href="#contact" aria-label={`Обсудить услугу ${service.title}`}>
                    ↗
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
            <p>НАШ ПОДХОД</p>
          </div>
          <div className="approach-card">
            <span className="quote">“</span>
            <h2>
              Не каталог.
              <br />
              <em>Личный сценарий.</em>
            </h2>
            <p>
              Мы начинаем с разговора, а не с готового предложения. Слышим
              контекст, привычки и невысказанные ожидания — поэтому результат
              ощущается естественным.
            </p>
            <div className="steps">
              <div>
                <span>01</span>
                <p>Слушаем</p>
              </div>
              <div>
                <span>02</span>
                <p>Создаём</p>
              </div>
              <div>
                <span>03</span>
                <p>Сопровождаем</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="world">
        <div className="shell world-grid">
          <div className="section-label">
            <span>04</span>
            <p>БЕЗ ГРАНИЦ</p>
          </div>
          <div>
            <h2>
              В нужном месте.
              <br />
              <em>В нужный момент.</em>
            </h2>
            <p>
              Работаем с проверенными партнёрами на ключевых направлениях и
              остаёмся на связи, где бы вы ни находились.
            </p>
          </div>
        </div>
        <div className="city-ticker" aria-label="Города присутствия">
          <div>
            {[...cities, ...cities].map((city, index) => (
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
              <p>КОНТАКТЫ</p>
            </div>
            <p>Один разговор может открыть целый мир возможностей.</p>
          </div>

          <h2>
            Расскажите, что
            <br />
            <em>мы можем сделать</em>
            <br />
            для вас
          </h2>

          <div className="contact-actions">
            <a
              className="email-link"
              href="mailto:global74gts@gmail.com"
            >
              global74gts@gmail.com <span>↗</span>
            </a>
            <div className="messengers">
              <a
                href="https://wa.me/996554155955"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp ↗
              </a>
              <a href="tel:+996554155955">+996 554 155 955 ↗</a>
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
            <a href="#top">Наверх ↑</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
