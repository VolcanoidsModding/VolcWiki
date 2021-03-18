module.exports = {
  codingSidebar: [
    {
      type: "doc",
      id: "Master",
    },
    {
      type: "category",
      label: "Guides",
      items: [
          {
              type: 'doc',
              id: 'fullGuide/Introduction'
          },
          {
              type: "category",
              label: "Getting Started",
              items: [],
          },
          {
              type: "category",
              label: "Simple Modding",
              items: []
          },
          {
              type: "category",
              label: "Advanced Modding",
              items: []
          }
      ]
    },
    {
      type: "category",
      label: "Snippits",
      items: ['snippits/EditingQuests', 'snippits/StationUIText']
    },
    {
      type: "category",
      label: "References",
      items: [
        {
          type: "doc",
          id: "reference/ItemIDs",
        },
        {
          type: "doc",
          id: "reference/ModuleIDs",
        },
        {
          type: "doc",
          id: "reference/RecipeIDs",
        },
        {
          type: "doc",
          id: "reference/RecipeTimes",
        },
        {
          type: "doc",
          id: "reference/ItemStacks",
        },
        {
          type: "doc",
          id: "reference/QuestOrder",
        },
        {
          type: "category",
          label: "GUID Code",
          items: ["reference/GUID/ItemGUIDs", "reference/GUID/ModuleGUIDs", "reference/GUID/RecipeGUIDs"],
        },
      ],
    },
  ],
  officialGuide: [
    {
      type: "doc",
      id: "Master",
    },
    {
      type: "category",
      label: "Guide",
      items: [
        "officialGuide/Info",
        "officialGuide/RequiredTools",
        "officialGuide/ProjectSetup",
        "officialGuide/BuildRun",
        "officialGuide/FirstMod",
        "officialGuide/Debugging",
        "officialGuide/GameModding",
        "officialGuide/FinalWords",
      ],
    },
  ],
};
