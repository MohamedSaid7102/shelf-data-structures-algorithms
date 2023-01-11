import { LinkedList } from './src/SingleLinkedList';

try {
  let myList = new LinkedList();

  myList.insert('Mohamed', 0);
  myList.insert('Halah', 1);
  myList.push('Reem');
  myList.push('Soo');
  myList.print();

  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Sa'), '\n');
  myList.print()
  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Soo'), '\n');
  myList.print()

  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Halah'), '\n');
  myList.print()
  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Mohamed'), '\n');
  myList.print()
  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('SoSo'), '\n');
  myList.print()
  console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Reem'), '\n');
  myList.print()
} catch (error) {
  console.log(error);
}
