describe("Error handling", () => {
    class VadilationError extends Error {
        constructor(public message: string) {
            super(message);
        }
    }

    function doubleIt(val: number): number {
        if (val < 0) {
            throw new VadilationError("Value cannot be negative");
        } else if (val > 0) {
            return val * 2;
        } else {
            throw new VadilationError("Value cannot be zero");
        }
    }
    it("should throw an error", () => {
        expect(() => doubleIt(-5)).toThrow(VadilationError);
        expect(() => doubleIt(0)).toThrow(VadilationError);
        expect(() => doubleIt(5)).not.toThrow(VadilationError);
    });
    it("should not throw an error", () => {
        expect(doubleIt(10)).toBe(20);
    });

    it('should support and implement try catch', () => {
        try {
            const result = doubleIt(-5);
            console.log(result);
        } catch (error) {
            if(error instanceof VadilationError){
                console.error(error.message);
            }else{
                console.error('Unknown error');
            }
        }
    })
})