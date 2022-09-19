# Unity Keyboard

Unity Keyboard is the UI for the 3D keyboard included in the [Vuplex 3D WebView asset](https://developer.vuplex.com). It's a React.js app that the asset renders in a webview, and it emits keyboard characters as the player clicks keys. You can try an online version of the keyboard UI [here](https://keyboard.vuplex.com).

<p align="center">
  <img alt="demo" src="./demo.gif" width="500">
</p>

This code is open source so that users can customize it and so that it can demontrate the 3D WebView's ability to pass messages between C# and JavaScript. The [3D WebView asset](https://developer.vuplex.com) is needed in order to embed this UI in a project, because it handles rendering the UI to a Texture2D, processing click events, and providing the `window.vuplex` JavaScript API needed for message passing.

## Development

This is a React + TypeScript project created using [Create React App](https://github.com/facebook/create-react-app).

- The project's dependencies currently require Node 8, so please use [nvm](https://github.com/nvm-sh/nvm) to switch to Node 8:

```
# Install Node 8 first if necessary.
nvm install 8
# Switch to Node 8
nvm use 8
```

- After you have switched to Node 8, you can install dependencies: `npm install`

- Start the dev server: `npm start`

- Type checking: `npm run tsc`

- Build for production: `npm run build`

## Generating KeyboardUi.cs

In order to simplify usage of the Unity Keyboard UI in the 3D WebView asset, the `generate-c-sharp` script is used to inline the various assets into the HTML and generate a `KeyboardUi` C# class with an `Html` property that gets passed to [`IWebView.LoadHtml()`](https://developer.vuplex.com/webview/IWebView#LoadHtml). This saves users from having to ensure that the various web assets are compiled correctly into their apps.

```
npm run generate-c-sharp
```
