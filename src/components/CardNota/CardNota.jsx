import React, { Component } from 'react';

//import deleteSVG from "../../assets/img/delete.svg" -> assim para usar a tag img
// Precisa ser com uppercase, visto que agora o svg é um componente
// Só funciona pois o create-react-app já traz um plugin para componentizar svgs (SVGR)
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg"

import "./estilo.css";
// Importando o css

class CardNota extends Component {
    // Esse construtor não precisaria ser declarado, pois o JS cria automaticamente
    constructor(props) {
        super(props);
    }

    apagarNota() {
        this.props.apagarNota(this.props.indice);
    }

    render() {
        return (
            <section className='card-nota'>
                <h6>{this.props.categoria}</h6>
                {/* className equivale a class do HTML, pois class é uma palavra reservada */}
                <header className='card-nota_cabecalho'>
                    <h3 className='card-nota_titulo'>{this.props.titulo}</h3>
                    {/* chamando a propriedade recebida do pai no evento de click */}
                    <DeleteSVG onClick={this.apagarNota.bind(this)} />
                </header>

                <p className='card-nota_texto'>{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;