const palindromes = function (str) {
    let cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    let reversedStr = ""
    let len = cleanStr.length;
    for (let i = len - 1; i >= 0; i--) {
        reversedStr += cleanStr[i];
    }
    
    return cleanStr == reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
