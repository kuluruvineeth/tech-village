---
sidebar_position: 4
---

# Stack

## Stack Interface

```typescript
export interface StackInterface<T> {
  push(value: T): void;
  pop(): T;
  length(): number;
  isEmpty(): boolean;
  top(): T | null;
}
```

## 1. Stack Using Array

```typescript
/**
 * Stack data structure. Its work is based on the LIFO method (Last In First OUT)
 * It means that elements added to the stack are place on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, it pops from the stack
 * This is a class-based implementation of a Stack.
 */
export class Stack<T> implements StackInterface<T> {
  private stack: T[] = [];
  private limit: number;

  /**
   * constructor of the stack, can set a limit, if not provided there is no limit to the stack.
   *
   * @param limit The limit of the stack
   */

  constructor(limit: number = Number.MAX_VALUE) {
    this.limit = limit;
  }

  /**
   * adds a new element to the stack
   * @param {T} value The new value to add
   */

  push(value: T): void {
    if (this.length() + 1 > this.limit) {
      throw new Error("Stack Overflow");
    }

    this.stack.push(value);
  }

  /**
   * removes an element from the top
   * @throws will throw an error if the stack is empty
   * @returns {T} removed element
   */
  pop(): T {
    if (this.length() !== 0) {
      return this.stack.pop() as T;
    }
    throw new Error("Stack Underflow");
  }

  /**
   * number of elements in the stack
   * @returns {number} the number of elements in the stack
   */
  length(): number {
    return this.stack.length;
  }

  /**
   * check if the stack is empty
   * @returns {boolean} returns true if the stack is empty, otherwise false
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }

  /**
   * return the last element in the stack without removing it.
   * @returns {T | null} return the last element or null if the stack is empty
   */
  top(): T | null {
    if (this.length() !== 0) {
      return this.stack[this.length() - 1];
    }
    return null;
  }
}
```

## 2. Stack Using LinkedList

```typescript
/**
 * This is an implementation of a stack, based on a linked list.
 * A stack is a linear data structure that works with the LIFO (Last In First Out) principle.
 * A linked list is a linear data structure that works with the FIFO (First In First Out) Principle and uses references
 * to determine which element is next in the list.
 */

export class LinkedListStack<T> implements StackInterface<T> {
  private list: SinglyLinkedList<T>;
  private limit: number;

  /**
   * Creates a new stack object.
   */

  constructor(limit: number = Number.MAX_VALUE) {
    this.list = new SinglyLinkedList<T>();
    this.limit = limit;
  }

  /**
   * Inserts a new element on the top of the stack.
   * Time complexity: constant O(1)
   *
   * @param value The value of the element to insert.
   * @throws Stack overflow, if the new element does not fit in the limit.
   */

  push(value: T): void {
    if (this.list.getLength() + 1 > this.limit) {
      throw new Error("Stack overflow");
    }

    this.list.push(value);
  }

  /**
   * Removes the top element from the stack.
   * Time Complexity: constant O(1)
   *
   * @returns The previous top element.
   * @throws Stack underflow, if the stack has no elements to pop.
   */
  pop(): T {
    if (this.list.isEmpty()) {
      throw new Error("Stack underflow");
    }

    return this.list.pop()!;
  }

  /**
   * Gets the amount of elements in the stack.
   *
   * @returns The amount of elements in the stack
   */
  length(): number {
    return this.list.getLength();
  }

  /**
   * Gets whether the stack is empty or not.
   *
   * @returns Whether the stack is empty or not.
   */
  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  /**
   * Gets the top element of the stack.
   * Time complexity: constant O(1)
   *
   * @returns The top element of the stack
   */
  top(): T | null {
    if (this.list.isEmpty()) {
      return null;
    }

    return this.list.get(0)!;
  }
}
```

<details>
<summary>Coding Questions</summary>
<h1>I am closable</h1>
</details>

import CollapsibleCodeBlock from '../../src/components/CodeBlock.tsx';

<ul>
<li><CollapsibleCodeBlock code={`countGoodSubstrings(s: string): number {
        const list: string[] = [];
        const slidingWindowSize = 3;
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            list.push(s.charAt(i));
            if (list.length > slidingWindowSize) {
                list.shift();
            }
            if (list.length === 3) {
                if (list[0] !== list[1] && list[0] !== list[2] && list[1] !== list[2]) {
                    count++;
                }
            }
        }
        return count;
    }`} language="typescript" /></li>

<li><CollapsibleCodeBlock code={`export interface StackInterface<T> {
  push(value: T): void;
  pop(): T;
  length(): number;
  isEmpty(): boolean;
  top(): T | null;
}`} language="typescript" /></li>
</ul>
