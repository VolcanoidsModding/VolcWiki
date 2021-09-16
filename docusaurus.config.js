/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Volcanoids Modding Wiki",
  tagline: "The Modding Hub for Volcanoids",
  url: "https://modding.volcanoids.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/ModdingCOG.ico",
  organizationName: "VolcanoidsModding", // Usually your GitHub org/user name.
  projectName: "VolcWiki", // Usually your repo name.
  themeConfig: {
    //   announcementBar: {
    //       id: 'support_us', // Any value that will identify this message.
    //       content:
    //           'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //       backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //       textColor: '#091E42', // Defaults to `#000`.
    //       isCloseable: false, // Defaults to `true`.
    //   },
    prism: {
      additionalLanguages: ["csharp", "bash"],
    },
    navbar: {
      title: "Volcanoids Modding Wiki",
      logo: {
        alt: "Wiki Logo",
        src: "img/ModdingCOG.ico",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Installing Mods",
          position: "left",
        },
        {
          to: "unity/",
          activeBasePath: "unity",
          label: "Unity",
          position: "left",
        },
        {
          to: "coding/",
          activeBasePath: "coding",
          label: "Coding",
          position: "left",
        },
        //{ to: "blog", label: "Blog", position: "left" },
        {
          type: "docsVersionDropdown",

          //// Optional
          position: "right",
          // Add additional dropdown items at the beginning/end of the dropdown.
          dropdownItemsBefore: [],
          dropdownItemsAfter: [],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: "unity",
        },
        {
          href: "https://github.com/VolcanoidsModding",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installing Mods",
              to: "docs/",
            },
            {
              label: "Unity",
              to: "unity/",
            },
            {
              label: "Coding",
              to: "coding/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/volcanoids",
            },
            {
              label: "Discord",
              href: "https://discord.gg/volcanoids",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/volcanoids",
            },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/VolcanoidsModding",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Volcanoids Modding Wiki`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/VolcanoidsModding/VolcWiki/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "coding",
        path: "coding",
        routeBasePath: "coding",
        sidebarPath: require.resolve("./sidebarsCoding.js"),
        editUrl: "https://github.com/VolcanoidsModding/VolcWiki/blob/main",
        includeCurrentVersion: true,
        disableVersioning: false,
        lastVersion: "current",
        versions: {
          current: {
            label: "1.26.111",
            path: "",
          },
          "1.25.251": {
            label: "1.25.251",
            path: "coding-1.24.251",
          },
          "1.25.175": {
            label: "1.25.175",
            path: "coding-1.24.175",
          },
          "1.24.515.0": {
            label: "1.24.515",
            path: "coding-1.24.515",
          },
          "1.24.471.0": {
            label: "1.24.471",
            path: "coding-1.24.471",
          },
        },
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "unity",
        path: "unity",
        routeBasePath: "unity",
        sidebarPath: require.resolve("./sidebarsDevelopment.js"),
        editUrl: "https://github.com/VolcanoidsModding/VolcWiki/blob/main",
        includeCurrentVersion: true,
        disableVersioning: false,
        lastVersion: "current",
        versions: {
          current: {
            label: "1.26.111.0",
            path: "",
          },
        },
      },
    ],
  ],
};
