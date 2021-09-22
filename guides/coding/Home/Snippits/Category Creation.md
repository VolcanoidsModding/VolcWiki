---
id: CategoryCreation
title: Category Creation Functions
sidebar_label: Category Creation Functions
slug: /coding/snippits/categorycreation
---

This is just a simple list of category creation functions, They can create Factory, Recipe, Module, and Item Categories.

## Factory
```cs
private void CreateFactoryCategory(string name, string categoryId)
{
    var category = ScriptableObject.CreateInstance<FactoryType>();
    category.name = name;
    var guid = GUID.Parse(categoryId);
    AssetReference[] assets = new AssetReference[] { new AssetReference() { Object = category, Guid = guid, Labels = new string[0] } };
    RuntimeAssetStorage.Add(assets);
}
```

## Module
```cs
private void CreateModuleCategory(string name, string categoryId)
{
    var category = ScriptableObject.CreateInstance<ModuleCategory>();
    category.name = name;
    var guid = GUID.Parse(categoryId);
    AssetReference[] assets = new AssetReference[] { new AssetReference() { Object = category, Guid = guid, Labels = new string[0] } };
    RuntimeAssetStorage.Add(assets);
}
```

## Recipe
```cs
private void CreateRecipeCategory(string name, string categoryId)
{
    var category = ScriptableObject.CreateInstance<RecipeCategory>();
    category.name = name;
    var guid = GUID.Parse(categoryId);
    AssetReference[] assets = new AssetReference[] { new AssetReference() { Object = category, Guid = guid, Labels = new string[0] } };
    RuntimeAssetStorage.Add(assets);
}
```

## Item
```cs
private void CreateItemCategory(string name, string categoryId)
{
    var category = ScriptableObject.CreateInstance<ItemCategory>();
    category.name = name;
    var guid = GUID.Parse(categoryId);
    AssetReference[] assets = new AssetReference[] { new AssetReference() { Object = category, Guid = guid, Labels = new string[0] } };
    RuntimeAssetStorage.Add(assets);
}
```