const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

console.log('Generating KeyboardUi.cs...')
const originalHtml = fs.readFileSync('./build/index.html', 'utf8');
const $ = cheerio.load(originalHtml);

// Replace the stylesheet link with inlined styles.
const styleLinkElement = $('link[rel=stylesheet]');
const cssFilePath = styleLinkElement.attr('href');
const styles = fs.readFileSync(path.join('build', cssFilePath), 'utf8');
styleLinkElement.before(`<style>${styles}</style>`);
styleLinkElement.remove();

// Inline the JS
$('script[src]').each(function () {
  const scriptElement = $(this); // executed in the context of the current element.
  const jsFilePath = scriptElement.attr('src');
  const js = fs.readFileSync(path.join('build', jsFilePath), 'utf8');
  scriptElement.removeAttr('src');
  scriptElement.text(js);
});

// Inline the SVGs by replacing the relative URLs with data URIs.
let inlinedHtml = $.html();
// Remove the project's "./" url prefix that's set via the
// package.json's homepage attribute.
inlinedHtml = inlinedHtml.replace('"./"', '""');
let match;
do {
  match = /\"(static\/media\/[a-zA-Z0-9.\-]*.svg)\"/g.exec(inlinedHtml);
  if (match) {
    const svgFilePath = match[1];
    const svg = fs.readFileSync(path.join('build', svgFilePath));
    // Normally, it wouldn't be necessary to base64 encode the SVGs, but Chrome
    // currently has a bug where it doesn't rendered utf8 SVGs in data URIs.
    const dataUrl = `data:image/svg+xml;base64,${svg.toString('base64')}`;
    inlinedHtml = inlinedHtml.replace(svgFilePath, dataUrl);
  }
} while (match);


const escapedHtml = inlinedHtml.replace(/"/g, '""').replace(/\n/g, '');

const cSharpClass = `
namespace Vuplex.WebView {
    /**
    * To simplify usage, the Unity Keyboard web frontend is inlined in this class.
    * This way, the HTML, JS, and CSS files don't need to be added to the Android
    * or iOS project.
    *
    * The source code for this web frontend is available at
    * https://github.com/vuplex/unity-keyboard
    */
    class KeyboardUi {

        public const string Html = @"${escapedHtml}";
    }
}
`

fs.writeFileSync('build/KeyboardUi.cs', cSharpClass, 'utf8');
console.log('Finished generating build/KeyboardUi.cs');
