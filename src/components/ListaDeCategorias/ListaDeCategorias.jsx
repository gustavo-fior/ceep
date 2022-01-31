import React, { Component } from 'react';
import CardCategoria from '../CardCategoria/CardCategoria';
import CardNota from '../CardNota';
import "./estilo.css"

class ListaDeCategorias extends Component {

    constructor(){
        super(); // Para poder invocar o metodo abaixo

        // Criando um estado local
        this.state = {
            categorias: []
        }

        this._novasCategorias = this._novasCategorias.bind(this);

    }

    // Metodo que eh disparado quando o componente terminou sua montagem
    // (Melhor que o construtor para colocar subscricoes)
    componentDidMount() {

        // Passamos a funcao _novasCategorias para ser inscrita no objeto Categorias
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias) {

        // Abrindo todas as propriedades e alterando apenas a desejada com spread operator(...)
        this.setState({...this.state, categorias});
    }
 
    _handleEventoInput(evento) {
        if (evento.key == "Enter") {
            let valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className='lista-categorias'>
                <ul className='lista-categorias_lista'>
                    {/* Agora estamos pegando o array do objeto Categorias que foi passado no App.js */}
                    {this.state.categorias.map((categoria, index) => {
                        return <li
                            key={index}
                            className='lista-categorias_item'>
                            <CardCategoria 
                            index={index} 
                            apagarCategoria={this.props.apagarCategoria}
                            categoria={categoria}/>
                        </li>
                    })}
                </ul>
                <input
                    type="text"
                    className='lista-categorias_input'
                    placeholder='Adicionar categoria'
                    onKeyUp={this._handleEventoInput.bind(this)} />
            </section>
        );
    }
}
export default ListaDeCategorias;