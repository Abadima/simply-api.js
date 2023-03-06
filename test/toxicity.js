const {toxicity} = require("../main.js");

const start = performance.now();

const message = {
    200: `TOXICITY => PASS`,
    404: `TOXICITY => TEXT IS NULL`,
    500: `TOXICITY => SERVER ERR`,
    403: `TOXICITY => BAD RESPONSE`,
    408: `TOXICITY => TIMED OUT`
}

toxicity("*insert offensiveness here*").then(data => {
    const elapsed = Math.round(performance.now() - start);
    if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

    console.log(`TOXICITY => FAIL (${elapsed}ms)`);
});