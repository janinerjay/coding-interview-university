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
        let prev = null;
        let node = head;
        while (node) {
            let temp = node.next;
            node.next = prev;
            prev = node;
            node = temp;
        }
        head = prev;
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
}

let l = new LinkedList();
l.add('Kitten');
l.add('Puppy');
l.add('Dog');
l.add('Cat');
l.add('Fish');
console.log(l.size());
console.log(l.removeAt(3));
console.log(l.elementAt(3));
console.log(l.indexOf('Puppy'));
console.log(l.print());
console.log(l.reverse());
console.log(l.print());
