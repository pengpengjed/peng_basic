/*
 * @Author: zhangyupeng zhangyupeng@haotaisoft.com
 * @Date: 2024-05-09
 * @LastEditors: zhangyupeng zhangyupeng@haotaisoft.com
 * @LastEditTime: 2024-05-10
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

/**
 * Represents an algorithm that performs a computation based on the input number.
 * @param n - The input number.
 */
const Algorithm = (n: number): void => {
    let a = 1; // +0
    a = a + n; //+0
    for (let i = 0; i < 5 * n + 1; i++) {
        // +n
        console.log(0);
    }
    // +n*n
    for (let i = 0; i < 2 * n; i++) {
        for (let j = 0; j < n + 1; j++) {
            console.log(0);
        }
    }
};

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * @param nums - The array of numbers to be sorted.
 * @returns The number of operations performed during the sorting process.
 */
const bubbleSort = (nums: number[]): number => {
    let count = 0; // 计数器
    // 外循环：未排序区间为 [0, i]
    for (let i = nums.length - 1; i > 0; i--) {
        // 内循环：将未排序区间 [0, i] 中的最大元素交换至该区间的最右端
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                // 交换 nums[j] 与 nums[j + 1]
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
                count += 3; // 元素交换包含 3 个单元操作
            }
        }
    }
    console.log('nums', nums);
    return count;
};

const exponential = (n: number): number => {
    let count = 0,
        base = 1;
    // 细胞每轮一分为二，形成数列 1, 2, 4, 8, ..., 2^(n-1)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < base; j++) {
            count++;
        }
        base *= 2;
    }
    // count = 1 + 2 + 4 + 8 + .. + 2^(n-1) = 2^n - 1
    return count;
};

/**
 * Calculates the exponential value of a given number using recursion.
 *
 * @param n - The number for which the exponential value needs to be calculated.
 * @returns The exponential value of the given number.
 */
const expRecur = (n: number): number => {
    if (n === 1) return 1;
    return expRecur(n - 1) + expRecur(n - 1) + 1;
};

const logarithmic = (n: number): number => {
    let count = 0;
    while (n > 1) {
        n = n / 2;
        count++;
    }
    return count;
};

const logRecur = (n: number): number => {
    if (n <= 1) return 0;
    return logRecur(n / 2) + 1;
};

/* 阶乘阶（递归实现） */
function factorialRecur(n: number): number {
    if (n === 0) return 1;
    let count = 0;
    // 从 1 个分裂出 n 个
    for (let i = 0; i < n; i++) {
        count += factorialRecur(n - 1);
    }
    return count;
}

/* Driver Code */
// 可以修改 n 运行，体会一下各种复杂度的操作数量变化趋势
const n = 8;
console.log('输入数据大小 n = ' + n);
var nums = new Array(n);
for (let i = 0; i < n; i++) nums[i] = n - i; // [n,n-1,...,2,1]
console.log('bubbleSort', bubbleSort(nums));

console.log('exponential', exponential(n));
console.log('expRecur', expRecur(n));

console.log('logarithmic', logarithmic(n));
console.log('logRecur', logRecur(n));

console.log('factorialRecur', factorialRecur(n));
