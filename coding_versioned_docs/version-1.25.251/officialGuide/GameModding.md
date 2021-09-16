---
id: GameModding
title: Game Modding
sidebar_label: Game Modding
---

**Startup**<br/>
When your mod loads, no scene, not even Main Menu will be loaded.<br/>
Most mods affecting gameplay need to do something when actual game starts.<br/>
Easiest way to hook into that is by using SceneManager.sceneLoaded event. Don't forget to add "using UnityEngine.SceneManagement;" to the top of the script.

In reaction to scene load, you can check whether loaded scene name is "Island" or "MainMenu".<br/>
If you need to run something every frame, you can create new GameObject and attach a script to it with Update method (like in example above).

**Player and drillship**<br/>
Player is available through Player.Local, make sure to check it for null, because player is not available when the game is loaded, it's spawned short after that. To access player drillship use TrainCrewMember and PrimaryDrillship, also check for null, because player might not have drillship yet.

```csharp
if (Player.Local.TryGetComponent(out TrainCrewMember member) && member.PrimaryDrillship != null)
{
    var trainUpgrades = member.PrimaryDrillship.GetComponent<TrainUpgrades>();
}
```

**Game data**
Many mods need to modify game data, typical scenario is to increase speed of the drillship, change number of core slots for each upgrade or modify some recipes. Game data can be accessed through GameResources class.

You can use VS2019 autocomplete, ILSpy or other decompiler to discover what's available there.<br/>
Make sure to access game data after "Island" scene is loaded. Game data are not available in main menu.

To modify concrete item, you'll probably need to know its "name". You can use Debug.Log to write name of all items / recipes into log file or you can use debugger and inspect variables (both approaches are mentioned above).

[Item list](https://paste2.org/IUG10kcI)<br/>
[Item categories](https://paste2.org/X6vXNye8)<br/>
[Recipe list](https://paste2.org/GVh1peUs)<br/>
[Recipe category list](https://paste2.org/eGsnc33U)<br/>
[Crafting upgrades](https://paste2.org/dxv6cVIv)

```csharp
private void OnSceneLoaded(Scene arg0, LoadSceneMode arg1)
{
    if (arg0.name == "Island")
    {
        var tracksItems = GameResources.Instance.Items.OfType<TrainTracksItemDefinition>();
        foreach (var tracks in tracksItems)
        {
            if (tracks.name == "TracksT1_Basic")
            {
                tracks.SurfaceMovementSpeed *= 5;
            }
        }
    }
}
```

**Loading sprites from PNG**<br/>
You can use this method to load PNG icon from Mods folder. Icon can be assigned to newly created item, more information below.

```csharp
public Sprite LoadSprite(string iconpath)
{
    var path = System.IO.Path.Combine(Application.persistentDataPath, "Mods", iconpath);
    var bytes = System.IO.File.ReadAllBytes(path);

    var texture = new Texture2D(512, 512, TextureFormat.ARGB32, true);
    texture.LoadImage(bytes);

    var sprite = Sprite.Create(texture, new Rect(Vector2.zero, new Vector2(texture.width, texture.height)), new Vector2(0.5f, 0.5f), texture.width, 0, SpriteMeshType.FullRect, Vector4.zero, false);
    return sprite;
}
```

**Create new game data**<br/>
It's possible to create new data, like new items, recipes, modules and more. Here's example, comments in the code provide explanation.

```csharp
private void OnSceneLoaded(Scene arg0, LoadSceneMode arg1)
{
    if (arg0.name == "Island")
    {
        // Get some items and a copper ingot worktable recipe
        var coal = GameResources.Instance.Items.FirstOrDefault(s => s.name == "CoalOre");
        var titanium = GameResources.Instance.Items.FirstOrDefault(s => s.name == "TitaniumIngot");
        var copperIngotRecipe = GameResources.Instance.Recipes.FirstOrDefault(s => s.name == "CopperIngotWorktableRecipe");

        // Create new recipe
        var recipe = ScriptableObject.CreateInstance<Recipe>();
        recipe.name = "MyRecipe";
        recipe.Inputs = new InventoryItemData[] { new InventoryItemData { Item = coal, Amount = 2 } };
        recipe.Output = new InventoryItemData { Item = titanium, Amount = 1 };
        recipe.RequiredUpgrades = new ItemDefinition[0];

        // Copy categories from copper ingot worktable recipe, this will make it craftable in worktable as well
        recipe.Categories = copperIngotRecipe.Categories.ToArray();

        // Recipe needs stable GUID across games to work with saves
        // This guid was generated through Visual studio, Tools, Generate GUID, dashes were removed
        var guid = GUID.Parse("B0269753FFDA43F6997EE41855B2F2D2");

        // Not ideal, will try to make is more simple in next version
        typeof(Definition).GetField("m_assetId", BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance).SetValue(recipe, guid);

        // Add recipe among runtime assets so game knows about them
        // All will try to make it more simple in next update
        AssetReference[] assets = new AssetReference[] { new AssetReference() { Object = recipe, Guid = guid, Labels = new string[0] } };
        RuntimeAssetStorage.Add(assets, default);
    }
}
```

**Item name and description**<br/>
Assigning item name and description is not directly possible. It possible only through reflection. This will be fixed in next update, meanwhile use this workaround.

```csharp
public static void InitializeLocalizedString<T>(ref T str)
    where T : struct, ISerializationCallbackReceiver
{
    str.OnAfterDeserialize();
}

public static ItemDefinition PrepareItem(string name, string description)
{
    var item = ScriptableObject.CreateInstance<ItemDefinition>();
    LocalizedString nameStr = name;
    LocalizedString descStr = description;
    InitializeLocalizedString(ref nameStr);
    InitializeLocalizedString(ref descStr);

    typeof(ItemDefinition).GetField("m_name", BindingFlags.NonPublic | BindingFlags.Instance).SetValue(item, nameStr);
    typeof(ItemDefinition).GetField("m_description", BindingFlags.NonPublic | BindingFlags.Instance).SetValue(item, descStr);
    return item;
}
```

Final Result
![Final Result](/img/joinMeKenobi.png)