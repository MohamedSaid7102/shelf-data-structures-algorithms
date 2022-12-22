export {};
import { LinkedList } from './src/SingleLinkedList';

try {
  let myList = new LinkedList();
  // hello wolrd
  // myList.unshift(1).unshift(0).unshift(-1).push(2).push(3).push(4);
  myList.insert('Halah', 0);
  myList.insert('Mohamed', 1);
  myList.push('Soso');
  myList.unshift('Mohamed');
  // myList.insert('POPO', 9);
  myList.print();
} catch (error) {
  console.log(error);
}
