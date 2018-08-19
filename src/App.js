import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from "./AppBar";

const prop={
    root: {
        flexGrow: 1,
        backgroundColor: 'green',
    },
    flex: {
        flex: 1,
    },
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <AppBar/>
                </header>
                <div>
                    <h1 className="ui header">First Header</h1>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
