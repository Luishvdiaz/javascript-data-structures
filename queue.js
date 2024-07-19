// Cola
class QueueClass {
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

const queue = new QueueClass();

queue.enQueue('Pedro');
queue.enQueue('Juan');
queue.enQueue('Pepe');
queue.enQueue('Luis');
queue.enQueue('Cesar');
queue.enQueue('Brian');
console.log(queue.peek());
queue.deQueue();
console.log(queue.peek());
console.log(1);
console.log(2);
console.log(3);

console.log('Nuevo cambio');