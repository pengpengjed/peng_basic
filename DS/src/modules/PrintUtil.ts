import { ListNode } from './ListNode';

/**
 * 打印链表的值
 * @param head 链表的头节点。类型为ListNode或null，表示链表是否存在。
 * @returns void 该函数没有返回值。
 */
const printLinkedList = (head: ListNode | null): void => {
    // 初始化一个空数组用于存储链表节点的值
    const list: string[] = [];
    while (head !== null) {
        // 将当前节点的值转换为字符串并加入数组
        list.push(head.val.toString());
        // 移动到下一个节点
        head = head.next;
    }
    // 将数组中的值通过' -> '连接并打印
    console.log(list.join(' -> '));
};

export { printLinkedList };
