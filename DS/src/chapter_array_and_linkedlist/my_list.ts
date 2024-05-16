class MyList {
    private arr: number[]; // 数组（存储列表元素）
    private _capacity: number = 10; // 容量
    private _size: number = 0; // 元素个数
    private extendRatio: number = 2; //每次扩容的倍数

    /**构造方法 */
    constructor() {
        this.arr = new Array(this._capacity);
    }
    /**
     * 获取列表长度（当前元素数量）
     */
    public size() {
        return this._size;
    }

    /**
     * 获取列表容量
     */
    public capacity() {
        return this._capacity;
    }

    /**
     * 获取指定索引位置的元素
     * @param index 索引
     */
    public get(index: number) {
        // 索引如果越界，则抛出异常，下同
        if (index < 0 || index >= this._size) throw new Error('索引越界');
        return this.arr[index];
    }

    /**
     * 添加元素
     * @param element 元素
     */
    public add(num: number):void {
      // 如果长度等于容量，则需要扩容
      if(this._size === this._capacity) console.log("扩容")
    }

    /**列表扩容 */
}
