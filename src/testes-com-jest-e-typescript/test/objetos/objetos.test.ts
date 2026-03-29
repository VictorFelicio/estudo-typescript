test('Deve verificar se dois objetos são iguais', () => {
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
});

test('Deve verificar se dois objetos são iguais com props undefined', () => {
    expect({ a: 1, b: undefined }).not.toStrictEqual({ a: 1, b: 2 });
});

test('Deve verificar se o obj tem a prop', () => {
    const aluno = {
        nome: 'Joao',
        idade: 15,
    };
    expect(aluno).toHaveProperty('nome');
});
test('Deve verificar se o obj tem diversas props', () => {
    const aluno = {
        nome: 'Joao',
        idade: 15,
        media: 8.5,
    };
    expect(aluno).toMatchObject({
        nome: 'Joao',
        idade: 15,
        media: 8.5,
    });
});
