import React, { Component } from 'react'
import SauceList from './SauceList'

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }

    }





    render() {
        // let SauceSelect = this.props.entries;
        let listItems = null // SauceSelect.map(this.addItem);
        return (
            <div className="Results">
                <h1>Results</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );

    }


}

export default Results