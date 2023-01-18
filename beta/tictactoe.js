import {post} from "../main.js";

const start = performance.now();
const array = [
    " ", " ", " ",
    " ", "x", " ",
    " ", " ", " "
];

const board = JSON.stringify({"board": array});

const message = {
    200: `TICTACTOE => PASS`,
    404: `TICTACTOE => MSG IS NULL`,
    500: `TICTACTOE => SERVER ERR`,
    403: `TICTACTOE => BAD RESPONSE`,
    408: `TICTACTOE => TIMED OUT`
}

post("/api/tictactoe?uid=74675927457&ai=o", board, true).then(data => {
    const elapsed = Math.round(performance.now() - start);
    if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

    console.log(`TICTACTOE => FAIL (${elapsed}ms)`);
}).catch(console.error)