---
id: SDKItems
title: Making an Item
sidebar_label: Making an Item
slug: /coding/guides/sdk/simple/item
---

:::warning
This Guide may not be inline with the current SDK Version. If you have problems check out the SDK API Docs for creating items [here](https://volcsdk.melodicalbuild.com/VolcanoidsSDK/functions#createitem).
:::

:::tip
Make sure you have initialized the SDK before using this! [Init it here!](../SDKInit)
:::

```cs
public static void InitItems(Functions volcFuncts) {
    volcFuncts.CreateItem("CobaltIngot", 99, "Cobalt Ingot", "A Cobalt Ingot", "069306E234D4499C9F5A3526D0E5C4D3", "TitaniumIngot", "Resources/Ingots/CobaltIngot.png");
}
```