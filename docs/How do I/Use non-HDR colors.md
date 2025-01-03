---
permalink: guides/hdr/
---

For some workflows you might want to use non-HDR colors for the outlines. In the current version of Linework, all color fields have HDR enabled. You can change this manually if you want to use non-HDR colors.

## What to change?

The color fields in Linework all have the [ColorUsage](https://docs.unity3d.com/6000.0/Documentation/ScriptReference/ColorUsageAttribute.html) attribute. This attribute works as follows.

```csharp
[ColorUsage(showAlpha, hdr)]
public Color color = Color.white;
```

To change these to a non-HDR workflow, simply change them as follows.

```csharp
// HDR workflow
[ColorUsage(true, true)]
public Color color = Color.white;

// non-HDR workflow
[ColorUsage(true, false)]
public Color color = Color.white;
```

## Where to change?

Depending on the outline that you use, you'll need to make the changes mentioned above in the following files.

**Fast Outline**

- `Linework.FastOutline.Outline`

**Soft Outline**

- `Linework.SoftOutline.Outline`
- `Linework.WideOutline.SoftOutlineSettings`

**Wide Outline**

- `Linework.WideOutline.Outline`
- `Linework.WideOutline.WideOutlineSettings`

**Edge Detection**

- `Linework.EdgeDetection.EdgeDetectionSettings`

**Surface Fill**

- `Linework.SurfaceFill.Fill`

I am looking into a better way that allows you to switch more easily between HDR and non-HDR workflows.