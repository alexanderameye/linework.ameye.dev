---
permalink: guides/change-outlines-at-runtime/
---

> [!success] Linework Sample
> 
> This sample explains how to change outline properties at runtime.

The configuration of each outline is stored in a settings object.
- `FastOutlineSettings`
- `SoftOutlineSettings`
- `WideOutlineSettings`
- `EdgeDetectionSettings`
- `SurfaceFillSettings`

To change the properties of an outline, get a reference to these settings in your script and modify the properties directly.

As an example, see this script which changes the *Outline Color* of a *Wide Outline* to a random color whenever the spacebar is pressed.

## Steps

1.  Assign this script component to any GameObject.

```csharp
using Linework.WideOutline;  
using UnityEngine;  
  
public class ChangeOutline : MonoBehaviour  
{  
    [SerializeField] private WideOutlineSettings wideOutlineSettings;  
  
    private void Update()  
    {        
	    if (Input.GetKeyDown(KeyCode.Space))  
        {            
	        var color = new Color(
	        Random.Range(0.0f, 1.0f), 
	        Random.Range(0.0f, 1.0f), 
	        Random.Range(0.0f, 1.0f)
	        );  
	        
	        wideOutlineSettings.Outlines[0].color = color;
        }    
	}
}
```

2. Drag the `WideOutlineSettings` object from your assets into the inspector field.