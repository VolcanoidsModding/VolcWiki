
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
  component: ComponentCreator('/blog','a4a'),
  exact: true,
},
{
  path: '/blog/creationguide',
  component: ComponentCreator('/blog/creationguide','8fb'),
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
  component: ComponentCreator('/blog/tags/gearbox','c2d'),
  exact: true,
},
{
  path: '/blog/tags/modding',
  component: ComponentCreator('/blog/tags/modding','6b8'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','745'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','70f'),
  exact: true,
},
{
  path: '/docs/EditingQuests',
  component: ComponentCreator('/docs/EditingQuests','e09'),
  exact: true,
},
{
  path: '/docs/GUIDFields',
  component: ComponentCreator('/docs/GUIDFields','476'),
  exact: true,
},
{
  path: '/docs/ItemIDs',
  component: ComponentCreator('/docs/ItemIDs','cf8'),
  exact: true,
},
{
  path: '/docs/ItemStacks',
  component: ComponentCreator('/docs/ItemStacks','f8d'),
  exact: true,
},
{
  path: '/docs/MainDesign',
  component: ComponentCreator('/docs/MainDesign','cde'),
  exact: true,
},
{
  path: '/docs/ModList',
  component: ComponentCreator('/docs/ModList','d95'),
  exact: true,
},
{
  path: '/docs/ModuleIDs',
  component: ComponentCreator('/docs/ModuleIDs','47b'),
  exact: true,
},
{
  path: '/docs/QuestOrder',
  component: ComponentCreator('/docs/QuestOrder','090'),
  exact: true,
},
{
  path: '/docs/RecipeIDs',
  component: ComponentCreator('/docs/RecipeIDs','722'),
  exact: true,
},
{
  path: '/docs/RecipeTimes',
  component: ComponentCreator('/docs/RecipeTimes','bc6'),
  exact: true,
},
{
  path: '/docs/StationUIText',
  component: ComponentCreator('/docs/StationUIText','99c'),
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
