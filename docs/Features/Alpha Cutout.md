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

Keep note that the same alpha cutout texture will be used for all outlined gameobjects on the specified layer (*Light Layer 1* in this case).

### What if I have many different alpha cutout textures?

A possible use case is that you have multiple meshes with different alpha cutout textures that all should have the same outline visual. In this case, you would use the same outline layer so that the color is shared between all those meshes.

In the case that you have multiple alpha cutout textures, enable the *Alpha Cutout* toggle but leave the *Texture* field empty. Instead, add the following script to each mesh renderer that has alpha cutout enabled for it.

```csharp
using UnityEngine;  
  
public class AlphaCutout : MonoBehaviour  
{  
    private static readonly int AlphaCutoutTexture = Shader.PropertyToID("_AlphaCutoutTexture");  
    private MaterialPropertyBlock propertyBlock;  
  
    private void OnValidate()  
    {        
	    propertyBlock ??= new MaterialPropertyBlock();  
        var rend = GetComponentInChildren<Renderer>();  
	    propertyBlock.SetTexture(AlphaCutoutTexture,
	    rend.sharedMaterial.mainTexture);  
        rend.SetPropertyBlock(propertyBlock);  
    }
}
```

This process will be improved in the future. Check the *feature-requests* channel in the Discord for progress on this.