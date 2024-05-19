/* 初始化栈 */
// TypeScript 没有内置的栈类，可以把 Array 当作栈来使用
const stack: number[] = [];

/* 入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
const peek = stack[stack.length - 1];

/* 元素出栈 */
const pop = stack.pop();

/* 获取栈的长度 */
const size = stack.length;

/* 判断栈是否为空 */
const isEmpty = stack.length === 0;
