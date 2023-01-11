"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./src/SingleLinkedList");
try {
    var myList = new SingleLinkedList_1.LinkedList();
    myList.insert('Mohamed', 0);
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Update: ', myList.updateNodeWithIndex(0, 'hi'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Update: ', myList.updateNodeWithIndex(0, 'hiiiiii'), '\n');
    myList.print();
}
catch (error) {
    console.log(error);
}
