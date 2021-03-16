import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Heading from './Components/Heading'
import Hot_Sauce from './Components/Hot_Sauce'
import Results from './Components/Results';
import AirPlane from '../src/AirPlane.jpg'
import sky2 from '../src/sky2.jpg'
import SauceList from './Components/SauceList'

class App extends Component {
  constructor() {
    super()
  }

  // componentDidMount() {
  //   axios.get('api/SauceList', { sauce: sauce })
  //     .then(res => {
  //       this.setState({ caughtSauce: res.data })
  //     })
  //     .catch(err => console.log(err))
  // }

  // getSauce(sauce){
  //   axios.post('/api/SauceList', {sauce: sauce})
  //     .then(res => {
  //       this.setState({ purchasedSauce: res.data })
  //     })
  //     .catch(err => console.log(err))
  // }

  // editName = (id, newName) => {
  //   let body = {name: newName};

  //   axios.put(`/api/SauceList/${id}`, body)
  //     .then(res => {
  //       this.setState({ purchasedSauce: res.data })
  //     })
  //     .catch(err => console.log(err))
  // }

  // removeSauce = (id) => {
  //   axios.delete(`/api/SauceList/${id}`)
  //     .then(res => {
  //       this.setState({ purchasedSauce: res.data })
  //     })
  //     .catch(err => console.log(err))
  // }

  render() {
    return (<div>
      <Heading />
      <Results />
      <Hot_Sauce />
    </div>
    )
  };
}

export default App;
