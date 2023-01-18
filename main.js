import {request} from "https";

const baseURI = "simplyapi.js.org";
const endURI = {
    chatbot: "/api/chatbot",
    grammar: "/api/grammar",
    nsfw: "/api/nsfw",
    tictactoe: "/api/tictactoe",
    toxicity: "/api/toxicity"
}

/**
 * Chatbot API
 * @param {string} text
 * @param {import("./index").cbOptions} options
 * @returns {Promise<object>}
 */
export function chatbot(text, options = {}) {
    if (typeof text !== "string") return Promise.reject("Message is Required");
    const queryParams = new URLSearchParams({message: text, ...options});
    const queryString = queryParams.toString();

    return get(`${endURI.chatbot}?${queryString}`)
}

/**
 * Grammar Checker
 * @param {string} text
 * @returns {Promise<object>}
 */
export function grammar(text = "") {
    const queryString = new URLSearchParams({text}).toString();
    return get(`${endURI.grammar}?${queryString}`);
}

/**
 * NSFW URL Detection
 * @param {string} url
 * @returns {Promise<object>}
 */
export function nsfw(url) {
    if (!/\.(jpg|png|gif)$/i.test(url)) return Promise.resolve({error: "No Image specified", status: 404});
    return get(`${endURI.nsfw}?img=${encodeURIComponent(url)}`);
}

/**
 * TicTacToe Game
 * @param {number} uid
 * @param {"o" | "x"} ai
 * @param {import(".index").boardOptions} array
 * @returns {Promise<object>}
 */
export function tictactoe(uid, ai, array) {
    if (!Array.isArray(array) || array.length !== 9) return Promise.reject(new Error("Array length must be 9"));
    if (typeof uid !== "number" || uid < 0 || !["o", "x"].includes(ai)) return Promise.reject(new Error("UID/AI is Required"));
    const board = JSON.stringify({"board": array});

    return post(`${endURI.tictactoe}?uid=${encodeURIComponent(uid)}&ai=${encodeURIComponent(ai)}`, board);
}

/**
 * Toxicity Detection
 * @param {string} text
 * @returns {Promise<object>}
 */
export function toxicity(text) {
    if (typeof text !== "string") return Promise.reject(new Error("Text must be a string"));
    return get(`${endURI.toxicity}?text=${encodeURIComponent(text)}`)
}

function get(endpoint) {
    return new Promise((resolve, reject) => {
        request({
            hostname: baseURI,
            path: endpoint,
            method: "GET",
            headers: {"Content-Type": "application/json"}
        }, (response) => {
            let data = "";
            response.on("error", reject);
            response.on("data", chunk => data += chunk);
            response.on("end", () => {
                try {
                    resolve(JSON.parse(data))
                } catch (e) {
                    resolve({error: "Timed Out", status: 408})
                }
            });
        }).on("error", reject).end();
    })
}

function post(endpoint, requestBody) {
    return new Promise((resolve, reject) => {
        const req = request({
            hostname: baseURI,
            path: endpoint,
            method: "POST",
            headers: {"Content-Type": "application/json"}
        }, response => {
            let data = "";
            response.on("data", chunk => data += chunk);
            response.on("end", () => {
                try {
                    resolve(JSON.parse(data))
                } catch (e) {
                    resolve({error: response?.statusMessage || "Timed out", status: response?.statusCode || 408})
                }
            })
        }).on("error", reject);
        req.write(requestBody);
        req.end()
    })
}

export default {
    chatbot,
    grammar,
    nsfw,
    tictactoe,
    toxicity
}