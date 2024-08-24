Frequently asked questions.

> [!question] How is Linework different from other outline assets?
> 5+ years in the making, Linework is the culmination of years of experimentation that I have done with outline rendering in Unity.
> 
> The strength of Linework is that it combines the following important features in a single, easy-to-use package.
> 
> - **Multiple techniques.** There is no one-size-fits-all solution for outlines. Linework includes multiple techniques, balancing visual fidelity and performance.
> - **Performant.** Leveraging the power of the SRP batcher, Linework is able to render multiple outlines within a single batch.
> - **Easy to use.** A considerable amount of development time has gone into finetuning the user experience for Linework so that is is user-friendly while still being flexible.
>   
> By combining these 3 core focus points, Linework thrives to be the one-stop solution for rendering outlines in Unity.

> [!question] Does Linework support X/Y/X? Why is only Unity 6 supported?
> Linework is only compatible with **Unity 6** and the **Universal Render Pipeline**. Other combinations are not supported. See [[Compatibility]] for more detailed information.
> 
> The reason that only **Unity 6** is supported is because of the introduction of the *Render Graph API*. This is a breaking change that drastically changes how custom render effects in the Universal Render Pipeline are written. I do not want to spend the bulk of my time supporting and maintaining what is essentially the same render effect, implemented using multiple APIs. That's why I focus on a single version and the introduction of the Render Graph API is the ideal cut-off point for this. 
> 
> The reason that only the **Universal Render Pipeline** is supported is because URP will be the future default renderer in Unity.
> 
 

