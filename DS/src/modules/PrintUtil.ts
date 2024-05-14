import { ListNode } from './ListNode';

const printLinkedList = (head: ListNode | null): void => {
    const list: string[] = [];
    while (head !== null) {
        list.push(head.val.toString());
        head = head.next;
    }
    console.log(list.join(' -> '));
};

export { printLinkedList };
