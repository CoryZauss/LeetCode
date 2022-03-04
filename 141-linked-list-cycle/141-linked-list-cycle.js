/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
   
    while ( head !== null) {
        if (head.val === 'x') {
            return true
        }
        head.val = 'x'
        head = head.next
        
    }
    return false
};