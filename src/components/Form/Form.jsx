import React, { Component } from "react";
import "./estilo.css";

class Form extends Component {

    // Contrutor para definir os atributos
    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";

        this.state = {
            categorias:[]
        }

        // Passando essa propriedade para tanto na hora de montar o componente, quanto na hora de desmontar
        // a referencia do metodo a ser inscrito/desinscrito seja a mesma e o filtro funcione
        // ------------------------------------------------------------------------------------
        // Isso ocorre pois o bind cria uma nova funcao referenciando a funcao passada
        // Sendo assim, quando criado em locais diferentes, o bind cria duas referencias diferentes
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    // Recebe o evento que foi disparado como parâmetro
    // _ para "tornar" o método privado
    _handleMudancaDeTitulo(evento) {
        evento.stopPropagation();

        this.titulo = evento.target.value;
    }

    _handleMudancaDeTexto(evento) {
        evento.stopPropagation();

        this.texto = evento.target.value;
    }

    _handleMudancaDeCategoria(evento) {
        evento.stopPropagation();

        this.categoria = evento.target.value;
        console.log(this.categoria);
    }

    _criarNota(evento) {

        evento.preventDefault();

        // Isso faz com que o evento não se propague na arvore do HTML
        evento.stopPropagation();

        // Aqui chamamos a propriedade que recebemos no construtor 
        // e executamos a função que foi associada a essa propriedade
        // passando os dados para a classe pai
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form onSubmit={this._criarNota.bind(this)}
                className="form-cadastro">
                <select 
                onChange={this._handleMudancaDeCategoria.bind(this)} 
                className="form-cadastro_input"
                >
                    <option>Sem categeoria</option>
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>
                    })

                }
                </select>
                <input
                    className="form-cadastro_input"
                    type="text"
                    placeholder="Título"
                    onChange={this._handleMudancaDeTitulo.bind(this)} />
                {/* onChange para capturar o evento e disparar uma função */}
                {/* escrita acima, this nesse contexto se refere a classe */}
                {/* visto que não temos acesso dentro do método render() */}
                {/* O .bind() é para sinicronizar o método a uma instância */}
                {/* nesse caso, a própria classe Form. Sem essa sinzronização */}
                {/* o this do método handler fica sem contexto na execução */}

                <textarea
                    className="form-cadastro_input"
                    rows={15}
                    placeholder="Escreva sua nota"
                    onChange={this._handleMudancaDeTexto.bind(this)} />

                <button
                    className="form-cadastro_input form-cadastro_submit"
                    type="submit">
                    Adicionar nota
                </button>
            </form>
        );
    }
}

export default Form;