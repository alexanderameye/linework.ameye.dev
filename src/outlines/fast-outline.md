---
title: Fast Outline
---

# ⚡ Fast Outline
> Render the mesh a second time, with the faces inverted and scaled up.


<aside>
💡 Render the mesh a second time, with the faces inverted and scaled up.

</aside>

✅ performant

✅ easily include/exclude objects

✅ easily set outline overrides

🚫 no good inner-outlines, online lines outside of the object

🚫 artifacts (inconsistent line widths, gaps for hard edges, lines appearing in the interior of the object)

**Additional information**

- Smoothing the normal vectors of the mesh and baking them as vertex colors can fix some artifacts
- Can use a stencil mask to mask out lines within the object

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/aeb70a14-65cf-4953-8074-e873e83dde45/327dede3-1c3f-493d-8b95-6468dfca3778/Untitled.png)