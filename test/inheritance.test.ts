describe('inheritance super construct', () => {
    class Employee {
        name: string;
        age?: number;
        isMaried?: boolean;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    class Director extends Employee {

    }

    class Manager extends Employee {

    }

    class User extends Employee {

    }    
    
    it('should support inheritance', () => {
        const employee = new Employee('Gilang', 26);
        const director = new Director('Rahmat', 32);
        const manager = new Manager('Sofia', 35);
        const user = new User('Ahmad', 28);

        expect(employee.name).toBe('Gilang');
        expect(employee.age).toBe(26);
        expect(director.name).toBe('Rahmat');
        expect(director.age).toBe(32);
        expect(manager.name).toBe('Sofia');
        expect(manager.age).toBe(35);
        expect(user.name).toBe('Ahmad');
        expect(user.age).toBe(28);
    })
})