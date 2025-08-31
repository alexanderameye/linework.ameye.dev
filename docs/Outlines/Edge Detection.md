---
permalink: edge-detection/
---

> Edge Detection renders outlines as a full-screen effect by detecting edges and discontinuities within the scene. It is able to create a consistent outline across the whole scene.

![[edge detection cover.png]]

<div style="display:flex; gap: 1rem;">

<div style="flex-basis: 0;flex-grow: 1;">

> [!success] Advantages
> - **Consistent Outline:** As a screen-space effect, the outline is uniformly applied across the whole scene, ensuring a consistent look.
> - **Inner Lines:** The effect is able to capture both internal lines as lines on the outside of objects.

</div>
<div style="flex-basis: 0;flex-grow: 1;">

> [!error] Disadvantages
> - **Performance:** This is a screen-space effect that runs for the whole screen.

</div>

</div>

## Discontinuity Sources
The **Edge Detection** outline looks at the scene for discontinuities. It is able to look at different sources which can each contribute to the final edge detection.

Given a scene, any combination of the following discontinuity sources may be used.

**Depth:**
The depth of each fragment in the scene. Works well to get the *silhouettes* of objects.

**Normals:**
The orientation of each fragment in the scene. Works well to get fine details in objects if they have a *different orientation*.

**Luminance:**
The luminance of each fragment in the scene. Works well to pick up on *differences in color/brightness* between surfaces, even if they have the same orientation.

**Combined:**
The last image shows the result of combining *depth*, *normals* and *luminance*.

<div class="images-row">
![[Edge Detection-20240823174227596.webp|300]]
![[Edge Detection-20240823174300658.webp|300]]
![[Edge Detection-20240823174325562.webp|300]]
![[Edge Detection-20240823174611965.webp|300]]
</div>

## Section Map

The edge detection shader in Linework features a *section map* which is a very powerful feature that enables more control over where outlines show up. See [[section-map]] for more information.

## Configuration
The *Edge Detection Settings* contain the following settings.

### General Settings
The general settings apply to the outline effect as a whole.

![[../img/Pasted image 20250128203546.png]]

| **Property**       | **Description**                                    |
| ------------------ | -------------------------------------------------- |
| Stage              | Controls when the render pass executes.            |
| Show In Scene View | Sets whether to render the pass in the scene view. |
| Debug              | Which stage to render as a debug view.             |

### Discontinuity Settings

This setting controls which inputs to use as discontinuity sources for the edge detection.

![[../img/Pasted image 20241215175427.png]]

These setting control the generation of the section map.

![[../img/Pasted image 20241215175520.png]]

| **Setting** | **Description**                                                    |
| ----------- | ------------------------------------------------------------------ |
| Layer       | The rendering layer(s) which will get rendered to the section map. |
| Object ID   | Whether to render each object with a unique ID to the section map. |
| Input       | The additional input used for the section map.                     |
| Channel     | Which vertex color channel to render to the section map.           |
| Texture     | Which texture to sample when rendering to the section map.         |
| UV Set      | Which UV set to use when sampling the section texture.             |
| Keyword     | Which keyword to enable during the rendering of the section map.   |
| Shader      | Which shader to use to render to the section map.                  |


| **Setting (Depth)**         | **Description**                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| Sensitivity                 | The sensitivity used to detect the discontinuity in depth.                                            |
| Distance Mask               | Adjust how sensitive the edge detection is to changes in depth based on the distance from the camera. |
| Sharp Angle Mask            | Helps prevent edges from being falsely detected when the camera views a surface at a shallow angle.   |
| Sharp Angle Mask Multiplier | Helps prevent edges from being falsely detected when the camera views a surface at a shallow angle.   |

| **Setting (Normals)** | **Description**                                                    |
| --------------------- | ------------------------------------------------------------------ |
| Sensitivity           | The sensitivity used to detect the discontinuity in normal vector. |

| **Setting (Luminance)** | **Description**                                                |
| ----------------------- | -------------------------------------------------------------- |
| Sensitivity             | The sensitivity used to detect the discontinuity in luminance. |


### Outline Settings

![[../img/Pasted image 20241215174936.png]]

| **Property**          | **Description**                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Kernel                | The kernel that is used to detect edges.                                                                                                                                                       |
| Thickness             | The thickness in pixels of the edges.                                                                                                                                                          |
| Scale With Resolution | Scale the thickness of the edges with screen resolution to get a perceptually consistent outline across resolutions. Also allows you to set the reference resolution.                          |
| Edge Color            | The color of the edges.                                                                                                                                                                        |
| Override Shadow       | The color the edges when they are in an area that lies within a shadow.                                                                                                                        |
| Background Color      | A color that is used for all pixels that are not an edge. Can be used for stylistic line-only renderings.                                                                                      |
| Fill Color            | The color that is used for fill regions of the section map. See section map for more info.                                                                                                     |
| Fade In Distance      | Fade the edges towards another color (or transparent color) in the distance. You can set at which point the fade starts, and along which distance the fade occurs (how steep the drop-off is). |
| Blend                 | How to blend the outline with the rest of the scene.                                                                                                                                           |


