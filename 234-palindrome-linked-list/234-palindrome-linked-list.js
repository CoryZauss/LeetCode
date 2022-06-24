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
// var isPalindrome = function(head) {
//     let values = []
//     while (head !== null) {
//         values.push(head.val)
//         head = head.next
//     }
//     let right = values.length-1
//     let left = 0;
//     while (left <right){
//         if (values[left] !== values[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// };

var isPalindrome = function( head ) {
    let fast = head, slow = head, prev, temp
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    prev = slow, slow = slow.next, prev.next = null;
    
    while (slow) {
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    }
    fast = head, slow = prev;
    while (slow) {
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    }
    return true
}