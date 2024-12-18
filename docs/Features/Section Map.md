---
permalink: section-map/
tags:
    - edge detection
---

The section is a very powerful concept that is used by the [[edge detection]] effect. Be sure to read this documentation carefully to understand how it works. 

If things do not work as expected or if you have additional questions, please [[contact]] me.

## What is the section map?

The section map is a special texture that is generated at runtime which is then used by the edge detection shader to determine where to draw edges. Below is an example of such a section map. If the edge detection shader sees this, we just tell it to draw a line where the red value differs and we're done.

![[../img/Pasted image 20241215182902.png]]

When using the R channel to fill the section map with different values, we also have *2 special values: 0 and 1*. These are shown in the image below as blue and green respectively. The blue an green are just debug colors, the section map still only uses the red channel.

![[../img/Pasted image 20241215182833.png]]

We check for these special values in our edge detection shader and use it to either render no edges at all (**mask when R is 0**) or render it as an edge completely (**fill when R is 1**). To show what this means, look at the image below where the lines are shown, based on the section map input from above.

![[../img/Pasted image 20241215183648.png]]

The masked regions (shown in blue in the section map) do not show an edge and are completely invisible, while the filled regions (shown in green in the section map) are filled completely with the edge color.

## Generating the section map

There are are several ways to generate the section map. The way you choose to generate the section map will have a potential influence on your art pipeline and so it's important to carefully consider the implications of each method.

### Object ID

A simple method of generating the section map is by letting each object render with *a unique ID*. In the case of Linework, the unique ID is generated based on the world position of the object. For example in the image below, each object gets a unique ID. The colors are converted from the R channel to a perceptually pleasant color. The section map still only uses the red channel.

<div class="images-row">
![[Edge Detection-20240823114241238.webp|300]] ![[Edge Detection-20240823121508202.webp|300]]
</div>

Using the object ID works well to render edges between objects. No manual authoring is needed, everything is generated based on world position.

### Vertex Color

The vertex colors of an object may be rendered to the section map. This gives pretty much complete control over where edges show up. The only limitation is that the necessary geometry needs to be present in order to paint it. This method is able to generate very clean edges.

In the image below, there house is a single object and so we can not use the object ID to get inner edges, but using vertex colors we can add detail

<div class="images-row">
![[Edge Detection-20240823173833692.webp|300]] ![[Edge Detection-20240823173742318.webp|300]]
</div>

Any channel of the vertex colors can be used to render to the section map, but the section map will still only use the red channel.

### Section Texture + UVs

Another method is to use a *Section Texture* which is then sampled when rendering to the section map. This gives very fine control over edges (independent of geometry, unlike vertex colors), but the downside is that you have to set up UVs to sample the section texture.

The section texture itself can just be a *4x4 palette in tints of red*. The bottom left has a value of 0 (corresponds to a mask) while the top left has a value of 1 (corresponds to a fill). 

A secondary UV set can be used and set up that will be used to sample the section texture. In your 3D modelling software, you can UV map your mesh so that surfaces that should have an edge between, have a different color in the corresponding section texture palette.

![[Edge Detection-5.png]]

The UV map does not need to be that clean, since we are just sampling from a palette with flat colors and there are no gradients or transitions.

<div class="images-row">
![[Edge Detection-20240823203326232.webp|300]] ![[Edge Detection-20240823203326397.webp|300]]
</div>

### Shader Keyword

Another technique is to use a *gloabl shader keyword* that gets enabled during the rendering of the section map. This works as follows.

1. Enable the `_SECTION_PASS` keyword
2. Render to the section map
3. Disable the `_SECTION_PASS` keyword

In your shaders, you can set the output based on this global `_SECTION_PASS` keyword. For example, you could output a pattern of stripes. Keep in mind that I still only render to the R channel since the section map is a single-channel texture.

![[Edge Detection-8.png|600]]

This gives us the following section map and result.

<div class="images-row">
![[Edge Detection-20240824104400047.webp|300]] 
![[Edge Detection-20240824104332304.webp|300]]
</div>

They shader keyword method is very powerful since you can output any pattern that you want.

## Additional notes and ideas

### Surface ID Mapper

You could use something like IDMapper (I have not tested this personally!) to make it easier to assign vertex colors quickly
[IDMapper - Blender Market](https://blendermarket.com/products/idmapper)

### Painting the Section Map

// TODO

### The GBA channels

// TODO

## Acknowledgements

There are several people and games that have used the concept of a section map in some way. Here is a non exhaustive list of them.

- [Harry Heath](https://x.com/harryh___h/status/1328017722655920129)
- [Rollerdrome](https://www.youtube.com/watch?v=G1NY0LKDqJo)
- [George Batchelor](https://x.com/georgebatch/status/1040996814202318848)



