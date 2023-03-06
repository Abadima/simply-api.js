const {nsfw} = require("../main.js");

const uri = "https://i.pinimg.com/originals/ce/a7/21/cea7210bf2974d4085d09b53f782ea74.jpg"
const start = performance.now();

const message = {
    200: `NSFW => PASS`,
    404: `NSFW => IMAGE IS NULL`,
    500: `NSFW => SERVER ERR`,
    403: `NSFW => BAD RESPONSE`,
    408: `NSFW => TIMED OUT`
}

nsfw(uri).then(data => {
    const elapsed = Math.round(performance.now() - start);
    if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

    console.log(`NSFW => FAIL (${elapsed}ms)`);
});