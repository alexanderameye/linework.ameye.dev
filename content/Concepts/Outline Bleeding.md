
## Issue
For the [[1 Projects/Linework/Docs/Outlines/Soft Outline|Soft Outline]] and [[1 Projects/Linework/Docs/Outlines/Wide Outline|Wide Outline]] outline effects, the outlines are rendered by having a silhouette that is dilated in screen-space. Because of the screen-space nature of this effect, the outline will not always completely respect the configured *Occlusion State*. This is especially apparent for wide outlines.

In the example below, the outline is set to render *When Not Occluded* however the outline bleeds slightly over the other object in the scene.

![[Outline Bleeding-20240821134438258.webp|306]]


## Solutions
There are 2 solutions that may help with the bleeding effect.

### Transparent Outline
You can add an additional outline that is set to render *When Occluded* and set the transparency of the color to *0%*.

![[Outline Bleeding.png|437]]

This will make it so the outline is hidden where it needs to be. The downside of this method is that for the **Wide Outline**, it might over-correct and a little part of the outline is occluded where it shouldn't be.

![[Outline Bleeding-20240821134648547.webp|417]]

Due to the dilation step, this solution does not work for the **Soft Outline**.

### Render As Mask
A second method is to mask out parts of the outline by assigning objects to render *As Mask* which will effectively mask out the outline. In the example below, the box is set to render *As Mask* and the outline is then occluded.

![[Outline Bleeding-1.png]]

This method works well for both the **Soft Outline** and the **Wide Outline**.


![[Outline Bleeding-20240821135129466.webp|405]]
