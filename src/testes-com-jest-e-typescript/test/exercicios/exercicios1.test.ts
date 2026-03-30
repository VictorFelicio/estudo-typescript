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

describe('Teste Utils.somarArray', () => {
  test('Deve retornar zero quando o array é vazio', () => {
    const dados: number[] = [];
    const value = Utils.somaArray(dados);

    expect(value).toBe(0);
  });
  test('Deve retornar o valor com positivos inteiros', () => {
    const dados: number[] = [1, 2, 3, 4];
    const value = Utils.somaArray(dados);

    expect(value).toBe(10);
  });
  test('Deve retornar o valor com negativos inteiros', () => {
    const dados: number[] = [-1, -2, -3, -4];
    const value = Utils.somaArray(dados);

    expect(value).toBe(-10);
  });
  test('Deve retornar o valor com flutuantes', () => {
    const dados: number[] = [-1.32, -2.00005, -3, 4];
    const value = Utils.somaArray(dados);

    expect(value).toBeCloseTo(-2.32005);
  });
});
