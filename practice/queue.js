/* Queues */

// Think BFS!
// Implementing a cache

function Queue() {
    collection = [];

    this.print = () => {
        console.log(collection);
    }

    this.enqueue = (element) => {
        collection.push(element)
    }

    this.dequeue = () => {
        return collection.shift();
    }

    this.front = () => {
        return collection[0];
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return (collection.length === 0);
    }
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();
console.log(q.size());
console.log(q.isEmpty());

/* Priority Queue */
function PriorityQueue() {
    let collection = [];
    this.printCollection = () => {
        console.log(collection);
    }

    this.enqueue = (element) => {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {    //checking priorities
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = () => {
        let value = collection.shift();
        return value[0];
    }

    this.front = () => {
        return collection[0];
    }

    this.size = () => {
        return collection.length;
    }

    this.isEmpty = () => {
        return (collection.length === 0);
    }
}

let pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ella Fitzgerald', 1]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();