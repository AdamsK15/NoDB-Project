import React, { Component } from 'react'
import Results from './Results'
import SauceList from './SauceList'
class Hot_Sauce extends Component {
    constructor(props) {
        super(props)

        this.state = {
            SampleSauce: [
                {
                    name: 'Sauce 1',
                    region: 'North America'

                },
                {
                    name: 'Sauce 2',
                    region: 'South America'
                },
                {
                    name: 'Sauce 3',
                    region: 'Europe'
                },
                {
                    name: 'Sauce 4',
                    region: 'Asia'
                },
                {
                    name: 'Sauce 5',
                    region: 'Australia'
                },
                {
                    name: 'Sauce 6',
                    region: 'Africa'
                },
                {
                    name: 'Sauce 7',
                    region: 'Antarctica'
                }
            ],
            filteredArray: [],
            userInput: ''
        }

        // let NA = this.state.SampleSauce.filter(element => (element.region === 'North America'))
        // let SA = this.state.SampleSauce.filter(element => (element.region === 'South America'))
        // let EU = this.state.SampleSauce.filter(element => (element.region === 'Europe'))
        // let AS = this.state.SampleSauce.filter(element => (element.region === 'Asia'))
        // let AU = this.state.SampleSauce.filter(element => (element.region === 'Australia'))
        // let AF = this.state.SampleSauce.filter(element => (element.region === 'Africa'))
        // let AN = this.state.SampleSauce.filter(element => (element.region === 'Antarctica'))

        // this.SampleSauce.getElementById('sauceRegion').addEventListener("change", function () {
        //     if (this.value == "North America") {
        //         console.log(this.value);
        //     }
        // })

    }



    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterArray(prop) {
        let SampleSauce = this.state.SampleSauce;
        let filteredArray = [];

        let NA = SampleSauce.filter(element => (element.region === 'North America'))
        let SA = SampleSauce.filter(element => (element.region === 'South America'))
        let EU = SampleSauce.filter(element => (element.region === 'Europe'))
        let AS = SampleSauce.filter(element => (element.region === 'Asia'))
        let AU = SampleSauce.filter(element => (element.region === 'Australia'))
        let AF = SampleSauce.filter(element => (element.region === 'Africa'))
        let AN = SampleSauce.filter(element => (element.region === 'Antarctica'))

        for (let i = 0; i < SampleSauce.length; i++) {
            if (SampleSauce[i].hasOwnProperty(prop)) {
                filteredArray.push(SampleSauce[i]);
            }
        }
        this.setState({ filteredArray: filteredArray })

        prop.preventDefault()
    }

    render() {
        return (
            <div className='airplane'>
                <h2>Sauces</h2>
                <form>

                    <SauceList />

                    <input onChange={(e) => this.handleChange(e.target.value)} />
                    <button className='confirmationButton' onClick={() => { this.filterArray(this.state.userInput) }}>Filter</button>
                </form>
                {/* <form className='sauceRegion'>
                    <select onChange={(e) => this.handleChange(e.target.value)}>
                        <option value='Select Region'>Select Region</option>
                        <option value='North America'>North America</option>
                        <option value='South America'>South America</option>
                        <option value='Europe'>Europe</option>
                        <option value='Asia'>Asia</option>
                        <option value='Australia'>Australia</option>
                        <option value='Africa'>Africa</option>
                        <option value='Antarctica'>Antarctica</option>
                    </select>
                    <p>{this.state.value}</p>
                </form> */}
            </div>
        )
    }

}

export default Hot_Sauce