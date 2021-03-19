---
id: Debugging
title: Debugging
sidebar_label: Debugging
---

This is optional step and requires some setup. It allows you to put breakpoint into code of your mod, break Volcanoids execution, inspect / modify variables at runtime and continue execution. <br/>
It's great tool for discovering what is going on in the code and why it's happening.

**Development Builds**<br/>
Debugging requires development builds, these builds are available on "development" Steam beta branch, password is "FuzzyPuma314". These builds might be slightly ahead or behind the public / preview branch.

**Debugging symbols**<br/>
Unity Engine is using Mono runtime, you'll need to convert debugging symbols from PDB to MDB.

Modify Post-Build events to automate PDB to MDB conversion.<br/>
You might need to change UnityPath on the line "SET UnityPath=", depending on where is your Unity installed and what version you have.

```text
mkdir "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"
copy "$(TargetPath)" "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"

SET UnityPath=c:\Program Files\Unity\Hub\Editor\2020.1.5f1
SET MonoPath=%UnityPath%\Editor\Data\MonoBleedingEdge
"%MonoPath%\bin\mono.exe" "%MonoPath%\lib\mono\4.5\pdb2mdb.exe" "$(TargetPath)"
copy "$(TargetPath).mdb" "%userprofile%\appdata\locallow\Volcanoid\Volcanoids\Mods\"
```

**Launch options**<br/>
Attaching debugger requires specific command line arguments.<br/>
Add following to Steam Launch options of Volcanoids: `-player-connection-debug 1`

If you want to debug the loading of your mod, you'll need debugger to be attached at launch<br/>
Add following to Steam Launch options of Volcanoids: `-wait-for-managed-debugger 1`<br/>
At game launch, it will display message box telling you that you can attach debugger now.

**Running**<br/>
When you're done, rebuild your project, start Volcanoids through Steam and attach Unity debugger. Make sure to use "Debug", "Attach Unity Debugger" in Visual Studio menu. Attaching classic debugger to process won't work. Press F9 to put breakpoint on current line in code.

You need to have 'Game Development with Unity' workload installed (part of VS2019), more info at the beginning of the guide in Required tools section.