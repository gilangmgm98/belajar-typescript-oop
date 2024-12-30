describe('getter and setter', () => {
    class Category {
        _name?: string;

        get name(): string {
            return this._name || 'Empty Category';
        }

        set name(value: string) {
            if(value !== ''){
                this._name = value;
            }else{
                throw new Error('Name must be a non-empty string');
            }
        }
    }
    it('should get and set the value correctly', () => {
        const category = new Category();
        expect(category.name).toBe('Empty Category');
        // console.info(`log 1 ${category.name}`) //debug
        category.name = 'Electronics';
        expect(category.name).toBe('Electronics');
        // console.info(`log 2 ${category.name}`) //debug
    });
})