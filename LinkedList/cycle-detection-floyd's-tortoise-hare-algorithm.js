/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Brute Force Method with Set T:O(n) S:O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let currentNode = head;
    let seenNodes = new Set();
    while(!seenNodes.has(currentNode)) {
        // if it is not a cyclic linked list it will have the tail value as null
        if (currentNode.next === null) {
            return null;
        }
        seenNodes.add(currentNode);
        currentNode = currentNode.next;
    }

    // current node is the node where the cycle starts
    return currentNode;
};

/** Floyd's Hare and Tortoise Algorithm 
 * T:O(n) -> tortoise moves only once + remaining pointer S:O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let hare = tortoise = head;
    // Hare moves two times and tortoise moves once
    while (true) {
        hare = hare.next;
        tortoise = tortoise.next;
        // If there is no cycle then the linked list points to null
        // Check the hare since it moves faster
        if (hare === null || hare.next === null) {
            return null;
        } else {
            hare = hare.next;
        }

        if(hare === tortoise) break;
    }

    // Start a new pointer from hare and new pointer from head
    // The moment it meets that is the cyclic node
    let p1 = head;
    let p2 = tortoise;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
};