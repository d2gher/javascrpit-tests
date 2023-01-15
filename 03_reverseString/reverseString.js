const reverseString = function(str) {
    // Container for the flipped text
    let output = "";
    let len = str.length;
    // A for loop that runs backwards and adds 
    // the characters from last to first to the container
    for (let i = len - 1; i >= 0; i--) {
        output += str[i];
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
