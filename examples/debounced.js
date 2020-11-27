import { debounce } from "../src/index.js";

const debounced = debounce(function () {
    console.log("debounced has been called");
}, 5000);

let intervalCalls = 0;

const intervalId = setInterval(function () {
    debounced();
    
    intervalCalls++;

    if (intervalCalls > 10) {
        clearInterval(intervalId);
    }
}, 1000);