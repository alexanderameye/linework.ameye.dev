---
permalink: surface-fill/
---

**Surface Fill** renders fills by rendering an object with a fill material.

![[Surface Fill-20240907131944592.webp]]
## Configuration
The *Surface Fill Settings* object contains the settings related to this fill effect. Here are all of the settings explained. In Unity, each setting also has a tooltip which shows more information.

***General Settings***
The general settings apply to the fill effect as a whole (with all sub-fills included).

| **Setting**         | **Description**                                       | **Additional Information**                                                                                       |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Stage               | Controls when the render pass executes.               |                                                                                                                  |
| Show In Scene View  | Sets whether to render the pass in the scene view.    |                                                                                                                  |
| Force Clear Stencil | Force clear the stencil buffer after the render pass. | Should normally not be enabled, but can be used if you notice unexpected interactions between different effects. |

***Fill Settings***
To add a fill, click on the *Add Fill* button. This will add a fill to the list. You can add as many fills as you want. See the [[Performance]] section for more information about the impact of adding fills.

![[Pasted image 20240815092130.png]]

Each fill in the list is applied to objects that belong to the specified *Rendering Layer Mask*. See [[Outline Layers]] for more information about how the layer system works.

The fill settings apply to a specific fill.

| **Setting** | **Description**                                                 | **Additional Information**                          |
| ----------- | --------------------------------------------------------------- | --------------------------------------------------- |
| Layer       | The rendering layer(s) which will get a fill rendered for them. | See [[Outline Layers]] for more information. |
| Render      | For which occlusion states to render the fill.                  | See [[Occlusion States]] for more information.      |
| Blend       | How to blend the fill with the rest of the scene.               |                                                     |
| Pattern     | The fill pattern that is used.                                  |                                                     |
| Color       | The color of the fill.                                          |                                                     |
| Texture     | The texture that is rendered as the fill.                       |                                                     |
| Scale       | The scale/tiling of the texture that is used.                   |                                                     |
| Channel     | The channel of the texture that is used.                        |                                                     |
| Frequency   | The frequency of the pattern.                                   |                                                     |
| Density     | The density of the pattern.                                     |                                                     |
| Offset      | The offset of the pattern.                                      |                                                     |
| Rotation    | The rotation of the pattern.                                    |                                                     |
| Direction   | The movement direction of the pattern.                          |                                                     |
| Speed       | The movement speed of the pattern.                              |                                                     |
| Width       | The width of the glow.                                          |                                                     |
| Softness    | How sharp the falloff of the glow is.                           |                                                     |
| Power       | The softness of the glow.                                       |                                                     |

## Fill Patterns
The **Surface Fill** effect supports 6 different types of patterns.

*Solid*, *Dots*, *Stripes*, *Checkerboard*, *Glow* and *Texture*.

![[Image Sequence_002_0000.jpg|300]] ![[Image Sequence_003_0000.jpg|300]]
![[Image Sequence_004_0000.jpg|300]] ![[Image Sequence_005_0000.jpg|300]]
![[Image Sequence_006_0000.jpg|300]] ![[Image Sequence_007_0000.jpg|300]]

### ***Custom pattern texture***
By using the *Texture* pattern option, you can render whatever pattern that you'd like. There is a *Channel* setting which allows you to select which channel of the texture should be used for the pattern.

![[Surface Fill-20240820191111589.webp|375]]

> [!tip] Tip! Free pattern pack
> The following free pattern pack by Kenney is a great source of various tiling patterns. Use the *R* channel to use the pattern as a surface fill.
> 
> 
[https://kenney.nl/assets/pattern-pack](https://kenney.nl/assets/pattern-pack)

### ***Pattern movement***
Most of the patterns allow the movement to be controlled through the *Direction* and *Speed* settings. The *Direction* is a value in degrees between 0 and 360 where 0 is right, 90 is down, 180 is left, 270 is up and 360 is right again.

![[Movie_001.gif|center|375]]


## Limitations
There are some known limitations that come with the implementation of the **Surface Fill** effect.

> [!important] Fill Count
> You can add a maximum of 8 fills.

