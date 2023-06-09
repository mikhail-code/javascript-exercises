const removeFromArray = function() {
    const inputArray = arguments[0];
    let resultArray = inputArray;
    console.log("Before " + resultArray); 
    //going trough every condition and filter it out 
    for (let index = 1; index < arguments.length; index++) {
    const element = arguments[index];
    resultArray = resultArray.filter(word => word != element);
    }
    console.log("After " + resultArray); 
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
