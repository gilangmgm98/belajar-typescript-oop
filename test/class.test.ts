describe('Class', () => {
    class Customer {
        constructor(name: string, email: string) {
            // this.name = name;
            // this.email = email;

            console.info(`create new customer with id: '${name}' with email: '${email}'`);
        }
    }

    class Order {
        constructor(name: string) {
            console.info(`${name} has create new order`);
        }
    }

    it('should can create class', () => {
        const customer = new Customer('Gilang', 'gilang@gmail.com');
        const order = new Order('Gilang');

    });
    
    it('should can create constructor', () => {
        expect(new Customer('Gilang', 'gilang@gmail.com')).toBeTruthy();
        expect(new Order('Gilang')).toBeTruthy();
    })
})