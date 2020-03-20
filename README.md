# React data
* React is all about building modular front-ends using a component based architecture
* Today we only have time to build a single component
* But you should be thinking about how a component based architecture might will allow them to easily augment this application
* Adding Persons to MongoDB with compass

`App.js`

```
import React, { Component } from 'react';

class App extends Component {

  state = {
    PersonList: [{name: 'Hank'}, {name: 'Divya'}]
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.PersonList.map(person => (
            <p>{person.name}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
```

* We hard-coded our people
* In a real application, we need to retrieve this data from the database
* You see we output 2 names

## Add data from our API

## Get POST working too!
`App.js`

```
import React, { Component } from 'react';
import * as $ from 'axios';


class App extends Component {

  state = {
      PersonList: [],
      NewPersonName: ''
    }

    componentDidMount(){
      $.get('/api/persons')
      .then((result) => {
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
          {this.state.PersonList.map(person => (
            <p>{person.name}</p>
          ))}
        </div>
      </div>
    );
  }
}
```

## State is not update without page refresh
* Homework is to figure out why

## Add people using form
* View route http://localhost:3001/api/persons to see JSON response

## Show Compass to add people

## Activity 3 - Notes
* Manually add some Notes to your database using Compass
* Begin in client > src > `App.js`
* Alter this component to retrieve and display all Notes from your database

## Resources
* [React state array add update remove](https://www.robinwieruch.de/react-state-array-add-update-remove)

