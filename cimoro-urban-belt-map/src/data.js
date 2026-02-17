// START_BLOCK_I18N_DICTIONARY
export const I18N_DICTIONARY = {
  ru: {
    title: "Карта городских хабов",
    intro: "Выберите класс. Посмотрите, как хабы распределены по миру.",
    visibleLabel: "Видимые города",
    filtersTitle: "Фильтры классов",
    legendTitle: "Легенда",
    popupCity: "Город",
    popupCountry: "Страна",
    popupClass: "Класс",
    popupScenario: "Сценарий",
    popupStores: "Магазины",
    popupVerified: "Подтверждено",
    popupPending: "Ссылка уточняется",
    popupPartnerStatus: "Подбираем партнёра",
    popupNoStores: "Список формируется",
    mapAriaLabel: "Карта городов Cimoro",
  },
  en: {
    title: "Urban Hub Map",
    intro: "Select a class and view how hubs are distributed globally.",
    visibleLabel: "Visible cities",
    filtersTitle: "Class filters",
    legendTitle: "Legend",
    popupCity: "City",
    popupCountry: "Country",
    popupClass: "Class",
    popupScenario: "Scenario",
    popupStores: "Stores",
    popupVerified: "Verified",
    popupPending: "Link pending verification",
    popupPartnerStatus: "Partner scouting in progress",
    popupNoStores: "Store list is being prepared",
    mapAriaLabel: "Cimoro city map",
  },
};
// END_BLOCK_I18N_DICTIONARY

// START_BLOCK_CLASS_DEFS
export const CLASS_DEFINITIONS = [
  {
    id: "maritime-mountain",
    label: { ru: "Maritime Mountain Metros", en: "Maritime Mountain Metros" },
    color: "#0b6bbd",
    description: {
      ru: "Город у воды, рядом горы, погода быстро меняется.",
      en: "Waterfront cities with nearby mountains and fast weather shifts.",
    },
  },
  {
    id: "alpine-gateway",
    label: { ru: "Alpine Gateways", en: "Alpine Gateways" },
    color: "#2b9348",
    description: {
      ru: "Городские узлы с быстрым доступом в альпийские зоны.",
      en: "Urban hubs with fast access to alpine terrain.",
    },
  },
  {
    id: "high-desert-basin",
    label: { ru: "High-Desert / Mountain Basin Hubs", en: "High-Desert / Mountain Basin Hubs" },
    color: "#c46a0b",
    description: {
      ru: "Сухой климат, дорожная мобильность, резкий температурный контраст.",
      en: "Dry climate hubs with road mobility and sharp temperature contrast.",
    },
  },
  {
    id: "monsoon-edge",
    label: { ru: "Monsoon Edge Megacities", en: "Monsoon Edge Megacities" },
    color: "#c53d5b",
    description: {
      ru: "Мегаполисы с сезонной влажностью и тех-эстетикой в повседневности.",
      en: "Megacities with seasonal humidity and everyday techwear aesthetics.",
    },
  },
  {
    id: "north-atlantic-green",
    label: { ru: "North-Atlantic Urban + Green Escape", en: "North-Atlantic Urban + Green Escape" },
    color: "#147d7b",
    description: {
      ru: "Плотные города, где природа доступна через короткую поездку.",
      en: "Dense cities where nature is reachable through short trips.",
    },
  },
];
// END_BLOCK_CLASS_DEFS

// START_BLOCK_CITY_DATA
export const CITY_RECORDS = [
  {
    id: "vancouver",
    cityName: { ru: "Ванкувер", en: "Vancouver" },
    countryName: { ru: "Канада", en: "Canada" },
    lat: 49.2827,
    lng: -123.1207,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Дождь, набережная, быстрый выезд в горы.",
      en: "Rainy streets, waterfront rhythm, quick mountain access.",
    },
    stores: [
      {
        id: "vancouver-haven",
        name: "HAVEN",
        type: "select",
        url: "https://havenshop.com/locations",
        urlVerified: true,
        notes: {
          ru: "Селект для городской функциональной одежды.",
          en: "Select store with strong urban functional curation.",
        },
      },
    ],
  },
  {
    id: "victoria",
    cityName: { ru: "Виктория", en: "Victoria" },
    countryName: { ru: "Канада", en: "Canada" },
    lat: 48.4284,
    lng: -123.3656,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Морской климат и ежедневная слоистость.",
      en: "Marine climate with everyday layering needs.",
    },
    stores: [
      {
        id: "victoria-mec",
        name: "MEC Victoria",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Подходит для массового теста спроса. Ссылка уточняется.",
          en: "Useful for broad demand testing. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "seattle",
    cityName: { ru: "Сиэтл", en: "Seattle" },
    countryName: { ru: "США", en: "USA" },
    lat: 47.6062,
    lng: -122.3321,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Городской ритм и выход в outdoor за один день.",
      en: "City pace with same-day transition to outdoor activity.",
    },
    stores: [
      {
        id: "seattle-black-diamond",
        name: "Black Diamond Seattle Flagship",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Якорная точка для аудитории alpine/outdoor.",
          en: "Anchor location for alpine and outdoor audiences.",
        },
      },
    ],
  },
  {
    id: "portland",
    cityName: { ru: "Портленд", en: "Portland" },
    countryName: { ru: "США", en: "USA" },
    lat: 45.5152,
    lng: -122.6784,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Слои, велосипед, переменная погода.",
      en: "Layering, bike commuting, variable weather.",
    },
    stores: [
      {
        id: "portland-snow-peak",
        name: "Snow Peak Portland Store",
        type: "brand-store",
        urlVerified: false,
        notes: {
          ru: "Сильный стилистический матч. Ссылка уточняется.",
          en: "Strong style match. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "bergen",
    cityName: { ru: "Берген", en: "Bergen" },
    countryName: { ru: "Норвегия", en: "Norway" },
    lat: 60.3913,
    lng: 5.3221,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Атлантический дождь и повседневная защита от ветра.",
      en: "Atlantic rain and daily wind protection needs.",
    },
    stores: [
      {
        id: "bergen-fjallraven",
        name: "Fjallraven Brand Store Bergen",
        type: "brand-store",
        urlVerified: false,
        notes: {
          ru: "Аудитория близка к практичному outdoor. Ссылка уточняется.",
          en: "Audience aligns with practical outdoor use. Link pending verification.",
        },
      },
      {
        id: "bergen-bergans",
        name: "Bergans Brand Store Bergen",
        type: "brand-store",
        url: "https://www.bergans.com/en/info/customer-service/our-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждённый брендовый магазин в сети Bergans.",
          en: "Verified brand-store network page by Bergans.",
        },
      },
    ],
  },
  {
    id: "stavanger",
    cityName: { ru: "Ставангер", en: "Stavanger" },
    countryName: { ru: "Норвегия", en: "Norway" },
    lat: 58.97,
    lng: 5.7331,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Ветер, побережье и практичные материалы.",
      en: "Windy coast and strong demand for practical materials.",
    },
    stores: [
      {
        id: "stavanger-bergans",
        name: "Bergans Brand Store Stavanger",
        type: "brand-store",
        url: "https://www.bergans.com/en/info/customer-service/our-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждённый store locator бренда.",
          en: "Verified store locator by the brand.",
        },
      },
      {
        id: "stavanger-fjallraven",
        name: "Fjallraven Brand Store Stavanger",
        type: "brand-store",
        urlVerified: false,
        notes: {
          ru: "Точка релевантна. Ссылка уточняется.",
          en: "Store is relevant. Link pending verification.",
        },
      },
      {
        id: "stavanger-norrona",
        name: "Norrøna Concept Store Stavanger",
        type: "concept",
        urlVerified: false,
        notes: {
          ru: "Премиальный соседний сегмент. Ссылка уточняется.",
          en: "Premium adjacent segment. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "glasgow",
    cityName: { ru: "Глазго", en: "Glasgow" },
    countryName: { ru: "Великобритания", en: "United Kingdom" },
    lat: 55.8642,
    lng: -4.2518,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Городская влажность и частая смена условий.",
      en: "Urban humidity and frequent weather shifts.",
    },
    stores: [
      {
        id: "glasgow-end",
        name: "END. (Glasgow)",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Сильная fashion-аудитория. Ссылка уточняется.",
          en: "Strong fashion audience. Link pending verification.",
        },
      },
      {
        id: "glasgow-cotswold",
        name: "Cotswold Outdoor (Glasgow)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Функциональный канал. Ссылка уточняется.",
          en: "Functional retail channel. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "edinburgh",
    cityName: { ru: "Эдинбург", en: "Edinburgh" },
    countryName: { ru: "Великобритания", en: "United Kingdom" },
    lat: 55.9533,
    lng: -3.1883,
    classId: "maritime-mountain",
    narrativeTags: {
      ru: "Ветер и ежедневная потребность в слоях.",
      en: "Wind exposure and daily need for layered clothing.",
    },
    stores: [
      {
        id: "edinburgh-finisterre",
        name: "Finisterre (Edinburgh)",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Релевантный бренд-контекст. Ссылка уточняется.",
          en: "Relevant brand context. Link pending verification.",
        },
      },
      {
        id: "edinburgh-tiso",
        name: "Tiso (Edinburgh)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Подходит для массового теста. Ссылка уточняется.",
          en: "Suitable for broad demand testing. Link pending verification.",
        },
      },
    ],
  },

  {
    id: "zurich",
    cityName: { ru: "Цюрих", en: "Zurich" },
    countryName: { ru: "Швейцария", en: "Switzerland" },
    lat: 47.3769,
    lng: 8.5417,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Городской порядок и быстрый alpine-переход.",
      en: "Urban precision and fast alpine transition.",
    },
    stores: [
      {
        id: "zurich-transa",
        name: "Transa (Zurich)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Точка релевантна. Ссылка уточняется.",
          en: "Store is relevant. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "geneva",
    cityName: { ru: "Женева", en: "Geneva" },
    countryName: { ru: "Швейцария", en: "Switzerland" },
    lat: 46.2044,
    lng: 6.1432,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Дисциплина, премиальный контур, выход в рельеф.",
      en: "Discipline, premium context, and terrain access.",
    },
    stores: [
      {
        id: "geneva-bongenie",
        name: "Bongenie Grieder (Geneve)",
        type: "department-store",
        urlVerified: false,
        notes: {
          ru: "Люкс-контур для гипотезы quiet luxury. Ссылка уточняется.",
          en: "Luxury channel for quiet-luxury testing. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "munich",
    cityName: { ru: "Мюнхен", en: "Munich" },
    countryName: { ru: "Германия", en: "Germany" },
    lat: 48.1351,
    lng: 11.582,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Широкий outdoor-трафик и альпийская логика.",
      en: "Broad outdoor traffic with alpine usage logic.",
    },
    stores: [
      {
        id: "munich-globetrotter",
        name: "Globetrotter (Munchen)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Высокий трафик и широкий спрос. Ссылка уточняется.",
          en: "High traffic and broad demand. Link pending verification.",
        },
      },
      {
        id: "munich-ortovox",
        name: "ORTOVOX Store Munich",
        type: "brand-store",
        urlVerified: false,
        notes: {
          ru: "Премиальный соседний сегмент. Ссылка уточняется.",
          en: "Premium adjacent segment. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "innsbruck",
    cityName: { ru: "Инсбрук", en: "Innsbruck" },
    countryName: { ru: "Австрия", en: "Austria" },
    lat: 47.2692,
    lng: 11.4041,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Город и горы в одном ежедневном цикле.",
      en: "City and mountains in one daily cycle.",
    },
    stores: [
      {
        id: "innsbruck-sportler",
        name: "SPORTLER Alpin (Innsbruck)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Релевантный альпийский канал. Ссылка уточняется.",
          en: "Relevant alpine channel. Link pending verification.",
        },
      },
      {
        id: "innsbruck-black-diamond",
        name: "Black Diamond Innsbruck",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный store locator.",
          en: "Verified via official store locator.",
        },
      },
    ],
  },
  {
    id: "milan",
    cityName: { ru: "Милан", en: "Milan" },
    countryName: { ru: "Италия", en: "Italy" },
    lat: 45.4642,
    lng: 9.19,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Стык моды, функциональности и поездок в рельеф.",
      en: "Intersection of fashion, function, and alpine movement.",
    },
    stores: [
      {
        id: "milan-slam-jam",
        name: "Slam Jam Milano",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Сильный тех/стрит-контур. Ссылка уточняется.",
          en: "Strong tech/street context. Link pending verification.",
        },
      },
      {
        id: "milan-patagonia",
        name: "Patagonia Milano",
        type: "brand-store",
        url: "https://eu.patagonia.com/it/it/patagonia-milano-italy/store_924602777.html",
        urlVerified: true,
        notes: {
          ru: "Подтверждённая брендовая точка.",
          en: "Verified brand store page.",
        },
      },
    ],
  },
  {
    id: "turin",
    cityName: { ru: "Турин", en: "Turin" },
    countryName: { ru: "Италия", en: "Italy" },
    lat: 45.0703,
    lng: 7.6869,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Промышленный ритм и премиальная мода.",
      en: "Industrial rhythm with premium fashion channel.",
    },
    stores: [
      {
        id: "turin-antonioli",
        name: "ANTONIOLI Torino",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Релевантен для premium-сегмента. Ссылка уточняется.",
          en: "Relevant for premium segment. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "vienna",
    cityName: { ru: "Вена", en: "Vienna" },
    countryName: { ru: "Австрия", en: "Austria" },
    lat: 48.2082,
    lng: 16.3738,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Столичный маршрут и структурированный спрос.",
      en: "Capital-city route with structured demand.",
    },
    stores: [
      {
        id: "vienna-steffl",
        name: "Steffl Sports",
        type: "department-store",
        urlVerified: false,
        notes: {
          ru: "Премиальная витрина. Ссылка уточняется.",
          en: "Premium showcase channel. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "ljubljana",
    cityName: { ru: "Любляна", en: "Ljubljana" },
    countryName: { ru: "Словения", en: "Slovenia" },
    lat: 46.0569,
    lng: 14.5058,
    classId: "alpine-gateway",
    narrativeTags: {
      ru: "Компактный город и практичный outdoor-код.",
      en: "Compact city with practical outdoor code.",
    },
    stores: [
      {
        id: "ljubljana-iglu",
        name: "Iglu Sport",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Локальный релевантный канал. Ссылка уточняется.",
          en: "Relevant local channel. Link pending verification.",
        },
      },
    ],
  },

  {
    id: "denver",
    cityName: { ru: "Денвер", en: "Denver" },
    countryName: { ru: "США", en: "USA" },
    lat: 39.7392,
    lng: -104.9903,
    classId: "high-desert-basin",
    narrativeTags: {
      ru: "Road-контекст, сухой климат, температурные качели.",
      en: "Road-oriented usage, dry climate, and thermal contrast.",
    },
    stores: [
      {
        id: "denver-topo",
        name: "Topo Designs Denver Flagship",
        type: "brand-store",
        url: "https://topodesigns.eu/pages/contact-us",
        urlVerified: true,
        notes: {
          ru: "Официальный домен бренда для офлайн-контакта.",
          en: "Official brand domain for retail contact.",
        },
      },
      {
        id: "denver-black-diamond",
        name: "Black Diamond Wilderness Exchange (Denver)",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный store locator.",
          en: "Verified via official store locator.",
        },
      },
    ],
  },
  {
    id: "boulder",
    cityName: { ru: "Боулдер", en: "Boulder" },
    countryName: { ru: "США", en: "USA" },
    lat: 40.015,
    lng: -105.2705,
    classId: "high-desert-basin",
    narrativeTags: {
      ru: "Trail-культура и инструментальный подход к одежде.",
      en: "Trail culture with instrument-like gear behavior.",
    },
    stores: [
      {
        id: "boulder-neptune",
        name: "Neptune Mountaineering",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Культовая точка, ссылка уточняется.",
          en: "Cult outdoor spot, link pending verification.",
        },
      },
      {
        id: "boulder-black-diamond",
        name: "Black Diamond Boulder",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный store locator.",
          en: "Verified via official store locator.",
        },
      },
    ],
  },
  {
    id: "salt-lake-city",
    cityName: { ru: "Солт-Лейк-Сити", en: "Salt Lake City" },
    countryName: { ru: "США", en: "USA" },
    lat: 40.7608,
    lng: -111.891,
    classId: "high-desert-basin",
    narrativeTags: {
      ru: "Связка downtown и горных сценариев.",
      en: "Downtown usage tied to mountain scenarios.",
    },
    stores: [
      {
        id: "slc-cotopaxi",
        name: "Cotopaxi (SLC)",
        type: "brand-store",
        url: "https://www.cotopaxi.com/pages/retail-store",
        urlVerified: true,
        notes: {
          ru: "Официальная страница офлайн-точки.",
          en: "Official retail store page.",
        },
      },
      {
        id: "slc-black-diamond",
        name: "Black Diamond HQ Millcreek / Granary (SLC)",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный store locator.",
          en: "Verified via official store locator.",
        },
      },
    ],
  },
  {
    id: "calgary",
    cityName: { ru: "Калгари", en: "Calgary" },
    countryName: { ru: "Канада", en: "Canada" },
    lat: 51.0447,
    lng: -114.0719,
    classId: "high-desert-basin",
    narrativeTags: {
      ru: "Холодное солнце, ветер, road-мобильность.",
      en: "Cold sun, wind, and road-based mobility.",
    },
    stores: [
      {
        id: "calgary-less17",
        name: "LESS 17",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Релевантный городской селект. Ссылка уточняется.",
          en: "Relevant city select store. Link pending verification.",
        },
      },
    ],
  },

  {
    id: "tokyo",
    cityName: { ru: "Токио", en: "Tokyo" },
    countryName: { ru: "Япония", en: "Japan" },
    lat: 35.6762,
    lng: 139.6503,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Тех-эстетика и плотный городской темп.",
      en: "Techwear aesthetics in dense urban movement.",
    },
    stores: [
      {
        id: "tokyo-goldwin",
        name: "Goldwin Marunouchi",
        type: "brand-store",
        url: "https://www.marunouchi.com/en/tenants/10078/",
        urlVerified: true,
        notes: {
          ru: "Подтверждённая карточка магазина в квартале Marunouchi.",
          en: "Verified tenant page in Marunouchi district.",
        },
      },
      {
        id: "tokyo-and-wander",
        name: "and wander (Tokyo)",
        type: "brand-store",
        url: "https://www.andwander.com/stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный список магазинов.",
          en: "Verified via official store list.",
        },
      },
    ],
  },
  {
    id: "yokohama",
    cityName: { ru: "Иокогама", en: "Yokohama" },
    countryName: { ru: "Япония", en: "Japan" },
    lat: 35.4437,
    lng: 139.638,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Портовый мегаполис и влажный климат.",
      en: "Port megacity with humid seasonal profile.",
    },
    stores: [
      {
        id: "yokohama-good-open-airs",
        name: "GOOD OPEN AIRS myX (Yokohama)",
        type: "outdoor",
        url: "https://www.andwander.com/stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён в партнерском списке and wander.",
          en: "Listed in the and wander partner store list.",
        },
      },
    ],
  },
  {
    id: "osaka",
    cityName: { ru: "Осака", en: "Osaka" },
    countryName: { ru: "Япония", en: "Japan" },
    lat: 34.6937,
    lng: 135.5023,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Трафик мегаполиса и тех-потребление как норма.",
      en: "Megacity traffic with normalized technical wear demand.",
    },
    stores: [
      {
        id: "osaka-and-wander",
        name: "and wander (Osaka)",
        type: "brand-store",
        url: "https://www.andwander.com/stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный список магазинов.",
          en: "Verified via official store list.",
        },
      },
    ],
  },
  {
    id: "kyoto",
    cityName: { ru: "Киото", en: "Kyoto" },
    countryName: { ru: "Япония", en: "Japan" },
    lat: 35.0116,
    lng: 135.7681,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Тихий премиум и повседневная функциональность.",
      en: "Quiet premium positioning with daily functionality.",
    },
    stores: [
      {
        id: "kyoto-goldwin",
        name: "Goldwin Kyoto",
        type: "brand-store",
        url: "https://about.goldwin.co.jp/eng/news/page-11764",
        urlVerified: true,
        notes: {
          ru: "Официальный анонс флагманского магазина.",
          en: "Official announcement of flagship opening.",
        },
      },
      {
        id: "kyoto-and-wander",
        name: "and wander (Kyoto)",
        type: "brand-store",
        url: "https://www.andwander.com/stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный список магазинов.",
          en: "Verified via official store list.",
        },
      },
    ],
  },
  {
    id: "seoul",
    cityName: { ru: "Сеул", en: "Seoul" },
    countryName: { ru: "Южная Корея", en: "South Korea" },
    lat: 37.5665,
    lng: 126.978,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Плотный ритм и высокая чувствительность к коду категории.",
      en: "Dense rhythm and high sensitivity to category codes.",
    },
    stores: [
      {
        id: "seoul-mab",
        name: "MAB Seoul",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Релевантный стокист. Ссылка уточняется.",
          en: "Relevant stockist. Link pending verification.",
        },
      },
      {
        id: "seoul-worksout",
        name: "WORKSOUT (Seoul)",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Городской тех-контекст. Ссылка уточняется.",
          en: "Urban techwear context. Link pending verification.",
        },
      },
      {
        id: "seoul-black-diamond",
        name: "Black Diamond (Seoul)",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный store locator.",
          en: "Verified via official store locator.",
        },
      },
    ],
  },
  {
    id: "taipei",
    cityName: { ru: "Тайбэй", en: "Taipei" },
    countryName: { ru: "Тайвань", en: "Taiwan" },
    lat: 25.033,
    lng: 121.5654,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Влажный климат и активный тех/стрит-сегмент.",
      en: "Humid climate with active tech/street segment.",
    },
    stores: [
      {
        id: "taipei-invincible",
        name: "INVINCIBLE EAST (Taipei)",
        type: "select",
        url: "https://invinciblesp.com/en-global/pages/about",
        urlVerified: true,
        notes: {
          ru: "Официальный сайт бренда/ритейл-сети.",
          en: "Official website of the retail brand network.",
        },
      },
      {
        id: "taipei-plain-me",
        name: "Plain-me (Taipei)",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Точка подтверждена по агрегатору. Ссылка уточняется.",
          en: "Store found via aggregator source. Link pending verification.",
        },
      },
      {
        id: "taipei-planedo",
        name: "Planedo",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Фигурирует как стокист. Физический адрес уточняется.",
          en: "Appears as stockist. Physical location is pending confirmation.",
        },
      },
    ],
  },
  {
    id: "hong-kong",
    cityName: { ru: "Гонконг", en: "Hong Kong" },
    countryName: { ru: "Гонконг", en: "Hong Kong" },
    lat: 22.3193,
    lng: 114.1694,
    classId: "monsoon-edge",
    narrativeTags: {
      ru: "Плотный город, жара и влажность.",
      en: "Dense city with heat and humidity pressure.",
    },
    stores: [
      {
        id: "hong-kong-black-diamond",
        name: "Black Diamond (Ocean Terminal / Mong Kok)",
        type: "brand-store",
        url: "https://blackdiamondequipment.com/pages/retail-stores",
        urlVerified: true,
        notes: {
          ru: "Подтверждён через официальный store locator.",
          en: "Verified via official store locator.",
        },
      },
    ],
  },

  {
    id: "amsterdam",
    cityName: { ru: "Амстердам", en: "Amsterdam" },
    countryName: { ru: "Нидерланды", en: "Netherlands" },
    lat: 52.3676,
    lng: 4.9041,
    classId: "north-atlantic-green",
    narrativeTags: {
      ru: "Велосипед, дождь и ежедневная слоистость.",
      en: "Bike commute, rain, and everyday layering.",
    },
    stores: [
      {
        id: "amsterdam-bever",
        name: "Bever (Amsterdam)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Крупный outdoor-канал. Ссылка уточняется.",
          en: "Major outdoor channel. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "copenhagen",
    cityName: { ru: "Копенгаген", en: "Copenhagen" },
    countryName: { ru: "Дания", en: "Denmark" },
    lat: 55.6761,
    lng: 12.5683,
    classId: "north-atlantic-green",
    narrativeTags: {
      ru: "Скандинавская функциональность и городской commuting.",
      en: "Scandinavian functionality and urban commuting patterns.",
    },
    stores: [
      {
        id: "copenhagen-norse",
        name: "Norse Store",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Релевантный fashion/utility-контур. Ссылка уточняется.",
          en: "Relevant fashion/utility context. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "stockholm",
    cityName: { ru: "Стокгольм", en: "Stockholm" },
    countryName: { ru: "Швеция", en: "Sweden" },
    lat: 59.3293,
    lng: 18.0686,
    classId: "north-atlantic-green",
    narrativeTags: {
      ru: "Скандинавская дисциплина и погодная адаптация.",
      en: "Scandinavian discipline with weather adaptation.",
    },
    stores: [
      {
        id: "stockholm-nitty-gritty",
        name: "Nitty Gritty",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Сильный мультибрендовый контекст. Ссылка уточняется.",
          en: "Strong multi-brand context. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "helsinki",
    cityName: { ru: "Хельсинки", en: "Helsinki" },
    countryName: { ru: "Финляндия", en: "Finland" },
    lat: 60.1699,
    lng: 24.9384,
    classId: "north-atlantic-green",
    narrativeTags: {
      ru: "Холодная влага, город и короткий green escape.",
      en: "Cold humidity, city pace, and short green escape.",
    },
    stores: [
      {
        id: "helsinki-partioaitta",
        name: "Partioaitta (Helsinki)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Практичный outdoor-канал. Ссылка уточняется.",
          en: "Practical outdoor channel. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "london",
    cityName: { ru: "Лондон", en: "London" },
    countryName: { ru: "Великобритания", en: "United Kingdom" },
    lat: 51.5072,
    lng: -0.1276,
    classId: "north-atlantic-green",
    narrativeTags: {
      ru: "Коммьютинг и высокий спрос на городскую функциональность.",
      en: "Commuting pressure and high demand for urban functionality.",
    },
    stores: [
      {
        id: "london-end",
        name: "END. (London)",
        type: "select",
        urlVerified: false,
        notes: {
          ru: "Сильная модная аудитория. Ссылка уточняется.",
          en: "Strong fashion audience. Link pending verification.",
        },
      },
    ],
  },
  {
    id: "dublin",
    cityName: { ru: "Дублин", en: "Dublin" },
    countryName: { ru: "Ирландия", en: "Ireland" },
    lat: 53.3498,
    lng: -6.2603,
    classId: "north-atlantic-green",
    narrativeTags: {
      ru: "Атлантическая влажность и гибрид city/outdoor.",
      en: "Atlantic humidity with city/outdoor hybrid usage.",
    },
    stores: [
      {
        id: "dublin-great-outdoors",
        name: "The Great Outdoors (Dublin)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Релевантный outdoor-канал. Ссылка уточняется.",
          en: "Relevant outdoor channel. Link pending verification.",
        },
      },
      {
        id: "dublin-53-degrees-north",
        name: "53 Degrees North (Dublin)",
        type: "outdoor",
        urlVerified: false,
        notes: {
          ru: "Дополнительная точка того же сценария. Ссылка уточняется.",
          en: "Additional store for the same use-case. Link pending verification.",
        },
      },
    ],
  },
];
// END_BLOCK_CITY_DATA
