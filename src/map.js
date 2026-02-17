// START_BLOCK_LOCALIZATION_UTIL
// CONTRACT:
// 1. GOAL: Return localized value for scalar or bilingual object fields.
// 2. INPUT: value: string | {ru: string, en: string}, language: "ru" | "en".
// 3. OUTPUT: Localized string.
// 4. INVARIANTS: Falls back to Russian value when requested language is missing.
export function getLocalizedValue(value, language) {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    return value[language] ?? value.ru ?? value.en ?? "";
  }

  return "";
}
// END_BLOCK_LOCALIZATION_UTIL

// START_BLOCK_ESCAPE_HTML
// CONTRACT:
// 1. GOAL: Escape unsafe HTML characters before rendering dynamic content.
// 2. INPUT: rawText string.
// 3. OUTPUT: Safe HTML string.
// 4. INVARIANTS: Returned string does not contain raw angle brackets or quotes.
export function escapeHtml(rawText) {
  return String(rawText)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
// END_BLOCK_ESCAPE_HTML

// START_BLOCK_CLASS_MAP_UTIL
// CONTRACT:
// 1. GOAL: Build O(1) lookup map for class definitions by class id.
// 2. INPUT: classDefinitions: Array<{id: string}>.
// 3. OUTPUT: Map<string, classDefinition>.
// 4. INVARIANTS: Returned map keys are unique class ids from input.
export function createClassLookup(classDefinitions) {
  return new Map(classDefinitions.map((classDefinition) => [classDefinition.id, classDefinition]));
}
// END_BLOCK_CLASS_MAP_UTIL

// START_BLOCK_VALIDATION_UTIL
// CONTRACT:
// 1. GOAL: Validate city record before rendering marker.
// 2. INPUT: cityRecord object, classLookup map.
// 3. OUTPUT: boolean true when record can be rendered, false otherwise.
// 4. INVARIANTS: Function never throws and logs warning for invalid records.
export function isRenderableCityRecord(cityRecord, classLookup) {
  const hasCoordinates =
    Number.isFinite(cityRecord?.lat) &&
    Number.isFinite(cityRecord?.lng) &&
    cityRecord.lat >= -90 &&
    cityRecord.lat <= 90 &&
    cityRecord.lng >= -180 &&
    cityRecord.lng <= 180;
  const hasClass = classLookup.has(cityRecord?.classId);
  const hasCoreFields = Boolean(cityRecord?.id && cityRecord?.cityName && cityRecord?.countryName);
  const hasStoreList = Array.isArray(cityRecord?.stores);

  if (!hasCoordinates || !hasClass || !hasCoreFields || !hasStoreList) {
    console.warn("[MapRenderer] Invalid CityRecord skipped:", cityRecord);
    return false;
  }

  return true;
}
// END_BLOCK_VALIDATION_UTIL

// START_BLOCK_RENDER_STORES_DROPDOWN
// CONTRACT:
// 1. GOAL: Render a dropdown block with stores for a city.
// 2. INPUT: cityRecord, language, i18n.
// 3. OUTPUT: HTML string for stores UI.
// 4. INVARIANTS: Shows fallback status when no verified links exist.
export function renderStoresDropdown(cityRecord, language, i18n) {
  const verifiedStores = cityRecord.stores.filter((store) => store.urlVerified && store.url);
  const hasVerifiedStores = verifiedStores.length > 0;

  const statusHtml = hasVerifiedStores
    ? ""
    : `<p class="popup-status">${escapeHtml(i18n.popupPartnerStatus)}</p>`;

  const listItemsHtml = cityRecord.stores.length
    ? cityRecord.stores
        .map((store) => {
          const storeName = escapeHtml(store.name);
          const storeNotes = escapeHtml(getLocalizedValue(store.notes, language));
          if (store.urlVerified && store.url) {
            return `<li class="store-item is-verified"><a href="${escapeHtml(store.url)}" target="_blank" rel="noopener noreferrer">${storeName}</a><small>${storeNotes}</small></li>`;
          }

          return `<li class="store-item is-pending"><span>${storeName}</span><small>${storeNotes} · ${escapeHtml(i18n.popupPending)}</small></li>`;
        })
        .join("")
    : `<li class="store-item is-pending"><span>${escapeHtml(i18n.popupNoStores)}</span></li>`;

  return `
    ${statusHtml}
    <details class="stores-dropdown">
      <summary>${escapeHtml(i18n.popupStores)} (${cityRecord.stores.length})</summary>
      <ul>${listItemsHtml}</ul>
    </details>
  `.trim();
}
// END_BLOCK_RENDER_STORES_DROPDOWN

// START_BLOCK_POPUP_UTIL
// CONTRACT:
// 1. GOAL: Build localized popup HTML for a city marker.
// 2. INPUT: cityRecord, classDefinition, language, i18n.
// 3. OUTPUT: HTML string for Leaflet popup.
// 4. INVARIANTS: Output includes localized city, country, class, scenario, and stores dropdown.
export function buildPopupHtml(cityRecord, classDefinition, language, i18n) {
  const city = escapeHtml(getLocalizedValue(cityRecord.cityName, language));
  const country = escapeHtml(getLocalizedValue(cityRecord.countryName, language));
  const classLabel = escapeHtml(getLocalizedValue(classDefinition.label, language));
  const scenario = escapeHtml(getLocalizedValue(cityRecord.narrativeTags, language));
  const storesDropdown = renderStoresDropdown(cityRecord, language, i18n);

  return `
    <article class="popup-card">
      <h3>${city}</h3>
      <p><strong>${escapeHtml(i18n.popupCountry)}:</strong> ${country}</p>
      <p><strong>${escapeHtml(i18n.popupClass)}:</strong> ${classLabel}</p>
      <p><strong>${escapeHtml(i18n.popupScenario)}:</strong> ${scenario}</p>
      ${storesDropdown}
    </article>
  `.trim();
}
// END_BLOCK_POPUP_UTIL

// START_BLOCK_MAP_RENDERER_CLASS
export class MapRenderer {
  // CONTRACT:
  // 1. GOAL: Initialize renderer state for map, markers, filtering, and localization.
  // 2. INPUT: mapElementId string, classDefinitions array, language string, i18nDictionary object.
  // 3. OUTPUT: MapRenderer instance with initialized internal registries.
  // 4. INVARIANTS: classLookup and markersByClassId are always defined.
  constructor(mapElementId, classDefinitions, language, i18nDictionary) {
    this.mapElementId = mapElementId;
    this.classDefinitions = classDefinitions;
    this.classLookup = createClassLookup(classDefinitions);
    this.map = null;
    this.markersByClassId = new Map(classDefinitions.map((classDefinition) => [classDefinition.id, []]));
    this.allMarkers = [];
    this.language = language;
    this.i18nDictionary = i18nDictionary;
    this.initialWorldBounds = L.latLngBounds(L.latLng(-55, -170), L.latLng(72, 180));
  }

  // START_BLOCK_INIT_MAP
  // CONTRACT:
  // 1. GOAL: Create Leaflet map with world-friendly default viewport and tile layer.
  // 2. INPUT: No external parameters.
  // 3. OUTPUT: Leaflet map instance stored in this.map.
  // 4. INVARIANTS: Map instance exists after call and supports pan/zoom.
  initMap() {
    this.map = L.map(this.mapElementId, {
      minZoom: 2,
      worldCopyJump: true,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(this.map);

    this.map.fitBounds(this.initialWorldBounds, { padding: [20, 20] });
  }
  // END_BLOCK_INIT_MAP

  // START_BLOCK_RENDER_MARKERS
  // CONTRACT:
  // 1. GOAL: Render validated city records as class-colored markers with localized popups.
  // 2. INPUT: cityRecords array.
  // 3. OUTPUT: Markers added to map and internal registries.
  // 4. INVARIANTS: Each rendered marker stores cityRecord reference for future refresh.
  renderCityMarkers(cityRecords) {
    cityRecords.forEach((cityRecord) => {
      if (!isRenderableCityRecord(cityRecord, this.classLookup)) {
        return;
      }

      const classDefinition = this.classLookup.get(cityRecord.classId);
      const marker = L.circleMarker([cityRecord.lat, cityRecord.lng], {
        radius: 7,
        color: "#101e34",
        weight: 1,
        fillColor: classDefinition.color,
        fillOpacity: 0.88,
      });

      marker.__cityRecord = cityRecord;
      marker.bindPopup(
        buildPopupHtml(cityRecord, classDefinition, this.language, this.i18nDictionary[this.language]),
      );
      marker.addTo(this.map);

      this.allMarkers.push(marker);
      this.markersByClassId.get(cityRecord.classId).push(marker);
    });
  }
  // END_BLOCK_RENDER_MARKERS

  // START_BLOCK_REFRESH_POPUPS
  // CONTRACT:
  // 1. GOAL: Rebuild popup content for all markers after language changes.
  // 2. INPUT: No external parameters.
  // 3. OUTPUT: All popups display content in current language.
  // 4. INVARIANTS: Marker identity and visibility remain unchanged.
  refreshPopups() {
    const i18n = this.i18nDictionary[this.language];
    this.allMarkers.forEach((marker) => {
      const cityRecord = marker.__cityRecord;
      const classDefinition = this.classLookup.get(cityRecord.classId);
      const popupHtml = buildPopupHtml(cityRecord, classDefinition, this.language, i18n);
      marker.bindPopup(popupHtml);
    });
  }
  // END_BLOCK_REFRESH_POPUPS

  // START_BLOCK_SET_LANGUAGE
  // CONTRACT:
  // 1. GOAL: Update renderer language and refresh marker popups.
  // 2. INPUT: language string.
  // 3. OUTPUT: Renderer state reflects selected language.
  // 4. INVARIANTS: Only supported languages are accepted.
  setLanguage(language) {
    if (!this.i18nDictionary[language]) {
      return;
    }

    this.language = language;
    this.refreshPopups();
  }
  // END_BLOCK_SET_LANGUAGE

  // START_BLOCK_SYNC_FILTERS
  // CONTRACT:
  // 1. GOAL: Toggle marker visibility based on active class ids.
  // 2. INPUT: activeClassIds Set<string>.
  // 3. OUTPUT: Map state updated with visible/hidden markers.
  // 4. INVARIANTS: Markers for active classes are on map, inactive classes are removed.
  setActiveClasses(activeClassIds) {
    this.markersByClassId.forEach((markers, classId) => {
      const shouldBeVisible = activeClassIds.has(classId);
      markers.forEach((marker) => {
        const isOnMap = this.map.hasLayer(marker);
        if (shouldBeVisible && !isOnMap) {
          marker.addTo(this.map);
        }
        if (!shouldBeVisible && isOnMap) {
          this.map.removeLayer(marker);
        }
      });
    });
  }
  // END_BLOCK_SYNC_FILTERS

  // START_BLOCK_VISIBLE_MARKERS
  // CONTRACT:
  // 1. GOAL: Return currently visible markers.
  // 2. INPUT: No external parameters.
  // 3. OUTPUT: Array of visible marker layers.
  // 4. INVARIANTS: Returned markers are subset of allMarkers.
  getVisibleMarkers() {
    return this.allMarkers.filter((marker) => this.map.hasLayer(marker));
  }
  // END_BLOCK_VISIBLE_MARKERS

  // START_BLOCK_VISIBLE_COUNT
  // CONTRACT:
  // 1. GOAL: Return count of visible markers.
  // 2. INPUT: No external parameters.
  // 3. OUTPUT: number.
  // 4. INVARIANTS: Output equals getVisibleMarkers().length.
  getVisibleCount() {
    return this.getVisibleMarkers().length;
  }
  // END_BLOCK_VISIBLE_COUNT

  // START_BLOCK_FIT_TO_VISIBLE
  // CONTRACT:
  // 1. GOAL: Fit map bounds to visible markers or fallback to world bounds.
  // 2. INPUT: No external parameters.
  // 3. OUTPUT: Viewport adjusted on Leaflet map instance.
  // 4. INVARIANTS: Map remains stable even when zero markers are visible.
  fitToVisibleMarkers() {
    const visibleMarkers = this.getVisibleMarkers();
    if (visibleMarkers.length === 0) {
      this.map.fitBounds(this.initialWorldBounds, { padding: [20, 20] });
      return;
    }

    const featureGroup = L.featureGroup(visibleMarkers);
    this.map.fitBounds(featureGroup.getBounds(), {
      padding: [30, 30],
      maxZoom: 5,
    });
  }
  // END_BLOCK_FIT_TO_VISIBLE
}
// END_BLOCK_MAP_RENDERER_CLASS
