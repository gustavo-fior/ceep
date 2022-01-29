import React, { Component } from "react";
import Form from "./components/Form";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

import "./assets/app.css";
import './assets/index.css';


class App extends Component {

  constructor() {
    super();

    // Propriedade especial gerenciada pelo React e que toda vez que é
    // atualizada, o react faz o render de novo
    // só podemos acessa-lo pelo seu setter
    // É comum colocarmos os atributos dentro do estado
    this.state = {
      notas: [],
      categorias: []
    };
  }

  // Método público para o formulário usar e notificar a lista de notas ao mesmo tempo
  // Estamos no App.js pois é onde os dois componentes se encontram
  criarNota(titulo, texto, categoria) {

    // Criando um objeto literal do JS
    const novaNota = { titulo, texto, categoria };
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayDeNotas
    }

    // settando um novo estado passando um objeto para o setter
    // assim ele atualiza o estado e coloca o array novo no atributo notas
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;

    // Delete a partir do indice passado, apenas 1 item
    arrayNotas.splice(index, 1);

    // settando o estado novo passando um objeto com o novo array
    this.setState({
      notas: arrayNotas
    });
  }

  adicionarCategoria(categoria) {

    const novoArrayDeCategorias = [...this.state.categorias, categoria];
    const novoEstado = { ...this.state, categorias: novoArrayDeCategorias };

    this.setState(novoEstado);
  }

  apagarCategoria(index) {

    let arrayCategorias = this.state.categorias;

    arrayCategorias.splice(index, 1);

    this.setState({
      categorias: arrayCategorias
    });

  }

  // O render não pode ser chamado pelo programador, pois é gerenciado pelo react
  // Virtual DOM != DOM
  render() {
    return (
      <div className="conteudo">
        {/*Aqui chamamos o componente que criamos em outra classe*/}
        {/*E estamos definindo a propriedade criarNota para ele, associando*/}
        {/*ela com o método desta classe criarNota()*/}
        <Form
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            apagarCategoria={this.apagarCategoria.bind(this)}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas} />
        </main>
      </div>
    );
  }
}

// Equivale a colocar isso antes da classe/function
export default App;