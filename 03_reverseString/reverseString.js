const reverseString = function(inputString) {
var inputArray = inputString.split('');
var result = [];
console.log("Before " + inputArray); 
for (let index = inputArray.length-1; index >= 0; index--) {
    var currentElement = inputArray[index];
    result.push(currentElement);
}
console.log("After " + result.join('')); 
return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
