/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
The nodes that are important for calculation are left-1, left, right & right+1.
left-1 node is the node where the reversed linked list will be attached.
left node will be tail of the reversed list.

When the left is the start node the head will be still pointing to the start node which will be at the right position. So return the reversed list instead.
*/
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let position = 1;
    let currentNode = head;
    let start = head;
    let reversedList = null;

    while (position < left) {
        // left-1 node operation
        // Assign the start to left-1node. Need to update the reversed list to left-1 node.
        start = currentNode;
        currentNode = currentNode.next;
        position++;
    }

    // left node is the tail of the reversed linked list
    let tail = currentNode;

    while (position >= left && position <= right) {
        // Reverse the linked list
        const next = currentNode.next;
        currentNode.next = reversedList;
        reversedList = currentNode;
        currentNode = next;
        position++;      
    }

    //update the next of the start node to the reversed list
    start.next = reversedList;
    // Update the tail of the reversed list
    tail.next = currentNode;
    
    if (left > 1) {
        return head;
    }
    return reversedList;
    
};
