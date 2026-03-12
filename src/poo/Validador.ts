export default class Validador {
    static isPositivo(value: number, erro: string) {
        if (value <= 0) throw new Error(erro);
    }

    static interval(value: number, min: number, max: number, erro: string) {
        if (value < min || value > max) throw new Error(erro);
    }

    static between(value: string, min: number, max: number, erro: string) {
        Validador.interval(value.length, min, max, erro);
    }
}
