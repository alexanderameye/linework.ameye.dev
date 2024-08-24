Some best-practices and guidelines when it comes to performance.

> [!tip] Tip! Use the *Profiler* and *Frame Debugger*
> The **[Profiler](https://docs.unity3d.com/Manual/Profiler.html)** and **[Frame Debugger](https://docs.unity3d.com/Manual/FrameDebugger.html)** are invaluable tools to get an insight in the rendering process of your project. Each step of the outline/fill effect will be shown within the frame debugger so you can see what's going on.

### General

The [SRP Batcher](https://docs.unity3d.com/Manual/SRPBatcher.html) in Unity optimizes draw calls by batching GameObjects that share the same shader. Each outline effect leverages this by **batching outlines of the same type and visual** together.

Outlines end up in a different batch if:
- they are of a different type (different shader)
- they have a different visual (same shader, different material)

> [!question] Why does a different outline visual break the batch?
> Although the _SRP Batcher_ could technically batch outlines with different visuals, the current _URP Renderer Feature API_ doesn't support it. This is an area under investigation.

To maximize performance for a specific outline type, minimize the number of different outline visuals. Here's an example.

// TODO: image

### Fast Outline

[[1 Projects/Linework/Docs/Outlines/Fast Outline|Fast Outline]] is among the cheapest of the outline effects. It renders outlines by rendering an extruded version of an object behind the original object.

### Soft Outline

[[1 Projects/Linework/Docs/Outlines/Soft Outline|Soft Outline]]

***Blur iterations***




### Wide Outline

[[1 Projects/Linework/Docs/Outlines/Wide Outline|Wide Outline]]

***Flood iterations***
The wider the outline, the more flood iterations need to happen, the slower this effect is. However, this technique is still very performant for rendering wide outlines.

### Edge Detection

[[1 Projects/Linework/Docs/Outlines/Edge Detection|Edge Detection]]




### Surface Fill

[[1 Projects/Linework/Docs/Outlines/Surface Fill|Surface Fill]]




