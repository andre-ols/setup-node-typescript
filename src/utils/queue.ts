class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  /**
   *  The `enqueue()` method adds an element to the end of the queue.
   * @param item The element to add to the queue.
   */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * The `dequeue()` method removes the first element from the queue and returns it. If the queue is empty, the method returns `undefined`.
   * @returns The first element of the queue if the queue is not empty; otherwise, it returns `undefined`.
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * The `peek()` method returns the first element of the queue without removing it. If the queue is empty, the method returns `undefined`.
   * @returns The `peek()` method returns the first element of the queue if the queue is not empty; otherwise, it returns `undefined`.
   */
  peek(): T | undefined {
    return this.items[0];
  }

  /**
   * The `isEmpty()` method returns `true` if the queue is empty; otherwise, it returns `false`.
   * @returns `true` if the queue is empty; otherwise, `false`.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * The `size()` method returns the number of elements in the queue.
   * @returns The number of elements in the queue.
   */
  size(): number {
    return this.items.length;
  }
}
