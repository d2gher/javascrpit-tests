const removeFromArray = function(arr, ...ItemsToDelete) {
    ItemsToDelete.forEach((item) => {
        if (arr.indexOf(item) >= 0) {
            arr.splice(arr.indexOf(item), 1);
        }
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
