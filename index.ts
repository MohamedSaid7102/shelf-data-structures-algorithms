import { LinkedList } from './src/SingleLinkedList';

try {
  let myList = new LinkedList();

  myList.insert('Mohamed', 0);
  myList.print();

  console.log("List at index 0: ", myList.at(2))
} catch (error) {
  console.log(error);
}
