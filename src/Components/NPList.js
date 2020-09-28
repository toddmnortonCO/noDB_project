/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import axios from "axios";
import VisitedParkList from "./VisitedParkList";

class NPList extends Component {
  constructor() {
    super();
    this.state = {
      visitedNationalParkList: [],
      nationalParkList: [],
      mapParks: [],
    };
      this.removePark = this.removePark.bind(this)
  }

  componentDidMount() {
    this.mapParks();
  }

  mapParks = () => {
    axios
      .get("/api/parks")
      .then((res) => {
        console.log(res.data);
        this.setState({ mapParks: res.data });
      })
      .catch((err) => console.log(err));
  };

  parkToggle() {
    const visitedPark = this.state.mapParks.map((v) =>
      Object.assign(v, { haveBeen: false })
    );

    visitedPark.haveBeen = !visitedPark.haveBeen;
  }

  savePark(park) {
    console.log(park);
    axios
      .post("/api/parks", park)
      .then((res) => {
        this.setState({ visitedNationalParkList: res.data });
      })
      .catch((err) => console.log(err));
  }

  removePark(park) {
    console.log(park);
    axios
      .delete(`/api/parks/${park}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ visitedNationalParkList: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {

    const mappedParks = this.state.mapParks.map((park, i) => {
      // console.log(park.name);
      return (
        <div key={i}>
          <p>{park.fullName}</p>
          <button onClick={() => this.savePark(park)}>Been here!</button>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="parks-to-visit">
            <h2>Parks to Visit</h2>
            <div>{mappedParks}</div>
          </div>
          <div className="parks-visited">
            <h2>These parks have been visited</h2>
            <div>
              <VisitedParkList
              removePark={this.removePark}
                visitedParks={this.state.visitedNationalParkList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NPList;
