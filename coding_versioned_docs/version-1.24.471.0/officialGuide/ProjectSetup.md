---
id: ProjectSetup
title: Project Setup
sidebar_label: Project Setup
---

**References**<br/>
Create new "Class Library" project in Visual Studio<br/>
Add references to Unity & Volcanoids DLLs

<u>Location</u>: Steam\steamapps\common\Volcanoids\Volcanoids_Data\Managed <br/>
<u>Files</u>: Assembly-CSharp, Rock.*, Unity.*, UnityEngine.*, com.unity.multiplayer-hlapi.Runtime <br/><br/>

References are added by right-clicking project and choosing Add, Reference...<br/>
Browse to location mentioned above and add 'Assembly-CSharp', 'com.unity.multiplayer-hlapi.Runtime' and then all dlls starting with 'Unity' and starting with 'Rock'

**Post-build event**<br/>
Add following post-build events (in project properties), they copy built DLL into Mods dir<br/>
```
mkdir "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"
copy "$(TargetPath)" "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"
```

![VSCode Installer](/img/someOtherImage.png) ![VSCode Installer](/img/thatImage.png)