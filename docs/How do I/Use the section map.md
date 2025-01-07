---
permalink: guides/section-map/
tags:
    - edge detection
---

Before using the section map, be sure to read the article on the [section-map](../../section-map).

## How to exclude objects from edge detection?

One of the ways that the section map may be used, is as a mask to keep edge-detected lines from showing up.

The section map is used as a mask, if the value of the section mask is 0. To achieve this, depending on the input source of your section map, just set the value to 0.

For example look at the scene below which is rendered using the <em>Sections</em> debug view. Using a vertex painting tool, I assigned random values for each object (for the red channel only) except for the lower right cube. For that cube, I assigned a value of 0 for the red channel. The debug view then shows this cube in bright blue, because the value 0 is treated as a special <em>masking</em> value.

![[../img/Pasted image 20250107165156.png]]

If we then look at our edge detection settings, we see that we can use the section map to mask out edges. We can do this selectively for each edge detection source.

In the settings, edges are detected using the Depth, Normals and Sections sources. The section map is then generated using vertex colors (red channel specifically).

Then, the section map mask (which we applied to the lower right cube), is used to mask out edges detected based on Sections, Depth and Normals by enabling each corresponding <em>Section Mask</em> toggle.

<div class="images-row">
![[../img/Pasted image 20250107165459.png]]
![[../img/Pasted image 20250107165430.png]]
</div>

If for example we disable the <em>Section Mask</em> toggle, we can still allow edges to be detected based on the normals.

![[../img/Pasted image 20250107165801.png]]

This masking feature can be used to only selectively apply edge detection outlines to objects.