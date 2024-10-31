---
id: Publishing
title: Publishing The Mod
sidebar_label: Publishing The Mod
slug: /coding/guides/gettingStarted/Publishing
sidebar_position: 7
---

## Publishing
This is relatively straightforward. Once your mod is in `LocalMods`, just hit `Publish` on the mod entry in the "Workshop" menu.<br/>
This will create a `.workshop` text file which contains the workshop id of the published mod. If you accidentally delete this, it's easy enough to recreate.

### Updating a Published Mod
Make sure the `.workshop` exists in the mods' directory. Then just hit 'publish' again. This will update the workshop item.

### Thumbnails
When publishing, the game will look for `.thumb.png` or `.thumb.jpg` in the mods' dir. If found, this will be used as the workshop item's thumbnail image.<br/>
(Note: png has a higher priority than jpg.)