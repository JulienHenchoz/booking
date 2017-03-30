export declare function memoize<T>(cb: T, hasher: (...args: any[]) => string): T;
export default memoize;
