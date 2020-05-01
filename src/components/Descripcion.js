import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const numberArray = [1, 2, 3];

var recorrido = numberArray.map((number) =>
    <div>
        <li>
            {number}
        </li>
    </div>
);

class Descripcion extends Component {

    render() {
        return (
            <div>
                <div>{recorrido}</div>
            </div>

        )
    }
}


export default Descripcion;