interface CasoDeUso {
    executar(dados: any, acao: string): any;
}

const usuarios: any[] = [];

class RegistrarUsuario implements CasoDeUso {
    executar(usuario: any, acao: string) {
        usuarios.push(usuario);
        console.log(`Usuário ${acao}`, usuario);
    }
}

class ExcluirUsuario implements CasoDeUso {
    executar(dados: any, acao: string) {
        usuarios.pop();
        console.log(`Usuário ${acao}`, dados);
    }
}

const user = {
    id: 123,
    nome: 'Marcos',
    email: 'marcos@zmail.com',
    senha: 'eyyasdaçsdmasuydb123213',
};

const registarUsuario = new RegistrarUsuario();

registarUsuario.executar(user, 'cadastrado');
export {};
