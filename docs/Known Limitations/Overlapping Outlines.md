---
permalink: overlapping-outlines/
---

## What's the problem?

There are 2 outline effects in Linework that work kind of in a similar way: [[1 Projects/Linework/Docs/Features/Outlines/Soft Outline|Soft Outline]] and [[1 Projects/Linework/Docs/Features/Outlines/Wide Outline|Wide Outline]]. They both to these 3 steps.

1. Render the silhouette of the objects
2. Dilate/extend the silhouette
3. Subtract original silhouette from the dilated/extended silhouette to get an outline and composite it with the scene

Step 2 (dilation/extension) is the most expensive step and so for performance reasons *it is only run once*. This means that if you have outlined objects that overlap, their silhouettes will join as well and only be dilated/extended a single time. The result is that the outlines *join up together* as you can see in the image below.

This limitation is inherent to way that soft/wide outline works. 

<div class="images-row">
![[Overlapping Outlines.png|293]]
![[Overlapping Outlines.png|293]]
</div>

## Solutions and Workarounds

### Multiple Dilation Steps
The only way to use soft/wide outline and not get this issue, is to do the dilation/extension step *multiple times*. This is only possible if you add the soft/wide outline renderer multiple times.

Before you can do this, you will have to remove the following line of code from `WideOutline.cs` or `SoftOutline.cs` respectively.

```csharp
[DisallowMultipleRendererFeature("Wide Outline")]
[DisallowMultipleRendererFeature("Soft Outline")]
```

After removing these lines, you can then add the same outline renderer multiple times.

<div class="images-row">
![[Pasted image 20241216134509.png]]
![[Overlapping Outlines-1.png|400]]
</div>

> [!warning] Performance
> 
> Keep in mind that adding the same outline renderer multiple times will negatively affect performance! Additionally you might get unexpected rendering artifacts.

### Fast Outline or Edge Detection
An alternative approach is to use [[1 Projects/Linework/Docs/Features/Outlines/Fast Outline|Fast Outline]]. Since fast outline works in object-space, you will not get the effect of overlapping outlines being joined. Similarly, you can use [[1 Projects/Linework/Docs/Features/Outlines/Edge Detection|Edge Detection]] which also does not have this issue.

<div class="images-row">
![[Overlapping Outlines-2.png|400]]
![[Overlapping Outlines-3.png|400]]
</div>
