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
    const set = new Set();
    nums.map((x) => {
        set.add(x);
    })

    let prev = new ListNode(0,head);
    const ans = head;

    while (head && head.next){
        if (set.has(head.val)){
            head.val = head.next.val;
            head.next = head.next.next;
        } else {
            head = head.next;
            prev = prev.next;
        }
    }
    if (set.has(head.val)){
        prev.next = prev.next.next;
    }
    return ans;
};