import { somar } from '../../function/somar';

describe('Função somar', () => {
    test('Deve somar corretamente', () => {
        const result = somar(1, 3);

        expect(result).toBe(4);
    });
});
