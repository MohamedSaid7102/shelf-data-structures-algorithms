"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
/**
 * Notes:
 *
 * 1. if the function is returning 'this', this is for allowing method chaingin
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = null;
        this.next = null;
        this.value = value;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
        this.head = null;
    }
    /**
     *
     * @returns If the list is empty or not
     */
    LinkedList.prototype.isEmpty = function () {
        // you can alsot check by 'return this.length === 0' But I prefer this way.
        return this.head === null;
    };
    /**
     * Adds to the end of the list
     * O(n) at worest case "Adding to the end of the list"
     * @param value
     * @returns a new LinkedList to allow method chaining
     */
    LinkedList.prototype.push = function (value) {
        var node = new Node(value); // create a new node with the value provided
        // If head is null, so this is the first item in the list
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            // loop till the end of the list and add the new node
            var iterator = this.head;
            // while iterator has next, so we are not at the end of the list yet
            while (iterator === null || iterator === void 0 ? void 0 : iterator.next)
                iterator = iterator === null || iterator === void 0 ? void 0 : iterator.next;
            if (iterator)
                iterator.next = node;
        }
        // Increment the length
        this.length++;
        return this;
    };
    /**
     * Adds to the start of the list
     * @param value
     * @returns a new LinkedList to allow method chaining
     */
    LinkedList.prototype.unshift = function (value) {
        var node = new Node(value); // create a new node with the value provided
        node.next = this.head;
        this.head = node;
        // Increment the length
        this.length++;
        return this;
    };
    /**
     * Insert a new node at a specific position
     * @param value
     * @param position
     * @returns a new LinkedList to allow method chaining
     */
    LinkedList.prototype.insert = function (value, position) {
        // Handle out of bound case
        if (position < 0 || position > this.length)
            throw new Error("Out of bound, You only have ".concat(this.length, " Nodes."));
        // So user want to insert at the begining
        if (position === 0) {
            this.unshift(value);
            return this;
        }
        // So user want to insert at the end of the list
        if (position === this.length) {
            this.push(value);
            return this;
        }
        // Otherwise we will add in the position user provided
        var node = new Node(value);
        var iterator = this.head;
        for (var i = 0; i < position - 1 && iterator; i++)
            iterator = iterator === null || iterator === void 0 ? void 0 : iterator.next;
        if (iterator) {
            node.next = iterator === null || iterator === void 0 ? void 0 : iterator.next;
            iterator.next = node;
        }
        this.length++;
        return this;
    };
    /**
     * Prints all the list
     * O(n) Due to the iteration over all the list
     */
    LinkedList.prototype.print = function () {
        var iterator = this.head;
        while (iterator) {
            console.log(iterator.value, ' ');
            iterator = iterator.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
