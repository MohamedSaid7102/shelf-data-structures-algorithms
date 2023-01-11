"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./src/SingleLinkedList");
try {
    var myList = new SingleLinkedList_1.LinkedList();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Sa'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Soo'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Halah'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Mohamed'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('SoSo'), '\n');
    myList.print();
    console.log('\n$$$$$$$$$$$$$$ Deleting: ', myList.remove('Reem'), '\n');
    myList.print();
}
catch (error) {
    console.log(error);
}
