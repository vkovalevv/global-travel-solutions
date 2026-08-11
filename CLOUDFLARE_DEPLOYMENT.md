# Развёртывание Global Travel Solutions в Cloudflare Workers

Инструкция предназначена для первичного развёртывания сайта в новом аккаунте
Cloudflare. Команды выполняются по очереди в Terminal на macOS или Linux.

## Что понадобится

- аккаунт Cloudflare;
- доступ к настройкам домена у регистратора;
- Git;
- Node.js версии 22.13.0 или новее;
- доступ в интернет.

Домен и Worker должны находиться в одном аккаунте Cloudflare.

## 1. Скачать проект

```bash
git clone https://github.com/vkovalevv/global-travel-solutions.git
```

Перейти в каталог проекта:

```bash
cd global-travel-solutions
```

Проверить Node.js:

```bash
node --version
```

Версия должна быть `v22.13.0` или новее.

## 2. Установить pnpm и зависимости

```bash
npm install --global pnpm@11.9.0
```

```bash
pnpm install --frozen-lockfile
```

Ожидаемый результат: установка завершается строкой `Done` без
`ERR_PNPM_IGNORED_BUILDS`.

## 3. Проверить сборку

```bash
pnpm build
```

В конце должна появиться строка:

```text
Generated standalone output in dist/standalone/
```

Предупреждение Node.js о `module.register()` не препятствует публикации.

## 4. Подготовить аккаунт Cloudflare

1. Войти в Cloudflare Dashboard.
2. Открыть **Workers & Pages**.
3. Если Cloudflare предлагает создать адрес `workers.dev`, выбрать уникальный
   поддомен аккаунта. Он нужен для первой публикации и тестирования.

Затем авторизовать Wrangler:

```bash
pnpm exec wrangler login
```

В открывшемся браузере подтвердить доступ к аккаунту Cloudflare.

Проверить авторизацию:

```bash
pnpm exec wrangler whoami
```

Команда должна показать нужный email и Account ID.

## 5. Проверить публикацию без загрузки

```bash
pnpm exec vinext deploy --dry-run
```

В результате должна появиться строка `Dry run complete`.

## 6. Опубликовать Worker

```bash
pnpm run deploy
```

Успешная публикация заканчивается адресом вида:

```text
https://global-travel-solutions.<account-subdomain>.workers.dev
```

Открыть этот адрес и проверить главную страницу и `/hotels`.

## 7. Добавить домен в Cloudflare

Этот раздел можно пропустить, если домен уже имеет статус **Active** в том же
аккаунте Cloudflare.

1. В Cloudflare Dashboard открыть **Domains** и выбрать **Onboard a domain**.
2. Ввести основной домен без `www`, например `example.kg`.
3. Выбрать Free plan.
4. Проверить импортированные DNS-записи. Особенно важно не потерять записи
   электронной почты: `MX`, `TXT`, SPF, DKIM и DMARC.
5. Cloudflare покажет два новых nameserver.
6. У регистратора домена заменить текущие nameserver на выданные Cloudflare.
7. Если у регистратора включён DNSSEC, перед заменой nameserver временно
   отключить его. После активации домена DNSSEC можно включить в Cloudflare.
8. Дождаться статуса домена **Active**. Обновление nameserver может занять до
   24 часов.

## 8. Подключить основной домен к Worker

1. Открыть **Workers & Pages**.
2. Выбрать Worker `global-travel-solutions`.
3. Открыть **Settings → Domains & Routes**.
4. Нажать **Add → Custom Domain**.
5. Ввести основной домен, например `example.kg`, и подтвердить добавление.

Cloudflare автоматически создаст DNS-запись и SSL-сертификат. Не нужно вручную
указывать IP-адрес сервера.

Если на этом имени уже существует запись `CNAME`, Cloudflare не сможет создать
Custom Domain. Сначала необходимо выяснить, для чего используется запись, и
только затем удалить или перенести её.

## 9. Настроить адрес с `www`

Нужно выбрать один из двух вариантов.

Самый простой вариант — повторить добавление Custom Domain для
`www.example.kg`. Тогда сайт будет открываться по обоим адресам.

Рекомендуемый для SEO вариант — оставить один основной адрес и перенаправлять
второй. В этом случае не добавлять `www.example.kg` как Custom Domain. Если он
уже был добавлен, сначала удалить его из **Domains & Routes**. Затем, чтобы
перенаправлять `www.example.kg` на `example.kg`:

1. В **DNS → Records** создать проксируемую запись `A`:
   - Name: `www`
   - IPv4 address: `192.0.2.0`
   - Proxy status: **Proxied**.
2. Открыть **Rules → Redirect Rules** и создать **Single Redirect**.
3. Указать wildcard-условие `https://www.example.kg/*`.
4. Указать адрес назначения `https://example.kg/${1}`.
5. Выбрать код `301` и включить **Preserve query string**.

`example.kg` во всех примерах нужно заменить настоящим доменом.

## 10. Финальная проверка

```bash
curl -I https://example.kg/
```

Для основного домена ожидается статус `HTTP 200`. Для адреса с `www`, если
настроено перенаправление, ожидается `HTTP 301`, ведущий на основной домен.

Проверить также:

- `https://example.kg/hotels`;
- изображения и стили;
- переключение языков;
- ссылки телефона и электронной почты;
- сертификат HTTPS без предупреждений браузера.

## Последующие обновления сайта

Перейти в основную ветку:

```bash
git switch main
```

Получить изменения из GitHub:

```bash
git pull --ff-only origin main
```

Установить зависимости, проверить сборку и опубликовать новую версию:

```bash
pnpm install --frozen-lockfile
```

```bash
pnpm build
```

```bash
pnpm run deploy
```

Подключённый Custom Domain сохраняется при последующих публикациях.

## Официальная документация

- [Cloudflare Workers Custom Domains](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Добавление домена и замена nameserver](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
- [Перенаправление с www на основной домен](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-www-to-root/)
