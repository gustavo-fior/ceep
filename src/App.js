import React, { Component } from "react";
import Form from "./components/Form";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import Categorias from "./dados/Categorias";
import ArrayDeNotas from "./dados/ArrayDeNotas";

import "./assets/app.css";
import './assets/index.css';


class App extends Component {

  constructor() {
    super();

    // Criando as propriedades com as classes
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }


  // O render não pode ser chamado pelo programador, pois é gerenciado pelo react
  // Virtual DOM != DOM
  render() {
    return (
      <section className="conteudo">
        {/*Aqui chamamos o componente que criamos em outra classe*/}
        {/*E estamos definindo a propriedade criarNota para ele, associando*/}
        {/*ela com o método da classe Nota: criarNota()*/}
        <Form
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)} /> 
        <main className="conteudo-principal">
          <ListaDeCategorias
            apagarCategoria={this.categorias.deletarCategoria.bind(this.categorias)}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} // Fazendo o bind do objeto Categorias para o this ficar certo
            categorias={this.categorias} // Chamando o objeto Categorias
          />
          <ListaDeNotas
            apagarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas} // Chamando o objeto Notas
            /> 
        </main>
      </section>
    );
  }
}

// Equivale a colocar isso antes da classe/function
export default App;