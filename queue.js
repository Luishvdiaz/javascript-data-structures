// Cola

class Queue {
  #items = [];

  enQueue(item) {
    this.#items.push(item);
  }

  deQueue(item) {
    return this.#items.shift();
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  peek() {
    return this.#items[0];
  }

  size() {
    return this.#items.length;
  }

  getItems() {
    return [...this.#items];
  }
}

const queue = new Queue();

queue.enQueue('Pedro');
queue.enQueue('Juan');
queue.enQueue('Pepe');
console.log(queue.peek());
queue.deQueue();
console.log(queue.peek());

