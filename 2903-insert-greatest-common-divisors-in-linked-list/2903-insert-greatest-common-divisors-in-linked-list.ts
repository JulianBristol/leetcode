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
    const gcd = (a,b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    }

    let ans = head;
    let temp = head;

    while (head && head.next){
        let GCD = gcd(head.val, head.next.val);
        temp = head.next;
        head.next = new ListNode(GCD, temp);
        head = head.next.next;
    }

    return ans;
};