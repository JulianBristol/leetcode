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

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (!head) return head;
    const gcd = (a,b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    let ans = head;

    while (head && head.next){
        head.next = new ListNode(gcd(head.val, head.next.val), head.next);
        head = head.next.next;
    }

    return ans;
};