import { sum } from '../src/calc';

test('Deve somar corretamente', () => {
    const result = sum(5, 5);
    expect(result).toBe(10);
});
