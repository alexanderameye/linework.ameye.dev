---
permalink: quickstart-guide/
---

This page explains how to quickly start using Linework.

First, install Linework. For information on how to install Linework, see the [[1 Projects/Linework/Docs/Installation Guide|Installation Guide]].

## Adding an outline renderer

Outlines in Linework are rendered using renderer features. Renderer features are the way to add render effects in projects using the Universal Render Pipeline. To add an outline, open the *Universal Renderer Data* asset of your project, click on *Add Renderer Feature* and select the type of outline that you would like to add. 

![[add_outline_renderer_feature.png]]

## Adding outline settings

Each outline effect stores its settings in a separate object that you can create somewhere in your Assets folder. You can use the *Create* button on the renderer feature to create these settings automatically. This will also automatically open the settings for you.

![[add_outline_settings.png|500]]

 After creating the settings, make sure that they are assigned in the settings slot in the inspector of the renderer feature. When the settings are assigned, an *Open* button appears which you can use to quickly open the settings.

![[set_outline_settings.png]]

## Adding an outline

With the outline settings opened, you can start adding outlines. Click on *Add Outline* to add an outline. By default, the outline will be applied to the whole scene. See [[1 Projects/Linework/Docs/Features/Outline Layers|Outline Layers]] for information on how to activate outlines for specific objects only.

![[added_outline.png]]

Depending on which outline effect you are using, you can find more detailed information about the different configuration options here.

- [[1 Projects/Linework/Docs/Features/Outlines/Fast Outline|Fast Outline]]
- [[1 Projects/Linework/Docs/Features/Outlines/Soft Outline|Soft Outline]]
- [[1 Projects/Linework/Docs/Features/Outlines/Wide Outline|Wide Outline]]
- [[1 Projects/Linework/Docs/Features/Outlines/Edge Detection|Edge Detection]]
- [[1 Projects/Linework/Docs/Features/Outlines/Surface Fill|Surface Fill]]







