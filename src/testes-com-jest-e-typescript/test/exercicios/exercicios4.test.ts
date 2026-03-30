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

describe('Testando a função Utils.carregarRecursoComTimeout', () => {
  jest.useFakeTimers();
  test('Deve resolver o recurso antes do timeout', async () => {
    const buscarDado = () => Utils.buscarDadosComDelay('recurso', 500);
    const promessa = Utils.carregarRecursoComTimeout(buscarDado, 1000);
    jest.advanceTimersByTime(500);
    await expect(promessa).resolves.toBe('recurso');
  });
  test('Deve lançar erro se houver timeout', async () => {
    const buscarDado = () => Utils.buscarDadosComDelay('recurso', 1500);
    const promessa = Utils.carregarRecursoComTimeout(buscarDado, 1000);
    jest.advanceTimersByTime(1000);
    await expect(promessa).rejects.toThrow('Timeout ao carregar recurso');
  });
});
