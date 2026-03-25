import { Utils } from '../../utils/Utils';

describe('Teste Utils.max', () => {
    test('Deve retornar o maior número do array', () => {
        const maior = Utils.max([10, 9, 8, 10, 11, 3, 7]);

        expect(maior).toBe(11);
    });
    test('Deve retornar o nulo caso esteja vazio', () => {
        const arrayNulo = Utils.max([]);

        expect(arrayNulo).toBeNull();
    });
});
describe('Teste Utils.min', () => {
    test('Deve retornar o menor número do array', () => {
        const maior = Utils.min([10, 9, 8, 10, 11, 3, 7]);

        expect(maior).toBe(3);
    });
    test('Deve retornar o nulo caso esteja vazio', () => {
        const arrayNulo = Utils.min([]);

        expect(arrayNulo).toBeNull();
    });
});
