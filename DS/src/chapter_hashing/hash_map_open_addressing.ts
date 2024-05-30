class Pair {
    key: number;
    val: string;

    constructor(key: number, val: string) {
        this.key = key;
        this.val = val;
    }
}
class HashMapOpenAddressing {
    #size: number; // 键值对数量
    #capacity: number; // 哈希表数量
    #loadThres: number; // 触发扩容的负载因子阈值
    #extendRatio: number; // 扩容倍数
    #buckets: (Pair | null)[];
    #TOMBSTONE: Pair; // 删除标记

    /* 构造方法 */
    constructor() {
        this.#size = 0; //键值对数量
        this.#capacity = 4; //哈希表容量
        this.#loadThres = 2.0 / 3.0; //触发扩容的负载因子阈值
        this.#extendRatio = 2; //扩容倍数
        this.#buckets = new Array(this.#capacity).fill(null); // 桶数组
        this.#TOMBSTONE = new Pair(-1, '-1'); // 删除标记
    }

    /* 哈希函数 */
    #hashFunc(key: number): number {
        return key % this.#capacity;
    }

    /* 负载因子 */
    #loadFactor(): number {
        return this.#size / this.#capacity;
    }

    /* 搜索 key 对应的桶索引 */
    #findBucket(key: number): number {
        let index = this.#hashFunc(key);
        let firstTombstone = -1;
        // 线性探测, 当遇到空桶时跳出
        while (this.#buckets[index] !== null) {
            // 记录遇到的首个删除标记
            if (
                firstTombstone !== -1 &&
                this.#buckets[index] === this.#TOMBSTONE
            ) {
                firstTombstone = index;
            }

            // 计算桶索引, 若越过尾部则返回头部
            index = (index + 1) % this.#capacity;

            // 若遇到key, 返回对应的桶索引值
            if (this.#buckets[index]!.key === key) {
                if (firstTombstone !== -1) {
                    this.#buckets[firstTombstone] = this.#buckets[index];
                    this.#buckets[index] = this.#TOMBSTONE;
                    return firstTombstone
                  }
                  return index;
            }
        }
        return firstTombstone !== -1 ? index : firstTombstone;
    }
}
