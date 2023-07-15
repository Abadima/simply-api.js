import {request} from "https";

const baseURI = "simplyapi.js.org", endURI = {
    chatbot: "/api/chatbot",
    tictactoe: "/api/tictactoe",
    toxicity: "/api/toxicity"
};

interface cbOptions {
    bday?: string,
    birthplace?: string,
    developer?: string,
    gender?: string,
    language?: string,
    name?: string,
    uid?: number,
    year?: number,
}

type boardOptions = [
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " ",
        "x" | "o" | " "
]

/**
 * Chatbot API
 * @param {string} text
 * @param {cbOptions=} options
 * @returns {Promise<object>}
 */
export function chatbot(text: string, options: cbOptions = {}): Promise<object> {
    const queryString = Object.entries(options)
        .map(([key, value]) => `${key}=${value}`).join("&");

    return get(`${endURI.chatbot}?message=${encodeURIComponent(`${text}&${queryString}`)}`);
}

/**
 * TicTacToe Game
 * @param {number} uid
 * @param {"o" | "x"} ai
 * @param {boardOptions} array
 * @returns {Promise<object>}
 */
export function tictactoe(uid: number, ai: "o" | "x", array: boardOptions): Promise<object> {
    if (!array || array.length !== 9) return Promise.reject(new Error("Array length must be 9"));
    if (Number(uid) < 0 || !["o", "x"].includes(ai)) return Promise.reject(new Error("UID/AI is Required"));
    const board = JSON.stringify({"board": array});

    return post(`${endURI.tictactoe}?uid=${encodeURIComponent(uid)}&ai=${encodeURIComponent(ai)}`, board);
}


/**
 * Toxicity Detection
 * @param {string} text
 * @returns {Promise<object>}
 */
export function toxicity(text: string): Promise<object> {
    return get(`${endURI.toxicity}?text=${encodeURIComponent(text)}`);
}

/**
 * @param {string} endpoint
 * @returns {Promise<object>}
 */
export function get(endpoint: string): Promise<object> {
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
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve({error: "Timed Out", status: 408});
                }
            });
        }).on("error", reject).end();
    });
}

/**
 * @param {string} endpoint
 * @param {string} requestBody
 * @returns {Promise<object>}
 */
export function post(endpoint: string, requestBody: string): Promise<object> {
    return new Promise((resolve, reject) => {
        const req = request({
            hostname: baseURI,
            path: endpoint,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }, (response) => {
            let data = "";

            response.on("data", (chunk) => data += chunk);
            response.on("end", () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve({error: response?.statusMessage || "Timed out", status: response?.statusCode || 408});
                }
            });
        }).on("error", reject);

        req.write(requestBody);
        req.end();
    });
}

// noinspection JSUnusedGlobalSymbols
export default {
    chatbot,
    tictactoe,
    toxicity,
    get,
    post
};