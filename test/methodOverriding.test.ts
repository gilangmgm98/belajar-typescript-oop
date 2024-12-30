describe('method-overriding', () => {
    class Employee {
        name: string;
        age?: number;

        constructor(name: string, age?: number) {
            this.name = name;
            this.age = age;
        }

        sayHello(name: string): string {
            return `Hello ${name}, are you Employee in this company ?`
        }
    }

    class Manager extends Employee {
        sayHello(name: string): string {
            super.sayHello(name);

            return `Hello ${name}, are you Manager in this company ?` //proses overriding method saysHello
        }
    }

    it('should override parent method', () => {
        const employee = new Employee('Bob');
        expect(employee.sayHello('Bob')).toEqual('Hello Bob, are you Employee in this company ?');
        console.info(employee.sayHello('Bob'))
        const manager = new Manager('John Doe');
        console.info(manager.sayHello('John Doe'))
        expect(manager.sayHello('John Doe')).toEqual('Hello John Doe, are you Manager in this company ?');
    });


})