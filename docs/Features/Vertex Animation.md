---
permalink: vertex-animation/
tags:
    - soft outline
    - wide outline
---

Some of your shaders might use vertex animation to move the vertices of the mesh. In this case, you would want the outline to adapt to the animated mesh.

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

To set the color of the outline, you will need to set it in your original shader instead of in the inspector of the outline. To do this in shader graph, you can use the *Outline Color* subgraph which is included with Linework.

![[../img/Pasted image 20241216210301.png]]

What this subgraph does, is check for the `_OUTLINE_COLOR` keyword and output a different color based on whether this keyword is enabled or not. If you use a handwritten shader, you can check for that keyword.