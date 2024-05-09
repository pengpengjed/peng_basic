/*
 * @Author: zhangyupeng zhangyupeng@haotaisoft.com
 * @Date: 2024-05-09
 * @LastEditors: zhangyupeng zhangyupeng@haotaisoft.com
 * @LastEditTime: 2024-05-09
 * @FilePath: \DS\src\chapter_computational_complexity\recursion.ts
 * @Description: 递归
 */

/**
 * Recursively calculates the sum of numbers from 1 to n.
 * @param n - The number to calculate the sum up to.
 * @returns The sum of numbers from 1 to n.
 */
const recur = (n: number): number => {
    // 终止条件
    if (n === 1) return 1;
    // 递：递归调用
    const res = recur(n - 1);
    // 归：递归返回值处理， n: 当前值 res: 递归返回值
    return n + res;
};

/**
 * Calculates the sum of numbers from 1 to n using tail recursion.
 * @param n - The number up to which the sum is calculated.
 * @param res - The current sum.
 * @returns The sum of numbers from 1 to n.
 */
const tailRecur = (n: number, res: number): number => {
    // 终止条件
    if (n === 0) return res;
    // 尾递归调用
    return tailRecur(n - 1, res + n);
};

/**
 * Calculates the nth Fibonacci number.
 * @param n - The position of the Fibonacci number to calculate.
 * @returns The nth Fibonacci number.
 */
const fib = (n: number): number => {
    // 终止条件 f(1) = 0, f(2) = 1
    if (n === 1 || n === 2) return n - 1;
    // 递归调用 f(n) = f(n-1) + f(n-2)
    const res = fib(n - 1) + fib(n - 2);
    // 返回结果 f(n)
    return res;
};

/**
 * Calculates the sum of numbers from 1 to n using a for loop and recursion.
 * 
 * @param n - The number up to which the sum is calculated.
 * @returns The sum of numbers from 1 to n.
 */
const forLoopRecur = (n: number): number => {
    const stack: number[] = [];
    let res: number = 0;
    // 递：递归调用
    for (let i = n; i > 0; i--) {
        // 通过“入栈操作”模拟“递”
        stack.push(i);
    }
    // 归：返回结果
    while (stack.length) {
        // 通过“出栈操作”模拟“归”
        res += stack.pop();
    }
    // res = 1+2+3+...+n
    return res;
};

/**drive code */
const n = 5;
let res: number;

res = recur(n); // 5 + 4 + 3 + 2 + 1 = 15
console.log(`递归函数的求和结果 res = ${res}`);

res = tailRecur(n, 0); // 5 + 4 + 3 + 2 + 1 = 15
console.log(`尾递归函数的求和结果 res = ${res}`);

res = fib(n); // 3
console.log(`斐波那契数列的第 ${n} 项结果 res = ${res}`);

res = forLoopRecur(n) // 5 + 4 + 3 + 2 + 1 = 15
console.log(`使用迭代模拟递归的求和结果 res = ${res}`)
