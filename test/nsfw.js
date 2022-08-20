var { nsfw } = require("../main")
var uri = "https://i.pinimg.com/originals/ce/a7/21/cea7210bf2974d4085d09b53f782ea74.jpg"
var start = Date.now()

nsfw(uri).then(data => {
    switch (data?.status) {
        case 200: console.log(`NSFW => PASS (${Date.now() - start}ms)`); break
        case 404: console.log(`NSFW => IMAGE IS NULL (${Date.now() - start}ms)`); break
        case 500: console.log(`NSFW => SERVER ERR (${Date.now() - start}ms)`); break
        case 403: console.log(`NSFW => BAD RESPONSE (${Date.now() - start}ms)`); break
        case 408: console.log(`NSFW => TIMED OUT (${Date.now() - start}ms)`); break
        default: console.log(`NSFW => FAIL (${Date.now() - start}ms)`); break
    }
})