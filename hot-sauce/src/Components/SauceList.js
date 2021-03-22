import React, { Component } from 'react';

const SampleSauce = [
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
];

class SauceList extends Component {
    render() {
        return (


            SampleSauce.map(sauce => {
                return <li>{sauce.name}, {sauce.region}</li>
            })

        )
    }


}

export default SauceList