---
id: FirstMod
title: First Real Mod
sidebar_label: First Real Mod
---

Delete Class1.cs from your project <br/>
Create new files named TestMod.cs, TestBehaviour.cs <br/>
Replace their content with code below. <br/>

**Result:** <br/>
Text on Exit button in Main Menu will be animated.

**How it works:** <br/>
Mods are loaded before any scene is loaded. <br/>
This particular mod hooks into "sceneLoaded" event. <br/>
When the scene is loaded, callback method is called <br/>
This method tries to find "Exit Button" <br/>
When it finds it, it attaches TestBehaviour to it. <br/>
TestBehaviour finds Text element on the button and animates character spacing. <br/>