class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
    # Check if the lengths of the strings are different, they cannot be anagrams
    if len(s) != len(t):
        return False
    
    # Create a dictionary to store the frequency of each character in string 's'
    char_count = {}
    
    # Iterate through each character in string 's'
    for char in s:
        # If the character is already in the dictionary, increment its count
        if char in char_count:
            char_count[char] += 1
        # If the character is not in the dictionary, add it with a count of 1
        else:
            char_count[char] = 1
    
    # Iterate through each character in string 't'
    for char in t:
        # If the character is in the dictionary, decrement its count
        if char in char_count:
            char_count[char] -= 1
            # If the count becomes zero, remove the character from the dictionary
            if char_count[char] == 0:
                del char_count[char]
        # If the character is not in the dictionary, they are not anagrams
        else:
            return False
    
    # If all characters have been canceled out (count reduced to zero), the strings are anagrams
    return len(char_count) == 0

