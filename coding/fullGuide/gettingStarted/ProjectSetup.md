---
id: ProjectSetup
title: Project Setup
sidebar_label: Project Setup
slug: /guides/gettingStarted/ProjectSetup
---

## Project Setup

### Installing the SDK

Now that you have created your project it's not just take off and run quite yet. However you are very close. Next up open up your editor to `Tools -> NuGet Package Manager -> Manage NuGet Packages for Solution...` In the top left of this new menu select `Browse` and Search for `Volcanoids` in the Search Bar. Select the `VolcanoidsSDK` Package by `MelodicAlbuild, LordGregory` On the right in the properties for this package select the checkbox for your current project and hit install where version is set to Latest Stable. And with that you have installed the Volcanoids Modding SDK.

### Adding your References

From the [Getting Started](./GettingStarted.md) open your Volcanoids Installation Folder. Open `Volcanoids_Data` and then `Managed`. Back in your Project right click the CSProject file and go to `Add -> Project Reference` and select Browse. Go to this Managed folder. Select the following files:

```txt
Assembly-CSharp.dll
com.unity.multiplayer-hlapi.Runtime.dll

Rock.Base.dll
Rock.IL.dll
Rock.Unity.dll
Rock.Unity.VideoCapture.dll
```

And then any file that has the `Unity` Prefix, or the `UnityEngine` Prefix. This is almost every file past `System.Xml.XPath.XDocument.dll` If you sort by name.

### Writing in your Build Events

Right Click on your CSProject File and select Properties. Then select Build Events. In the `Post-build event command line` paste the following code.

```bash
mkdir "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"
copy "$(TargetPath)" "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"
```

And with this it will make and copy your mod to the mods folder every time you build your mod!

### Congratulations
After 4 Guide Documents you have completed the setup for modding Volcanoids. Now in the final guide for this section we will create the base mod for your game, Unfortunatly there will be nothing added to the game yet. We will be covering that in a later guide!