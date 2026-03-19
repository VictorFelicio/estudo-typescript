class Carro {
    private valocidadeAtual: number = 0;
    protected readonly VALOCIDADE_MAXIMA: number = 200;
    public nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    private alterarVelocidade(value: number) {
        const novaVelocidade = this.valocidadeAtual + value;
        if (novaVelocidade >= 0 && novaVelocidade <= this.VALOCIDADE_MAXIMA) {
            this.valocidadeAtual = novaVelocidade;
        }
    }

    acelerar(value: number) {
        this.alterarVelocidade(value);
    }

    get velocidade() {
        return this.valocidadeAtual;
    }
}

const carro1 = new Carro('Fusca');

console.log(carro1.nome);
carro1.acelerar(100);
carro1.acelerar(50);
console.log(carro1.velocidade);
