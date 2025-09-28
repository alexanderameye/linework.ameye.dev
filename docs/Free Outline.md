---
permalink: free-outline/
---

Free Outline is a free package that provides a sample of what the full version of Linework can do.

This guide describes how to install and set up the Free Outline package for your Unity Project.

> [!question] Linework Lite
>
> Are you using the paid package `Linework: Outlines and Edge Detection`? See [[1 Projects/Linework/Docs/Installation Guide|Installation Guide]] instead.
>
> Are you using the free package `Free Outline`? Go ahead.

> [!success] Compatibility
>
> Free Outline is compatible with **Unity 2022.3 and Unity 6** in combination with the **Universal Render Pipeline**. Other combinations are not supported. See [[1 Projects/Linework/Docs/Support/Compatibility|Compatibility]] for more information.

You can download Free Outline from the Unity Asset Store.

[https://assetstore.unity.com/free-outline](https://assetstore.unity.com/packages/vfx/shaders/free-outline-326925?aid=1011l3n8v&pubref=docs)

<iframe src="https://assetstore.unity.com/linkmaker/embed/package/326925/widget-wide?aid=1011l3n8v" style="width:100%; height:130px; border:0px;"></iframe>

Before using Free Outline, review the following license agreement.

> [!info] License Agreement
>
> The source code included with this asset can be freely modified to suit your needs. However, please adhere to the following restrictions:
> - Do **not** upload the source code to any public repository (e.g., GitHub). You may omit the files or keep the repository private.
> - Do **not** use any part of this source code in new or existing publications on the Asset Store.
> - Do **not** resell the source code or the compiled version of it, either in full or in part. You can include the compiled version of the source code as an integrated component of your game.
>
> Redistribution of Free Outline is **not** allowed. If you obtained a copy through other channels than the Asset Store, please respect my work of developing/maintaining Free Outline by obtaining a legitimate copy from the Asset Store.

## Installing the package

See [[[1 Projects/Linework/Docs/Installation Guide|Installation Guide]]. The installation process for Free Outline is the same as for Linework (other than the package names being different).

## Updating the package

To update Linework, see [https://docs.unity3d.com/Manual/upm-ui-update2.html](https://docs.unity3d.com/Manual/upm-ui-update2.html).

## Removing the package

To remove Linework, see [https://docs.unity3d.com/Manual/upm-ui-remove.html](https://docs.unity3d.com/Manual/upm-ui-remove.html).

## Adding an outline renderer

Outlines in Linework are rendered using renderer features. Renderer features are the way to add render effects in projects using the Universal Render Pipeline. To add an outline, open the *Universal Renderer Data* asset of your project, click on *Add Renderer Feature* and select the type of outline that you would like to add.

> [!info] Free Outline
>
> In the free version of Linework, you can only select the `Free Outline` renderer feature type. The rest of this guide still applies, but you will be using the `Free Outline` renderer feature type.

![[add_outline_renderer_feature.png]]

## Adding outline settings

Each outline effect stores its settings in a separate object that you can create somewhere in your Assets folder. You can use the *Create* button on the renderer feature to create these settings automatically. This will also automatically open the settings for you.

![[add_outline_settings.png|500]]

 After creating the settings, make sure that they are assigned in the settings slot in the inspector of the renderer feature. When the settings are assigned, an *Open* button appears which you can use to quickly open the settings.

![[set_outline_settings.png]]

## Adding an outline

With the outline settings opened, you can start adding outlines. Click on *Add Outline* to add an outline. By default, the outline will be applied to the whole scene. See [[1 Projects/Linework/Docs/Features/Outline Layers|Outline Layers]] for information on how to activate outlines for specific objects only.

![[added_outline.png]]

In Free Outline, you will be using the free outline type which is based on `Fast Outline` in the paid version of Linework. You can check out that page for more information.

- [[1 Projects/Linework/Docs/Features/Outlines/Fast Outline|Fast Outline]]
