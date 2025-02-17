---
permalink: vertex-animation/
tags:
    - soft outline
    - wide outline
    - edge detection
---

Some of your shaders might use vertex animation to move the vertices of the mesh. In this case, you would want the outline to adapt to the animated mesh.

## Soft and wide outline + vertex animation

Most of the outlines in Linework work by taking the original mesh, re-rendering it using a custom shader, and then processing that further into an outline. This custom shader, does not know anything about any potential vertex animation that might have been used in the original shader of your mesh.

To make vertex animated outlines work, Linework provides an option to instead of using a custom shader, use the original shader which includes any vertex animation you might use. There are 2 consequences of doing this:

- the cost of re-rendering the mesh is now dependent on the complexity of your original shader
- an additional step is needed to control the color of the outline

Below you see a sphere that is transformed using a vertex animation. By enabling vertex animation support, the outline adapts to the new shape of the sphere.

<div class="images-row">
![[../img/Pasted image 20241216210125.png]]
![[../img/Pasted image 20241216210136.png]]
</div>

To enable vertex animation support, simply enable the *Vertex Animation* toggle on your outline.

![[../img/Pasted image 20241216210203.png]]

To set the color of the outline, you will need to set it in your original shader instead of in the inspector of the outline. 

**Shader Graph** 

In shader graph, you can use the *Outline Color* subgraph which is included with Linework.

![[../img/Pasted image 20241216210301.png]]

What this subgraph does, is check for the `_OUTLINE_COLOR` keyword and output a different color based on whether this keyword is enabled or not. 

**Amplify Shader Editor**

In [Amplify Shader Editor](https://assetstore.unity.com/packages/slug/68570?aid=1011l3n8v&pubref=docs) you can set up the graph like below.

![[../img/Pasted image 20250217154140.png]]

**Handwritten Shaders**

If you use a handwritten shader, you can check for the `_OUTLINE_COLOR` keyword.

```hlsl
 #if defined(_OUTLINE_COLOR)
    // return outline color
 #else
    // return regular color
 #endif
```

## Edge detection + vertex animation

When using edge detection together with the section map, vertex animation is also supported. To make this work, you can enable a specific rendering layer for all of your vertex animated meshes (for example all grass blades). Then, in the *Section Map* section of the *Edge Detection Settings*, add an *Additional Section Pass* and set the rendering layer. In this pass, we will render the section map for all vertex animated objects.

![[../img/Pasted image 20250217160255.png]]

The material should then be the material you use on your vertex animated objects. To set the section color correctly, you'll need to implement that in the shader of your vertex animated object by using the *Section Pass* keyword switch.

![[../img/Pasted image 20250217160309.png]]

If you need help setting this up, [contact me](../contact).