/**
 * 1249. Minimum Remove to Make Valid Parentheses
 * 
 * Given a string s of '(' , ')' and lowercase English characters.
 * Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) 
 * so that the resulting parentheses string is valid and return any valid string.
 * 
 * Formally, a parentheses string is valid if and only if:
 * It is the empty string, contains only lowercase characters, or
 * It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * It can be written as (A), where A is a valid string.
 * 
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const arrayString = s.split("");
    const stack = [];
    for (let i = 0; i<arrayString.length; i++) {
        // If the char is a left bracket push the index into the stack
        if (arrayString[i] === '(') {
            stack.push(i);
        } else if (arrayString[i] === ')' && stack.length) {
            // If the char is right bracket and there exists left bracket in the stack they cancel each other
            stack.pop();
        } else if (arrayString[i] === ')') {
            // If there is no left bracket in the stack and only the right bracket, remove the element.
            arrayString[i] = '';
        }
    }

    // If there are some left brackets remaining remove those elements
    while (stack.length) {
        const deleteIndex = stack.pop();
        arrayString[deleteIndex] = "";
    }

    return arrayString.join("");
    
};