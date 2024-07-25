// See https://observablehq.com/framework/config for documentation.
export default {
  title: "Linework Docs",
  pages: [
    {name: "Home", path: "/"},
    {
      name: "Essentials",
      pages: [
        {name: "Getting Started", path: "/getting-started"},
        {name: "Common Questions", path: "/faq"}
      ]
    },
    {
      name: "Outlines and Fills",
      pages: [
        {name: "Fast Outline", path: "/outlines/fast-outline"},
        {name: "Soft Outline", path: "/soft-outline"},
        {name: "Wide Outline", path: "/wide-outline"},
        {name: "Edge Detection", path: "/edge-detection"},
        {name: "Surface Fill", path: "/surface-fill"}
      ]
    },
    {
      name: "Support",
      pages: [
        {name: "Troubleshooting", path: "/troubleshooting"},
        {name: "Performance", path: "/performance"},
        {name: "Compatibility", path: "/compatibility"},
        {name: "Limitations", path: "/limitations"},
        {name: "Refund Policy", path: "/refunds"},
        {name: "3rd Party Integrations", path: "/3rd-party"}
      ]
    }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",
  //style: "style.css",
  // Some additional configuration options and their defaults:
  theme: "dashboard", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: `© ${new Date().getUTCFullYear()} Linework - beautiful outlines for Unity.`, // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  cleanUrls: true, // drop .html from URLs
};
