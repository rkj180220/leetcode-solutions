/**
383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineHash = magazine.split('').reduce((accumulator, currentVal) => {
        accumulator[currentVal] = (accumulator[currentVal] || 0) + 1;
        return accumulator;
    }, {});

    for(const char of ransomNote) {
        if (!(char in magazineHash) || magazineHash[char] === 0) {
            return false;
        }
        magazineHash[char] -= 1;
    }

    return true;  
};
