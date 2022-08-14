/* Stacks */

// Helpful for recursion
// I.e. if you push data as you recurse, but remove as you backtrack (like if the recursive check failed)
// Think DFS!


class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    pop() {
        this.size--;
        this.stack.pop();
    }

    peek() {
        console.log(this.stack[this.size - 1]);
    }

    push(item) {
        this.stack.push(item);
        this.size++;
    }

    isEmpty() {
        console.log(this.size == 0);
    }

    print() {
        console.log(this.stack);
    }
}

let s = new Stack();
s.isEmpty();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.isEmpty();
s.print();
s.pop();
s.peek();
s.print();
