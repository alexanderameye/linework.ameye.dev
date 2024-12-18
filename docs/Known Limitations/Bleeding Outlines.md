---
permalink: bleeding-outlines/
---

## What's the problem?

There are 2 outline effects in Linework that work kind of in a similar way: [[1 Projects/Linework/Docs/Features/Outlines/Soft Outline|Soft Outline]] and [[1 Projects/Linework/Docs/Features/Outlines/Wide Outline|Wide Outline]]. They both to these 3 steps.

1. Render the silhouette of the objects
2. Dilate/extend the silhouette
3. Subtract original silhouette from the dilated/extended silhouette to get an outline and composite it with the scene

The dilation happens in screen-space, which means the outline will not always completely respect the configured *Occlusion State*. This is especially apparent for wide outlines.

In the example below, the outline is set to render *When Not Occluded* however the outline bleeds slightly into the other object in the scene.

<div class="images-row">
![[Outline Bleeding-20240821134438258.webp|306]]
![[Outline Bleeding-20240821134438258.webp|306]]
</div>


## Solutions and Workarounds

There is an option to mask out parts of the outline by assigning objects to render *As Mask* which will effectively mask out the outline. In the example below, the box is set to render *As Mask* and the outline is then occluded.

<div class="images-row">
![[Outline Bleeding-1.png]]
![[Outline Bleeding-20240821135129466.webp|405]]
</div>

The downside of this is that this won't work well in the case where you also want outlines around the box.
