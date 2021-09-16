---
id: BasicMod
title: Your First Mod
sidebar_label: Your First Mod
slug: /coding/guides/gettingStarted/BasicMod
sidebar_position: 5
---

## The First Mod
Let's make your first mod! Unfortunately nothing fancy will happen yet, all that we will be doing is logging a message when your mod is loaded and changing the text in the main menu for Volcanoids!

### Extensions
The first step in this adventure is to extend your first class with the `GameMod` Class. If you don't know how to do this already it is very simple.

```cs
public class TutorialMod : GameMod
```

With these few characters you now have a functioning GameMod. Visual Studio might throw some errors here so let's fix that.

### Abstracted Classes
The Game Mod class has a few useful Abstracted classes. `Load()` is what we will focus on for now. We will just put some placeholder error throwing in the class. We will remove it later.

:::note
All of the functions you can override are listed below, after the OnSceneLoaded work!
:::

The code for `Load()` should look something like this. 

```cs
public override void Load()
{
    throw new NotImplementedException();
}
```

You might notice that if you build and load your mod now it will just error out. There is no real output or anything yet. So let's add something to it.

### OnSceneLoaded
Load is our entry point to any modding at all. Which means right now when our mod is initialized the `Load()` function is called. Moving forward we won't mess with Load much but keep in mind if you put anything related to assets or asset files here it will not work. Assets and such are not loaded until after the scene is loaded so we can use the OnSceneLoaded trigger. If we add the using statement `using UnityEngine.SceneManagement;` to our usings we can now utilize the OnSceneLoaded functions. To do this let's make a function called `OnSceneLoaded` However this isn't it, we need to add in a few arguments to this function. All we need is the Scene and LoadSceneMode. Your function header should look *EXACTLY* Like this.

```cs
private void OnSceneLoaded(Scene scene, LoadSceneMode loadSceneMode)
```

### Future Proofing
This next step is not needed however this is future proofing, it is the most effective way that can be used. You can just use if statements but we are going to use a switch. To do this we are going to make a switch based on the `scene.name` from our arguments.

#### Volcanoids Scenes
Really quickly let's take a tangent to explain the Volcanoids/Unity scenes. In Unity there are stages or "scenes" where objects are placeable and the game is actually viewed. In the case of Volcanoids we have 2 scenes we can utilize. They are named "MainMenu" and "Island". You will want a case statement for both of them. Keep in mind that Visual Studio throws some very weird errors with these statements but I'll show you how to fix those later. As I mentioned earlier Assets are loaded in the OnSceneLoaded event but it's not in every scene. Just in the Island one. In this case we will want to run all our asset modification code in the Island case statement and any non asset modification code in the Load event. I will only be using MainMenu to change some visuals. In the future I might do buttons and such but for now it's only changing some text.

### Switch and Case
Let's develop that switch. You should already have a switch for `scene.name` now we are just going to make the 2 case statements. And to avoid error, just copy the code below.

```cs
case "MainMenu":
    break;
case "Island":
    break;
```

These break statements do a lot and prevent errors. If you don't understand them, Google will be your best friend rather than me explaining the function of Switch Case break systems. I will quickly break down case though. The switch takes in the `scene.name` and checks all case statements in it for something that matches it's switch function. So if `scene.name == "MainMenu"` then the case statement for "MainMenu" would be run. Same situation for Island, just depends on the `scene.name` variable.

### Updating the Load Scene Event using SceneManager
Using 1 simple line we will actually use the function we just made. In the load event use the `SceneManager.sceneLoaded` property. Then just add equally the OnSceneLoaded function with NO parenthesis. It should look something like this:

```cs
SceneManager.sceneLoaded += OnSceneLoaded;
```

#### WARNING: Run Data Changes Only Once!
When you subscribe to the `sceneLoaded` even as above, this event fires **for every scene that is loaded**! (And every time you load a save, that's loading a 'scene'.)<br/>
This means if you, say, add an items during that event, then reload a save, it will try to add those same items again, throw an exception, cause the load game to fail, and dump players into a 'new' game instead of the one they're trying to load.

To get around this, you must either check to make sure the data change you want to make hasn't been made before:
```cs
if (!GameResources.Instance.Items.Any(i => i.AssetId == myNewItemId)) { /* add my item */ }
```

Or just prevent the whole event from running more than once by unsubscribing to the event once it fires:
```cs
        public override void Load() {
            SceneManager.sceneLoaded += OnSceneLoaded;
        }

        private void OnSceneLoaded(Scene scene, LoadSceneMode loadSceneMode) {
            if (scene.name != "Island") return;
            SceneManager.sceneLoaded -= OnSceneLoaded;

            /* add my item */
        }
```

Usually the latter is enough for most mods, but If not, just remember to check if the thing you're doing has already been done.

# Shortcut `sceneLoaded` Methods:

All of these are the same as doing `OnSceneLoaded(Scene scene, LoadSceneMode loadSceneMode)` and checking the scene name against specific targets.<br/>
They are easier to use as you don't have to worry about the `sceneLoaded` event.

#### `OnMainMenuLoaded`
Runs when `scene.buildIndex == 0`.

#### `OnGameLoaded`
Runs when `scene.name == "Island"`.

#### `OnInitData`
Runs **only once** when `scene.name == "Island"`. You don't need to ensure this alters data only once, it'll do that for you.

### Logging
Now this is an interesting topic. Thanks to the hard work of Greg we will make an improved logging event later on in the guides but for now we will use UnityEngine's built in `Debug.Log` function. In the `Load()` function add in these fancy lines:

```cs
var version   = GetType().Assembly.GetName().Version;
var lastWrite = File.GetLastWriteTime(GetType().Assembly.Location);
Debug.Log($"{GetType()} Loaded: {version}, Build Time: {lastWrite.ToShortTimeString()}");
```

Let me quickly explain this. The `version` variable is just getting the Project Assembly Version from the Project itself. It's just some over glorified XML reading. The `lastWrite` however will be a bit more interesting. `File.GetLastWriteTime` gets the last modified time and date from the file itself. The `GetType()` in that function is just grabbing the Assembly Location, again, fancy XML magic. `Debug.Log` just takes a string and prints it into the `Player.log` in your Volcanoids AppData folder. With this you can build your mod with F6 and load Volcanoids. You don't need to load a game, if your in the Main Menu it will print out. Just check the top of your `Player.log` for this string.

### Visual Magic
To wrap up here let's do one thing visual so you can say you accomplished something. For now I won't explain the complexities of what this does. However in the future I will give a better explanation of the system in use when we cover children and Text guides. For now just copy this line below and put it above your break statement in the MainMenu case. 

```cs
GameObject.Find("EarlyAccess").gameObject.GetComponentInChildren<TMPro.TextMeshProUGUI>().text = "TutorialMod";
```

If you add this line, the text under the Volcanoids Logo should be replaced with TutorialMod, or whatever text you put in place of TutorialMod. Keep in mind you have to rebuild your mod for it to apply.

:::warning
Rebuilding your mod while Volcanoids is open will cause Visual Studio to throw an error! This is because Volcanoids is running and already has an open read handle to the dll. You and others may still read the dll, but it cannot be written to till all the file's read handles are closed.
:::

### Github
Thank you all for following the Getting Started Guide. This is almost the end of the Getting Started Guide Set, All that's left is your Mods Manifest and Publishing your mod! Future guides will start appearing in other categories here soon. Some might even already be available, even if they aren't at the time of writing this. By the next Version update I'll change this though. Now what you all are really here for. The code. The GitHub Link below is a link to the branch of code where you can find all the files and code we used in this guide. Check it out and we will see you in the next guide!

[Github](https://github.com/VolcanoidsModding/VolcanoidsGuides/tree/main/GettingStarted)
