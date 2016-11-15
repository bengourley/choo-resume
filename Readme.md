# choo-resume

choo-resume + [hot-rld](bengourley/hot-rld) = hot app reload in choo 🔥

## Usage

- Install `npm i --save-dev hot-rld choo-resume` or `yarn add --dev hot-rld choo-resume`
- Run the hot reload cli `hot-rld -s static js/*.js`
- Add the hot reload client to your page `<script src=${require('hot-rld/client')}</script>`
- Win! Profit! etc.

```js
const resume = require('choo-resume')
app.use(resume())

// Basic usage
const appRoot = document.getElementById('app-root')
if (appRoot) appRoot.parentNode.removeChild(appRoot)
const tree = app.start()
document.body.appendChild(tree)

// Rehydration usage

// Ensure your root element has a data attribute like
// the following when rendered from the server:
//   <div data-server-rendered></div>
const appRoot = document.getElementById('app-root')
const rehydrating = !!appRoot.dataset.serverRendered
if (rehydrating) {
  app.start('#app-root')
} else {
  appRoot.parentNode.removeChild(appRoot)
  const tree = app.start()
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
