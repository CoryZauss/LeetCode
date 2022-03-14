/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // traverse the list
    //hold node that is nth back from current at all time
    // when we reach end of list
      // delete node that is nth behind tail
    let p1 = head;
    let p2 = head;
    
    while (n > 0) {
        p2 = p2.next
        n--
    }
    
    if (p2 === null) {
        head = head.next;
        return head;
    }
 
    while (p2.next !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next
    return head;
};