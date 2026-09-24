export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Villa Location Guadeloupe — Villas de Rêve & Locations Saisonnières avec Piscine en Guadeloupe",
  siteName: "villa-location-guadeloupe.com",
  domain: "villa-location-guadeloupe.com",
  url: "https://villa-location-guadeloupe.com",
  siteUrl: "https://villa-location-guadeloupe.com",
  description: "Sélection exclusive de villas d'exception à louer en Guadeloupe : villas avec piscine à Saint-François et Sainte-Anne, maisons de charme à Deshaies, propriétés pieds dans l'eau et conciergerie privée.",
  siteDescription: "Sélection exclusive de villas d'exception à louer en Guadeloupe : villas avec piscine à Saint-François et Sainte-Anne, maisons de charme à Deshaies, propriétés pieds dans l'eau et conciergerie privée.",
  defaultAuthor: "L'Équipe Villa Location Guadeloupe",
  repo: "jc842/villa-location-guadeloupe",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-flaco",
    fontFamily: "Plus Jakarta Sans, sans-serif",
    colorScheme: "emerald",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "70",
    containerId: "llraLz6i",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      sidebar: { zoneId: 1, format: "300x250" },
      inContent: { zoneId: 2, format: "728x90" },
      stickyMobile: { zoneId: 3, format: "320x100" },
    },
  },

  legal: {
    editor: "Villa Location Guadeloupe Vacations",
    address: "Route de la Pointe des Châteaux, 97118 Saint-François, Guadeloupe",
    contactEmail: "contact@villa-location-guadeloupe.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "saint-francois-sainte-anne", label: "Saint-François & Sainte-Anne" },
    { id: "deshaies-basse-terre", label: "Deshaies & Basse-Terre" },
    { id: "villas-piscine", label: "Villas d'Exception avec Piscine" },
    { id: "conseils-vacances", label: "Conseils Séjour & Conciergerie" },
  ],
};
