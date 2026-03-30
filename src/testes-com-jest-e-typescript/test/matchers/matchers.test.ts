describe('Testando matchers', () => {
  test('Verificar se é o valor esperado', () => {
    expect(10).toBe(10);
  });

  test('Verificar se não é o valor esperado', () => {
    expect(10).not.toBe(5);
  });

  test('Verifica se é nulo', () => {
    const nome = null;

    expect(nome).toBeNull();
  });

  test('Verifica se não é nulo', () => {
    const nome = 'Joao';

    expect(nome).not.toBeNull();
  });

  test('Verifica se o valor está definido', () => {
    let nome = 'Marcos';
    expect(nome).toBeDefined();
  });
  test('Verifica se o valor não está definido', () => {
    let nome = undefined;
    expect(nome).not.toBeDefined();
  });

  test('Verifica se o valor é falsy', () => {
    let idade = 17;
    let liberado;

    if (idade > 17) {
      liberado = true;
    }
    expect(liberado).toBeFalsy();
  });

  test('Verifica se o valor é Truthy', () => {
    let idade = 20;
    let liberado;

    if (idade > 17) {
      liberado = true;
    }
    expect(liberado).toBeTruthy();
  });
});
