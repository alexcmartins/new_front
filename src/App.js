//import logo from './logo.svg';
import api from './Api';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    }
  }
  

  async componentDidMount() {
    const {data} = await api.get();
    console.log(data)
    const currenciesArray = Array.from(data);
    this.setState({ currencies: currenciesArray })
  }

  render() {
    const { currencies } = this.state;
    //const currenciesArray = Array.from(data);
    console.log(currencies)
    return (
      <div>
        <h1>Cotações de Moedas</h1>
        {currencies.map(currency => (
          <li key={currency}>
            <h2>
              <strong>Moeda: </strong>
              {currency}
            </h2>
            <p>
              <strong>Compra: </strong>
              {currency}
              <strong>Venda: </strong>
              {currency}
            </p>
          </li>  
        ))}
      </div>
    );
  };
};

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
