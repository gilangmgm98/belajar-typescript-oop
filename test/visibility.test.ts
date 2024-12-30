describe('visibility', () => {
    class Counter {
        private counter: number = 0; //private hanya bisa di akses oleh class nya sendiri
        protected protectedCount: number = 0; //protected hanya bisa di akses oleh class nya dan turunannya 

        public increment(): number {
            return this.counter++; 
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): number {
            // return this.counter() * 2; //tidak bisa diakses karena private
            // maka gunakan protetected 
            return this.protectedCount += 2;  // menggunakan method yang protected di class turunannya
        }

        public doubleCounter(): number {
            return 2 * this.increment();
        }

        public getDoubleCounter(): number {
            return this.protectedCount;  // menggunakan property yang protected di class turunannya
        }
    }

    it('should support private', () => {
        const counter = new Counter();
        counter.increment();
        expect(counter.getCounter()).toBe(1);
        // counter.counter = 5; // Error: Property 'counter' is private and only accessible within class 'Counter'.
        counter.increment();
        expect(counter.getCounter()).toBe(2);
    })

    it('should support protected', () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        // console.info(doubleCounter.getDoubleCounter()) //debug
        doubleCounter.doubleCounter()
        // console.info(doubleCounter.getDoubleCounter()) //debug 
        expect(doubleCounter.getDoubleCounter()).toBe(4);
    })
})