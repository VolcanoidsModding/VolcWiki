---
id: GettingStarted
title: Getting Started
sidebar_label: Getting Started
slug: /guides/gettingStarted/GettingStarted
sidebar_position: 3
---

## The Setup
Beginning with Modding is a step that you can not just skip. These next 2 documents you **MUST** follow or you won't be able to do any of the other guides.

## The Project
Assuming that you have installed Visual Studio like asked to in the previous part of the guide, now we will create the actual project that will be used in the rest of your modding. Open up Visual Studio and hit create new project. Your looking for Class Library **Not the .NET Framework Version**. Hit next and name it whatever you want. Then click next and ensure your using `.NET Standard 2.0`. This part is very important, using another version may break things in the rest of the guide and Volcanoids in general so make sure it's the correct version. You should be greeted with an IDE Screen, unless it's your first time loading it up, in which case you'll have some onboarding to do, just follow the steps and it'll bring you in. 

Okay! Now that you have a project we need to find a folder. Open up your file explorer and find `C:\Program Files (x86)\Steam` or if you download your games to a custom folder go to that folder. This is only the default location. Find the `steamapps\common\Volcanoids` folder. And make a note of this location, you'll need it a lot. (You can also get here from Steam itself: Right click the game -> "Manage" -> "Browse local files")<br/>
Next up on the location list is `C:\Users\YOURUSERNAME\AppData\LocalLow\Volcanoid\Volcanoids`. (Or: `%userprofile%\AppData\LocalLow\Volcanoid\Volcanoids`) Across your time modding Volcanoids this file location will become your best friend. Log files will end up here as well as any core files for the game. 

Other than that just make sure all your files are up to date, Volcanoids is up to date and you have joined the [Volcanoids Discord](https:\\discord.gg\volcanoids).

## Volcanoids Modding Directories

(All of these are subdirs of `LocalLow\Volcanoid\Volcanoids`.)

#### `LocalMods`
This is where you should be putting your mods.
- Each mod needs to be in a subdir. e.g. `LocalMods\MyMod\MyMod.dll`
- Mods here will appear on the "Workshop" list in-game.
- Mods here can also be published to the workshop.

#### `Mods`
This is here for legacy reasons because the "Workshop" menu isn't public yet.
- Each mod needs to be in a subdir. e.g. `LocalMods\MyMod\MyMod.dll`
- Mods here will **not** appear on the "Workshop" list in-game.
- Anything here will load automatically.
- The load order is the folder names sorted alphabetically (asc).

#### `PersistentModData`
This is where `GameMod.PersistentDataDir` (`string`) leads.
- The folder won't be auto-created, make it if you want it: `Directory.CreateDirectory(PersistentDataDir);`
- The actual folder you wind up in is either `_YOURMODNAME` or `4657365845` (your workshop id). e.g. `PersistentModData\_MyMod\sonething_you_saved.json`
- The folder name will be controllable in the future by specifying a unique mod id in the [Manifest](/coding/guides/gettingstarted/manifest/).
