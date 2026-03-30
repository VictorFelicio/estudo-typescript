describe('Testando números', () => {
  test('Deve verificar se um valor é maior que outro', () => {
    const saldo = 1000;
    const saque = 500;

    expect(saldo).toBeGreaterThan(saque);
  });

  test('Deve verificar se um valor é maior ou igual', () => {
    const saldo = 1000;
    const saque = 1000;

    expect(saldo).toBeGreaterThanOrEqual(saque);
  });

  test('Deve verificar se um valor é menor', () => {
    const saldo = 1000;
    const saque = 500;

    expect(saque).toBeLessThan(saldo);
  });
  test('Deve verificar se um valor é menor ou igual', () => {
    const saldo = 1000;
    const saque = 1000;

    expect(saque).toBeLessThanOrEqual(saldo);
  });

  test('Deve verificar se um valor está próximo de outro', () => {
    const divisao = 3 / 9;

    expect(divisao).toBeCloseTo(0.33, 2);
  });
});
