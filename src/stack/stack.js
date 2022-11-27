class Stack {
    constructor() {
        this.items = [];
    }

    push(elem) {
        this.items.push(elem);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.size() - 1];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    isEmpty() {
        return this.size() == 0 ? true : false;
    }
}

class ImprovedStack {
    constructor() {
        this.items = {};
        this.counter = 0;
    }

    push(elem) {
       this.itmes[counter] = elem; 
        couter += 1;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        this.counter -= 1;
        const result = this.items[this.counter];
        delete this.items[this.counter];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.itmes[this.counter - 1];
    }

    clear() {
        this.items = {};
        this.counter = 0;
    }

    isEmpty() {
        this.counter !== 0 ? false : true;
    }

    size() {
        return counter;
    }
}

const stack = new Stack();
stack.push('책1');
stack.push('책2');
stack.push('책3');
console.log(stack.size());
console.log(stack.peek());

let popedElem = stack.pop()

console.log(popedElem);
console.log(stack.peek());
console.log(stack.size());
