# Virgo Template by 🐞 CodyHouse
Virgo is a free HTML, CSS, JS landing template built using the [CodyHouse Components](https://codyhouse.co/ds/components). It's compatible with [CodyFrame CSS](https://codyhouse.co/ds/docs/framework) and [Tailwind CSS](https://tailwindcss.com/).

[View Demo](https://codyhouse.co/demo-templates/virgo/index.html)

https://user-images.githubusercontent.com/5512545/142900965-b2566379-82ef-4d10-87af-d79711a39270.mp4

## Progressive enhancement
The following script in the `<head>` of the html files:

```html
<script>document.getElementsByTagName("html")[0].className += " js";</script>
```

is used in CSS to check if JavaScript is enabled and apply additional style accordingly.

## Gulp
The CodyFrame version of the template includes a Gulp file with some basic configurations.

To use this configuration file, once you have downloaded the template, run the following commands in your command line:

```
npm install
npm run gulp watch
```

The first command will install the modules the framework requires for compiling SCSS into CSS; the second will launch your project on a development server.

## License
Check [CodyHouse License page](https://codyhouse.co/license#templates).

## Credits
1. Images: [Unsplash](https://unsplash.com/)
2. Icons: [Nucleoapp](https://nucleoapp.com/)
