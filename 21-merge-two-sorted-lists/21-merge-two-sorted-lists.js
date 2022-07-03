/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//recursive solution
// var mergeTwoLists = function(list1, list2) {
//     if(!list1 ) return list2
//     if(!list2) return list1
//     if(list1.val < list2.val){
//        list1.next = mergeTwoLists(list1.next , list2)
//         return list1
//        }
//     else{
//            list2.next = mergeTwoLists(list1 , list2.next)
//         return list2
//     }

// };

//itterative O(min(N,M)) time || O(1) space
const mergeTwoLists = function(l1, l2) {
    const head = new ListNode(null)
    let curr = head;
    while(l1 && l2){
        if (l1.val < l2.val){
            curr.next=l1;
            l1 = l1.next
        } else {
            curr.next = l2;
            l2 = l2.next
        }
        curr=curr.next
    }
    curr.next = l1 || l2;
    return head.next;
}