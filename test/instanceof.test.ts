describe('instanceof', () => {
    it('should have problem using typeof', () => {
        class Employee { }
        class Manager { }
        const emp = new Employee()
        const man = new Manager()
        expect(typeof emp).toBe('object')
        expect(typeof man).toBe('object')
        // expect(typeof emp instanceof Employee).toBe(true)
        // expect(typeof man instanceof Manager).toBe(true)

        // const obj = { name: 'John' }
        // expect(typeof obj.name).toBe('string')
        // expect(typeof obj).toBe('object') // This is wrong
    })

    it('should use instanceof', () => {
        class Employee { }
        class Manager { }

        const emp = new Employee()
        const man = new Manager()

        expect(emp instanceof Employee).toBe(true)
        expect(emp instanceof Manager).toBe(false) 

        expect(man instanceof Manager).toBe(true)
        expect(man instanceof Employee).toBe(false)
    });
})