---
id: StationUIText
title: Changing Station UI Text
sidebar_label: Changing Station UI Text
slug: /coding/snippits/stationuitext
---

This is for changing the station text in the worldview:<br/>
This example only changes the top bar text, but you can use the enum to change any of the other parts.

```csharp
using System.Linq;
using System.Reflection;
using Base_Mod;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace Mod {
    public class F : GameMod {
        private static readonly GUID   PROD_STATION = GUID.Parse("7c32d187420152f4da3a79d465cbe87a");

        private void OnSceneLoaded(Scene scene, LoadSceneMode loadSceneMode) {
            if (scene.name != "Island") return;
            SceneManager.sceneLoaded -= OnSceneLoaded;

            var prodStationDef = GameResources.Instance.Items.FirstOrDefault(def => def.AssetId == PROD_STATION);
            if (prodStationDef != null) {
                var prefab = prodStationDef.Prefabs[0];

                var uiTextComponents = prefab.GetComponentsInChildren<LocalizedUiText>();
                var topBar           = uiTextComponents[(int) StationUiTextIndices.TOP_BAR];
                topBar.SetText("Alloy Forge");
            }
        }
    }

    public static class Extensions {
        private static readonly FieldInfo LOCALIZED_UI_TEXT_M_TEXT = typeof(LocalizedUiText).GetField("m_text", BindingFlags.NonPublic | BindingFlags.Instance);
        private static readonly FieldInfo LOCALIZED_TEXT_M_TEXT    = typeof(LocalizedText).GetField("m_id", BindingFlags.NonPublic | BindingFlags.Instance);

        // Also sets the `m_id` to `.` so it doesn't get overwritten.
        public static void SetText(this LocalizedUiText localizedUiText, string newText) {
            var mText = (TMP_Text) LOCALIZED_UI_TEXT_M_TEXT.GetValue(localizedUiText);
            if (mText == null) {
                Debug.LogWarning($"mText null for {localizedUiText}");
            } else {
                LOCALIZED_TEXT_M_TEXT.SetValue(localizedUiText, ".");
                mText.text = newText;
            }
        }
    }

    public enum StationUiTextIndices {
        TOP_BAR             = 0,
        MENU_BUTTON         = 1,
        PLUS_BUTTON         = 2,
        MINUS_BUTTON        = 3,
        ON_BUTTON_INACTIVE  = 4,
        ON_BUTTON_ACTIVE    = 5,
        OFF_BUTTON_INACTIVE = 6
    }
}
```