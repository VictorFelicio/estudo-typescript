//definir typo contacorrente com numero saldo movimentar
//cliente nome email contas[]
//lista de clientes

type ContaCorrente = {
  numeroDaConta: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

type Cliente = {
  id: number;
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, value: number) {
  this.saldo += value;
}

const clientes: Cliente[] = [
  {
    id: 123,
    nome: 'Joao',
    email: 'joao@email.com',
    contas: [
      {
        numeroDaConta: 123,
        saldo: 0,
        movimentar,
      },
    ],
  },
  {
    id: 124,
    nome: 'Maria',
    email: 'maria@email.com',
    contas: [
      {
        numeroDaConta: 124,
        saldo: 340,
        movimentar,
      },
    ],
  },
  {
    id: 125,
    nome: 'Jose',
    email: 'jose@email.com',
    contas: [
      {
        numeroDaConta: 125,
        saldo: 3,
        movimentar,
      },
    ],
  },
];

function movimentarConta(idCliente: number, numeroDaConta: number, value: number) {
  const clienteEncontrado = clientes.find((cliente) => cliente.id === idCliente);

  const conta = clienteEncontrado?.contas.find((cc) => cc.numeroDaConta === numeroDaConta);

  conta?.movimentar(value);

  console.log(conta);
}

movimentarConta(125, 125, 300);
