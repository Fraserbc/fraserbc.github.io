import './App.css';
import React from 'react';
import Waves from './Waves';
import Popup from './Popup'
import logo from './logo.png';

class App extends React.Component {
  constructor() {
    super();

    this.state = {showing: false};
    this.discordClick = this.discordClick.bind(this);
  }

  componentDidMount() {
    document.title = "Fraser Price";
  }

  discordClick() {
    this.setState({showing: true});
    setTimeout(() => { this.setState({showing: false}) }, 1500);
    navigator.clipboard.writeText("frsr#5381");
  }

  render() {
    return (
      <div id="App">
        <Waves id="waves-el" />
        <Popup content="Copied to clipboard!" showing={this.state.showing}/>
        <div id="info-container">
          <img src={logo} id="picture" />
          <h1>Fraser Price</h1>
          <div id="links">
            <ul>
              <li><a href="https://github.com/fraserbc" target="_blank">Github</a></li>
              <li>&middot;</li>
              <li><a href="#" onClick={this.discordClick}>Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;