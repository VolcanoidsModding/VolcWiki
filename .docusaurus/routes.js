
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','362'),
  exact: true,
},
{
  path: '/blog/creationguide',
  component: ComponentCreator('/blog/creationguide','8fb'),
  exact: true,
},
{
  path: '/blog/styleguide',
  component: ComponentCreator('/blog/styleguide','82f'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','293'),
  exact: true,
},
{
  path: '/blog/tags/creationguide',
  component: ComponentCreator('/blog/tags/creationguide','217'),
  exact: true,
},
{
  path: '/blog/tags/gearbox',
  component: ComponentCreator('/blog/tags/gearbox','805'),
  exact: true,
},
{
  path: '/blog/tags/modding',
  component: ComponentCreator('/blog/tags/modding','118'),
  exact: true,
},
{
  path: '/blog/tags/styleguide',
  component: ComponentCreator('/blog/tags/styleguide','8cd'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/coding',
  component: ComponentCreator('/coding','99b'),
  
  routes: [
{
  path: '/coding/',
  component: ComponentCreator('/coding/','7de'),
  exact: true,
},
{
  path: '/coding/fullGuide/Introduction',
  component: ComponentCreator('/coding/fullGuide/Introduction','90b'),
  exact: true,
},
{
  path: '/coding/officialGuide/BuildRun',
  component: ComponentCreator('/coding/officialGuide/BuildRun','e2b'),
  exact: true,
},
{
  path: '/coding/officialGuide/Debugging',
  component: ComponentCreator('/coding/officialGuide/Debugging','15e'),
  exact: true,
},
{
  path: '/coding/officialGuide/FinalWords',
  component: ComponentCreator('/coding/officialGuide/FinalWords','c35'),
  exact: true,
},
{
  path: '/coding/officialGuide/FirstMod',
  component: ComponentCreator('/coding/officialGuide/FirstMod','ddf'),
  exact: true,
},
{
  path: '/coding/officialGuide/GameModding',
  component: ComponentCreator('/coding/officialGuide/GameModding','973'),
  exact: true,
},
{
  path: '/coding/officialGuide/Info',
  component: ComponentCreator('/coding/officialGuide/Info','0a4'),
  exact: true,
},
{
  path: '/coding/officialGuide/ProjectSetup',
  component: ComponentCreator('/coding/officialGuide/ProjectSetup','dec'),
  exact: true,
},
{
  path: '/coding/officialGuide/RequiredTools',
  component: ComponentCreator('/coding/officialGuide/RequiredTools','7a1'),
  exact: true,
},
{
  path: '/coding/reference/GUID/ItemGUIDs',
  component: ComponentCreator('/coding/reference/GUID/ItemGUIDs','047'),
  exact: true,
},
{
  path: '/coding/reference/GUID/ModuleGUIDs',
  component: ComponentCreator('/coding/reference/GUID/ModuleGUIDs','a7a'),
  exact: true,
},
{
  path: '/coding/reference/GUID/RecipeGUIDs',
  component: ComponentCreator('/coding/reference/GUID/RecipeGUIDs','924'),
  exact: true,
},
{
  path: '/coding/reference/GUIDFields',
  component: ComponentCreator('/coding/reference/GUIDFields','d2d'),
  exact: true,
},
{
  path: '/coding/reference/ItemIDs',
  component: ComponentCreator('/coding/reference/ItemIDs','f92'),
  exact: true,
},
{
  path: '/coding/reference/ItemStacks',
  component: ComponentCreator('/coding/reference/ItemStacks','961'),
  exact: true,
},
{
  path: '/coding/reference/ModuleIDs',
  component: ComponentCreator('/coding/reference/ModuleIDs','a09'),
  exact: true,
},
{
  path: '/coding/reference/QuestOrder',
  component: ComponentCreator('/coding/reference/QuestOrder','9b0'),
  exact: true,
},
{
  path: '/coding/reference/RecipeIDs',
  component: ComponentCreator('/coding/reference/RecipeIDs','5fe'),
  exact: true,
},
{
  path: '/coding/reference/RecipeTimes',
  component: ComponentCreator('/coding/reference/RecipeTimes','857'),
  exact: true,
},
{
  path: '/coding/snippits/EditingQuests',
  component: ComponentCreator('/coding/snippits/EditingQuests','b7c'),
  exact: true,
},
{
  path: '/coding/snippits/StationUIText',
  component: ComponentCreator('/coding/snippits/StationUIText','d40'),
  exact: true,
},
]
},
{
  path: '/designing',
  component: ComponentCreator('/designing','6b5'),
  
  routes: [
{
  path: '/designing/',
  component: ComponentCreator('/designing/','bfb'),
  exact: true,
},
]
},
{
  path: '/docs',
  component: ComponentCreator('/docs','396'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','70f'),
  exact: true,
},
{
  path: '/docs/ModList',
  component: ComponentCreator('/docs/ModList','d95'),
  exact: true,
},
{
  path: '/docs/StyleGuide',
  component: ComponentCreator('/docs/StyleGuide','db2'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
