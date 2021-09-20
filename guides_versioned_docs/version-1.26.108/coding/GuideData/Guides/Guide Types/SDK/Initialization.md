---
id: SDKInit
title: Initializing the SDK
sidebar_label: Initializing the SDK
sidebar_position: 2
slug: /coding/guides/sdk/initialization
---

:::warning
This Guide may not be inline with the current SDK Version. If you have problems check out the SDK API Docs for the default sdk [here](https://sdk.melodicalbuild.me/VolcanoidsSDK/sdk).
:::

Alright. Let's talk SDK! I'm sure you all have done the Onboarding if you have made it to here so let's do the actual setup stuff for the SDK. As explained by the warning above that link is the SDK docs so if you need a direct link to how the functions work behind the scenes. Setting up the SDK involves 2 classes. Both the default `SDK` class and the `Functions` class. Both of these are on the SDK docs page, but I will be writing up 3 new lines we need. Keep in mind if you haven't initialized a GameMod yet for Volcanoids you need to do that first.

Across our entire class we will need the `SDK` Class that we just wrote as it binds some important information to it. Because of that we need a private variable for the SDK. For the Github page I use this:
```cs
private SDK volcSDK;
```

Next up is binding the SDK to an actual SDK instance. To do that we will apply it in our `Load()` method:
```cs
volcSDK = new SDK("YOURMODNAMEHERE", GUID.Parse("YOURGUIDHERE"));
```

And finally we need to bind a functions class. Simply put we can either bind this to a variable in the same way we did the SDK however we have to move the Functions call to the `OnSceneLoaded()` method so it only runs on the Island Scene. An example of both versions are below, just remember your `Functions volcFunctions...` needs to be in the `OnSceneLoaded()` method.

Local Version
```cs
Functions volcFunctions = new Functions(volcSDK);
```

Global Version
```cs
private Functions volcFunctions;

//In private void OnSceneLoaded()
volcFunctions = new Functions(volcSDK);
```

With that you have everything setup to use the Functions and you can use the SDK, Check out the Github below for the code in it's entirety for this guide below!

[Github](https://github.com/VolcanoidsModding/VolcanoidsGuides/tree/main/InitSDK)