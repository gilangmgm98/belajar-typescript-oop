describe('abstract class', () => {
    abstract class Customer {
        readonly id: number;
        abstract name: string;

        constructor(id: number) {
            this.id = id;
        }

        hello(){
            return 'Hello'
        }

        abstract greet(name: string): string;
    }

    class RegularCustomer extends Customer {
        name: string;
        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }
        
        greet(name: string): string {
            // console.log(`Hello ${name}, my name is ${this.name}`);
            return `Hello ${name}, my name is ${this.name}`;
        }
    }

    it('should support abstract class', () => {
        const customer = new RegularCustomer(1, 'John Doe');
        expect(customer.greet('Alice')).toBe('Hello Alice, my name is John Doe');
        expect(customer.hello()).toBe('Hello');
    })
})