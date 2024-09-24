export interface Person {
    readonly name: string;
    readonly age: number;
    readonly address: Address;
}

export interface Address {
    readonly city: string;
    readonly street: string;
    readonly zip: string;
}