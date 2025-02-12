---
permalink: guides/outline-on-hover/
---
> [!success] Linework Sample
> 
> This sample explains how to enable/disable an outline when hovering over an object or when clicking on it.

> [!info] Assembly Definitions
> 
> If you are using Assembly Definitions in your project, make sure to add a reference to the Linework assembly.

> [!success] Prerequisites
> 
> **1. Event System**
> 
> Make sure that there is an *EventSystem* in your scene. If not, use *Create > UI > Event System* to create one.
> 
> **2. Physics Raycaster**
> 
> Make sure that your camera has a *Physics Raycaster* component added to it.
> ![[Enable an outline on mouse hover or click.png]]


## Steps

1. Assign this script component to any GameObject that you want to have an outline. The GameObject should have a *Collider* and a *Mesh Renderer*. The core functionality of the script is changing the rendering layer of the selected object's *Mesh Renderer* to be the one that the outline is activated for. 


<details>
<summary>Unity 2022</summary>
<div>

```csharp
using UnityEngine;  
using UnityEngine.EventSystems;  
using Linework.Common.Attributes;
  
public class Outline : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler  
{  
    [SerializeField] [RenderingLayerMask] private int outlineLayer;
    [SerializeField] private Activate activate = Activate.OnHover;  
  
    private Renderer[] renderers;  
    private uint originalLayer;
    private bool isOutlineActive;
  
    private enum Activate  
    {  
        OnHover,  
        OnClick  
    }  
  
    private void Start()  
    {        
	    renderers = TryGetComponent<Renderer>(out var meshRenderer)  
            ? new[] {meshRenderer}  
            : GetComponentsInChildren<Renderer>();  
        originalLayer = renderers[0].renderingLayerMask;  
    }  
    
    public void OnPointerEnter(PointerEventData eventData)  
    {        
	    if (activate != Activate.OnHover) return;  
        SetOutline(true);  
    }  
    
    public void OnPointerExit(PointerEventData eventData)  
    {        
	    if (activate != Activate.OnHover) return;  
        SetOutline(false);  
    }    
    
    public void OnPointerClick(PointerEventData eventData)  
    {        
	    if (activate != Activate.OnClick) return;  
        isOutlineActive = !isOutlineActive;  
        SetOutline(isOutlineActive);  
    }    
    
    private void SetOutline(bool enable)  
    {        
	    foreach (var rend in renderers)  
        {            
			rend.renderingLayerMask = enable 
	        ? originalLayer | 1u << (int)Mathf.Log(outlineLayer, 2)
	        : originalLayer;  
        }    
	}
}
```

</div>
</details>

<details>
<summary>Unity 6</summary>
<div>

```csharp
using UnityEngine;  
using UnityEngine.EventSystems;  
  
public class Outline : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler, IPointerClickHandler  
{  
    [SerializeField] private RenderingLayerMask outlineLayer;
    [SerializeField] private Activate activate = Activate.OnHover;  
  
    private Renderer[] renderers;  
    private uint originalLayer;  
    private bool isOutlineActive;  
  
    private enum Activate  
    {  
        OnHover,  
        OnClick  
    }  
  
    private void Start()  
    {        
	    renderers = TryGetComponent<Renderer>(out var meshRenderer)  
            ? new[] {meshRenderer}  
            : GetComponentsInChildren<Renderer>();  
        originalLayer = renderers[0].renderingLayerMask;  
    }  
    
    public void OnPointerEnter(PointerEventData eventData)  
    {        
	    if (activate != Activate.OnHover) return;  
        SetOutline(true);  
    }  
    
    public void OnPointerExit(PointerEventData eventData)  
    {        
	    if (activate != Activate.OnHover) return;  
        SetOutline(false);  
    }    
    
    public void OnPointerClick(PointerEventData eventData)  
    {        
	    if (activate != Activate.OnClick) return;  
        isOutlineActive = !isOutlineActive;  
        SetOutline(isOutlineActive);  
    }    
    
    private void SetOutline(bool enable)  
    {        
	    foreach (var rend in renderers)  
        {            
	        rend.renderingLayerMask = enable 
	        ? originalLayer | outlineLayer 
	        : originalLayer; 
        }    
	}
}
```

</div>
</details>

![[Active an outline on mouse hover or click-3.png]]

> [!warning] Odin Inspector
> 
> There is an issue in Odin Inspector with the way it renders `RenderingLayerMask` fields in the inspector. This should be fixed in a later update of Odin. For now, you can force the field to be drawn by Unity to see it correctly.

2. Select the Outline Layer in the inspector to be the same as the Layer that you have configured for the outline.

![[Active an outline on mouse hover or click-1.png]]

Using the *Activate* option, you can switch between activating the outline *On Hover* or *On Click*. 

## Issues?

- Check the checklist with requirements above
- check if a collider may be obscuring your selectable game object
- if the collider on the selectable object is a trigger, verify that *Queries Hit Triggers* is enabled in the physics settings
- check *Raycaster Event Mask* vs gameobject's layer mask