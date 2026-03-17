interface Operacao {
    (n1: number, n2: number): number;
}

const soma: Operacao = (value1: number, value2: number) => value1 + value2;

const divisao: Operacao = (value1: number, value2: number) => (value1 / value2 === Infinity ? 0 : value1 / value2);

console.log(divisao(4, 2));
