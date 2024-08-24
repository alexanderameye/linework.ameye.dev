The *Render* setting for outlines and fills usually has 3 options.

**Render Always**
Always render the outline/fill, regardless of its occlusion state in the scene.

![[Image Sequence_029_0000.jpg|375]]

**Render When Not Occluded**
Only render the outline/fill when it is not occluded (not hidden behind other geometry).

![[Image Sequence_030_0000.jpg|375]]

**Render When Occluded** 
Only render the outline/fill when it is occluded (hidden behind other geometry).

![[Image Sequence_031_0000.jpg|375]]


> [!warning] Occlusion State Options + Bleeding
> Due to technical limitations, not all outline types support all 3 *Occlusion State* options.
> - The **Fast Outline** and **Surface Fill** effects support the different occlusion states the best.
> - The **Soft Outline** and **Wide Outline** effects may display *bleeding* due to these effects rendering in screen-space.
> 
>   ![[Image Sequence_018_0000.jpg|300]]
> - The **Edge Detection** effect does not support occlusion states.
 