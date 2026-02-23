import { saudacao } from '../../src/functions/functions';

test('should return a saudation', () => {
    const mensagem = saudacao('Victor');

    expect(mensagem).toBe('Olá, Victor! Seja Bem vindo(a)!');
});
