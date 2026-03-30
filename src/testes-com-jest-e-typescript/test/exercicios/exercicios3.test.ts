import { Utils } from '../../utils/Utils';

describe('Testando a função Utils.encontrar por ID', () => {
  const estudantes = [
    { id: 1, nome: 'Ana Silva', notas: [8.5, 9.0, 8.8] },
    { id: 2, nome: 'Carlos Santos', notas: [7.5, 7.8, 8.0] },
    { id: 3, nome: 'Maria Oliveira', notas: [9.0, 9.2, 8.9] },
    { id: 4, nome: 'João Pereira', notas: [6.5, 7.0, 7.2] },
    { id: 5, nome: 'Laura Costa', notas: [8.2, 8.5, 8.7] },
    { id: 6, nome: 'Pedro Alves', notas: [7.0, 7.5, 7.8] },
  ];

  test('Deve retornar o objeto com o ID correspondente', () => {
    const response = Utils.encontrarPorId(estudantes, 3);
    expect(response).toEqual({ id: 3, nome: 'Maria Oliveira', notas: [9.0, 9.2, 8.9] });
  });
  test('Deve retornar undefined se não encontrar nada', () => {
    const response = Utils.encontrarPorId(estudantes, 7);
    expect(response).toBeUndefined();
  });
});
