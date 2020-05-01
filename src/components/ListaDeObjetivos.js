import React, { Component } from 'react';
import '../ListaDeObjetivos.css';

class ListaDeObjetivos extends Component {


    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
        };
    }

    render() {
        if (this.props.item){ {/*Con eso evitamos que si hay un elemento vacio nos cree un checkbox vacio */}       
        return (
            <div className="container">             
                <input type="checkbox"></input>
                <label  className="ItemLabel">{this.props.item}</label>
            </div>
        );
    }else{
        return (
         <div></div>   
        )
    }
    }
}

export default ListaDeObjetivos;