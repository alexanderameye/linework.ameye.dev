---
permalink: gpu-instancing/
tags:
    - fast outline
    - soft outline
    - wide outline
---

## How Linework renders outlines

> [!info] Outline Layers
> 
> Be sure to read [[outline layers]] first.

Linework supports two methods for rendering outlines efficiently.

1. **SRP Batcher**
    - Optimized for many different mesh types with a limited set of distinct outline visuals
    - Requires a separate rendering layer for each distinct outline visual

2. **GPU Instancing**
    - Optimized for a limited set of mesh types with many distinct outline visuals
    - Allows a single rendering layer to be used for multiple outline visuals by overriding outline properties per instance

This page explains the differences between the two approaches, when to use each, and how to enable and configure GPU instancing.

## SRP Batcher vs GPU Instancing

### SRP Batcher

The SRP batcher optimizes rendering by batching together GameObjects that share the same shader. In Linework, outlines can be batched together if they:

- are of the same outline type
- have the same visual settings

The SRP batcher is a good option in the case where you have many different types of meshes, but only a limited set of distinct outline visuals.

The downside of the SRP batcher is that you need to use a separate rendering layer for each outline.

### GPU Instancing

GPU instancing is a method where all meshes of the same type can be batched together, regardless of their outline visuals. Outline properties (e.g., color, alpha cutout texture) can be overridden on a per-instance basis using MaterialPropertyBlocks.

GPU instancing is a good option in the case where you have a limited set of mesh types, but many distinct outline visuals. A single rendering layer can be used to render each of these outlines.

The downside of GPU instancing is that if you have a lot of different mesh types, all those types won't be batched together. Additionally, using MaterialPropertyBlocks involves a bit more setup.

### Recommendation

| Scenario                                       | Recommended Method |
| ---------------------------------------------- | ------------------ |
| Many different mesh types, few outline visuals | SRP Batcher        |
| Few mesh types, many outline visuals           | GPU Instancing     |

**Examples:**

SRP Batcher: Rendering diverse environments where you only have a few outline styles.

GPU Instancing: Rendering many characters or items where each one has a unique outline color or style.

## How to use GPU instancing?

### Enabling GPU instancing

By default, outlines in Linework will use the SRP batcher. To enable GPU instancing, simply enable the toggle on your outline.

![[../img/Pasted image 20241217204102.png]]

### Overriding outline properties

To override the outline visuals of a specific gameobject, add the *Outline Override* component and set the shader property that you want to override. In the example below, the outline color is overriden.

<div class="images-row">
![[../img/Pasted image 20241217204254.png]]
![[../img/Pasted image 20241217204416.png]]
</div>

Using this setup, you can render a lot of meshes (of the same type) in a single batch, but with different outline visuals.

![[../img/a1.png]]
