# Skill Assignment For This Project

1. `coding-standards`
- Зона: `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/src/*.js`.
- Задача: чистая структура данных, ясные контракты и предсказуемые состояния.

2. `frontend-patterns`
- Зона: `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/src/app.js`, `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/src/map.js`.
- Задача: устойчивый state management для фильтров, языка и pop-up.

3. `frontend-design`
- Зона: `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/index.html`, `/Users/nikitaosaulenko/Documents/Codex/design/cimoro-urban-belt-map/styles/main.css`.
- Задача: читабельный переключатель языка, аккуратный dropdown магазинов, mobile-first адаптив.

4. `iterative-retrieval`
- Статус: установлен через `npx skillfish add affaan-m/everything-claude-code iterative-retrieval`.
- Протокол применения:
  1) проход Data integrity;
  2) проход UX + language;
  3) проход Regression.

## Auto Assignment For GitHub Pages Preparation

1. `iterative-retrieval` (обязательно)
- Шаг A: проверить структуру (`src/`, `styles/`), пути в `index.html`, импорты в `src/app.js`, отсутствие абсолютных `/src/...` и `/styles/...`.
- Шаг B: внести правки (`.nojekyll`, `AGENTS.md`, `README.md`).
- Шаг C: провести регрессионный smoke-test через локальный HTTP-сервер.

2. `frontend-patterns`
- Проверить, что после правок не ломаются фильтры, карта и переключатель RU/EN.

3. `coding-standards`
- Поддерживать краткие, проверяемые правила эксплуатации проекта в репозитории.
