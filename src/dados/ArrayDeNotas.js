
// Classe da lista de notas (nao do objeto)
export default class ArrayDeNotas {

    constructor() {
        this._inscritos = [];
        this.notas = [];
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao) {

        // Filtrando por todos os que nao sejam a funcao passada
        this._inscritos = this._inscritos.filter(func => func !== funcao);
    }

    // Executar a funcao passada de cada inscrito levando as cateogiras novas
    notificar() {
        this._inscritos.forEach(funcao => {
            funcao(this.notas);
        });
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    deletarNota(index) {
        // Delete a partir do indice passado, apenas 1 item
        this.notas.splice(index, 1);
        this.notificar();
    }

}

// Classe do objeto Nota
class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}