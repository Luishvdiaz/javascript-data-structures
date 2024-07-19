class Stack {
  #items = [];

  push(item) {
    this.#items.push(item);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  getItems() {
    this.#items.forEach(item => console.log(item));
  }

  isEmpty() {
    return this.#items.length === 0;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();

console.log(stack.peek());
console.log(stack.isEmpty());
// stack.getItems();