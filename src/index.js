import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Descripcion from "./components/Descripcion";




class Home extends React.Component {
    render() {     
        return (
            <div className="app">
                <BrowserRouter>
        <Route exact path="/" render={(props) => <App isAuthed={true}  isRender = {true} />} />
                    <Route path="/descripcion" component={Descripcion}   />
                    <Route path="/List" component={Descripcion}   />

                </BrowserRouter>
            </div>
        )
    }
}
ReactDOM.render(
    <Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
