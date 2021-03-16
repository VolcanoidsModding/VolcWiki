---
id: BuildRun
title: Building and Running
sidebar_label: Building and Running
---

Copy-paste this script into Class1.cs, build project, and start Volcanoids through Steam

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UnityEngine;

namespace VolcanoidsMod2
{
    public class Class1 : GameMod
    {
        public override void Load()
        {
            Debug.Log("Mod loaded");
        }

        public override void Unload()
        {
        }
    }
}
```

Now open the Log File<br/>
```
%USERPROFILE%\AppData\LocalLow\Volcanoid\Volcanoids\Player.log
```

You should see that your mod has been loaded<br/>
Congratulations, you've just created and run your first Volcanoids mod!

**How it works:**<br/>
When you build your project, it creates DLL file, which is copied by post-build event into Mods directory: `C:\Users\USERNAME\AppData\LocalLow\Volcanoid\Volcanoids\Mods\`

When Volcanoids is started, it looks for any DLL files in Mods dir and loads them. Then it looks for any classes inheriting from "GameMod", creates instances of them and call "Load".

In the Load method, there's statement, which writes into log file: "Mod loaded"