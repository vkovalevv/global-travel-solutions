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

## Запуск через Docker

Для запуска необходимы Docker Engine и Docker Compose.

Собрать образ и запустить контейнер:

```bash
docker compose up -d --build
```

Сайт будет доступен на `http://localhost:3000`. Контейнер принимает запросы
только с самого сервера, поэтому для публичного доступа рекомендуется
использовать Nginx.

Проверить состояние и посмотреть журнал:

```bash
docker compose ps
docker compose logs -f website
```

Остановить контейнер:

```bash
docker compose down
```

Обновить сайт на сервере:

```bash
git pull
docker compose up -d --build
```

Если порт `3000` занят, перед запуском можно указать другой локальный порт:

```bash
APP_PORT=3001 docker compose up -d --build
```

### Nginx перед Docker

Контейнер по умолчанию доступен на `127.0.0.1:3000`. Пример проксирования:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

После подключения домена HTTPS можно выпустить через Certbot.

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
  page.tsx         главная страница
  hotels/
    page.tsx       каталог отелей с поиском и фильтрами
    layout.tsx     метаданные страницы отелей
  layout.tsx       метаданные и общий макет
  globals.css      стили, адаптивность и анимации
public/
  og.png           обложка для социальных сетей
.openai/
  hosting.json     конфигурация публикации
```

## Настройка контента

Основные тексты, список услуг, города и контактные ссылки находятся в
`app/page.tsx`. Подборка отелей и параметры фильтрации находятся в
`app/hotels/page.tsx`.

Перед рабочим запуском замените демонстрационные данные:

- название `Global Travel Solutions LLC`, если будет использоваться другой бренд;
- адрес `global74gts@gmail.com`;
- ссылки на WhatsApp и Telegram;
- тексты и список направлений.

## Изображения

Фотографии находятся в `public/images/` и входят в репозиторий, поэтому для
локального запуска и Docker-контейнера внешняя загрузка изображений не нужна.
