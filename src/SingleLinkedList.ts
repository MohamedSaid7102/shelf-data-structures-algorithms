/**
 * Notes:
 *
 * 1. if the function is returning 'this', this is for allowing method chaingin
 * 2. This is ⭐ 0 Index..!! if you want to insert at second position .insert(<value>, 1) not 2
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
    this.length = 0;
  }

  /**********************
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   *⭐    Utilities   ⭐*
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   **********************/

  /**
   * 📜 Checks if the list is empty or not
   *
   * @returns If the list is empty or not
   */
  private isEmpty(): boolean {
    // you can alsot check by 'return this.length === 0' But I prefer this way.
    return this.head === null;
  }

  /**
   * Deeply clone and return passed value
   *
   * @param value to deeply clone it
   * @returns deeply cloned passed value
   */
  private deepClone<G>(value: G | null): G {
    return JSON.parse(JSON.stringify(value));
  }

  /**
   * 📜 Delete passed node
   *
   * ⏳ Time-Complixty: O(1)
   *
   * @param node
   * @returns deleted node
   */
  // private deleteNode(node: Node<T> | null | undefined): T {
  //   if (node === null || node === undefined)
  //     throw new Error('Passed node is null, cannot delete null..!');

  //   if (this.length == 0)
  //     throw new Error("Length = 0, you're suppose to have no nodes..!");

  //   // Deeply clone the node value to return it
  //   let temp = this.deepClone(node.value);
  //   // Delete the node
  //   node.next = null;
  //   node = null;
  //   // Decrement the length
  //   this.length--;
  //   // Return node value
  //   return temp;
  // }

  /**********************
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   *⭐    Adding      ⭐*
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   **********************/

  /**
   * 📜 Adds to the end of the list
   *
   * ⏳ Time-Complixty: O(n)
   *
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
   * 📜 Adds to the start of the list
   *
   * ⏳ Time-Complixty: O(1)
   *
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
   * 📜 Insert a new node at a specific position
   *
   * ⭐ 0 Index..!!
   *
   * ⏳ Time-Complixty: O(n)
   *
   * @param value
   * @param position
   * @returns a new LinkedList to allow method chaining
   */
  public insert(value: T, position: number): LinkedList<T> {
    // Handle out of bound case
    if (position < 0 || position > this.length)
      throw new Error(`Out of bound, You only have ${this.length} Nodes.`);

    // So user want to insert at the begining
    if (position === 0) return this.unshift(value);

    // So user want to insert at the end of the list
    if (position === this.length) return this.push(value);

    // Otherwise we will add in the position user provided
    const node = new Node(value);
    let iterator = this.head;

    for (let i = 0; i < position - 1 && iterator; i++)
      iterator = iterator?.next;

    if (iterator && iterator.next) {
      let temp = this.deepClone(iterator.next);
      iterator.next = node;
      node.next = temp;
    }

    this.length++;

    return this;
  }

  /**********************
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   *⭐    Deleteing   ⭐*
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   **********************/

  /**
   * 📜 Removes last node in the list, and return it's value (undefined in case list is empty).
   *
   * ⏳ Time-Complixty: O(n)
   *
   * @returns last node in the list
   */
  // TODO: Try to extract deleting logic into a function
  public pop(): T | undefined {
    // We could've throw a new Error("List is empty"), but I prefer keep it simple
    if (this.isEmpty()) return;

    try {
      // Handle single node deletion
      if (this.length === 1) {
        let temp = this.deepClone(this.head?.value);
        this.head = null;
        this.length -= 1;
        return temp;
      }

      // Handle 2 nodes deletion
      if (this.length === 2) {
        let temp = this.deepClone(this.head?.next?.value);
        this.head!.next = null;
        this.length -= 1;
        return temp;
      }

      // Handle multi node deletion from the end
      let iterator: Node<T> | null = this.head;
      // iterate till the iterator it at the second node from the last
      for (let i = 0; i < this.length - 2; i++) iterator = iterator!.next;
      // Dete the node after the iterator
      let temp = this.deepClone(iterator?.next?.value);
      iterator!.next = null;
      this.length -= 1;
      return temp;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 📜 Removes first node in the list, and return it's value (undefined in case list is empty).
   *
   * ⏳ Time-Complixty: O(1)
   *
   * @returns first node in the list
   */
  // TODO: Try to extract deleting logic into a function
  public shift(): T | undefined {
    if (this.length <= 0) return;

    const temp = this.deepClone(this.head?.value);
    if (this.length == 1) this.head = null;
    else this.head = this.head!.next;
    this.length -= 1;
    return temp;
  }

  /**
   * 📜 Removes node at passed index in the list, and return it's value (undefined in case list is empty).
   *
   * ⏳ Time-Complixty: O(n)
   *
   * @returns deleted node
   */
  // TODO: Try to extract deleting logic into a function
  public removeAt(index: number): T | undefined {
    if (index > this.length - 1)
      throw new RangeError(
        `You can't delete node at index ${index}, ${
          this.length === 0
            ? 'you do not have any nodes'
            : 'you only have ' + this.length + ' nodes'
        } || LinkedList is 0 based`
      );

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let iterator = this.head;
    for (let i = 0; i < index - 1; i++) iterator = iterator!.next;

    let temp = this.deepClone(iterator?.next);

    iterator!.next = this.deepClone(temp!.next);

    temp!.next = null;
    this.length -= 1;
    return temp!.value!;
  }

  /**********************
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   *⭐ Logging & Info⭐*
   ***⭐⭐⭐⭐⭐⭐⭐⭐**
   **********************/

  /**
   * Prints all the list
   * O(n) Due to the iteration over all the list
   */
  public print(): void {
    let iterator = this.head;
    let output = '';
    while (iterator) {
      // console.log(iterator.value, ' ');
      output += iterator.value + ' -> ';
      iterator = iterator.next;
    }
    output += 'null';
    console.log(`**************`);
    console.log('* Your List: *', output);
    console.log(`**************`);
  }

  /**
   * 📜 Return list size
   *
   * ⏳ Time-Complixty: O(1)
   *
   * @returns list length
   */
  public size() {
    return this.length;
  }
}
