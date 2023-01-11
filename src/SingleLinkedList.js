"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
/**
 * Notes:
 *
 * 1. if the function is returning 'this', this is for allowing method chaingin
 * 2. This is ⭐ 0 Index..!! if you want to insert at second position .insert(<value>, 1) not 2
 *
 *
 *
 *
 *
 *
 * Related Links:
 *
 * 1. Garbage collection in js: https://javascript.info/garbage-collection
 * 2. delte keyword: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
 * 3. Memory management in js: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
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
        this.length = 0;
    }
    /**********************
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     *⭐    Utilities   ⭐*
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     **********************/
    /**
     * 📜 Checks if the list is empty or not
     *
     * @returns If the list is empty or not
     */
    LinkedList.prototype.isEmpty = function () {
        // you can alsot check by 'return this.length === 0' But I prefer this way.
        return this.head === null;
    };
    /**
     * Deeply clone and return passed value
     *
     * @param value to deeply clone it
     * @returns deeply cloned passed value
     */
    LinkedList.prototype.deepClone = function (value) {
        return JSON.parse(JSON.stringify(value));
    };
    /**
     * 📜 Check if 2 nodes have the same values or not
     *
     * ⏳ Time-Complixty: O(1)
     *
     * @returns <True | False>
     */
    LinkedList.prototype.isEqual = function (node1, node2) {
        return JSON.stringify(node1) === JSON.stringify(node2);
    };
    /**
     * 📜Updates passed node value
     *
     * ⏳ Time-Complixty: O(1)
     *
     * @returns old node value || or throw an error if error happened
     */
    LinkedList.prototype.updateNodeValue = function (node, newValue) {
        var returnValue;
        try {
            returnValue = this.deepClone(node.value);
            node.value = newValue;
        }
        catch (error) {
            console.log("Error happened while deleting the node \n", error);
        }
        return returnValue;
    };
    /**
     * 📜 Delete passed node
     *
     * ⏳ Time-Complixty: O(1)
     *
     * @param node
     * @returns deleted node
     */
    // private deleteNode(node: Node<T> | null | undefined): T {
    //   if (node === null || node === undefined)
    //     throw new Error('Passed node is null, cannot delete null..!');
    //   if (this.length == 0)
    //     throw new Error("Length = 0, you're suppose to have no nodes..!");
    //   // Deeply clone the node value to return it
    //   let temp = this.deepClone(node.value);
    //   // Delete the node
    //   node.next = null;
    //   node = null;
    //   // Decrement the length
    //   this.length--;
    //   // Return node value
    //   return temp;
    // }
    /**********************
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     *⭐    Adding      ⭐*
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     **********************/
    /**
     * 📜 Adds to the end of the list
     *
     * ⏳ Time-Complixty: O(n)
     *
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
     * 📜 Adds to the start of the list
     *
     * ⏳ Time-Complixty: O(1)
     *
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
     * 📜 Insert a new node at a specific position
     *
     * ⭐ 0 Index..!!
     *
     * ⏳ Time-Complixty: O(n)
     *
     * @param value
     * @param position
     * @returns a new LinkedList to allow method chaining
     */
    LinkedList.prototype.insert = function (value, position) {
        // Handle out of bound case
        if (position < 0 || position > this.length)
            throw new Error("Out of bound, You only have ".concat(this.length, " Nodes."));
        // So user want to insert at the begining
        if (position === 0)
            return this.unshift(value);
        // So user want to insert at the end of the list
        if (position === this.length)
            return this.push(value);
        // Otherwise we will add in the position user provided
        var node = new Node(value);
        var iterator = this.head;
        for (var i = 0; i < position - 1 && iterator; i++)
            iterator = iterator === null || iterator === void 0 ? void 0 : iterator.next;
        if (iterator && iterator.next) {
            var temp = this.deepClone(iterator.next);
            iterator.next = node;
            node.next = temp;
        }
        this.length++;
        return this;
    };
    /**********************
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     *⭐    Deleteing   ⭐*
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     **********************/
    /**
     * 📜 Removes last node in the list, and return it's value (undefined in case list is empty).
     *
     * ⏳ Time-Complixty: O(n)
     *
     * @returns last node in the list
     */
    // TODO: Try to extract deleting logic into a function
    LinkedList.prototype.pop = function () {
        var _a, _b, _c, _d;
        // We could've throw a new Error("List is empty"), but I prefer keep it simple
        if (this.isEmpty())
            return;
        try {
            // Handle single node deletion
            if (this.length === 1) {
                var temp_1 = this.deepClone((_a = this.head) === null || _a === void 0 ? void 0 : _a.value);
                this.head = null;
                this.length -= 1;
                return temp_1;
            }
            // Handle 2 nodes deletion
            if (this.length === 2) {
                var temp_2 = this.deepClone((_c = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next) === null || _c === void 0 ? void 0 : _c.value);
                this.head.next = null;
                this.length -= 1;
                return temp_2;
            }
            // Handle multi node deletion from the end
            var iterator = this.head;
            // iterate till the iterator it at the second node from the last
            for (var i = 0; i < this.length - 2; i++)
                iterator = iterator.next;
            // Dete the node after the iterator
            var temp = this.deepClone((_d = iterator === null || iterator === void 0 ? void 0 : iterator.next) === null || _d === void 0 ? void 0 : _d.value);
            iterator.next = null;
            this.length -= 1;
            return temp;
        }
        catch (error) {
            console.log(error);
        }
    };
    /**
     * 📜 Removes first node in the list, and return it's value (undefined in case list is empty).
     *
     * ⏳ Time-Complixty: O(1)
     *
     * @returns first node in the list
     */
    // TODO: Try to extract deleting logic into a function
    LinkedList.prototype.shift = function () {
        var _a;
        if (this.length <= 0)
            return;
        var temp = this.deepClone((_a = this.head) === null || _a === void 0 ? void 0 : _a.value);
        if (this.length == 1)
            this.head = null;
        else
            this.head = this.head.next;
        this.length -= 1;
        return temp;
    };
    /**
     * 📜 Removes node at passed index in the list, and return it's value (undefined in case list is empty).
     *
     * ⏳ Time-Complixty: O(n)
     *
     * @returns deleted node
     */
    // TODO: Try to extract deleting logic into a function
    LinkedList.prototype.removeAt = function (index) {
        if (index < 0)
            throw new RangeError("Invalid passed index < 0");
        if (index > this.length - 1)
            throw new RangeError("You can't delete node at index ".concat(index, ", ").concat(this.length === 0
                ? 'you do not have any nodes'
                : 'you only have ' + this.length + ' nodes', " || LinkedList is 0 based, ").concat((index == this.length) ? 'to delete last node pass index = ' + (this.length - 1) + ' not ' + this.length + '. ' : ''));
        if (index === 0)
            return this.shift();
        if (index === this.length - 1)
            return this.pop();
        var iterator = this.head;
        for (var i = 0; i < index - 1; i++)
            iterator = iterator.next;
        var temp = this.deepClone(iterator === null || iterator === void 0 ? void 0 : iterator.next);
        iterator.next = this.deepClone(temp.next);
        temp.next = null;
        this.length -= 1;
        return temp.value;
    };
    /**
     * 📜Removes passed node (By value)
     *
     * ⏳ Time-Complixty: O(n)
     *
     * @returns deleted node || or undefined if no such node
     */
    // TODO: Try to extract deleting logic into a function
    LinkedList.prototype.remove = function (node) {
        if (this.length === 0)
            return undefined;
        // If this is the first item -> shift & return all the values "Delte first one"
        if (this.isEqual(this.head.value, node))
            return this.shift();
        // This is a garding claus & second checker -> because if length == 1 & we didn't return last check, so searchable node is not found
        // and it's important for upcomming logic because we will set iterator on this.head.next so we have to check first length is >  1
        if (this.length === 1)
            return undefined;
        //Handle if it is at any other index 
        var iterator = this.head;
        while (iterator.next !== null) {
            if (this.isEqual(iterator.next.value, node)) {
                // Delte next node
                iterator.next = iterator.next.next;
                // Decrement the length
                this.length--;
                // return the deeply clone of the node
                return node;
            }
            iterator = iterator === null || iterator === void 0 ? void 0 : iterator.next;
        }
        // After exit, we will be at the tail but we didn't check it yet, so let us do this job..!
        if (this.isEqual(iterator.value, node))
            return this.pop();
        // Other wise, node doesn't exist
        return undefined;
    };
    /**********************
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     *⭐   Updating    ⭐*
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     **********************/
    /**
     * 📜Updates passed node (By index)
     *
     * ⏳ Time-Complixty: O(n)
     *
     * @returns old node || or undefined if no such node
     */
    LinkedList.prototype.updateNodeWithIndex = function (index, newValue) {
        if (index < 0)
            throw new RangeError("Invalid passed index < 0");
        if (index > this.length - 1)
            throw new RangeError("You can't update node at index ".concat(index, ", ").concat(this.length === 0
                ? 'you do not have any nodes'
                : 'you only have ' + this.length + ' nodes', " || LinkedList is 0 based"));
        var iterator = this.head;
        for (var i = 0; i < index; i++)
            iterator = iterator.next;
        return this.updateNodeValue(iterator, newValue);
    };
    /**
     * 📜Updates passed node (By value)
     *
     * ⏳ Time-Complixty: O(n)
     *
     * @returns old node || or undefined if no such node
     */
    LinkedList.prototype.updateNodeWithValue = function (value, newValue) {
        if (this.length === 0)
            return undefined;
        //Handle if it is at any other index 
        var iterator = this.head;
        while (iterator.next !== null && !this.isEqual(iterator.value, value))
            iterator = iterator.next;
        if (this.isEqual(iterator.value, value))
            return this.updateNodeValue(iterator, newValue);
        return undefined;
    };
    /**********************
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     *⭐ Logging & Info⭐*
     ***⭐⭐⭐⭐⭐⭐⭐⭐**
     **********************/
    /**
     * Prints all the list
     * O(n) Due to the iteration over all the list
     */
    LinkedList.prototype.print = function () {
        var iterator = this.head;
        var output = '';
        while (iterator) {
            // console.log(iterator.value, ' ');
            output += iterator.value + ' -> ';
            iterator = iterator.next;
        }
        output += 'null';
        console.log("**************");
        console.log('* Your List: *', output);
        console.log("**************");
    };
    /**
     * 📜 Return list size
     *
     * ⏳ Time-Complixty: O(1)
     *
     * @returns list length
     */
    LinkedList.prototype.size = function () {
        return this.length;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
