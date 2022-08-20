const { request } = require('https');

var baseURI = 'simplyapi.js.org';
var endURI = {
    chatbot: "/api/chatbot",
    nsfw: "/api/nsfw",
    toxicity: "/api/toxicity"
}

/**
 * Chatbot API
 * @param {string} msg
 * @param {import('./index').cbOptions} options
 * @returns {Promise<object>}
 */
function chatbot(msg, options = []) {
    if (typeof msg != 'string' || parseFloat(options.uid) < 0) {
        return Promise.reject("Message/UID is Required");
    }; let query = "";
    for (var key in options) {
        query += `&${encodeURI(key)}=${encodeURI(options[key])}`;
    }; return get(`${endURI.chatbot}?message=${encodeURI(msg) + query}`)
}

/**
 * NSFW URL Detection
 * @param {string} url
 * @returns {Promise<object>}
 */
function nsfw(url) {
    if (!url.match(/\.(jpg|png|gif)$/i)) {
        return Promise.resolve({ error: "No Image specified", status: 404 })
    }; return get(`${endURI.nsfw}?img=${encodeURI(url)}`)
}

/**
 * Toxicity Detection
 * @param {string} msg
 * @returns {Promise<object>}
 */
function toxicity(msg) {
    return get(`${endURI.toxicity}?text=${encodeURI(msg)}`)
}

function get(endpoint) {
    return new Promise((resolve, reject) => {
        return request({
            hostname: baseURI,
            path: endpoint,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }, (response) => {
            var data = [];
            response.on('error', reject);
            response.on('data', chunk => data.push(Buffer.from(chunk)));
            response.on('end', () => {
                try { resolve(JSON.parse(Buffer.concat(data))) } catch (e) {
                    resolve({ error: "Timed Out", status: 408 })
                }
            });
        }).on('error', reject).end(JSON.stringify());
    })
}

module.exports = {
    nsfw,
    chatbot,
    toxicity
};