import { Utils } from '../../utils/Utils';

describe('Testes de Utils.diferencaDeArrays', () => {
  test('Deve verificar a diferença com arrays númericos', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [14, 52, 63, 4];

    expect(Utils.diferencaDeArrays(arr1, arr2)).toEqual([1, 2, 3]);
  });
  test('Deve verificar a diferença com arrays de string', () => {
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['a', 'c', 'd'];

    expect(Utils.diferencaDeArrays(arr1, arr2)).toStrictEqual(['b']);
  });
});

describe('Testando a função Utils.removerDuplicados', () => {
  test('Deve remover duplicados númericos', () => {
    const arr = [1, 1, 1, 2, 3, 4, 5, 5, 5, 6.99, 6.99, 7];
    expect(Utils.removerDuplicados(arr)).toStrictEqual([1, 2, 3, 4, 5, 6.99, 7]);
  });
});
describe('Testando a função Utils.capitalziarString', () => {
  test('Deve capitalizar uma string lower case', () => {
    const palavra = 'bom dia';
    expect(Utils.capitalizarString(palavra)).toBe('Bom Dia');
  });
  test('Deve capitalizar uma string upper case', () => {
    const palavra = '1BOM DIA';
    expect(Utils.capitalizarString(palavra)).toBe('1bom Dia');
  });
  test('Deve retornar vazio uma string sem nada', () => {
    const palavra = '';
    expect(Utils.capitalizarString(palavra)).toBe('');
  });
});
