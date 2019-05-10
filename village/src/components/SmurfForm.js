import React from 'react';
import '../App.css'

class SmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    
    this.props.addNewSmurf(this.state.smurf)


    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    });
  }

  handleInputChange = e => {
    e.persist();
    let value= e.target.value
    if (e.target.name === 'age' || e.target.name === 'height') {
      value=parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  render() {
    return (
      <div className="smurfForm">
        <form onSubmit={this.addSmurf}>
          <input className="form-input"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input className="form-input"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input className="form-input"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button className="submit-button" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
