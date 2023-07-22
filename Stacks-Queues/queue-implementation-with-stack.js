/**
 * 232. Implement Queue using Stacks
 * Implement a first in first out (FIFO) queue using only two stacks. 
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * Implement the MyQueue class:
 * void push(int x) Pushes element x to the back of the queue.
 * int pop() Removes the element from the front of the queue and returns it.
 * int peek() Returns the element at the front of the queue.
 * boolean empty() Returns true if the queue is empty, false otherwise.
Notes:
You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

Used Linked List to implement the Stack and then used it implement the queue with 2 stacks
 */

class NewNode {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.length = 0;
        this.top = null;
        this.bottom = null;
    }

    push(value) {
        const node = new NewNode(value);
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            const currentHead = this.top;
            this.top = node;
            this.top.next = currentHead;
        }
        this.length++;
        return;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }

        if (this.length === 1) {
            this.bottom = null;
        }
        const removedElement = this.top.value;
        this.top = this.top.next;
        this.length--;
        return removedElement;
    }

    peek() {
        if (this.length === 0) {
            return null;
        }

        return this.top.value;
    }

    empty () {
        return this.length === 0;
    }
}

class MyQueue {
    constructor() {
        this.first = new Stack();
        this.last = new Stack();
        this.length = 0;
    }

    push(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        this.length++;
        return;
    }

    pop() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.length--;
        return this.first.pop()
    }

    peek() {
        if (this.last.length > 0) {
            return this.last.bottom.value;
        }

        return this.first.peek();
    }

    empty() {
        return this.length === 0;
    }
}


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */