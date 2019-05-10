import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
componentDidMount() {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      this.setState({smurfs: res.data});
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
}

addNewSmurf = newSmurf => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res => {
      this.setState({ smurfs: res.data });
      console.log(res);
      this.props.history.push('/')
    })
    .catch(err => {
      console.log(err);
    })
}

  render() {
    return (
      <div className="App">
        <SmurfForm addNewSmurf={this.addNewSmurf}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
