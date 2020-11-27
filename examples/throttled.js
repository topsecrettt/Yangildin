import { throttle } from "../src/index.js";

const throttled = throttle(function () {
    console.log("throttled has been called");
}, 5000);

let intervalCalls = 0;

const intervalId = setInterval(function () {
    throttled();
    
    intervalCalls++;

    if (intervalCalls > 30) {
        clearInterval(intervalId);
    }
}, 1000);