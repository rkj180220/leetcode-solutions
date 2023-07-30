/**
 * 844. Backspace String Compare
 * Given two strings s and t, 
 * return true if they are equal when both are typed into empty text editors. 
 * '#' means a backspace character.
 * Note that after backspacing an empty text, the text will continue empty.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Brute Force Approach Time Complexity - O(a+b)  Space Complexity - O(a+b)
// Need to optimize space complexity
var backspaceCompareBruteForce = function(s, t) {
    s = buildStringBruteForce(s);
    t = buildStringBruteForce(t);
    if (s.length != t.length) {
        return false;
    } else {
        for (let i=0; i<s.length; i++) {
            if (s[i] != t[i]) {
                return false;
            }
        }
    }
    return true;
};

const buildStringBruteForce = function(s) {
    const buildString = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] != '#') {
            buildString.push(s[i]);
        } else {
            buildString.pop();
        }
    }
    return buildString;
}


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Two Pointer approach. We move the pointer in both the strings from the end because when a # is encountered we need to move backwards. So if we compare the two strings from the backside and they are not equal we can return false
var backspaceCompare = function(s, t) {
    // Initialize two pointers starting from the end of each string
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    // Iterate until both pointers are greater than 0
    while (p1 >= 0 || p2 >= 0) {
        // If either string has a # character at the current pointer
        if (s[p1] === '#' || t[p2] === '#') {
            // Handle backspacing in the first string
            if (s[p1] === '#') {
                let backwards = 2;
                // Move the pointer back by two positions, skipping any # characters encountered
                while (backwards > 0) {
                    p1--;
                    backwards--;
                    if (s[p1] === '#') {
                        backwards += 2;
                    }
                }
            }

            // Handle backspacing in the second string
            if (t[p2] === '#') {
                let backwards = 2;
                // Move the pointer back by two positions, skipping any # characters encountered
                while (backwards > 0) {
                    p2--;
                    backwards--;
                    if (t[p2] === '#') {
                        backwards += 2;
                    }
                }
            }
        } else {
            // If the characters at the current pointers are not equal, the strings are not equal
            if (s[p1] !== t[p2]) {
                return false;
            } else {
                // Move both pointers to compare the next characters
                p1--;
                p2--;
            }
        }
    }

    // If all characters are equal and we have reached the beginning of both strings, return true
    return true;
};