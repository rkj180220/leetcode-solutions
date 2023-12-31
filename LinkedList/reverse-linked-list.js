/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let previousNode = null;
    let currentNode = head;
    while(currentNode) {
        const next = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = next;
    }
    return previousNode;
};
