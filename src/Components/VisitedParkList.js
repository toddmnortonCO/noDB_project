/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import axios from 'axios';
import ParkDisplay from './ParkDisplay';


class VisitedParkList extends Component {
    constructor() {
        super();
        this.state = {
            visitedParks: [],
            mapParks: []
        }
    }

    componentDidMount() {
        this.mapParks();
    }

    mapParks() {
        axios.get('/api/parks')
            .then(res => {
                console.log(res.data)
                this.setState({ mapParks: res.data })
            })
            .catch(err => console.log(err));
    }
    
    

    render() {
        const visitedParks = this.props.visitedParks.map((park, i) => {
            return (
                <ParkDisplay park={park} removePark={this.props.removePark}/>
            )
        })
        return (
            <div >
                <p>{visitedParks}</p>
            </div>
        )
    }
}

export default VisitedParkList;