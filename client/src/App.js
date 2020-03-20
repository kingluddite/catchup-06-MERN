import React, { Component } from 'react';
import * as $ from 'axios';


class App extends Component {

  state = {
      personsList: [],
      newPersonName: ''
    }

    componentDidMount(){
      $.get('/api/persons')
      .then((result) => {
        console.log('update');
        this.setState({personsList: result.data})
      })
    }

    handleChange = (event) => {
      this.setState({newPersonName: event.target.value})
    }

    handleClick = (event) => {
       event.preventDefault();
       $.post('/api/persons', {name: this.state.newPersonName}).then((result) => {
        console.log('result from app.js', result.data);
       })
     }

  render() {
    return (
      <div className="App">
          <form>
          <input val={this.state.newPersonName} onChange={this.handleChange} />
          <button onClick={this.handleClick}>Submit</button>
          </form>
        <div>
          {this.state.personsList.map(person => (
            <p>{person.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
