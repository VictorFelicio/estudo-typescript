class Curso {
    readonly id: number;
    public nome: string | undefined;

    constructor(id: number) {
        if (id < 0) {
            throw new Error(`ID inválido -> ${id}`);
        }
        this.id = id;
    }
}

const curso1 = new Curso(-1);

curso1.nome = 'Clean Code';

console.log(curso1);

export {};
