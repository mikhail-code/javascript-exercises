const sumAll = function() {
    let result = 0;
for (let index = arguments[0]; index <= arguments[1]; index++) {
    result += index; 
}
console.log("Result " + result); 
return result;
};

// Do not edit below this line
module.exports = sumAll;
