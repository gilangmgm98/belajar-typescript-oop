describe('static', () => {
    class Configuration {
        static NAME: string = 'Belajar TypeScript OOP'
        static VERSION: number = 1.0
        static AUTHOR: string = 'Muhammad Gilang Murdiyanto'

        static getInfo(): string {
            return `${this.NAME} v${this.VERSION} by ${this.AUTHOR}`
        }
    }

    class MathUtils {
        static add(a: number, b: number): number {
            return a + b
        }
        static subtract(a: number, b: number): number {
            return a - b
        }
        static multiply(a: number, b: number): number {
            return a * b
        }
        static divide(a: number, b: number): number {
            if (b === 0) {
                throw new Error('Cannot divide by zero')
            }
            return a / b
        }
        static isPrime(number: number): boolean {
            if (number <= 1) {
                return false
            }
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    return false
                }
            }
            return true
        }
        static factorial(number: number): number {
            if (number <= 1) {
                return 1
            }
            let result = 1
            for (let i = 2; i <= number; i++) {
                result *= i
            }
            return result
        }
        static fibonacci(number: number): number {
            if (number <= 1) {
                return number
            }
            let fib = [0, 1]
            for (let i = 2; i <= number; i++) {
                fib[i] = fib[i - 1] + fib[i - 2]
            }
            return fib[number]
        }
        static isPalindrome(word: string): boolean {
            let reversed = word.split('').reverse().join('')
            return word.toLowerCase() === reversed.toLowerCase()
        }
        static isAnagram(word1: string, word2: string): boolean {
            let sortedWord1 = word1.toLowerCase().split('').sort().join('')
            let sortedWord2 = word2.toLowerCase().split('').sort().join('')
            return sortedWord1 === sortedWord2
        }
    }
    
    it('should support static properties',()  => {
        expect(Configuration.getInfo()).toBe('Belajar TypeScript OOP v1 by Muhammad Gilang Murdiyanto')
    })

    it('should support static methods',()  => {
        expect(MathUtils.add(2, 3)).toBe(5)
        expect(MathUtils.subtract(5, 3)).toBe(2)
        expect(MathUtils.multiply(2, 3)).toBe(6)
        expect(MathUtils.divide(6, 3)).toBe(2)
        expect(MathUtils.isPrime(17)).toBe(true)
        expect(MathUtils.factorial(5)).toBe(120)
        expect(MathUtils.fibonacci(5)).toBe(5)
        expect(MathUtils.isPalindrome('radar')).toBe(true)
        expect(MathUtils.isAnagram('listen', 'silent')).toBe(true)
    })
})