describe('interface implement', () => {
    interface hasName {
        name: string;
    }

    interface canSayHello {
        sayHello(name: string): string;
    }

    class Person implements hasName, canSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): string {
            return `Hello, ${name}!`;
        }
    }


    it('should support implement interface', () => {
        const personJohn = new Person('John');
        expect(personJohn.sayHello('John')).toEqual('Hello, John!');
        const personGilang = new Person('Gilang');
        expect(personGilang.sayHello('Gilang')).toEqual('Hello, Gilang!');
    })


})