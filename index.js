"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./src/SingleLinkedList");
try {
    var myList = new SingleLinkedList_1.LinkedList();
    myList.insert('Mohamed', 0);
    myList.print();
    console.log("List at index 0: ", myList.at(2));
}
catch (error) {
    console.log(error);
}
