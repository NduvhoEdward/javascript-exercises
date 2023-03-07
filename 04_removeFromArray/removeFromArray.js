const removeFromArray = function(mainArray, ...toBeRemoved) {
    for(const item of toBeRemoved){
        let index = mainArray.indexOf(item);
        if (index > -1) {
            mainArray.splice(index, 1);
        }
    }

    return mainArray;
};

// Do not edit below this line
module.exports = removeFromArray;
