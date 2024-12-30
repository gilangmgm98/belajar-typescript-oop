export namespace mathUtils {
    export function add(x: number, y: number): number {
        return x + y;
    }

    export function isPrime(n: number): boolean {
        if (n <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    export function factorial(n: number): number {
        if (n <= 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    export function fibonacci(n: number): number {
        if (n <= 0) {
            throw new Error("Invalid input. n must be a positive integer.");
        }
        if (n === 1) {
            return 0;
        }
        if (n === 2) {
            return 1;
        }
        let prev = 0;
        let current = 1;
        for (let i = 3; i <= n; i++) {
            let temp = current;
            current += prev;
            prev = temp;
        }
        return current;
    }
}

export namespace timeGreeting {
    export function greet(time: string): string {
        const hours = parseInt(time.split(":")[0]);
        if (hours >= 6 && hours < 12) {
            return "Good morning!";
        } else if (hours >= 12 && hours < 18) {
            return "Good afternoon!";
        } else {
            return "Good evening!";
        }
    }
    export function formatTime(hours: number, minutes: number): string {
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${formattedHours}:${formattedMinutes}`;
    }
    export function getCurrentTime(): string {
        const now = new Date();
        return formatTime(now.getHours(), now.getMinutes());
    }
    export function isTimeBetween(startTime: string, endTime: string, currentTime: string): boolean {
        const start = parseInt(startTime.split(":")[0]);
        const end = parseInt(endTime.split(":")[0]);
        const current = parseInt(currentTime.split(":")[0]);
        return current >= start && current <= end;
    }
}
