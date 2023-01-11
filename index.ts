import { LinkedList } from './src/SingleLinkedList';

try {
  let myList = new LinkedList();

  myList.insert('Mohamed', 0);

  myList.print();

  console.log('\n$$$$$$$$$$$$$$ Update: ', myList.updateNodeWithIndex(0, 'hi'), '\n');
  myList.print()
  console.log('\n$$$$$$$$$$$$$$ Update: ', myList.updateNodeWithIndex(0, 'hiiiiii'), '\n');
  myList.print()
} catch (error) {
  console.log(error);
}
