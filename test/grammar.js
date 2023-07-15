// noinspection SpellCheckingInspection

import {grammar} from "../main.js";

const start = performance.now();

const message = {
	200: "GRAMMAR => PASS",
	404: "GRAMMAR => TEXT IS NULL",
	500: "GRAMMAR => SERVER ERR",
	403: "GRAMMAR => BAD RESPONSE",
	408: "GRAMMAR => TIMED OUT"
};

grammar("helo how r u").then(data => {
	const elapsed = Math.round(performance.now() - start);
	if (message[data?.status]) return console.log(`${message[data?.status]} (${elapsed}ms)`);

	console.log(`GRAMMAR => FAIL (${elapsed}ms)`);
});