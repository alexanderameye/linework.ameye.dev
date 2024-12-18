---
permalink: world-space-ui/
---

## What's the problem?

If you are using world space UI, you might bump into some issues where the outlines are shown on top of the UI.

This occurs because the world space UI in Unity uses a shader that does not write to the depth buffer. Because of this, the outlines *can not know if they are in front or behind the UI*. This gives sorting issues between the outlines and the UI.

## Solutions and Workarounds

### Render Before Transparents

A solution for the sorting issue is to make sure the outlines render before the UI does.

![[World Space UI-1.png|434]]

This will ensure that the outline appears behind the UI at all times. In the image below, the white square is the world space UI.

<div class="images-row">
![[World Space UI.png|392]]
![[World Space UI.png|392]]
</div>

### ZWrite

An alternative is to modify the UI shader so that it writes to the depth buffer. This way, the outlines can properly take into account the world space position of the UI.

<div class="images-row">
![[World Space UI-2.png]]
![[World Space UI-2.png]]
</div>

> [!warning] Side Effect
> 
> It's possible that adding `ZWrite On` to the UI shader could have unexpected side effects to your rendering.

### Stencils + Fast Outline

Another method is using stencil masks to control where the UI should and should not end up. This works *only for Fast Outline* since here the outlines are drawn in object/world space (as opposed to screen space) and so they can easily write to the stencil buffer. It works like this:

1. Make the outline write a value X to the stencil buffer
2. Set the UI shader to no render where the stencil value is not equal to X

In the image below, the stencil values are visualized. The outline writes a stencil value of 1. The UI is then set to render wherever the stencil value is not equal to 1. This makes it so the UI appears behind the outlines.

<div class="images-row">
![[../img/Pasted image 20241216203857.png]]
![[../img/Pasted image 20241216204024.png]]
</div>

Similarly, we can set the UI shader to render always, irregardless of the stencil value. This makes it so the UI appears in front of the outlines.

<div class="images-row">
![[../img/Pasted image 20241216203933.png]]
![[../img/Pasted image 20241216204051.png]]
</div>