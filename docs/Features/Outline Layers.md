---
permalink: outline-layers/
---

## Rendering Layers

Linework makes use of *Rendering Layers* to control which objects should receive an outline. 

> [!warning] Unity Documentation
> 
> Be sure to read the Unity documentation on *Rendering Layers* if you are not familiar with them. In the documentation, they use rendering layers for configuring lighting, but we will use it for outlines.
> https://docs.unity3d.com/6000.0/Documentation/Manual/urp/features/rendering-layers-introduction.html

## Setup

As an example setup, let's look at the following image. The cone has a yellow outline and a red fill, the box only has a yellow outline.

<div class="images-row">
![[Image Sequence_032_0000.jpg|375]]
![[Image Sequence_032_0000.jpg|375]]
</div>

To create this setup, we would need 2 layers: 

1. **Outline:** A layer for the yellow outline
2. **Fill:** A layer for the red fill

To create the rendering layers, go to *Project Settings > Tags and Layers*. In here, you can add layer or replace one of the existing *Light Layers* if you are not making use of them in your project. 

Then in the *Mesh Renderer* component of your objects of interest, set the *Rendering Layer Mask* property to include the layers we just created. For the example above, we will enable the Yellow Outline layer for the box and the cone, and the Red Fill layer for the cone only.

<div class="images-row">>
![[../img/Pasted image 20241217182700.png]]
![[../img/Pasted image 20241217182911.png]]
</div>

Finally, on your outline or fill itself, you can set the *Layer* property to the appropriate layer. For our outline we will select Yellow Outline, and for our fill we will select Red Fill.

![[../img/Pasted image 20241217183150.png]]

## Layers

Linework also supports regular layers if you wish to use them (or in combination with Rendering Layers).