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
                    type: "doc",
                    id: "fullGuide/Introduction",
                },
                {
                    type: "category",
                    label: "Getting Started",
                    items: [
                        "fullGuide/gettingStarted/TheBeginning",
                        "fullGuide/gettingStarted/RequiredTools",
                        "fullGuide/gettingStarted/GettingStarted",
                        "fullGuide/gettingStarted/ProjectSetup",
                        "fullGuide/gettingStarted/BasicMod",
                    ],
                },
                {
                    type: "category",
                    label: "Guide Types",
                    items: [
                        {
                            type: "category",
                            label: "SDK",
                            items: [
                                {
                                    type: "doc",
                                    id: "sdk/SDKOnboarding",
                                },
                                {
                                    type: "category",
                                    label: "Simple Modding",
                                    items: ['sdk/SDKInit', 'sdk/simpleModding/SDKItems'],
                                },
                                {
                                    type: "category",
                                    label: "Advanced Modding",
                                    items: [],
                                },
                            ],
                        },
                        {
                            type: "category",
                            label: "Non-SDK",
                            items: [
                                {
                                    type: "doc",
                                    id: "nonSdk/Onboarding",
                                },
                                {
                                    type: "category",
                                    label: "Simple Modding",
                                    items: [],
                                },
                                {
                                    type: "category",
                                    label: "Advanced Modding",
                                    items: [],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: "category",
            label: "Snippits",
            items: ["snippits/EditingQuests", "snippits/StationUIText"],
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
                    items: [
                        "reference/GUID/ItemGUIDs",
                        "reference/GUID/ModuleGUIDs",
                        "reference/GUID/RecipeGUIDs",
                    ],
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