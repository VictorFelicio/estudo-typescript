interface Usuario {
    id: number;
    nome: string;
    email: string;
}

const novoUsuario: Usuario = {
    id: 123,
    email: 'joao@email.com',
    nome: 'joao',
};

console.log(novoUsuario);

const usuarioOpcional: Partial<Usuario> = {
    email: 'maria@email.com',
    nome: 'maria',
};

console.log(usuarioOpcional);
