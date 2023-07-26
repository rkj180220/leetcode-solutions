// 2. Add Two Numbers
//Assuming ListNode is defined somewhere

/**
 * @param {ListNode} l1 - The head node of the first linked list.
 * @param {ListNode} l2 - The head node of the second linked list.
 * @return {ListNode} - The head node of the resulting linked list.
 */
var addTwoNumbers = function(l1, l2) {
    // Create a dummy node to hold the result.
    const dummyNode = new ListNode(0, undefined);

    // Initialize variables to hold the sum of current nodes, carry, and a pointer for traversing the result list.
    let sum = 0;
    let carry = 0;
    let temp = dummyNode;

    // Traverse both linked lists until they reach the end, or there is a carry from the previous addition.
    while (l1 || l2 || carry > 0) {
        // Add the values of the current nodes, taking care of any null nodes.
        sum += (l1 ? l1.val : 0);
        sum += (l2 ? l2.val : 0);

        // Add the carry from the previous addition.
        sum += carry;

        // Calculate the new carry for the next addition and the value for the current node.
        carry = Math.trunc(sum / 10);
        sum = sum % 10;

        // Create a new node with the current sum value and attach it to the result list.
        const newNode = new ListNode(sum, undefined);
        temp.next = newNode;

        // Move the pointer to the newly added node.
        temp = temp.next;

        // Reset the sum for the next iteration.
        sum = 0;

        // Move to the next nodes in both input lists if they exist.
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // Return the head of the result list (ignoring the dummy node).
    return dummyNode.next;
};
