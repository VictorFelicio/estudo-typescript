import { sum } from '../src/exemple';

test('Deve somar corretamente', () => {
    const result = sum(5, 5);
    expect(result).toBe(10);
});
