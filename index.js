'use strict';
exports.__esModule = true;
var SingleLinkedList_1 = require('./src/SingleLinkedList');
try {
  var myList = new SingleLinkedList_1.LinkedList();
  myList.insert('Mohamed', 0);
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('Mohamed', 'hi'),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('hi', 'hiiiiii'),
    '\n'
  );
  myList.print();
  myList.push('Reem');
  myList.push('Symaa');
  myList.push('Halah');
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('hi', 'hiiiiii'),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('Symaa', 'hiiiiii'),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('Halah', 'hiiiiii'),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('hiiiiii', 'ha ha ha'),
    '\n'
  );
  myList.print();
  console.log(
    '\n$$$$$$$$$$$$$$ Update: ',
    myList.updateNodeWithValue('Reem', 'ha ha ha'),
    '\n'
  );
  myList.print();
} catch (error) {
  console.log(error);
}

