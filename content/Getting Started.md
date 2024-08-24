How to get started using Linework.

Before using Linework, review the following important notes.

> [!important] License Agreement
> The source code included with this asset can be freely modified to suit your needs. However, please adhere to the following restrictions:
> - Do **not** upload the source code to any public repository (e.g., GitHub). You may omit the files or keep the repository private.
> - Do **not** use any part of this source code in new publications on the Asset Store.
> - Do **not** resell the source code, either in full or in part, except as an integrated component of your game.
> 
> Redistribution of Linework is **not** allowed. If you obtained a copy through other channels than the Asset Store, please respect my work of developing/maintaining Linework by purchasing a legitimate copy from the Asset Store.
> 
> https://assetstore.unity.com/packages/vfx/shaders/fullscreen-camera-effects/propixelizer-177877
> 

## Installation
Let's get started. 

> [!warning] Compatibility
> Before installing, carefully review the [[Compatibility]] section to verify that Linework will work with your project.

After importing the asset into Unity, you will be greeted by the support window. In the *Configure* tab, click on the *Detect* button. This will verify that everything is set up correctly in your project. If the support window does not open, you can open it by clicking *Tools > Linework > About and Support*.

![[Pasted image 20240815093810.png|425]]

If the result is showing only green checkmarks, you are good to go! If not, see the [[Troubleshooting and Known Limitations]] section.

## Adding Outlines and Fills

To get started, open the *Universal Renderer Data* asset, click on *Add Renderer Feature* and select the outline/fill effect that you would like to add. Each outline effect stores its settings in a separate object that you can create somewhere in your Assets folder, by right-clicking and selecting *Create > Linework > Outline Settings*. 

![[Pasted image 20240815092821.png]]

Drag the created settings into the object slot of the renderer feature. You can now click the *Open* button to open the settings.

![[Pasted image 20240815092747.png]]

By default, the outline should be applied to the whole scene.

Depending on which outline/fill effect you are using, you can find more detailed information about the different configuration options here.

[[1 Projects/Linework/Docs/Outlines/Fast Outline|Fast Outline]]

[[1 Projects/Linework/Docs/Outlines/Soft Outline|Soft Outline]]

[[1 Projects/Linework/Docs/Outlines/Wide Outline|Wide Outline]]

[[1 Projects/Linework/Docs/Outlines/Edge Detection|Edge Detection]]

[[1 Projects/Linework/Docs/Outlines/Surface Fill|Surface Fill]]
