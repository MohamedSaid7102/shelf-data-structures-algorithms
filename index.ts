import { LinkedList } from './src/SingleLinkedList';

try {
  let myList = new LinkedList();

  myList.insert('Mohamed', 0);
  myList.print();

  console.log(`Our list ${myList.contains("Sarah") ? 'contains' : 'doesn\'t contain'} Sarah.`)
  console.log(`Our list ${myList.contains("Ahmed") ? 'contains' : 'doesn\'t contain'} Ahmed.`)
  console.log(`Our list ${myList.contains("Reem") ? 'contains' : 'doesn\'t contain'} Reem.`)
  console.log(`Our list ${myList.contains("Mohamed") ? 'contains' : 'doesn\'t contain'} Mohamed.`)
  myList.print();
} catch (error) {
  console.log(error);
}
