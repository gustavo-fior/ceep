import React, { Component } from 'react';
import CardCategoria from '../CardCategoria/CardCategoria';
import CardNota from '../CardNota';
import "./estilo.css"

class ListaDeCategorias extends Component {

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
                    {this.props.categorias.map((categoria, index) => {
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