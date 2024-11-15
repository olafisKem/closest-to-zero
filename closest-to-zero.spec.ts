import { describe, expect, it } from "@jest/globals"
import { closestToZero } from "./closest-to-zero";

describe('closestToZero', () => {
    it('should return null if the array is empty', () => {
        expect(closestToZero([])).toBe(null);
    });
});