import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

// Classe componente (.jsx) 
// Extendem um componente de React e usam o método render para renderizar
// tudo que retorna do método
class ListaDeNotas extends Component {

    // Esse construtor não precisaria ser declarado, pois o JS cria automaticamente
    constructor(props) {
        super(props);

        this.state = {
            notas:[]
        }

        this._novasNotas = this._novasNotas.bind(this);
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas);
    }

    componentWillUnmount() {
        this.props.notas.desinscrever(this._novasNotas);
    }

    _novasNotas(notas) {
        this.setState({...this.state, notas})
    }

    render() {
        return (
            <ul className="lista-notas">
                {
                    /* Tudo que for colocado entre chaves é JS 
                    Chamamos um método para criar um array com base no parâmetro passado (strings) 
                    Depois fazemos um map, chamando uma function (arrow funtcion aqui // anônima)
                    para cada elemento do array e passando o próprio elemento como parâmetro */

                    /* Retornamos o card com o parâmetro sendo adicionado a tag <p>
                    iterando por todos os itens do array */

                    /* ForEach não funciona nessa situação, pois ele não retorna uma lista, 
                    enquanto o map retorna uma lista para a <ul> */

                    /* O metodo map também pode passar o parâmetro index, aqui usamos ele para
                    definir a "key" de cada elemento (necessária em toda lista, para "marcar" 
                    objetos "iguais") */
                }
                {this.state.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNota
                                /* passando o index para cada card */
                                indice={index}
                                /* chamando a propriedade do pai */
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                texto={nota.texto} 
                                categoria={nota.categoria} /> 
                        </li>
                    );
                })

                }

            </ul>
        );
    }
}

// Export nessa classe para ela poder ser usada no App.js
// Default para não precisar das chaves ao importar no App.js
export default ListaDeNotas;