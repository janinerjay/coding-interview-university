/* Linked List */

function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.size = function () {
        return length;
    }

    this.head = function () {
        return head;
    }

    this.add = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    }

    this.remove = function (element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }

    this.isEmpty = function () {
        return length === 0;
    }

    this.indexOf = function (element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }

    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    }

    this.addAt = function (index, element) {
        let node = new Node(element);
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }

    this.removeAt = function (index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= length) {
            return null;
        }

        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }

    this.reverse = function () {
        let temp = null;

        while (head !== null) {
            let next = head.next;
            head.next = temp;
            [temp, head] = [head, next]
        }

        return temp;
    }

    this.print = function () {
        let result = [];
        let temp = head;
        while (temp) {
            result.push(temp.element);
            temp = temp.next;
        }
        return result.join(' => ');
    }

    this.middleNode = function (start, last) {
        if (start == null) return null;
        let slowPointer = start;
        let fastPointer = start.next;
        while (head != last) {
            fastPointer = fastPointer.next;
            if (fastPointer != last) {
                fastPointer = fastPointer.next;
                slowPointer = slowPointer.next;
            }
            return slowPointer;
        }
    }

    this.binarySearch = function (head, value) {
        let start = head;
        let last = null;
        do {
            let mid = this.middleNode(start, last);
            if (mid == null) return null;
            if (mid.element == value) return mid;
            else if (value < mid.element) {
                start = mid.next;
            } else {
                last = mid;
            }
        } while (last == null || last != start);
        return null;
    }
}

// function reverseDouble(llist) {
//     let temp = null;
//     let head = llist;
//     while(head != null){
//         [head.next,head.prev] = [head.prev,head.next];
//         temp = head;
//         head = head.prev;
//     }
//     return temp;
// }

let l = new LinkedList();
l.add(1);
l.add(2);
l.add(3);
l.add(4);
l.add(5);
console.log(l.print());
console.log(l.binarySearch(4));
// console.log(l.size());
// console.log(l.removeAt(3));
// console.log(l.elementAt(3));
// console.log(l.indexOf('Puppy'));
// console.log(l.print());
// console.log(l.reverse());
// console.log(l.print());
