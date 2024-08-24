An overview of the features I'm currently working on. If you have any feature requests, feel free to reach out here [[Contact]]. I’m always open to suggestions.

### Released
Features/fixes that have been released order chronologically.

> [!done] 1.0.0
> The initial version of Linework. Contains the following features
> - [[1 Projects/Linework/Docs/Outlines/Fast Outline|Fast Outline]]
> - [[1 Projects/Linework/Docs/Outlines/Soft Outline|Soft Outline]]
> - [[1 Projects/Linework/Docs/Outlines/Wide Outline|Wide Outline]]
> - [[1 Projects/Linework/Docs/Outlines/Edge Detection|Edge Detection]]
> - [[1 Projects/Linework/Docs/Outlines/Surface Fill|Surface Fill]]
>   
> Each effect has an extensive range of settings such as which objects the outline is applied to, the visuals of the outline and the behavior of the outline.


### In Progress
Features/fixes that I am currently working on in no particular order.

> [!caution] Edge Detection Improvements
> The edge detection effect is under continuous development and will receive new features and improvements.

> [!caution] Custom Material Support
> It is currently not possible to supply a custom material for the *Surface Fill* effect and for the *Wide Outline* effect. Adding this option will allows users to use their own custom fill shader as well as their own outline shader for advanced, distance-based effects. 
> 
> Allowing a custom material to be supplied is trivial, but the necessary support needs to be present to make the experience pleasant and frictionless.


### Under Consideration
Features/fixes that I might work on in the future in no particular order. Want to see your feature request here? Let me know here [[Contact]].

> [!question] Soft Outline Dilation Methods Review
> Currently there are 4 dilation methods to choose from for the Soft Outline effect: *Box*, *Gaussian*, *Kawase* and *Dilate*. Not all of these are equally useful and I want to simplify these, possibly removing/reworking the *Kawase* method or maybe adding other methods.

> [!question] Unity 2023 Compatiblity
> I will look into how easy it is to make Linework work with Unity 2023 or older (before the introduction of the *Render Graph API*). These changes will not be included in the original Linework asset, but might be shared as an addon or a tutorial/guide.

> [!question] Performance Insights
> Adding outlines/fills has an impact on the performance. This could be communicated within the editor UI by showing some statistics such as the number of outlines/fills and the expected number of batches.

> [!question] Animated Fast Outline
> Add noise/animation support to the fast outline.

> [!question] Fast Outline Artifact Solving Tools
> Add tools such as a smooth normals baker to help with solving artifacts using the Fast Outline technique.

> [!question] Outline API
> C# scripts or a runtime API could be added that facilitates managing outlines.

> [!question] Improved SPR Batching
> Currently, having a different outline visual breaks the SRP batcher. As far as I know this is a limitation of the current URP API. I want to look into this further.

> [!question] Soft Outline Unique Stencil Mask
> Add optional mode to render each object with a unique stencil mask reference value to avoid side effects between multiple objects.

> [!question] Wide Outline Scale With Distance
> Add a *Scale With Distance* option to the Wide Outline effect.
