import { CLASS_DEFINITIONS, CITY_RECORDS, I18N_DICTIONARY } from "./data.js";
import { MapRenderer, getLocalizedValue } from "./map.js";

// START_BLOCK_DOM_CACHE
const dom = {
  map: document.getElementById("map"),
  title: document.getElementById("title-text"),
  intro: document.getElementById("intro-text"),
  visibleLabel: document.getElementById("visible-label"),
  visibleCount: document.getElementById("visible-count"),
  filtersTitle: document.getElementById("filters-title"),
  legendTitle: document.getElementById("legend-title"),
  filters: document.getElementById("filters"),
  legend: document.getElementById("legend"),
  langButtons: Array.from(document.querySelectorAll(".lang-btn")),
};
// END_BLOCK_DOM_CACHE

// START_BLOCK_APP_STATE
/** @type {{activeClassIds: Set<string>, visibleCityCount: number, language: "ru" | "en"}} */
const appState = {
  activeClassIds: new Set(CLASS_DEFINITIONS.map((classDefinition) => classDefinition.id)),
  visibleCityCount: 0,
  language: "ru",
};
// END_BLOCK_APP_STATE

// START_BLOCK_I18N_ACCESS
// CONTRACT:
// 1. GOAL: Return dictionary segment for current language.
// 2. INPUT: No external parameters.
// 3. OUTPUT: Object with UI labels.
// 4. INVARIANTS: Always returns a valid language dictionary.
function getI18n() {
  return I18N_DICTIONARY[appState.language] ?? I18N_DICTIONARY.ru;
}
// END_BLOCK_I18N_ACCESS

// START_BLOCK_RENDER_STATIC_TEXT
// CONTRACT:
// 1. GOAL: Render localized static interface texts.
// 2. INPUT: No external parameters.
// 3. OUTPUT: Headings and labels are updated for active language.
// 4. INVARIANTS: Text rendering is side-effect free outside known UI nodes.
function renderStaticText() {
  const i18n = getI18n();

  dom.title.textContent = i18n.title;
  dom.intro.textContent = i18n.intro;
  dom.visibleLabel.textContent = i18n.visibleLabel;
  dom.filtersTitle.textContent = i18n.filtersTitle;
  dom.legendTitle.textContent = i18n.legendTitle;
  dom.map.setAttribute("aria-label", i18n.mapAriaLabel);
  document.documentElement.lang = appState.language;
}
// END_BLOCK_RENDER_STATIC_TEXT

// START_BLOCK_RENDER_LEGEND
// CONTRACT:
// 1. GOAL: Render legend entries for each class in selected language.
// 2. INPUT: classDefinitions array.
// 3. OUTPUT: Legend nodes inserted into container.
// 4. INVARIANTS: Each legend row has class color and localized text.
function renderLegend(classDefinitions) {
  dom.legend.replaceChildren();

  classDefinitions.forEach((classDefinition) => {
    const item = document.createElement("div");
    item.className = "legend-item";

    const swatch = document.createElement("span");
    swatch.className = "legend-swatch";
    swatch.style.backgroundColor = classDefinition.color;
    swatch.setAttribute("aria-hidden", "true");

    const text = document.createElement("div");
    text.className = "legend-text";

    const strong = document.createElement("strong");
    strong.textContent = getLocalizedValue(classDefinition.label, appState.language);

    const small = document.createElement("small");
    small.textContent = getLocalizedValue(classDefinition.description, appState.language);

    text.append(strong, small);
    item.append(swatch, text);
    dom.legend.append(item);
  });
}
// END_BLOCK_RENDER_LEGEND

// START_BLOCK_RENDER_FILTERS
// CONTRACT:
// 1. GOAL: Render checkbox filters with localized class labels.
// 2. INPUT: classDefinitions array.
// 3. OUTPUT: Checkbox controls mounted into filters container.
// 4. INVARIANTS: Checked states reflect current activeClassIds.
function renderFilters(classDefinitions) {
  dom.filters.replaceChildren();

  classDefinitions.forEach((classDefinition) => {
    const label = document.createElement("label");
    label.className = "filter-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = classDefinition.id;
    checkbox.checked = appState.activeClassIds.has(classDefinition.id);
    checkbox.dataset.classId = classDefinition.id;

    const pill = document.createElement("span");
    pill.className = "filter-pill";
    pill.style.setProperty("--class-color", classDefinition.color);
    pill.textContent = getLocalizedValue(classDefinition.label, appState.language);

    label.append(checkbox, pill);
    dom.filters.append(label);
  });
}
// END_BLOCK_RENDER_FILTERS

// START_BLOCK_UPDATE_VISIBLE_COUNT
// CONTRACT:
// 1. GOAL: Sync visible city metric from map renderer to state and UI.
// 2. INPUT: mapRenderer instance.
// 3. OUTPUT: appState.visibleCityCount and UI count are updated.
// 4. INVARIANTS: Displayed number equals renderer visible markers count.
function updateVisibleCount(mapRenderer) {
  appState.visibleCityCount = mapRenderer.getVisibleCount();
  dom.visibleCount.textContent = String(appState.visibleCityCount);
}
// END_BLOCK_UPDATE_VISIBLE_COUNT

// START_BLOCK_RENDER_LANGUAGE_SWITCH
// CONTRACT:
// 1. GOAL: Reflect active language in switch button states.
// 2. INPUT: No external parameters.
// 3. OUTPUT: Active class toggled for language switch buttons.
// 4. INVARIANTS: Exactly one language button has active state.
function renderLanguageSwitch() {
  dom.langButtons.forEach((button) => {
    const isActive = button.dataset.language === appState.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}
// END_BLOCK_RENDER_LANGUAGE_SWITCH

// START_BLOCK_RENDER_FULL_UI
// CONTRACT:
// 1. GOAL: Re-render all text-dependent UI fragments for selected language.
// 2. INPUT: classDefinitions array.
// 3. OUTPUT: Static labels, legend, filters and language switch are updated.
// 4. INVARIANTS: Filter state remains intact after rerender.
function renderFullUi(classDefinitions) {
  renderStaticText();
  renderLegend(classDefinitions);
  renderFilters(classDefinitions);
  renderLanguageSwitch();
}
// END_BLOCK_RENDER_FULL_UI

// START_BLOCK_BIND_FILTERS
// CONTRACT:
// 1. GOAL: Bind filter interactions and sync map visibility state.
// 2. INPUT: mapRenderer instance.
// 3. OUTPUT: Marker visibility updates after checkbox changes.
// 4. INVARIANTS: Toggling one checkbox affects only one class group.
function bindFilterInteractions(mapRenderer) {
  dom.filters.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    const classId = target.dataset.classId;
    if (!classId) {
      return;
    }

    if (target.checked) {
      appState.activeClassIds.add(classId);
    } else {
      appState.activeClassIds.delete(classId);
    }

    mapRenderer.setActiveClasses(appState.activeClassIds);
    mapRenderer.fitToVisibleMarkers();
    updateVisibleCount(mapRenderer);
  });
}
// END_BLOCK_BIND_FILTERS

// START_BLOCK_BIND_LANGUAGE_SWITCH
// CONTRACT:
// 1. GOAL: Bind language switch controls and refresh map/UI content.
// 2. INPUT: mapRenderer instance.
// 3. OUTPUT: UI and marker popups change language without page reload.
// 4. INVARIANTS: Only supported language values are accepted.
function bindLanguageSwitch(mapRenderer) {
  dom.langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.language;
      if (!nextLanguage || !(nextLanguage in I18N_DICTIONARY) || nextLanguage === appState.language) {
        return;
      }

      appState.language = nextLanguage;
      mapRenderer.setLanguage(appState.language);
      renderFullUi(CLASS_DEFINITIONS);
      updateVisibleCount(mapRenderer);
    });
  });
}
// END_BLOCK_BIND_LANGUAGE_SWITCH

// START_BLOCK_BOOTSTRAP_APP
// CONTRACT:
// 1. GOAL: Bootstrap map app with localized UI and city markers.
// 2. INPUT: No external parameters.
// 3. OUTPUT: Interactive map with filters, legend, language switch, and localized popups.
// 4. INVARIANTS: Initial state is stable and includes all valid city records.
function bootstrapApp() {
  const mapRenderer = new MapRenderer("map", CLASS_DEFINITIONS, appState.language, I18N_DICTIONARY);

  mapRenderer.initMap();
  mapRenderer.renderCityMarkers(CITY_RECORDS);
  mapRenderer.setActiveClasses(appState.activeClassIds);
  mapRenderer.fitToVisibleMarkers();

  renderFullUi(CLASS_DEFINITIONS);
  bindFilterInteractions(mapRenderer);
  bindLanguageSwitch(mapRenderer);
  updateVisibleCount(mapRenderer);
}
// END_BLOCK_BOOTSTRAP_APP

bootstrapApp();
