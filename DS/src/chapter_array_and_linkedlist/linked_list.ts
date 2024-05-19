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

/** 删除链表的节点 n0 之后的首个节点 */
const remove = (n0: ListNode): void => {
    if (!n0.next) {
        return;
    }
    // n0 -> P -> n1
    const P = n0.next;
    const n1 = P.next;
    n0.next = n1;
};

/**访问链表中索引为index的节点 */
const access = (head: ListNode | null, index: number): ListNode | null => {
    for (let i = 0; i < index; i++) {
        if (!head) {
            return null;
        }
        head = head.next;
    }
    return head;
};

/** 在链表中查找值为 target 的首个节点 */
const find = (head: ListNode | null, target: number): number => {
    let index = 0;
    while (head !== null) {
        if (head.val === target) {
            return index;
        }
        head = head.next;
        index++;
    }
    return -1;
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

/**插入节点 */
insert(n0, new ListNode(0));
console.log('插入后的链表结果为');
printLinkedList(n0);

/**删除节点 */
remove(n0);
console.log('删除后的链表结果为');
printLinkedList(n0);

/**访问节点 */
console.log('访问节点结果为', access(n0, 2));

/**查找节点 */
console.log('查找节点结果为', find(n0, 2));
