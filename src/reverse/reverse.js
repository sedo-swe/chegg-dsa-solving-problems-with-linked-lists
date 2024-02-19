const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {
    const reversedList = new LinkedList();
    let node = list.head;
    while (node) {
        reversedList.insertAtHead(node.value);
        node = node.next;
    }
    return reversedList;
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
    if (list.head == null)
        return list;
    const reservedList = new LinkedList();
    recursive(list.head, reservedList);
    return reservedList;
}

function recursive(node, reservedList) {
    if (node.next == null) {
        reservedList.insert(node.value);
        return node;
    }
    const next = recursive(node.next, reservedList);
    reservedList.insert(node.value);
}

// console.log(new LinkedList([1, 2, 3]));
// console.log(reverseRecursive(new LinkedList([1, 2, 3])));

module.exports = { reverseIterative, reverseRecursive };
