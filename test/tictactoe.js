const {tictactoe} = require("../main.js");

const start = performance.now();

const message = {
    200: `TICTACTOE => PASS`,
    404: `TICTACTOE => NOT FOUND ERR`,
    500: `TICTACTOE => SERVER ERR`,
    403: `TICTACTOE => BAD RESPONSE`,
    408: `TICTACTOE => TIMED OUT`
}

tictactoe(74675927457, "o", [" ", " ", " ", " ", "x", " ", " ", " ", " "]).then(data => {
    const elapsed = Math.round(performance.now() - start);
    if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

    console.log(`TICTACTOE => FAIL (${elapsed}ms)`);
});