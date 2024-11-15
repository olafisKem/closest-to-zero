import { describe, expect, it } from "@jest/globals"
import { closestToZero } from "./closest-to-zero";

describe('closestToZero', () => {
    it('should return null if the array is empty', () => {
        expect(closestToZero([])).toBe(null);
    });
    it('should return the number if the array has one number', () => {
        expect(closestToZero([1])).toBe(1);
        expect(closestToZero([2])).toBe(2);
    });
    it('should return the closest number to zero if the array has two numbers', () => {
        expect(closestToZero([2,1])).toBe(1);
        expect(closestToZero([5,4])).toBe(4);
    });
    it('should return the closest number to zero if the array has two numbers, including negatives', () => {
        expect(closestToZero([2, -1])).toBe(-1);
        expect(closestToZero([-2, 1])).toBe(1); 
        expect(closestToZero([-3, -5])).toBe(-3);
    });
});