export const throttle = (fn, interval, trailing = true) => {
    let lastCallTime;
    let timerId;
    
    return function throttled() {
        clearTimeout(timerId);
        
        const now = Date.now();
        
        if (!lastCallTime) {
            lastCallTime = Date.now();
            
            fn();
        } else if (now - lastCallTime >= interval) {
            fn();

            lastCallTime = now;
        } else if (trailing) {
            timerId = setTimeout(function timeout() {
                lastCallTime = Date.now();

                fn();
            }, interval);
        }
    };
};