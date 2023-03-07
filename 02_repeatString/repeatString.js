const repeatString = function(str, iterations) {
    
    if (iterations<0) {
        return 'ERROR'        
    }
    let strings = '';
    for (let i = 0; i < iterations; i++) {
        strings += str;
    }
    return strings;
};

// Do not edit below this line
module.exports = repeatString;
