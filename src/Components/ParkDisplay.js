import React, { Component } from 'react'
import axios from 'axios'

export default class ParkDisplay extends Component {
    // removePark = (id) => {
    //     axios.delete(`/api/parks/${id}`)
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({ visitedNationalParkList: res.data })
    //         })
    //         .catch(err => console.log(err));
    // }

    render() {
        console.log(this.props.park);
        return (
            <div>
                <p>{this.props.park.fullName}</p>
                <button onClick={() => this.props.removePark(this.props.park.id)}>Remove</button>
            </div>
        )
    }
}