interface CasoDeUso<I, O> {
    executar(dados: I, acao: string): O;
}
interface User {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

let usuarios: User[] = [];

class RegistrarUsuario implements CasoDeUso<User, void> {
    executar(usuario: User, acao: string) {
        usuarios.push(usuario);
        console.log(`Usuário ${acao}`, usuario);
    }
}

class ExcluirUsuario implements CasoDeUso<User, void> {
    executar(usuario: User, acao: string) {
        usuarios = usuarios.filter((user) => user.id != usuario.id);

        console.log(`Usuário ${acao}`, usuario);
    }
}

const user1 = {
    id: 123,
    nome: 'Marcos',
    email: 'marcos@zmail.com',
    senha: 'eyyasdaçsdmasuydb123213',
};
const user2 = {
    id: 456,
    nome: 'Joao',
    email: 'joao@zmail.com',
    senha: 'eyyasdaçsdmasuydb123213',
};
const user3 = {
    id: 789,
    nome: 'Giovana',
    email: 'giovana@zmail.com',
    senha: 'eyyasdaçsdmasuydb123213',
};

const registarUsuario = new RegistrarUsuario();
const excluirUsuario = new ExcluirUsuario();

registarUsuario.executar(user1, 'cadastrado');
registarUsuario.executar(user2, 'cadastrado');
registarUsuario.executar(user3, 'cadastrado');

console.table(usuarios);

excluirUsuario.executar(user1, 'excuido');

console.table(usuarios);

export {};
