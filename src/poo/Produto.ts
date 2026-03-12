import Validador from './Validador';

class Produto {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly preco: number,
        readonly desc: number,
    ) {
        Validador.isPositivo(id, 'ID Iválido');
        Validador.between(name, 2, 15, 'Tamanho de nome não permitido');
        Validador.isPositivo(preco, 'Preço inválido');
        Validador.interval(desc, 0, 0.8, 'Desconto não permitido');
    }

    get precoFinal() {
        return (this.preco * (1 - this.desc)).toFixed(2);
    }
}

const prod1 = new Produto(123, 'Caneta', 100, 0.1);

console.log(prod1);

console.log('Preço final ---->', prod1.precoFinal);
