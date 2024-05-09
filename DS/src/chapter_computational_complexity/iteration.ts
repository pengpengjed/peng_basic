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
const forLoop = (n: number): number => {
    let res = 0;
    // 循环求和 1, 2, ..., n-1, n
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
};

/**
 * Calculates the sum of numbers from 1 to n using a while loop.
 * @param n - The number up to which the sum is calculated.
 * @returns The sum of numbers from 1 to n.
 */
const whileLoop = (n: number): number => {
    let res = 0;
    let i = 1;
    while (i <= n) {
        res += i;
        i++;
    }
    return res;
};

/**
 * Calculates the sum of numbers in a specific pattern using a while loop.
 * The pattern starts with 1 and doubles the increment at each iteration.
 *
 * @param n - The number of iterations to perform.
 * @returns The sum of numbers in the pattern.
 */
const whileLoopII = (n: number): number => {
    let res = 0;
    let i = 1;
    // 循环求和 1, 4, 10, ...
    while (i <= n) {
        res += i;
        i++;
        i *= 2;
    }
    return res;
};

/**
 * Generates a string representation of nested for loops.
 *
 * @param n - The number of iterations for the outer and inner loops.
 * @returns A string representation of the nested for loops.
 */
const nestedForLoop = (n: number): string => {
    let res = '';
    // 循环 i = 1, 2, ..., n-1, n
    for (let i = 1; i <= n; i++) {
        // 循环 j = 1, 2, ..., n-1, n
        for (let j = 0; j <= n; j++) {
            res += `(${i}, ${j}), `;
        }
    }
    return res;
};

/**Drive Code */
const n = 5;
let res: number | string;

res = forLoop(n);
console.log(`forLoop sum res = ${res}`);

res = whileLoop(n);
console.log(`whileLoop sum res = ${res}`);

res = whileLoopII(n);
console.log(`WhileLoopII sum res = ${res}`);

res = nestedForLoop(n);
console.log(`nestedForLoop res = ${res}`);

export {};
