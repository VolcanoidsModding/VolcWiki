---
id: Manifest
title: The Mod Manifest
sidebar_label: The Mod Manifest
slug: /coding/guides/gettingStarted/Manifest
sidebar_position: 6
---

## The Mod Manifest
This is a file used by the game to determine the load order & such.<br/>
It is placed in the same directory as you mod (next to the dll) and is named `.manifest.json`.

#### `LoadGroup` (`int32`)
Though technically an enum in the code, but the serializer expects the numeric value here.
- Library = -200
- Framework = -100
- Default = 0
- Late = 100

#### `LoadOrder` (`int32`)
This is used to have more precise control over the exact load position in the specified group. Lower numbers load first.

#### `Version` (`string`)
Currently unused.

#### `AssetBundles` (`string[]`)
This will auto-load any specified asset bundles in the mods' directory.

#### `Assemblies` (`string[]`)
This can be used to override auto-dll loading. By default, the game will look for and load any dlls in the mods' folder.<br/>
You can include this to overwrite the default behavior and specify which dlls should be loaded.