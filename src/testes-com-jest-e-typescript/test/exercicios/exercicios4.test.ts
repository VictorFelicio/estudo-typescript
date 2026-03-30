import { Utils } from '../../utils/Utils';

describe('Testando a função Utils.calcularAreaCirculo', () => {
  test('Deve calcular corretamente a area de um circulo ', () => {
    const area = Utils.calcularAreaCirculo(4);
    expect(area).toBeCloseTo(50.2655, 4);
  });
  test('Deve lançar um erro com número menor que zero', () => {
    expect(() => Utils.calcularAreaCirculo(-5)).toThrow('O raio não pode ser negativo');
  });
});

describe('Testando a função Utils.buscarDadosComDelay', () => {
  test('Deve resolver os dados após o delay', async () => {
    const promessa = Utils.buscarDadosComDelay('RESOLVIDO', 1000);
    jest.advanceTimersByTime(1000);
    await expect(promessa).resolves.toBe('RESOLVIDO');
  });
});
