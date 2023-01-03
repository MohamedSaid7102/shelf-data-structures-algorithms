"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./src/SingleLinkedList");
try {
    var myList = new SingleLinkedList_1.LinkedList();
    myList.insert('Mohamed', 0);
    myList.insert('Halah', 1);
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.pop(), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.pop(), '\n');
    myList.print();
    myList.push(1);
    myList.push(2);
    myList.push(3);
    myList.push(4);
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting from begining: ', myList.shift(), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting from begining: ', myList.shift(), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting from begining: ', myList.shift(), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting from begining: ', myList.shift(), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting from begining: ', myList.shift(), '\n');
    myList.print();
}
catch (error) {
    console.log(error);
}
