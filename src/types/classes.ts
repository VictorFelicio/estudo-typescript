class Curso {
    private _id: number | undefined;
    public nome: string | undefined;

    get getId() {
        return this._id;
    }

    set setId(id: number | undefined) {
        if (id ?? 0) {
            this._id = id;
        }
    }
}

const curso1 = new Curso();

curso1.nome = 'Clean Code';
curso1.setId = 123;

console.log(curso1);
