const string = "A man, a plan, a canal: Panama"
/**
Reverse a string and compare it.
 * @param {string} s
 * @return {boolean}
 */
const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let rev = "";
    
    // generate a reverse string using a reverse for loop.
    for(let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }

    return rev === s;
};

/**
 Two pointer solution from left and right.
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // remove the characters that are not alphanumeric
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let leftPointer = 0;
    let rightPointer = s.length -1;

    while (rightPointer - leftPointer >= 1) {
        if (s[leftPointer] !== s[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};

/**
 Two pointer solution from center point to the left and right.
 * @param {string} s
 * @return {boolean}
 */
const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2), right = left;
    
    // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }
    
    // loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
        }
        
        left--;
        right++;
    }
    
    return true;
};

console.log(isValidPalindrome(string));