<h1 style="font-size:2.5rem;" align="center">Simply-API</h1>

<div align="center">
  <a href="https://nodejs.org/en/download/">
    <img src="https://img.shields.io/badge/Node.js-%20>=16-green.svg?style=for-the-badge&logo=Node.js" alt="Full-Package">
  </a>
  <a href="https://discord.gg/3JzDV9T5Fn">
    <img src="https://img.shields.io/discord/867999056172052551.svg?label=Support&logo=Discord&colorB=7289da&style=for-the-badge" alt="Support Server">
  </a>
  <a href="https://github.com/abadima/simply-api">
    <img src="https://img.shields.io/github/actions/workflow/status/Abadima/simply-api/codeql-analysis.yml?branch=main&style=for-the-badge" alt="Code Status">
  </a>
</div>

## <img alt="Download" width="28px" src="https://cdn.onlinewebfonts.com/svg/img_250767.png" /> Download Package
```
npm install simply-api.js@legacy
```
(or)
```
yarn add simply-api.js@legacy
```
(or)
```
pnpm add simply-api.js
```


## <img alt="Download" width="22px" src="https://icon-library.com/images/book-icon/book-icon-28.jpg" /> Endpoints

|Endpoint| Description |
|--|--|
| chatbot(msg, {options}) | Chat with [Chat Bot](https://simplyapi.js.org/docs/chatbot) |
| grammar(text) | Grammar/Spell Check |
| nsfw(url) | Scan URLs for NSFW (PNG/JPG/GIF) |
| tictactoe(uid, ai, board) | AI Game of Tic-Tac-Toe |
| toxicity(text) | Detect Toxic messages |


## <img alt="Download" width="22px" src="http://cdn.onlinewebfonts.com/svg/img_28937.png" /> Example Usages

### Chatbot
```js
const { chatbot } = require("simply-api");

let data = await chatbot("Test Run by Simply-API.js", { uid: 69 });
console.log(data) // returns JSON result
```
### Grammar
```js
const { grammar } = require("simply-api");

let data = await grammar("hello how r u");
console.log(data) // returns JSON result
```
### NSFW
```js
const URL = "https://i.pinimg.com/originals/ce/a7/21/cea7210bf2974d4085d09b53f782ea74.jpg";
const { nsfw } = require("simply-api");

let data = await nsfw(URL);
console.log(data) // returns JSON result
```

### Tic-Tac-Toe
```js
const { tictactoe } = require("simply-api");
const uid = 123, ai = "o";
const board = [
	" ", " ", " ",
	" ", "x", " ",
	" ", " ", " "
];

let data = await tictactoe(uid, ai, board);
console.log(data) // returns JSON result
```

### Toxicity
```js
const { toxicity } = require("simply-api");
const text = " *Insert offensive text here * ";

let data = await toxicity(text);
console.log(data) // returns JSON result
```

### Alternative Methods
```js
const URL = "https://i.pinimg.com/originals/ce/a7/21/cea7210bf2974d4085d09b53f782ea74.jpg";
const text = " *Insert offensive text here * ";
var simplyapi = require("simply-api");
const uid = 123, ai = "o";
const board = [
    " ", " ", " ",
    " ", "x", " ",
    " ", " ", " "
];

simplyapi.chatbot("Hello!").then(data => {
    console.log(data) // returns JSON result
}); // Chat Bot AI

simplyapi.grammar("hello how r u").then(data => {
    console.log(data) // returns JSON result
}); // Grammar Check

simplyapi.nsfw(URL).then(data => {
    console.log(data) // returns JSON result
}); // NSFW Detection

simplyapi.tictactoe(uid, ai, board).then(data => {
    console.log() // Returns Array Result
});

simplyapi.toxicity(text).then(data => {
    console.log(data) // returns JSON result
}); // Toxicity Detection
```