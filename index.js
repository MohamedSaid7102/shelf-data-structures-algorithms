"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./src/SingleLinkedList");
try {
    var myList = new SingleLinkedList_1.LinkedList();
    myList.insert('Mohamed', 0);
    myList.print();
    console.log("Our list ".concat(myList.contains("Sarah") ? 'contains' : 'doesn\'t contain', " Sarah."));
    console.log("Our list ".concat(myList.contains("Ahmed") ? 'contains' : 'doesn\'t contain', " Ahmed."));
    console.log("Our list ".concat(myList.contains("Reem") ? 'contains' : 'doesn\'t contain', " Reem."));
    console.log("Our list ".concat(myList.contains("Mohamed") ? 'contains' : 'doesn\'t contain', " Mohamed."));
    myList.print();
}
catch (error) {
    console.log(error);
}
