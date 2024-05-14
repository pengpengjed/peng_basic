/**链表节点类 */
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.next = next === undefined ? null : next; // 下一个节点
    }
}
export { ListNode };
