import {chatbot} from "../main.js";

const start = performance.now();

const message = {
	200: "CHATBOT => PASS",
	404: "CHATBOT => MSG IS NULL",
	500: "CHATBOT => SERVER ERR",
	403: "CHATBOT => BAD RESPONSE",
	408: "CHATBOT => TIMED OUT"
};

chatbot("Test Run by Simply-API.js", {uid: 74675927457}).then(data => {
	const elapsed = Math.round(performance.now() - start);
	if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

	console.log(`CHATBOT => FAIL (${elapsed}ms)`);
});