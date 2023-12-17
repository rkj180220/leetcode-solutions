# Given the head of a singly linked list, reverse the list, and return the reversed list.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        currentNode = head
        reverseNode = None

        while currentNode:
            # Save the next node
            nextNode = currentNode.next

            # Reverse the link
            currentNode.next = reverseNode

            # Move to the next nodes in both lists
            reverseNode = currentNode
            currentNode = nextNode
        
        return reverseNode

# Time Complexity: O(n), where n is the number of nodes in the linked list
# Space Complexity: O(1), as it uses constant extra space for the pointers
