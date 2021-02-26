import React from 'react';
import './App.css';
import Header from './Header/Header';
import Result from './Result/Result'; // Sin el .js

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      selectButton: "nada",
      resultado: 0
    }
  }

  handleChange =  (e) => {
    this.setState({ value: e.target.value });
    if(this.state.selectButton === "43"){
      this.setState({ resultado: e.target.value * 43 });
    }
    if(this.state.selectButton === "37"){
      this.setState({ resultado: e.target.value * 37 });
    }
  }

  multiplica43 = () => {
   
    this.setState({
      value: this.state.value,
      selectButton: "43",
      resultado: (this.state.value * 43)
    })

  }

  multiplica37 = () => {
   
    this.setState({
      value: this.state.value,
      selectButton: "37",
      resultado: (this.state.value * 37)
    })

  }


  render() {
    return (
      <div className="App">
        <Header title="Ejercicio 1 React" />
        <input type="number" onChange={this.handleChange} />
        <p>
          <button onClick={() => this.multiplica43()}>Multiplica por 43</button>
          <button onClick={() => this.multiplica37()}>Multiplica por 37</button>
        </p>

        <p>El resultado de multiplicar el valor de entrada ({this.state.value}) por {this.state.selectButton} es: {this.state.resultado} </p>
        <Result/>

      </div>

    )
  }

}

export default App;
