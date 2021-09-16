---
id: EditingQuests
title: Editing/Creating Quests
sidebar_label: Editing/Creating Quests
slug: /coding/snippits/editingquests
---

Altering quests means altering `QuestManager.m_quests` which is attached to about 1600 game objects and only two of them actually load the quests.<br/>
The code below will filter & set things as needed, just edit the `CreateNewQuestArray` function.<br/>
Change the existing quests (the `oldQuests` parameter) as you wish and return the new altered quest array.


```csharp
        private static Quest[]   alteredQuests;
        private static FieldInfo mQuestsField;

        private void OnSceneLoaded(Scene scene, LoadSceneMode loadSceneMode) {
            if (scene.name != "Island") return;
            SceneManager.sceneLoaded -= OnSceneLoaded;

            mQuestsField = typeof(QuestManager).GetField("m_quests", BindingFlags.NonPublic | BindingFlags.Instance);
            var questManagers = Resources.FindObjectsOfTypeAll<QuestManager>();

            if (questManagers != null) {
                foreach (var questManager in questManagers) {
                    // If we got here quests are enabled.
                    ProcessQuestManager(questManager);
                }
            }
        }

        private void ProcessQuestManager(QuestManager questManager) {
            var quests = (Quest[]) mQuestsField.GetValue(questManager);
            if (quests?.Length > 0) {
                if (alteredQuests != null) {
                    // We've already setup the quests, just overwrite the list.
                    mQuestsField.SetValue(questManager, alteredQuests);
                    return;
                }

                // New quests haven't been setup yet, do so and cache the result.
                alteredQuests = CreateNewQuestArray(quests);

                mQuestsField.SetValue(questManager, alteredQuests);
            }
        }

        // NOTE: You can make this void and just set the array, It works in either way, Returning however is useful in some cases.
        private Quest[] CreateNewQuestArray(Quest[] oldQuests) {
            // TODO: Return your altered quest array here.
            throw new NotImplementedException();
        }
```