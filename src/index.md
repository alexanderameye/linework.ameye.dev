---
toc: false
---

<div class="hero">
  <h1>Beautiful <em class="blue">outlines and fills</em> for Unity.</h1>
  <h2>Render outlines using one of different techniques, balancing visual fidelity and performance. Feature-rich and easy-to-use.</h2>
  <div class="cta">
    <pre data-copy>npm init <span class="win">"</span>@observablehq<span class="win">"</span></pre>
    <a href="./getting-started" class="small arrow" style="color: var(--theme-red);">Get started</a>
  </div>
</div>

<div class="gallery grid grid-cols-2">
  <a href="./outlines/fast-outline">
    <picture>
      <source srcset="./assets/img/fast-outline.webp" media="(prefers-color-scheme: dark)">
      <img src="./assets/api-dark.webp">
    </picture>
    <div class="small arrow">Fast Outline</div>
  </a>
  <a href="./outlines/soft-outline">
    <picture>
      <source srcset="./assets/img/soft-outline.webp" media="(prefers-color-scheme: dark)">
      <img src="./assets/plot-dark.webp">
    </picture>
    <div class="small arrow">Soft Outline</div>
  </a>
  <a href="./outlines/wide-outline">
    <picture>
      <source srcset="./assets/img/wide-outline.png" media="(prefers-color-scheme: dark)">
      <img src="./assets/mortgage-rates-dark.webp">
    </picture>
    <div class="small arrow">Wide Outline</div>
  </a>
  <a href="./outlines/edge-detection">
    <picture>
      <source srcset="./assets/img/edge-detection.webp" media="(prefers-color-scheme: dark)">
      <img src="./assets/eia-dark.webp">
    </picture>
    <div class="small arrow">Edge Detection</div>
  </a>
   <a href="./outlines/surface-fill">
    <picture>
      <source srcset="./assets/img/ab.webp" media="(prefers-color-scheme: dark)">
      <img src="./assets/eia-dark.webp">
    </picture>
    <div class="small arrow">Surface Fill</div>
  </a>
</div>

<style>

.hero {
  font-family: var(--sans-serif);
  margin: 4rem 0;
  text-wrap: balance;
}

.hero h1 {
  font-size: 64px;
  font-family: var(--serif);
  line-height: 1;
  margin: 2rem 0;
}

.hero h2 {
  font-style: normal;
  font-size: 18px;
  line-height: normal;
  color: var(--theme-foreground-muted);
}

.hero .observablehq-pre-container,
.hero pre:not(.observablehq-pre-container pre) {
  margin: 1rem 0;
}

.cta {
  display: flex;
  align-items: center;
  gap: 2rem;
}

@container not (min-width: 400px) {
  .cta {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
  .cta .observablehq-pre-container,
  .cta pre:not(.observablehq-pre-container pre) {
    width: 100%;
  }
}

.gallery {
  margin: 4rem -1rem;
  gap: 2rem;
  max-width: calc(640px + 2rem);
}

.gallery a {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.gallery img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
  aspect-ratio: 2500 / 1900;
}

@media (prefers-color-scheme: dark) {
  .gallery img {
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 0 rgba(0, 0, 0, 0.4);
  }
}

.gallery a:not(:hover, :focus) {
  color: var(--theme-foreground-muted);
}

.gallery a:hover img,
.gallery a:focus img {
  box-shadow: 0 0 0 0.75px var(--theme-foreground-focus), 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.gallery figcaption {
  font-size: 12px;
  color: inherit;
}

.arrow {
  font-weight: 500;
}

.arrow::after {
  content: "→";
  display: inline-block;
  margin-left: 0.25rem;
}

@media (prefers-color-scheme: light) {
  h1 {
    --theme-red: #d75c48;
  }
}

</style>