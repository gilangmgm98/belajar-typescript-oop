describe('inheritance super construct', () => {
    class Employee {
        name: string;
        age: number;
        isMaried?: boolean;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    class Director extends Employee {
        officeLocation: string;
        constructor(name: string, age: number, officeLocation: string) {
            super(name, age);
            this.officeLocation = officeLocation;
        }
    }

    class Manager extends Employee {
        department: string;
        constructor(name: string, age: number, department: string) {
            super(name, age);
            this.department = department;
        }
    }

    class User extends Employee {
        role: string;
        constructor(name: string, age: number, role: string) {
            super(name, age);
            this.role = role;
        }
    }    
    
    it('should support inheritance', () => {
        const employee = new Employee('Gilang', 26);
        const director = new Director('Rahmat', 32, 'Jakarta');
        const manager = new Manager('Sofia', 35, 'Finance');
        const user = new User('Ahmad', 28, 'Developer');

        expect(employee.name).toBe('Gilang');
        expect(employee.age).toBe(26);
        expect(director.name).toBe('Rahmat');
        expect(director.age).toBe(32);
        expect(director.officeLocation).toBe('Jakarta');
        expect(manager.name).toBe('Sofia');
        expect(manager.age).toBe(35);
        expect(manager.department).toBe('Finance');
        expect(user.name).toBe('Ahmad');
        expect(user.age).toBe(28);
        expect(user.role).toBe('Developer');
        
    })
})