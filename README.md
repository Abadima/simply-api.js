<h1 style="font-size:2.5rem;" align="center">Simply-API</h1>

<div align="center">
  <a href="https://nodejs.org/en/download/">
    <img src="https://img.shields.io/badge/Node.js-%2016.17-green.svg?style=for-the-badge&logo=Node.js" alt="Full-Package">
  </a>
  <a href="https://discord.gg/3JzDV9T5Fn">
    <img src="https://img.shields.io/discord/867999056172052551.svg?label=Support&logo=Discord&colorB=7289da&style=for-the-badge" alt="Support Server">
  </a>
  <a href="https://github.com/abadima/simply-api">
    <img src="https://img.shields.io/github/workflow/status/Abadima/simply-api/Build/main?style=for-the-badge" alt="Code Status">
  </a>
</div>

## <img alt="Download" width="28px" src="https://cdn.onlinewebfonts.com/svg/img_250767.png" /> Download Package
```
npm install simply-api.js
```
(or)
```
yarn add simply-api.js
```


## <img alt="Download" width="22px" src="https://icon-library.com/images/book-icon/book-icon-28.jpg" /> Endpoints

|Endpoint| Description |
|--|--|
| chatbot(msg, {options}) | Chat with [Chat Bot](https://simplyapi.js.org/docs/chatbot) |
| grammar(text) | Grammar/Spell Check |
| nsfw(url) | Scan URLs for NSFW (PNG/JPG/GIF) |
| toxicity(text) | Detect Toxic messages |


## <img alt="Download" width="22px" src="http://cdn.onlinewebfonts.com/svg/img_28937.png" /> Example Usages

### Chatbot
```js
var { chatbot } = require("simply-api")
var data = await chatbot("Test Run by Simply-API.js", { uid: 69 })
console.log(data) // returns JSON result
```
### Grammar
```js
var { grammar } = require("simply-api")
var data = await grammar("hello how r u")
console.log(data) // returns JSON result
```
### NSFW
```js
var { nsfw } = require("simply-api")
var URL = "https://i.pinimg.com/originals/ce/a7/21/cea7210bf2974d4085d09b53f782ea74.jpg"
var data = await nsfw(URL)
console.log(data) // returns JSON result
```
### Toxicity
```js
var { toxicity } = require("simply-api")
var text = " *Insert offensive text here * "
var data = await toxicity(text)
console.log(data) // returns JSON result
```

### Alternative Methods
```js
var URL = "https://i.pinimg.com/originals/ce/a7/21/cea7210bf2974d4085d09b53f782ea74.jpg"
var text = " *Insert offensive text here * "
var simplyapi = require("simply-api")

simplyapi.chatbot("Hello!").then(data => {
	console.log(data) // returns JSON result
} // Chat Bot AI

simplyapi.grammar("hello how r u").then(data => {
	console.log(data) // returns JSON result
} // Grammar Check

simplyapi.nsfw(URL).then(data => {
	console.log(data) // returns JSON result
} // NSFW Detection

simplyapi.toxicity(text).then(data => {
	console.log(data) // returns JSON result
} // Toxicity Detection
```