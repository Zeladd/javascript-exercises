const sumAll = function(min, max) {
    let sum = 0;
    if(typeof(min) !== "number" || typeof(max) !== "number") {
        return "ERROR";
    }
    if(min > max) {
        let swap = min;
        min = max;
        max = swap;
    }
    if(min < 0) {
        return "ERROR";
    }
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
