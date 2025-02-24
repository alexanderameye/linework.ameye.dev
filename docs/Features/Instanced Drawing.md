---
permalink: instanced-drawing/
---

In some cases you might be drawing meshes through one mesh drawing APIs such as [Graphics.DrawProcedural](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Graphics.DrawProcedural.html) or [Graphics.RenderMeshIndirect](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Graphics.RenderMeshIndirect.html). 

Meshes drawn using these techniques can usually be outlined however some things need to be taken into account.

**Layer or RenderingLayerMask**

To only apply an outline on specific meshes, you will need to set the correct layer/rendering layer on the outline.

For example, `Graphics.DrawProcedural` takes in a `Layer` parameter. 

For example, `Graphics.RenderMeshIndirect` takes in a `RenderParams` parameter on which you can set either `RenderParams.renderingLayerMask` or `RenderParams.layer`.

Then on your outline set the corresponding `Layer` or `Rendering Layer`.

**Vertex Animation**

You will need to enable the `Vertex Animation` toggle on your outline for the outlines to show up in the correct position. 

To set the outline color, you will need to use the following snippet.

```hlsl
#pragma shader_feature _OUTLINE_COLOR
    
half4 frag() : SV_TARGET{
    #if defined(_OUTLINE_COLOR)
        return half4(1.0, 0.0, 0.0, 1.0);
    #else
        return _Color;
    #endif
}
```

See [[Vertex Animation]] for more information on how to set the color of the outline when using vertex animation.