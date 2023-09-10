---
sidebar_position: 5
---

# Queue

## Queue Interface

```typescript
export interface Queue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined | null;
  isEmpty(): boolean;
  length(): number;
}
```

## 1. Queue Using Array

```typescript
/**
 * This is an array-based implementation of a Queue.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle.
 * It means that the first element that was added to the queue will be the first one to be removed.
 * The time complexity of the operations is O(n)
 */

export class ArrayQueue<T> implements Queue<T> {
  private queue: T[] = [];

  /**
   * Adds an item to the queue.
   *
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    this.queue.push(item);
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws Queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }

    return this.queue.shift() as T;
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | null | undefined {
    if (this.isEmpty()) {
      return null;
    }

    return this.queue[0];
  }

  /**
   * Checks if the queue is empty
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns {number} The number of items in the queue.
   */
  length(): number {
    return this.queue.length;
  }
}
```

## 2. Queue Using Stack

```typescript
export class StackQueue<T> implements Queue<T> {
  private enqueueStack: Stack<T> = new Stack<T>();
  private dequeueStack: Stack<T> = new Stack<T>();

  /**
   * Adds an item to the queue.
   * We always add a new item to the enqueueStack.
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    this.enqueueStack.push(item);
  }

  /**
   * Shifts the elements from the enqueueStack to the dequeueStack
   * In the worst case, all the elements from the enqueue stack needs to be shifted, which needs O(n) time.
   * However, after the shift, elements can be dequeued at O(1)
   * This helps in dequeuing the elements in amortized O(1) time.
   */

  private shift(): void {
    while (!this.enqueueStack.isEmpty()) {
      const enqueueStackTop = this.enqueueStack.pop();
      this.dequeueStack.push(enqueueStackTop);
    }
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Queue Underflow");
    }
    if (this.dequeueStack.isEmpty()) {
      this.shift();
    }

    return this.dequeueStack.pop();
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | null | undefined {
    if (this.isEmpty()) {
      return null;
    }
    if (this.dequeueStack.isEmpty()) {
      this.shift();
    }
    return this.dequeueStack.top();
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.enqueueStack.isEmpty() && this.dequeueStack.isEmpty();
  }

  /**
   * Returns the length of the queue.
   *
   * @returns {number} the length of the queue
   */
  length(): number {
    return this.enqueueStack.length() + this.dequeueStack.length();
  }
}
```

## 3. Queue Using Linked List

```typescript
type Node<T> = {
  value: T;
  next?: Node<T>;
};

/**
 * This is a LinkedList-Like implementation of a Queue.
 * allowing the operations to be implemented in constant time.
 * A Queue is a data structure that follows the FIFO (First In First Out) principle:
 * The first element that was added to the queue will be the first one to be removed.
 */

export class LinkedQueue<T> implements Queue<T> {
  public size: number;
  public head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.size = 0;
  }

  /**
   * Adds an item to the queue.
   *
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.size++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws Queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue.
   */
  dequeue(): T | undefined {
    if (!this.head) {
      throw new Error("Queue Underflow");
    }

    this.size--;
    let head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | null | undefined {
    if (this.isEmpty()) {
      return null;
    }
    return this.head?.value;
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Returns the number of items in thq queue.
   *
   * @returns {number} The number of items in the queue.
   */
  length(): number {
    return this.size;
  }
}
```

## 4. Circular Queue

```typescript
/**
 * Circular Queue implementation using array.
 *
 * @template T The type of the elements in the queue.
 * @param {T[]} queue The array that holds the elements of the queue.
 * @param {number} frontIndex The index of the front element of the queue.
 * @param {number} rearIndex The index of the rear element of the queue.
 * @param {number} size The size of the queue.
 */

export class CircularQueue<T> implements Queue<T> {
  private queue: T[];
  private frontIndex: number;
  private rearIndex: number;
  private size: number;

  constructor(size: number) {
    this.queue = new Array(size);
    this.frontIndex = -1;
    this.rearIndex = -1;
    this.size = size;
  }

  /**
   * Adds an item to the queue.
   *
   * @param item The item being added to the queue.
   */
  enqueue(item: T): void {
    if (
      (this.frontIndex == 0 && this.rearIndex == this.size - 1) ||
      this.rearIndex == (this.frontIndex - 1) % (this.size - 1)
    ) {
      throw new Error("Queue is full");
    } else if (this.frontIndex == -1) {
      this.frontIndex = 0;
      this.rearIndex = 0;
      this.queue[this.rearIndex] = item;
    } else if (this.rearIndex == this.size - 1 && this.frontIndex != 0) {
      this.rearIndex = 0;
      this.queue[this.rearIndex] = item;
    } else {
      this.rearIndex++;
      this.queue[this.rearIndex] = item;
    }
  }

  /**
   * Removes an item from the queue and returns it.
   *
   * @throws Queue Underflow if the queue is empty.
   * @returns The item that was removed from the queue.
   */
  dequeue(): T | undefined {
    if (this.frontIndex == -1) {
      throw new Error("Queue is empty");
    }
    const item = this.queue[this.frontIndex];
    if (this.frontIndex == this.rearIndex) {
      this.frontIndex = -1;
      this.rearIndex = -1;
    } else if (this.frontIndex == this.size - 1) {
      this.frontIndex = 0;
    } else {
      this.frontIndex++;
    }

    return item;
  }

  /**
   * Returns the item at the front of the queue.
   *
   * @returns The item at the front of the queue or null if the queue is empty.
   */
  peek(): T | null | undefined {
    if (this.frontIndex == -1) {
      return null;
    }

    return this.queue[this.frontIndex];
  }

  /**
   * Checks if the queue is empty.
   *
   * @returns {boolean} Whether the queue is empty or not.
   */
  isEmpty(): boolean {
    return this.frontIndex == -1;
  }

  /**
   * Returns the number of items in the queue.
   *
   * @returns {number} The number of items in the queue.
   */
  length(): number {
    if (this.frontIndex == -1) {
      return 0;
    }

    if (this.rearIndex >= this.frontIndex) {
      return this.rearIndex - this.frontIndex + 1;
    }

    return this.size - (this.frontIndex - this.rearIndex - 1);
  }
}
```
