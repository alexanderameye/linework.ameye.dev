---
permalink: compatibility/
---

Check if Linework will work in your project.

> [!success] Compatibility
> 
> Linework is compatible with **Unity 6 or Unity 2022.3** and the **Universal Render Pipeline**. Other combinations are not supported.

> [!warning] Known Limitations
> 
> Please check [[../Known Limitations/Known Limitations|Known Limitations]] for an overview of known limitations of Linework that might be relevant to your project.


## Unity Versions

| Unity Version    | URP Version | Status          |
| ---------------- | ----------- | --------------- |
| 6                | 17.0.0      | ✅ supported     |
| 2022.3           | 14.0.0      | ✅ supported     |
| 2022.2 and older | x.y.z       | ❌ not supported |
| other versions   | x.y.z       | ❌ not supported |

## Render Pipelines

| Pipeline                      | Status          |
| ----------------------------- | --------------- |
| Built-In (legacy)         | ❌ not supported |
| Light-Weight (deprecated) | ❌ not supported |
| Universal (URP)               | ✅ supported     |
| High-Definition (HDRP)        | ❌ not supported |

## Renderers

| Renderer               | Status          |
| ---------------------- | --------------- |
| URP Universal Renderer | ✅ supported     |
| URP 2D Renderer        | ❌ not supported |
| DOTS Hybrid Renderer   | ✅ supported     |

## Platforms

| Platform         | Status                                                  |
| ---------------- | ------------------------------------------------------- |
| Windows          | ✅ supported                                             |
| macOS            | ✅ supported                                             |
| Linux            | ❔ not tested                       |
| Web              | ✅ supported                                             |
| iOS              | ✅ supported                                             |
| Android          | ❔ not tested                                            |
| Consoles         | ❔ not tested                                            |
| VR/AR            | ❔ not tested (See [[VR]])                               |
| Apple Vision Pro | ❌ not supported                                         |

## Graphics APIs

| Graphics API | Status          |
| ------------ | --------------- |
| Direct3D11   | ✅ supported     |
| Direct3D12   | ❔ not tested    |
| Metal        | ✅ supported     |
| OpenGLCore   | ❌ not supported |
| OpenGLES3    | ❔ not tested    |
| Vulkan       | ✅ supported     |

## Other

| Rendering Path | Status          |
| -------------- | --------------- |
| Forward        | ✅ supported     |
| Forward +      | ✅ supported     |
| Deferred       | ❌ not supported |

| Color Space | Status       |
| ----------- | ------------ |
| Linear      | ✅ supported  |
| Gamma       | ❔ not tested |

## Other Assets
Linework should not run in any issues with other assets. If you encounter any issues, please see the [[Contact]] section to get in touch.