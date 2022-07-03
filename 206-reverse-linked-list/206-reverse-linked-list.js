/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//var reverseList = function(head) {
    //this works but isnt "in place"
    // let newlist = null;
    // while (head !== null) {
    //     let temp = head;
    //     head = head.next;
    //     temp.next = newlist;
    //     newlist = temp;
    // }
    // return newlist;
//};

//itterative o(n) time
// var reverseList = function(head) {
//     let prev = null, curr = head, next = null;
//     while(curr !== null) {
//         //save next
//         next = curr.next;
//         //reverse
//         curr.next = prev;
//         //advance prev and curr
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// }

// recursive
var reverseList = function(head) {
	// base case
    if (head == null || head.next == null){
        return head;
    }
	// go all the way to the end
    let reversedListHead = reverseList(head.next)
	// add reverse myself
    head.next.next = head;
    head.next = null;
	// go up
    return reversedListHead
};