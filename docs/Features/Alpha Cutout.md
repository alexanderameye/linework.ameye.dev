---
permalink: alpha-cutout/
tags:
    - soft outline
    - wide outline
---

## What is alpha cutout?

## How to enable alpha cutout?

To enable alpha cutout for an outline, enable the *Alpha Cutout* toggle and specify the alpha cutout *Texture* that should be used. The outline will then be clipped according to the texture. 

![[Alpha Cutout.png]]

Take note that the same alpha cutout texture will be used for all outlined gameobjects on the specified layer (*Light Layer 1* in this case).

### What if I have many different alpha cutout textures?

A possible use case is that you have multiple meshes with all have different alpha cutout textures. In this case, you can enable *GPU Instancing* on the outline and use the *Outline Override* script on each mesh renderer with an alpha cutout texture. Then you can set the *_AlphaCutoutUVTransform* vector property (tiling x, tiling y, offset x, offset y) to change the UVs used for sampling the alpha cutout texture for each object.

If you have issues setting this up (it can be tricky), [contact me](../contact).

