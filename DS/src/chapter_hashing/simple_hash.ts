/* 加法哈希 */
const addHash = (key: string): number => {
    let hash = 0;
    const MODULUS = 1000000007;
    for (const c of key) {
        hash = (hash + c.charCodeAt(0)) % MODULUS;
    }
    return hash;
};

/* 乘法哈希 */
const mulHash = (key: string): number => {
    let hash = 0;
    const MODULUS = 1000000007;
    for (const c of key) {
        hash = (48 * hash + c.charCodeAt(0)) % MODULUS;
    }
    return hash;
};

/* 异或哈希 */
const xorHash = (key: string): number => {
    let hash = 0;
    const MODULUS = 1000000007;
    for (const c of key) {
        hash ^= c.charCodeAt(0);
    }
    return hash & MODULUS;
};

/* 旋转哈希 */
const rotHash = (key: string): number => {
  let hash = 0;
  const MODULUS = 1000000007;
  for (const c of key) {
    hash = ((hash << 4) ^ (hash >> 28) ^ c.charCodeAt(0)) & MODULUS
  }
  return hash
}