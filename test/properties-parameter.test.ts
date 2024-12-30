describe('Parameter Properties', () => {
    class Person {
        constructor(
            public name: string,
            public age: number,
            public gender: 'Male' | 'Female'
        ) {

        }
    }

    it('should support parameter properties', () => {
        const person = new Person('John Doe', 30, 'Male');
        expect(person.name).toBe('John Doe');
        expect(person.age).toBe(30);
        expect(person.gender).toBe('Male');
        person.name = 'Jane Doe';
        expect(person.name).toBe('Jane Doe');
        person.age = 31;
        expect(person.age).toBe(31);
        person.gender = 'Female';
        expect(person.gender).toBe('Female');
    })
})