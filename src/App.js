import React, { Component } from 'react';
import Header from './Components/Header';
import NPList from './Components/NPList';
// import VisitedParkList from './Components/VisitedParkList';
import './App.css';


class App extends Component {
  constructor(props) {
    super();

  }
    render() {
      return (
        <div>     
          <h1>
            <Header />
          </h1>
          <div>
            
            <NPList />
          </div>
        </div>
      )
    }
  }


export default App;
