/**
 * 20. Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parentheses = {
        '{':'}',
        '(':')',
        '[':']'
    }

    const stack = [];
    for (let i=0; i<s.length; i++) {
        // if it is a left bracket, push it into the stack
        if (parentheses[s[i]]) {
            stack.push(parentheses[s[i]]);
        } else {
            // if it is not a left bracket then it is a right bracket
            const expectedRightBracket = stack.pop();
            if (expectedRightBracket != s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
    
};