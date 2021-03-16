export default {
  "title": "Volcanoids Modding Wiki",
  "tagline": "The Modding Hub for Volcanoids",
  "url": "https://modding.melodicalbuild.me",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "VolcanoidsModding",
  "projectName": "VolcWiki",
  "themeConfig": {
    "navbar": {
      "title": "Volcanoids Modding Wiki",
      "logo": {
        "alt": "Wiki Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Installing Mods",
          "position": "left"
        },
        {
          "to": "coding/",
          "activeBasePath": "coding",
          "label": "Coding",
          "position": "left"
        },
        {
          "to": "designing/",
          "activeBasePath": "designing",
          "label": "Designing",
          "position": "left"
        },
        {
          "href": "https://github.com/VolcanoidsModding",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Installing Mods",
              "to": "docs/"
            },
            {
              "label": "Coding",
              "to": "coding/"
            },
            {
              "label": "Designing",
              "to": "designing/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/volcanoids"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/volcanoids"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/volcanoids"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/VolcanoidsModding"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Volcanoids Modding Wiki"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "D:\\Coding\\VolcWiki\\sidebars.js",
          "editUrl": "https://github.com/VolcanoidsModding/VolcWiki/blob/main"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "D:\\Coding\\VolcWiki\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "coding",
        "path": "coding",
        "routeBasePath": "coding",
        "sidebarPath": "D:\\Coding\\VolcWiki\\sidebarsCoding.js",
        "editUrl": "https://github.com/VolcanoidsModding/VolcWiki/blob/main"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "designing",
        "path": "designing",
        "routeBasePath": "designing",
        "sidebarPath": "D:\\Coding\\VolcWiki\\sidebarsDesigning.js",
        "editUrl": "https://github.com/VolcanoidsModding/VolcWiki/blob/main"
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};