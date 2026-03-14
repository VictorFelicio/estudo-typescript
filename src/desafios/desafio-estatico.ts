class DesafioEstatico {
    value: number = 1000;

    static executar() {
        const desafio = new DesafioEstatico();
        console.log(desafio.value);
    }
}

DesafioEstatico.executar();
