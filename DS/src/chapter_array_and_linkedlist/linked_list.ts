import { ListNode } from 'src/modules/ListNode';
import { printLinkedList } from 'src/modules/PrintUtil';

/**
 * Inserts a new node `P` after the given node `n0` in a linked list.
 * @param n0 - The node after which the new node will be inserted.
 * @param P - The new node to be inserted.
 */
const insert = (n0: ListNode, P: ListNode): void => {
    const n1 = n0.next;
    P.next = n1;
    n0.next = P;
};

/**drive code */
/* 初始化链表 1 -> 3 -> 2 -> 5 -> 4 */
// 初始化各个节点
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);
const n3 = new ListNode(5);
const n4 = new ListNode(4);
// 构建节点之间的引用
n0.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n4;
console.log('初始化的链表为');
printLinkedList(n0);
