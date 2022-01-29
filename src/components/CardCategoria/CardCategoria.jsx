import React, { Component } from 'react';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

class CardCategoria extends Component {

    apagarCategoria() {
        this.props.apagarCategoria(this.props.index);
    }

    render() {
        return (
            <section>
                <span>{this.props.categoria}</span>
                <DeleteSVG onClick={this.apagarCategoria.bind(this)}/>
            </section>
        );
    }
}

export default CardCategoria;