const removeFromArray = function(array, ...elements) {
    for (let element in elements) {
        if (!array.includes(elements[element])) continue;
        array.splice(array.indexOf(elements[element]), 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
