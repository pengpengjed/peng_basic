/*
 * @Author: zhangyupeng zhangyupeng@haotaisoft.com
 * @Date: 2024-05-09
 * @LastEditors: zhangyupeng zhangyupeng@haotaisoft.com
 * @LastEditTime: 2024-05-09
 * @FilePath: \DS\src\chapter_computational_complexity\time_complexity.ts
 * @Description: 时间复杂度
 */

/**
 * Represents an algorithm that performs a series of operations.
 * @param n - The number of iterations for the loop.
 */
const algorithm = (n: number): void => {
    let a: number = 2; //1 ns
    a = a + 1; //1 ns
    a = a * 2; // 10ns
    // 循环n次
    for (let i = 0; i < n; i++) {
        // 1 ns, every time run 1 ns
        console.log(i); // 5ns
    }
};
