var { toxicity } = require("../main")
var start = Date.now()

toxicity("*insert offensiveness here*").then(data => {
    switch (data.status) {
        case 200: console.log(`TOXICITY => PASS (${Date.now() - start}ms)`); break
        case 404: console.log(`TOXICITY => TEXT IS NULL (${Date.now() - start}ms)`); break
        case 500: console.log(`TOXICITY => SERVER ERR (${Date.now() - start}ms)`); break
        case 403: console.log(`TOXICITY => BAD RESPONSE (${Date.now() - start}ms)`); break
        case 408: console.log(`TOXICITY => TIMED OUT (${Date.now() - start}ms)`); break
        default: console.log(`TOXICITY => FAIL (${Date.now() - start}ms)`); break
    }
})