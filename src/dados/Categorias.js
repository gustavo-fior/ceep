export default class Categorias {

    // Declarando a propriedade da classe
    constructor() {
        // Array para guardar todos os componentes que observarao as categorias
        this._inscritos = [];
        this.categorias = [];
    }

    // Estamos inscrevendo uma funcao no array de inscritos
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
            funcao(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria) {
        this.categorias.push(novaCategoria);
        this.notificar();
    }

    deletarCategoria(index) {
        // Delete a partir do indice passado, apenas 1 item
        this.categorias.splice(index, 1);
        this.notificar();
    }

}