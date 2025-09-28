---
permalink: installation-guide/
---

This guide describes how to install and set up Linework for your Unity Project.

> [!question] Free Outline
>
> Are you using the free package `Free Outline`? See [[1 Projects/Linework/Docs/Free Outline|Free Outline]] first.
>
> Are you using the paid package `Linework: Outlines and Edge Detection`? Go ahead.

> [!success] Compatibility
>
> Linework is compatible with **Unity 2022.3 and Unity 6** in combination with the **Universal Render Pipeline**. Other combinations are not supported. See [[1 Projects/Linework/Docs/Support/Compatibility|Compatibility]] for more information.

You can download Linework from the Unity Asset Store.

[https://assetstore.unity.com/linework](https://assetstore.unity.com/packages/slug/294140?aid=1011l3n8v&pubref=docs)

<iframe src="https://assetstore.unity.com/linkmaker/embed/package/294140/widget-wide?aid=1011l3n8v" style="width:100%; height:130px; border:0px;"></iframe>

Before using Linework, review the following license agreement.

> [!info] License Agreement
>
> The source code included with this asset can be freely modified to suit your needs. However, please adhere to the following restrictions:
> - Do **not** upload the source code to any public repository (e.g., GitHub). You may omit the files or keep the repository private.
> - Do **not** use any part of this source code in new or existing publications on the Asset Store.
> - Do **not** resell the source code or the compiled version of it, either in full or in part. You can include the compiled version of the source code as an integrated component of your game.
>
> Redistribution of Linework is **not** allowed. If you obtained a copy through other channels than the Asset Store, please respect my work of developing/maintaining Linework by purchasing a legitimate copy from the Asset Store.

## Installing the package

After having obtained a license, the Linework package can be installed through Unity's package manager (*Window > Package Manager*).

![[Installation Guide.png]]

## Updating the package

To update Linework, see [https://docs.unity3d.com/Manual/upm-ui-update2.html](https://docs.unity3d.com/Manual/upm-ui-update2.html).

## Removing the package

To remove Linework, see [https://docs.unity3d.com/Manual/upm-ui-remove.html](https://docs.unity3d.com/Manual/upm-ui-remove.html).

## Checking for compatibility issues

To check for compatibility issues between Linework and your project, open up the compatibility check window (*Window > > Linework > Compatibility*).

Click on the *Check Compatibility* button and see if all checkmarks are green (pass) or white (informational). If not, you can click on any of them to see an explanation.

![[Installation Guide 1.png|400]]

If the result is showing only green checkmarks or white messages, you are good to go! If not, see the [[Known Limitations]] section or [[1 Projects/Linework/Docs/Support/Contact|Contact]] me if you have additional questions.

## Installing samples

Linework comes with some optional samples. You can install these directly from the Package Manager window in Unity (*Window > Package Manager*). To see the list of samples, select the Linework package in the Package Manager window and click the *Samples* tab. Then click *Import* next to any sample name to import it into the current Project.

![[Installation Guide 2.png]]

If you do not see the samples, make sure you are looking at the Linework package from the *In Project* tab and not from the *My Assets* tab. The *My Assets* tab will not contain the samples.
