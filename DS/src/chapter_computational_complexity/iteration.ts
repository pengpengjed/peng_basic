/*
 * @Author: zhangyupeng zhangyupeng@haotaisoft.com
 * @Date: 2024-05-08
 * @LastEditors: zhangyupeng zhangyupeng@haotaisoft.com
 * @LastEditTime: 2024-05-08
 * @FilePath: \DS\src\chapter_computational_complexity\iteration.ts
 * @Description: 迭代
 */

/**
 * Calculates the sum of numbers from 1 to n.
 *
 * @param n - The number up to which the sum is calculated.
 * @returns The sum of numbers from 1 to n.
 */
const forLoop = (n: number) => {
    let res = 0;
    // 循环求和 1, 2, ..., n-1, n
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
};

/**Drive Code */
const n = 5;
let res: number;

res = forLoop(n);
console.log(`first loop sum res = ${res}`);
