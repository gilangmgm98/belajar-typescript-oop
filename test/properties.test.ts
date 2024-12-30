describe('properties', () => {
    class Customer {
        readonly id: number;
        name: string = 'Guest';
        age?: number;

        constructor(id: number, name: string, age?: number) {
            this.id = id;
            this.name = name;
            this.age = age;
        };

        sayHello(message: string, name: string): string {
            return `Hello, ${name}! ${message}`;
        }

        sayGoodbye(message: string, name: string): void {
            console.log(`${name}, ${message}`);
        }
    }
    it('should can have properties', () => {
        const customer1 = new Customer(1, 'John Doe');
        
        customer1.age = 26

        expect(customer1.id).toBe(1);
        expect(customer1.name).toBe('John Doe');
        expect(customer1.age).toBe(26);
        
        customer1.name = 'Gilang Murdiyanto'
        customer1.age = 27
        
        expect(customer1.name).toBe('Gilang Murdiyanto');
        expect(customer1.age).toBe(27);
    })

    it('should can use methods', () => {
        const customer1 = new Customer(1, 'John Doe');
        
        expect(customer1.sayHello('How are you?', 'John Doe')).toBe('Hello, John Doe! How are you?');

        customer1.sayGoodbye('Goodbye!', 'John Doe');

    })
})