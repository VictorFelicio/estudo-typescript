interface Entidade {
    id: number;
}

interface Vendavel {
    nome: string;
    preco: number;
    desconto: number;
}

class Produto implements Entidade, Vendavel {
    constructor(
        readonly id: number,
        readonly nome: string,
        readonly preco: number,
        readonly desconto: number,
    ) {}
}

const produto1 = new Produto(123, 'Notebook', 3500, 0.05);

console.log(produto1);

export {};
