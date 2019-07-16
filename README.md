# Virgo Template by 🐞 CodyHouse
Virgo is a free HTML, CSS, JS template built using the CodyHouse Components and Framework.

This template was created by copying and pasting 25 components, distributed across 6 unique pages. The global styles were defined using the Global Editors. The glue that holds the components together is the CodyHouse Framework. Nothing more - not a single extra line of CSS/JS! 🙌

[View Demo](https://codyhouse.co/demo/templates/virgo/index.html)

<img src="https://raw.githubusercontent.com/CodyHouse/virgo-template/master/main/assets/img/virgo-preview.gif" alt="Virgo template preview" width="1060">

## CodyHouse Design System
First time you hear about the CodyHouse Design System? Here are a few links to get started:

- ⚙️ CodyHouse Framework, a lightweight (8KB minified and gzipped) front-end framework for building bespoke interfaces ([Learn more](https://codyhouse.co/ds/docs/framework) or [download it on Github](https://github.com/CodyHouse/codyhouse-framework))
- 📦 CodyHouse Components, a library of accessible, progressively enhanced, HTML, CSS, JS components that work seamlessly with the Framework ([Browse components](https://codyhouse.co/ds/components))
- 🚀 Global Editors, a collection of web design tools to create and export typography elements, color themes, spacing rules, buttons and forms ([Explore Globals](https://codyhouse.co/ds/globals))
- 📝 Documentation, learn how to use the Framework and the Components ([View documentation](https://codyhouse.co/ds/get-started))

## Progressive enhancement
The following script in the `<head>` of the html files:

```html
<script>document.getElementsByTagName("html")[0].className += " js";</script>
```

is used in CSS to target that Javascript is enabled and apply additional style accordingly.

Besides checking JavaScript support, we check the support of CSS custom properties. If the browser supports them, the style.css file is downloaded. Otherwise, the browser downloads the style-fallback.css file, where the CSS variables are replaced by their fallbacks (generated using a PostCSS plugin).

```html
<script>
  if('CSS' in window && CSS.supports('color', 'var(--color-var)')) {
    document.write('<link rel="stylesheet" href="assets/css/style.css">');
  } else {
    document.write('<link rel="stylesheet" href="assets/css/style-fallback.css">');
  }
</script>
<noscript>
  <link rel="stylesheet" href="assets/css/style-fallback.css">
</noscript>
```

## Gulp
The template includes a Gulp file with some basic configurations needed to run a web project based on the CodyHouse Framework.

To use this Gulp configuration file, once you have downloaded the template, make sure to run the following commands in your command line:

```
npm install
npm run gulp watch
```

The first command will install the modules the framework requires for compiling SCSS into CSS; the second will launch your project on a development server.

## License
Check the license.md file of this repo.

## Image credits
1. [falling by ian dooley](https://unsplash.com/photos/dEFkCKvnRIA)
2. [NeonUp by Ashley Jurius](https://unsplash.com/photos/HiM_HmnuDdg)
3. [Hong Kong by Steven Roe](https://unsplash.com/photos/MYB2driCp2k)
4. [sign by Andrew Robinson](https://unsplash.com/photos/xh3DYZLFfgA)
5. [Neon prayer by Chris Liverani](https://unsplash.com/photos/YBR-AWm1HQ4)
6. [untitled by Drew Beamer](https://unsplash.com/photos/3SIXZisims4)
7. [untitled by Milada Vigerova](https://unsplash.com/photos/pHR_S0PeOF0)
8. [untitled by George Earl](https://unsplash.com/photos/IkDeiIRVy_U)
9. [FlatFlow Icons by Anna Litviniuk](https://iconstore.co/icons/flatflow-icons/)