import {request} from "https";

const baseURI = "simplyapi.js.org", endURI = {
	chatbot: "/api/chatbot",
	tictactoe: "/api/tictactoe",
	toxicity: "/api/toxicity"
};

/**
 * Chatbot API
 * @param {string} text
 * @param {import("./main").cbOptions} options
 * @returns {Promise<object>}
 */
export function chatbot(text, options = {}) {
	if (typeof text !== "string") return Promise.reject("Message is Required");
	const queryParams = new URLSearchParams({message: text, ...options});
	const queryString = queryParams.toString();

	return api(`${endURI.chatbot}?${queryString}`);
}

/**
 * TicTacToe Game
 * @param {number} uid
 * @param {"o" | "x"} ai
 * @param {import("./main").boardOptions} array
 * @returns {Promise<object>}
 */
export function tictactoe(uid, ai, array) {
	if (!Array.isArray(array) || array.length !== 9) return Promise.reject(new Error("Array length must be 9"));
	if (typeof uid !== "number" || uid < 0 || !["o", "x"].includes(ai)) return Promise.reject(new Error("UID/AI is Required"));
	const board = JSON.stringify({"board": array});

	return api(`${endURI.tictactoe}?uid=${encodeURIComponent(uid)}&ai=${encodeURIComponent(ai)}`, board);
}

/**
 * Toxicity Detection
 * @param {string} text
 * @returns {Promise<object>}
 */
export function toxicity(text) {
	if (typeof text !== "string") return Promise.reject(new Error("Text must be a string"));
	return api(`${endURI.toxicity}?text=${encodeURIComponent(text)}`);
}

function api(endpoint, requestBody) {
	return new Promise((resolve, reject) => {
		const req = request({
			hostname: baseURI,
			path: endpoint,
			method: requestBody ? "POST" : "GET",
			headers: {"Content-Type": "application/json"}
		}, response => {
			let data = "";
			response.on("data", chunk => data += chunk);
			response.on("end", () => {
				try {
					resolve(JSON.parse(data));
				} catch (e) {
					resolve({error: response?.statusMessage || "Timed out", status: response?.statusCode || 408});
				}
			});
		}).on("error", reject);
		if (requestBody) req.write(requestBody);
		req.end();
	});
}

export default {
	chatbot,
	tictactoe,
	toxicity
};