var { chatbot } = require("../main")
var start = Date.now()

chatbot("Test Run by Simply-API.js", { uid: 69 }).then(data => {
    switch (data?.status) {
        case 200: console.log(`CHATBOT => PASS (${Date.now() - start}ms)`); break
        case 404: console.log(`CHATBOT => MSG IS NULL (${Date.now() - start}ms)`); break
        case 500: console.log(`CHATBOT => SERVER ERR (${Date.now() - start}ms)`); break
        case 403: console.log(`CHATBOT => BAD RESPONSE (${Date.now() - start}ms)`); break
        case 408: console.log(`CHATBOT => TIMED OUT (${Date.now() - start}ms)`); break
        default: console.log(`CHATBOT => FAIL (${Date.now() - start}ms)`); break
    }
})