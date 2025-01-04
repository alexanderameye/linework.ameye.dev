---
permalink: particles-and-transparent-objects/
---

## Section Map + Particles

Linework supports the combination of using particles and the usage of the section map feature available for the edge detection renderer. This requires some setup.

To make this work, use a custom particle material (use the default Unity particle shader, but just make a material for it and assign it on the particle system). Then in the inspector of the particle system, enable <em>custom vertex streams</em> and then write the center of each particle to `TEXCOORD0.zw`. See the image below to see how it should look.

![[../img/Pasted image 20250104184140.png]]

Then in the edge detection settings, enable the <em>Particles</em> option.

![[../img/Pasted image 20250104184806.png]]

Now each particle should get a different color in the section map and each particle will get outlined.