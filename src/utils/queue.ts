class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Add a new item to the end of the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Remove the first item from the queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // Return the first item without removing it
  peek(): T | undefined {
    return this.items[0];
  }

  // Verify if the queue is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size(): number {
    return this.items.length;
  }
}
