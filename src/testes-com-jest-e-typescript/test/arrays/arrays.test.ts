describe('Testando arrays', () => {
  test('Testando dois arrays', () => {
    //Cuidado ao testar arrays devido ao endereço de memória e não o valor em si
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(arr1).toEqual(arr2);
  });

  test('Testando dois arrays de forma estrita', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(arr1).toStrictEqual(arr2);
  });
  test('Testando dois arrays diferentes', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3];

    expect(arr1).not.toEqual(arr2);
  });

  test('Testando dois arrays de forma estrita diferentes', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3];

    expect(arr1).not.toStrictEqual(arr2);
  });
  test('Testando se um elemento existe', () => {
    const arr1 = [1, 2, 3, 4, 'João'];

    expect(arr1).toContain('João');
  });
});
