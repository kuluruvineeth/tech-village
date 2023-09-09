---
sidebar_position: 1
---

# Linked List

## Linked List Interface

**An interface for Linked Lists, which shares the common methods.**

```typescript
export interface LinkedList<T> {
  isEmpty(): boolean;
  get(index: number): T | null | undefined;
  push(data: T): void;
  pop(): T | undefined;
  append(data: T): void;
  removeTail(): T | undefined;
  insertAt(index: number, data: T): void;
  removeAt(index: number): T | undefined;
  clear(): void;
  toArray(): (T | undefined)[];
  getLength(): number;
}
```

## 1. Singly Linked List

```typescript
/**
 * Represents a node in linked list
 *
 * @template T The type of the data stored in the node.
 * @property data The data stored in the node
 * @property next A reference to the next node in the list. Can reference to null, if there is no next element.
 */
class ListNode<T> {
  constructor(public data: T, public next?: ListNode<T>) {}
}

/**
 * This is an implementation of singly linked list.
 * A linked list is a data structure that stores each element with a pointer (or reference) to the next element
 * in the list. Therefore, it is a linear data structure, which can be resized dynamically during runtime, as there is
 * no fixed memory block allocated.
 *
 * @template T The type of the value of the nodes.
 * @property head The head of the list.
 * @property tail The tail of the list.
 * @property length The length of the list.
 */

export class SinglyLinkedList<T> implements LinkedList<T> {
  private head?: ListNode<T>;
  private tail?: ListNode<T>;
  private length: number;

  /**
   * Creates a new, empty linked list.
   */

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /**
   * Checks, if the list is empty.
   *
   * @returns Whether the list is empty or not.
   */
  isEmpty(): boolean {
    return !this.head;
  }

  /**
   * Gets the data of the node at the given index.
   * Time complexity: linear (O(n))
   *
   * @param index The index of the node.
   * @returns The data of the node at the given index or null, if no data is present.
   */
  get(index: number): T | null | undefined {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (this.isEmpty()) {
      return null;
    }

    let currentNode: ListNode<T> = this.head!;
    for (let i: number = 0; i < index; i++) {
      if (!currentNode.next) {
        return null;
      }
      currentNode = currentNode.next;
    }

    return currentNode.data;
  }

  /**
   * Inserts the given data as the first node of the list.
   * Time complexity: constant (O(1))
   * @param data The data to be inserted.
   */
  push(data: T): void {
    const node: ListNode<T> = new ListNode<T>(data);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * Removes the first node of the list.
   * Time complexity: constant (O(1))
   *
   * @returns The data of the node that was removed.
   * @throws Index out of bounds if the list is empty.
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      throw new Error("Index out of bounds");
    }

    const node: ListNode<T> = this.head!;
    this.head = this.head!.next;
    this.length--;

    return node.data;
  }

  /**
   * Inserts the given data as a new node after the current TAIL.
   * Time complexity: constant (O(1))
   *
   * @param data The data of the node being inserted.
   */
  append(data: T): void {
    const node: ListNode<T> = new ListNode<T>(data);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail!.next = node;
    }

    this.tail = node;
    this.length++;
  }

  /**
   * Removes the current TAIL of the list.
   * Time complexity: linear (O(n))
   *
   * @returns The data of the former TAIL.
   * @throws Index out of bounds if the list is empty.
   */
  removeTail(): T | undefined {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    const currentTail = this.tail;
    if (this.head === this.tail) {
      this.head = undefined;
      this.tail = undefined;
      this.length--;

      return currentTail!.data;
    }

    let currentNode: ListNode<T> = this.head;
    while (currentNode.next !== currentTail) {
      currentNode = currentNode.next!;
    }

    this.tail = currentNode;
    this.length--;

    return currentTail!.data;
  }

  /**
   * Inserts the data as a new node at the given index.
   * Time complexity: O(n)
   *
   * @param index The index where the node is to be inserted.
   * @param data The data to insert.
   * @throws Index out of bounds, when given an invalid index.
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.push(data);
      return;
    }

    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new ListNode<T>(data);
    let currentNode: ListNode<T> | undefined = this.head;
    for (let i: number = 0; i < index - 1; i++) {
      currentNode = currentNode?.next;
    }

    const nextNode = currentNode?.next;
    currentNode!.next = newNode;
    newNode.next = nextNode;

    this.length++;
  }

  /**
   * Removes the node at the given index.
   * Time complexity: O(n)
   *
   * @param index The index of the node to be removed.
   * @returns The data of the removed node.
   * @throws Index out of bounds, when given an invalid index.
   */
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    if (index == 0) {
      return this.pop();
    }

    if (index === this.length - 1) {
      return this.removeTail();
    }

    let previousNode: ListNode<T> | undefined;
    let currentNode: ListNode<T> | undefined = this.head;
    for (let i: number = 0; i < index; i++) {
      if (i === index - 1) {
        previousNode = currentNode;
      }

      currentNode = currentNode?.next;
    }
    previousNode!.next = currentNode?.next;
    this.length--;

    return currentNode!.data;
  }

  /**
   * Clears the list.
   */
  clear(): void {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /**
   * Converts the list to an array.
   *
   * @returns The array representation of the list.
   */
  toArray(): (T | undefined)[] {
    const array: T[] = [];
    let currentNode: ListNode<T> | undefined = this.head;

    while (currentNode) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return array;
  }

  /**
   * Gets the length of the list.
   *
   * @returns The length of the list.
   */
  getLength(): number {
    return this.length;
  }
}
```

## 2. Doubly Linked List

```typescript
/**
 * Represents a node in a doubly linked list.
 *
 * @template T The type of the value stored in the node.
 * @property value The value stored in the node.
 * @property next The next node after this node.
 * @property prev The previous node before this node.
 */

class DoublyLinkedListNode<T> {
  constructor(
    public value: T,
    public next?: DoublyLinkedListNode<T>,
    public prev?: DoublyLinkedListNode<T>
  ) {}
}

/**
 * This is an implementation of a Doubly Linked List.
 * A Doubly Linked List is a data structure that contains a head, tail and length property.
 * Linked Lists consist of nodes, and each node has a value and a pointer to the next and previous node (can be null).
 *
 * @template T The type of the value of the nodes.
 * @property head The head of the list.
 * @property tail The tail of the list.
 * @property length The length of the list.
 */

export class DoublyLinkedList<T> implements LinkedList<T> {
  private head?: DoublyLinkedListNode<T> = undefined;
  private tail?: DoublyLinkedListNode<T> = undefined;
  private length: number = 0;

  /**
   * Checks if the list is empty.
   *
   * @returns {boolean} Whether the list is empty or not.
   */

  isEmpty(): boolean {
    return !this.head;
  }

  /**
   * Gets a value of a node at a specific index.
   * Time comlexity: O(n)
   *
   * @param index The index of the node.
   * @returns The value of a node at the specified index.
   */
  get(index: number): T | null | undefined {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
    for (let i: number = 0; i < index; i++) {
      currentNode = currentNode?.next;
    }
    return currentNode?.value ?? null;
  }

  /**
   * Inserts a node at the head of the list.
   * Time complexity: O(1)
   *
   * @param data The value of the node being inserted.
   */
  push(data: T): void {
    const newNode = new DoublyLinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /**
   * Removes a node from the head of the list.
   * Time complexity: O(1)
   *
   * @returns The value of the node that was removed.
   * @throws Index out of bounds if the list is empty.
   */
  pop(): T | undefined {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.tail = undefined;
    } else {
      this.head.next!.prev = undefined;
    }

    this.head = this.head.next;
    this.length--;

    return removedNode.value;
  }

  /**
   * Inserts a node at the tail of the list.
   * Time complexity: O(1)
   *
   * @param data The value of the node being inserted.
   */
  append(data: T): void {
    const newNode = new DoublyLinkedListNode(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;
  }

  /**
   * Removes a node from the tail of the list.
   * Time complexity: O(1)
   *
   * @returns The value of the node that was removed.
   * @throws Index out of bounds if the list is empty.
   */
  removeTail(): T | undefined {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.head = undefined;
    } else {
      this.tail!.prev!.next = undefined;
    }

    this.tail = this.tail!.prev;
    this.length--;

    return removedNode!.value;
  }

  /**
   * Inserts a node at a specific index.
   * Time Complexity: O(n)
   *
   * @param index The index where the node will be inserted.
   * @param data The value of the node being inserted.
   * @returns Index out of bounds if the index is not valid.
   */
  insertAt(index: number, data: T): void {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.push(data);
    }

    if (index === this.length) {
      this.append(data);
      return;
    }

    const newNode = new DoublyLinkedListNode(data);
    let prevNode: DoublyLinkedListNode<T> | undefined = this.head;
    for (let i: number = 0; i < index - 1; i++) {
      prevNode = prevNode?.next;
    }

    const nextNode = prevNode?.next;

    prevNode!.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode!.prev = newNode;

    this.length++;
  }

  /**
   * Removes a node at a specific index.
   * Time complexity: O(n)
   *
   * @param index The index of the node to be removed.
   * @returns The value of the node that was removed.
   * @throws Index out of bounds if the index is not valid.
   */
  removeAt(index: number): T | undefined {
    if (index < 0 || index >= this.length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      return this.pop();
    }

    if (index === this.length - 1) {
      return this.removeTail();
    }

    let removedNode: DoublyLinkedListNode<T> | undefined = this.head;
    for (let i: number = 0; i < index; i++) {
      removedNode = removedNode?.next;
    }
    removedNode!.prev!.next = removedNode!.next;
    removedNode!.next!.prev = removedNode!.prev;

    this.length--;

    return removedNode!.value;
  }

  /**
   * Clears the list.
   */
  clear(): void {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  /**
   * Converts the list to an array.
   *
   * @returns The array representation of the list.
   */
  toArray(): (T | undefined)[] {
    const array: T[] = [];

    let currentNode: DoublyLinkedListNode<T> | undefined = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  /**
   * Gets the length of the list.
   *
   * @returns The length of the list.
   */
  getLength(): number {
    return this.length;
  }

  /**
   * Reverses the list.
   * Time complexity: O(n)
   *
   * @returns The reverses list or null if the list is empty.
   */
  reverse(): DoublyLinkedList<T> | null {
    if (!this.head) {
      return null;
    }

    let currentNode: DoublyLinkedListNode<T> | undefined = this.head;
    let nextNode: DoublyLinkedListNode<T> | undefined = undefined;
    let prevNode: DoublyLinkedListNode<T> | undefined = undefined;

    while (currentNode) {
      nextNode = currentNode.next;
      prevNode = currentNode.prev;

      currentNode.next = prevNode;
      currentNode.prev = nextNode;

      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
```
