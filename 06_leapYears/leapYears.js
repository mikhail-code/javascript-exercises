const leapYears = function(year) {
    let result = false;
    if (year % 4 == 0) {
        result = true;
        if (year % 100 == 0 && year % 400 != 0) {
            result = false;
        }
    }
    return result;
};

// const quotient = Math.floor(13/3); // => 4 => the times 3 fits into 13  
// const remainder = 13 % 3;          // => 1 

// Do not edit below this line
module.exports = leapYears;
