# 160. Intersection of Two Linked Lists
# Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
# For example, the following two linked lists begin to intersect at node c1:
# The test cases are generated such that there are no cycles anywhere in the entire linked structure.
# Note that the linked lists must retain their original structure after the function returns.

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:

        pointerA = headA
        pointerB = headB
        
        # Continue until both pointers are the same or both are None
        while pointerA != pointerB:
            # If one pointer reaches the end, move it to the head of the other list
            pointerA = pointerA.next if pointerA else headB
            pointerB = pointerB.next if pointerB else headA
        
        # Return the intersection point or None if no intersection
        return pointerA
