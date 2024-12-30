import { mathUtils, timeGreeting } from "../src/math-util"

describe('namespace', () => {
    it('should be able to use namespace', () => {
        expect(mathUtils.add(2, 3)).toBe(5);
    });
})