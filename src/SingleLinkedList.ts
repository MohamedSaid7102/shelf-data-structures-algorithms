/**
 * Notes:
 *
 * 1. if the function is returning 'this', this is for allowing method chaingin
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
class Node<T> {
  public value: T | null = null;
  public next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  constructor() {
    this.head = null;
  }

  /**
   *
   * @returns If the list is empty or not
   */
  public isEmpty(): boolean {
    // you can alsot check by 'return this.length === 0' But I prefer this way.
    return this.head === null;
  }

  /**
   * Adds to the end of the list
   * O(n) at worest case "Adding to the end of the list"
   * @param value
   * @returns a new LinkedList to allow method chaining
   */
  public push(value: T): LinkedList<T> {
    const node = new Node(value); // create a new node with the value provided

    // If head is null, so this is the first item in the list
    if (this.isEmpty()) {
      this.head = node;
    } else {
      // loop till the end of the list and add the new node
      let iterator = this.head;
      // while iterator has next, so we are not at the end of the list yet
      while (iterator?.next) iterator = iterator?.next;

      if (iterator) iterator.next = node;
    }
    // Increment the length
    this.length++;

    return this;
  }

  /**
   * Adds to the start of the list
   * @param value
   * @returns a new LinkedList to allow method chaining
   */
  public unshift(value: T): LinkedList<T> {
    const node = new Node(value); // create a new node with the value provided

    node.next = this.head;
    this.head = node;

    // Increment the length
    this.length++;

    return this;
  }

  /**
   * Insert a new node at a specific position
   * @param value
   * @param position
   * @returns a new LinkedList to allow method chaining
   */
  public insert(value: T, position: number): LinkedList<T> {
    // Handle out of bound case
    if (position < 0 || position > this.length)
      throw new Error(`Out of bound, You only have ${this.length} Nodes.`);

    // So user want to insert at the begining
    if (position === 0) {
      this.unshift(value);
      return this;
    }

    // So user want to insert at the end of the list
    if (position === this.length) {
      this.push(value);
      return this;
    }

    // Otherwise we will add in the position user provided
    const node = new Node(value);
    let iterator = this.head;

    for (let i = 0; i < position - 1 && iterator; i++)
      iterator = iterator?.next;

    if (iterator) {
      node.next = iterator?.next;
      iterator.next = node;
    }
    this.length++;

    return this;
  }

  /**
   * Prints all the list
   * O(n) Due to the iteration over all the list
   */
  public print(): void {
    let iterator = this.head;
    while (iterator) {
      console.log(iterator.value, ' ');
      iterator = iterator.next;
    }
  }
}
