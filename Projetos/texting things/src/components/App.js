import logo from '../assets/logo.svg';
import '../styles/App.css';
import { Component } from 'react';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  handleP = () => {
    let counter2 = this.state.counter +1
    this.setState({ counter: counter2 })
  }
  
  componentDidMount(){
    const div = document.createElement('p')
    document.querySelector('section').appendChild(div, 'P')
  }

  render(){
     return (
      <div className="App">
        
        <header className="App-header">
          <h1> 
            {"Hello kkphoenix, welcome to your react text lab 👨‍🔬"}
          </h1>
            <img src={logo} className="App-logo" alt="logo" /> 
        </header>

        <section className="App-section">
          <p onClick={this.handleP} > counter = {this.state.counter}</p>
        </section>

        <footer className="App-footer">
        </footer>

      </div>
    );
  } 
}

export default App;
