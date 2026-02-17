<!-- START_BLOCK_RUN_INSTRUCTIONS -->
# Cimoro Urban Belt Map

Интерактивная карта с 33 городами, пятью классами и списками магазинов по каждому городу.

## Что есть в версии v2

- Карта мира на Leaflet.
- Цветовые точки по классам.
- Фильтры классов.
- Переключатель языка: RU/EN.
- Pop-up по клику на город.
- Dropdown «Магазины» внутри pop-up.
- Политика ссылок:
  - подтверждённые ссылки кликабельны;
  - неподтверждённые показываются как текст со статусом;
  - если в городе нет подтверждённых ссылок, показывается статус «Подбираем партнёра».

## Структура

- `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/index.html` — каркас интерфейса и подключение Leaflet.
- `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/src/data.js` — классы, i18n-словарь, города и магазины.
- `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/src/map.js` — рендер карты, pop-up и dropdown магазинов.
- `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/src/app.js` — состояние UI, фильтры и переключатель языка.
- `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/styles/main.css` — визуальная тема и адаптив.
- `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/PROJECT_GRAPH.xml` — semantic map проекта.

## Запуск

```bash
cd /Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map
python3 -m http.server 4173
```

Открыть в браузере: `http://localhost:4173`.

## Публикация на GitHub Pages

1. Запушить ветку `main` в GitHub-репозиторий.
2. Открыть `Settings -> Pages`.
3. В разделе `Build and deployment` выбрать:
- `Source: Deploy from a branch`
- `Branch: main`
- `Folder: / (root)`
4. Сохранить настройки и дождаться деплоя.

## URL сайта

- Стандартный URL GitHub Pages для project site:
`https://<ваш-github-username>.github.io/<имя-репозитория>/`
- Для этого проекта ожидаемый шаблон:
`https://<ваш-github-username>.github.io/cimoro-urban-belt-map/`

## Проверка качества

1. Убедитесь, что переключатель RU/EN обновляет все подписи.
2. Кликните на несколько городов и проверьте dropdown магазинов.
3. Отключите один класс в фильтрах и проверьте, что скрываются только его города.
4. Отключите все классы и проверьте, что карта не падает.

## Источники UI-текста

Тексты в интерфейсе адаптированы под:
- `/Users/nikitaosaulenko/Downloads/Редакторские материалы/Редполитика.md`
- `/Users/nikitaosaulenko/Downloads/Редакторские материалы/Всякое/Federal Plain Language Guidelines.xml`
<!-- END_BLOCK_RUN_INSTRUCTIONS -->
