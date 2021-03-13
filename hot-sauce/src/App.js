import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Heading from './Components/Heading'
import Hot_Sauce from './Components/Hot_Sauce'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (<div className="App">
      <Heading />
      <Hot_Sauce />
    </div>
    )
  };
}

export default App;
