export type Constructor<T = {}> = new (...args: any[]) => T

export function create<T>(construct: Constructor<T>): T {
    return new construct()
}

export function createTimestamped<T extends Constructor>(Base: T) {
    return new class extends Base {
        timestamp = Date.now()
    }
}