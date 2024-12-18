---
permalink: vertex-extrusion/
tags:
    - fast outline
---

## How does fast outline work?

Fast outline works by taking an object and rendering an extruded version of that object behind the original one.

They key of fast outline is: *in what direction to we extrude each vertex*?

Linework provides a few different options to control this direction.

Each option below is shown in an extreme way with an big outline width. For a lot of methods, bigger widths will result in an outline with gaps.

1. **Vertex Position (OS):** Move each vertex along the vertex position in object space.
2. **Normalized Vertex Position (OS):** Move each vertex along the normalized vertex position in object space.
3. **Normal Vector (OS):** Move each vertex along the normal vector in object space.
4. **Vertex Color (OS):** Move each vertex along the vertex color in object space.
5. **Normalized Vector (CS):** Move each vertex along the normal vector in clip space.
6. **Normal Vector (SS):** Move each vertex along the normal in screen space.
7. **Normal Vector (WS):** Move each vertex along the normal in world space.
8. **Smoothed Normals:** Move each vertex along the direction extracted from the UV8 channel in object space.

## Smoothed normals

### How does it work?

The last method listed above is **Smoothed Normals**. This method moves each vertex along a **baked direction**.

Imagine you have an object with sharp edges like a cube. If you were to extrude each vertex along the normal vector, you would get gaps at the edges since at the exact sharp transition, vertices would go in very different directions.

A solution for this is to smooth the normals. Because smoothing the normals directly would also possibly influence how the object is rendered (due to lighting calculations using the normal vector), we instead bake the normals into a separate channel. Linework uses the UV8 channel for this. By choosing the **Smoothed Normals** option, the vertex extrusion shader will use the baked, smoothed normals as the direction to extrude the vertices in.

### How to enable smoothed normals?

To calculate the smoothed normals for an object and store them so that fast outline can use them, simply right-click on a mesh in your object folder, and enable *Calculate Smoothed Normals* toggle. To disable it, you can simply uncheck the toggle.

Using this option should give a smoother outline, even for objects with sharp edges.

<div class="images-row">
![[../img/Pasted image 20241218164823.png]]
![[../img/Pasted image 20241218164936.png]]
</div>

### Where are the smoothed normals stored?

Smoothed normals in Linework are implemented using an [AssetPostprocessor](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/AssetPostprocessor.html). By right-clicking on a mesh and choosing to enable/disable *Calculate Smoothed Normals*, an asset label gets set/removed respectively for that mesh. An asset post processor then calculates the smoothed normals, if that label is present. The smoothed normals themselves, are stored in the *UV8 channel* of the mesh. 

The relevant code is as follows.

```csharp
mesh.SetUVs(7, SmoothNormalsBaker.ComputeSmoothedNormals(mesh));
```