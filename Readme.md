# choo-resume

choo-resume + [hot-rld](https://github.com/bengourley/hot-rld) = hot app reload in choo 🔥

For choo v3 use v1.x, for choo v4 use v2.x, v3.x, for choo v5 use v4.x.

## Usage

- Install `npm i --save-dev hot-rld choo-resume` or `yarn add --dev hot-rld choo-resume`
- Run the hot reload cli `hot-rld -s static js/*.js`
- Add the hot reload client to your page `<script src=${require('hot-rld/client')}</script>`
- Win! Profit! etc.

```js
const resume = require('choo-resume')

// Basic usage
const appRoot = document.getElementById('app-root')
if (appRoot) appRoot.parentNode.removeChild(appRoot)

// Resume the state right before start in order to override the "initial" state
app.use(resume());
const tree = app.start()
document.body.appendChild(tree)

// Rehydration usage

// Ensure your root element has a data attribute like
// the following when rendered from the server:
//   <div data-server-rendered></div>
const appRoot = document.getElementById('app-root')
const rehydrating = !!appRoot.dataset.serverRendered
const tree = app.start()
if (rehydrating) {
  app.mount('#app-root');
} else {
  appRoot.parentNode.removeChild(appRoot)
  document.body.appendChild(tree)
}
```

## Installation
```sh
$ npm install --save choo-resume
```
or
```sh
$ yarn add choo-resume
```

## License
[MIT](https://tldrlegal.com/license/mit-license)
