describe('class inheritance polymorph', () => {
    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {
        // constructor(name: string, public department: string) {
        //     super(name);
        // }
    }

    class VicePresident extends Manager {
        // constructor(name: string, department: string, public position: string) {
        //     super(name, department);
        // }
    }

    // Polymorphism example
    function sayHello(employee: Employee) {
        // console.info(`Hello ${employee.name}`)
        if (employee instanceof VicePresident) {
            let vp = employee as VicePresident;
            console.info(`Hello VP : ${vp.name}`)
        } else if (employee instanceof Manager) {
            let manager = employee as Manager;
            console.info(`Hello Manager : ${manager.name}`)
        } else {
            console.info(`Hello Employee : ${employee.name}`)
        }
    }

    it('should support polymorph inheritance', () => {
        let employee: Employee = new Employee('Gilang')
        employee = new Manager('sal')
        // employee = new Manager('sal', 'Finance')
        // console.info(employee)
        employee = new VicePresident('Ronald')
        // employee = new VicePresident('Ronald', 'Finance', 'Lead')
        // console.info(employee)
    })

    it('should support method polymorph', () => {
        sayHello(new Employee('Gilang'))
        // sayHello(new Manager('Sal', 'Finance'))
        sayHello(new Manager('Sal'))
        // sayHello(new VicePresident('Ronald', 'Finance', 'Lead'))
        sayHello(new VicePresident('Ronald'))
    })
})