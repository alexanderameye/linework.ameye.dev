**Wide Outline** renders an outline by generating a signed distance field (SDF) for each object and then sampling it. This creates consistent outlines that smoothly follows the shape of an object.

![[Pasted image 20240815110230.png]]

> [!success] Advantages
> - **Smooth and Wide Outlines:** Good for rendering consistent, smooth, wide outlines. Ideal for selection effects.
> - **Performant:** Performant to render wide outlines.
> - **Object Exclusion:** Easily select which specific objects should receive an outline.
> - **Advanced Visuals:** Advanced distance-based effects such as soft glows, multi-colour or animated outlines are possible.

> [!error] Disadvantages
> - **Inner Lines:** No inner lines are rendered. Only outlines.
> - **Multiple Styles:** All outlined objects in the scene will share the same thickness as well as some other settings.


## Configuration
The *Wide Outline Settings* object contains the settings related to this outline effect. Here are all of the settings explained. In Unity, each setting also has a tooltip which shows more information.

***General Settings***
The general settings apply to the outline effect as a whole (with all sub-outlines included).

| **Setting**         | **Description**                                       | **Additional Information**                                                                                       |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Stage               | Controls when the render pass executes.               |                                                                                                                  |
| Show In Scene View  | Sets whether to render the pass in the scene view.    |                                                                                                                  |
| Force Clear Stencil | Force clear the stencil buffer after the render pass. | Should normally not be enabled, but can be used if you notice unexpected interactions between different effects. |
| Debug               | Which stage to render as a debug view.                |                                                                                                                  |

***Shared Outline Settings***
Some settings related to the visuals of the outline are shared between all outlines. This is because **Wide Outline** is a screen-space effect.

| **Setting**                 | **Description**                                                                    | **Additional Information** |
| --------------------------- | ---------------------------------------------------------------------------------- | -------------------------- |
| Width                       | The width of the outline.                                                          |                            |
| Blend                       | How to blend the outline with the rest of the scene.                               |                            |
| Custom Depth (Experimental) | Use a custom depth buffer to determine the occlusion state of the outlined pixels. |                            |
| Occluded Color              | The color of the outline when it is occluded.                                      |                            |

***Outline Settings***
To add an outline, click on the *Add Outline* button. This will add an outline to the list. You can add as many outlines as you want. See the [[Performance]] section for more information about the impact of adding outlines.

![[Pasted image 20240815092105.png]]

Each outline in the list is applied to objects that belong to the specified *Rendering Layer Mask*. See [[Rendering Layer Masks]] for more information about how the layer system works.

The outline settings apply to a specific outline.

| **Setting** | **Description**                                                     | **Additional Information**                          |
| ----------- | ------------------------------------------------------------------- | --------------------------------------------------- |
| Layer       | The rendering layer(s) which will get an outline rendered for them. | See [[Rendering Layer Masks]] for more information. |
| Render      | For which occlusion states to render the outline.                   | See [[Occlusion States]] for more information.      |
| Color       | The color of the outline.                                           |                                                     |

## Custom Depth Buffer (experimental)
The **Wide Outline** effect provides the option to use a *Custom Depth Buffer*. The advantage is explained below.

In the default mode, you can set a different outline color to be used when the outline is occluded by having 1 outline render *When Not Occluded* and have another outline render *When Occluded*.

![[Wide Outline-12.png|289]]

This results in the following effect where you see that some parts of the outline are occluded. One issue with this effect is that each pixel of the outline calculates it's occlusion state based on whether the pixel closest to it that is part of the cone, is occluded or not. So not the actual occlusion of the outline pixel is taken into account.

![[Wide Outline-20240821142824694.webp|360]]

When enabling the *Custom Depth* option, you can set an *Occluded Color* property that decides the color of the outline when occluded. The *Render* options for each outline also disappear.

![[Wide Outline-13.png|370]]

When using the *Custom Depth* mode, you will see that the outline occlusion is more accurate.

![[Wide Outline-20240821143552565.webp|333]]

The downside of this method is that you lose some control and also there might be some depth buffer related artifacts.

![[Wide Outline-14.png|377]]

## Limitations
There are some known limitations that come with the implementation of the **Wide Outline** effect.

> [!important] Outline Bleeding
>  Because the silhouette is dilated in screen-space, the outline will not always completely respect the configured *Occlusion State*. This is especially apparent for wide outlines.
>  
>  In the example below, the outline is set to render *When Not Occluded* however the outline bleeds slightly over the other object in the scene.
>  
>  ![[Wide Outline-20240821123208775.webp|378]]
>  
>  See [[Outline Bleeding]] for ways to resolve this.


> [!important] Scale With Distance
> Unlike the **Fast Outline** effect, the **Wide Outline** does not have a *Scale With Distance* mode. I am looking into adding this in a future update.
