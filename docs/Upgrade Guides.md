---
permalink: upgrade-guides/
---

This page contains information about upgrading from an older version of Linework to a more recent version.

## Upgrading to Linework 1.4.5

### SmoothNormalsBaker

In the 1.4.5 update, the `SmoothNormalsBaker.cs` script was moved from the `Runtime` folder to the `Editor` folder. This might result in compiler errors since the existing file in the `Runtime` folder is not deleted when updating the Linework package through Unity.

Imported assets are copied into user projects. They are modifiable by the user. Hence when reimporting a new version, Unity does not know if those existing file has been modified by the user or not and so they are kept.

**Possibility 1**

If your error is as follows

```
The type or namespace name 'UnsafeHashMap<,>' could not be found
```

Then try reimporting the package.

**Possibility 2**

If your error is as follows

```
Packages\dev.ameye.linework\Runtime\FastOutline\SmoothNormalsBaker.cs(67,33): error CS0246: The type or namespace name 'UnsafeParallelHashMap<,>' could not be found (are you missing a using directive or an assembly reference?)
```

then simply remove the following script.

`Packages\dev.ameye.linework\Runtime\FastOutline\SmoothNormalsBaker.cs`
