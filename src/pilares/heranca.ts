interface Entidade {
  id: string;
}

interface User extends EntidadeComDatas {
  nome: string;
  email: string;
  senha?: string;
}

interface EntidadeComDatas extends Entidade {
  criadoEm: Date;
  atualizadoEm: Date;
  excluidoEm?: Date;
}

const usuario1: User = {
  id: Math.random().toString(),
  nome: 'Joao',
  email: 'joao@zmail.com',
  criadoEm: new Date(),
  atualizadoEm: new Date(),
};

console.log(usuario1);

export {};
