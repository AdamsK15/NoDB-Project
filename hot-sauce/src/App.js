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
    super();
    this.state = {
      SampleSauce: [],
      image: ''
    }
  }

  componentDidMount() {
    axios.get('/api/SampleSauce')
      .then(res => {
        this.setState({ SampleSauce: res.data })
      })
      .catch(err => console.log(err))
  }

  addSauce = newSauce => {
    let { name, region } = newSauce;

    axios.post('/api/SampleSauce', { name, region })
      .then(res => {
        this.setState({ SampleSauce: res.data })
      })
      .catch(err => console.log(err))
  }

  editSauce = (id, sauce) => {
    let { name, region } = sauce;

    axios.put(`/api/SampleSauce/${id}?name=${name}&region=${region}`)
      .then(res => {
        this.setState({ SampleSauce: res.data })
      })
      .catch(err => console.log(err))
  }

  deleteSauce = (id) => {
    axios.delete(`/api/SampleSauce${id}`)
      .then(res => {
        this.setState({ SampleSauce: res.data })
      })
      .catch(err => console.log(err))
  }

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
