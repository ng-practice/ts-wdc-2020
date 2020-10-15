
export interface Dictionary<T> {
    [id: string]: T
}

export interface ModelMutator<T> {
    addOne(model: T, entities: Dictionary<T>): Dictionary<T>;
   // addMany(model: T[], entities: Dictionary<T>): Dictionary<T>;
}

export interface MutatorOptions<T> {
    getIdentifier: (entity: T) => string
}

export class Mutator<T> implements ModelMutator<T> {


    constructor(private options: MutatorOptions<T>) {
    }

    addOne(model: T, entities: Dictionary<T>): Dictionary<T> {
        return {
            ...entities,
            [this.options.getIdentifier(model)]: model
        }
    }
}

