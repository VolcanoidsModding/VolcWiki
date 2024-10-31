---
slug: creationguide
title: Creation Guide
authors: MelodicAlbuild
tags: [modding, creationguide, gearbox]
---

:::info
Table of Contents are Auto Generated with any field that has at least one # and no more than 3.
:::

Creating a new Doc is very simple.

<!-- truncate -->

## File Creation

- Create a Markdown File for your doc in the docs folder.
- Paste the Following Header into the markdown file and fill it in:
```
---
id: FILE_ID
title: DISPLAYED_TITLE
sidebar_label: DISPLAYED_LABEL
---
```
- In the proper sidebars.js file insert your id in single quotes, in the array of the section you want it to display in. keep in mind if it is not in a category of only documents you have to use this format

```txt
{
    type: "doc",
    id: "DOCUMENT_ID"
}
```

- Save and push both and your changes will appear in 5-10 minutes on the public site.

## Header Information
- id, The ID that you paste into the sidebars.js, also the stub in the url after `docs/`
- title, The Title that appears at the top of your file on the live webpage
- sidebar_label, The Label that appears in the sidebar of the entire webpage.
- slug, OPTIONAL This allows you to customize the base path of the document. Don't touch if you don't understand it.