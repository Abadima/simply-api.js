<h1 style="font-size:2.5rem; text-align: center;">Simply-API</h1>

<div class="badges" style="text-align: center;">

[![CodeFactor](https://www.codefactor.io/repository/github/abadima/simply-api.js/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/abadima/simply-api.js)
[![NodeJS](https://img.shields.io/badge/Node.js-%20>=16-green.svg?style=for-the-badge&logo=Node.js)](https://nodejs.org/en/download/)
[![Support Server](https://img.shields.io/discord/867999056172052551.svg?label=Support&logo=Discord&colorB=7289da&style=for-the-badge)](https://discord.gg/3JzDV9T5Fn)
</div>

## <img alt="Download" width="28px" src="https://cdn.onlinewebfonts.com/svg/img_250767.png" /> Download Package

```shell
npm install simply-api.js@legacy
```

(or)

```shell
yarn add simply-api.js@legacy
```

(or)

```shell
pnpm add simply-api.js
```

## <img alt="Download" width="22px" src="https://icon-library.com/images/book-icon/book-icon-28.jpg" /> Endpoints

| Endpoint                  | Description                                                 |
|---------------------------|-------------------------------------------------------------|
| chatbot(msg, {options})   | Chat with [Chat Bot](https://simplyapi.js.org/docs/chatbot) |
| tictactoe(uid, ai, board) | AI Game of Tic-Tac-Toe                                      |
| toxicity(text)            | Detect Toxic messages                                       |

## <img alt="Download" width="22px" src="http://cdn.onlinewebfonts.com/svg/img_28937.png" /> Example Usages

### Chatbot

```js
const {chatbot} = require("simply-api");

let data = await chatbot("Test Run by Simply-API.js", {uid: 69});
console.log(data) // returns JSON result
```

### Tic-Tac-Toe

```js
const {tictactoe} = require("simply-api");
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
const {toxicity} = require("simply-api");
const text = " *Insert offensive text here* ";

let data = await toxicity(text);
console.log(data) // returns JSON result
```

### Alternative Methods

```js
const text = " *Insert offensive text here* ";
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

simplyapi.tictactoe(uid, ai, board).then(data => {
	console.log() // Returns Array Result
});

simplyapi.toxicity(text).then(data => {
	console.log(data) // returns JSON result
}); // Toxicity Detection
```