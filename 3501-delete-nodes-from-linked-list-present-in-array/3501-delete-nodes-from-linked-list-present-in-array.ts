/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    if (head===null) return null;
    const set = new Set(nums);

    let prev = new ListNode(0,head);
    let ans = prev;

    while (prev.next){
        if (set.has(prev.next.val)){
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return ans.next;
};