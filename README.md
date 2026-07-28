# Global Travel Solutions LLC

Адаптивный сайт-визитка персонального lifestyle-сервиса: отели, транспорт,
образование, консьерж-услуги и организация мероприятий по всему миру.

Опубликованная версия:
[elan-prive-worldwide.ronald-millsaps.chatgpt.site](https://elan-prive-worldwide.ronald-millsaps.chatgpt.site/)

## Технологии

- React 19
- TypeScript
- vinext / Next.js App Router
- Vite
- Tailwind CSS

## Требования

Для локального запуска необходимы:

- Node.js версии `22.13.0` или новее;
- npm, который устанавливается вместе с Node.js.

Проверить установленные версии:

```bash
node --version
npm --version
```

Скачать Node.js можно на [nodejs.org](https://nodejs.org/).

## Локальный запуск

1. Клонируйте репозиторий и перейдите в папку проекта:

   ```bash
   git clone git@github.com:vkovalevv/global-travel-solutions.git
   cd global-travel-solutions
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите сервер разработки:

   ```bash
   npm run dev
   ```

4. Откройте в браузере:

   ```text
   http://localhost:3000
   ```

Для остановки сервера нажмите `Ctrl+C`.

## Запуск через pnpm

Если используется pnpm:

```bash
pnpm install
pnpm dev
```

## Проверка production-сборки

```bash
npm run build
npm run start
```

После запуска production-версии сайт также будет доступен по адресу
`http://localhost:3000`.

## Полезные команды

```bash
npm run dev       # запустить локальную разработку
npm run build     # собрать production-версию
npm run start     # запустить собранную версию
npm run lint      # проверить код линтером
```

## Структура проекта

```text
app/
  page.tsx         основное содержимое страницы
  layout.tsx       метаданные и общий макет
  globals.css      стили, адаптивность и анимации
public/
  og.png           обложка для социальных сетей
.openai/
  hosting.json     конфигурация публикации
```

## Настройка контента

Основные тексты, список услуг, города и контактные ссылки находятся в
`app/page.tsx`.

Перед рабочим запуском замените демонстрационные данные:

- название `Global Travel Solutions LLC`, если будет использоваться другой бренд;
- адрес `hello@globaltravelsolutions.com`;
- ссылки на WhatsApp и Telegram;
- тексты и список направлений.

## Изображения

Фотографии на странице загружаются с Unsplash. Для полностью автономной версии
их можно скачать в папку `public/` и заменить внешние URL в `app/page.tsx` и
`app/globals.css` локальными путями.
