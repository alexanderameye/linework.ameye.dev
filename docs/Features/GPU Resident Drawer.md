---
permalink: gpu-resident-drawer/
---

The [GPU Resident Drawer](https://docs.unity3d.com/6000.0/Documentation/Manual/urp/gpu-resident-drawer.html) is a feature that you can enable on your render pipeline settings asset. 

![[../img/Pasted image 20241230221123.png]]

Enabling this feature will make it so the BatchRendererGroup API is used to draw GameObjects with GPU instancing, which reduces the number of draw calls and frees CPU processing time.

Linework should be compatible with the GPU Resident Drawer. However, since the GPU Resident Drawer is a relatively new feature, some bugs might still be present. If you encounter any issues with Linework in a project using the DOTS Hybrid Renderer, let me know.