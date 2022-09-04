var { grammar } = require("../main")
var start = Date.now()

grammar("helo how r u").then(data => {
    switch (data?.status) {
        case 200: console.log(`GRAMMAR => PASS (${Date.now() - start}ms)`); break
        case 404: console.log(`GRAMMAR => TEXT IS NULL (${Date.now() - start}ms)`); break
        case 500: console.log(`GRAMMAR => SERVER ERR (${Date.now() - start}ms)`); break
        case 403: console.log(`GRAMMAR => BAD RESPONSE (${Date.now() - start}ms)`); break
        case 408: console.log(`GRAMMAR => TIMED OUT (${Date.now() - start}ms)`); break
        default: console.log(`GRAMMAR => FAIL (${Date.now() - start}ms)`); break
    }
})