/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let values = []
    while (head !== null) {
        values.push(head.val)
        head = head.next
    }
    let right = values.length-1
    let left = 0;
    while (left <right){
        if (values[left] !== values[right]) {
            return false
        }
        left++
        right--
    }
    return true
};