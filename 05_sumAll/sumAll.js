const sumAll = function(firstNum, secondNum) {

    if (firstNum<0 || 
        secondNum<0 ||
        typeof firstNum != 'number' ||
        typeof secondNum != 'number') {
            return 'ERROR';
    }

    minNum = Math.min(firstNum, secondNum);
    maxNum = Math.max(firstNum, secondNum);
    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
