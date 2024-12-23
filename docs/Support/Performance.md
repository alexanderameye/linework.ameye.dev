---
permalink: performance/
---

ome best-practices and guidelines when it comes to performance.

> [!tip] Tip!
> 
> The **[Profiler](https://docs.unity3d.com/Manual/Profiler.html)** and **[Frame Debugger](https://docs.unity3d.com/Manual/FrameDebugger.html)** are invaluable tools to get an insight in the rendering process of your project. Each step of the outline/fill effect will be shown within the frame debugger so you can see what's going on.


## Batching

Read [[gpu instancing]] for more information.

## Mobile

Some performance tests were done on iOS using a *base model iPhone 15*.

### Skinned Mesh Renderers
This scene consists of *50 animated skinned mesh renderers*, with each time 4 types of outlines/fills applied.
Screenshots are shown in the following order: surface fill, fast outline, soft outline, wide outline.

<div class="images-row">
![[Performance-20241022202721715.webp]]
![[Performance-20241022202722130.webp]]
</div>
<div class="images-row">
![[Performance-20241022202722491.webp]]
![[Performance-20241022202722792.webp]]
</div>


### 400 Outlines
This scene consists of 400 meshes, with each time 4 types of outlines/fills applied.
Screenshots are shown in the following order: surface fill, fast outline, soft outline, wide outline.

<div class="images-row">
![[Performance-20241022203431729.webp]]
![[Performance-20241022203431383.webp]]
</div>
<div class="images-row">
![[Performance-20241022203430454.webp]]
![[Performance-20241022203430876.webp]]
</div>


### 900 Outlines
This scene consists of 900 meshes, with each time 4 types of outlines/fills applied.
Screenshots are shown in the following order: surface fill, fast outline, soft outline, wide outline.

<div class="images-row">
![[Performance-20241022204008067.webp]]
![[Performance-20241022204007650.webp]]
</div>
<div class="images-row">
![[Performance-20241022204007099.webp]]
![[Performance-20241022204006614.webp]]
</div>
