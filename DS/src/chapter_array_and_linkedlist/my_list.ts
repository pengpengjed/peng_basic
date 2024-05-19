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
    public add(num: number): void {
        // 如果长度等于容量，则需要扩容
        if (this._size === this._capacity) this.extendCapacity();
        this.arr[this._size++] = num;
        this._size++;
    }

    /** 在中间插入元素 */
    public insert(index: number, num: number): void {
        if (index < 0 || index >= this._size) throw new Error('索引越界');
        if (this._size === this._capacity) this.extendCapacity();
        // 将索引 index 以及之后的元素都向后移动一位
        for (let j = this._size - 1; j >= index; j--) {
            this.arr[j + 1] = this.arr[j];
        }
        // 更新元素和数量
        this.arr[index] = num;
        this._size++;
    }

    /**
     * 删除指定索引位置的元素
     * @param index 索引
     */
    public remove(index: number): number {
        if (index < 0 || index >= this._size) throw new Error('索引越界');
        let num = this.arr[index];
        for (let j = 0; j < this._size - 1; j++) {
            this.arr[j] = this.arr[j - 1];
        }
        this._size--;
        return num;
    }

    /**列表扩容 */
    public extendCapacity(): void {
        // 新建一个长度为 size 的数组，并将原数组复制到新数组
        this.arr = this.arr.concat(
            new Array(this._capacity * (this.extendRatio - 1))
        );
        // 更新列表容量
        this._capacity = this.arr.length;
    }

    /**将列表转换为数组 */
    public toArray(): number[] {
        let size = this._size;
        // 仅转换有效长度范围的列表元素
        const arr = new Array(size);
        for (let i = 0; i < size; i++) {
            arr[i] = this.arr[i];
        }
        return arr;
    }
}
