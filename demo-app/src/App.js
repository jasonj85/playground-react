import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'JJ', age: 23, hobbies: 'Guitar' },
      { name: 'Tom', age: 48, hobbies: 'Football, PS4' },
    ],
    test: 'test',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23, hobbies: 'Guitar' },
        { name: 'Thomas', age: 48, hobbies: 'Football, PS4' },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 23, hobbies: 'Guitar' },
        { name: 'Thomas', age: 48, hobbies: 'Football, PS4' },
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <button
          onClick={this.togglePersonHandler}
          className="button"
          style={style}
        >{this.state.showPersons ? 'Hide names' : 'Show names'} 
        </button>

        {
        this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Jason!')}
              changed={this.nameChangedHandler}
            >
              My hobbies: {this.state.persons[0].hobbies}
            </Person>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            >
              My hobbies: {this.state.persons[1].hobbies}
            </Person>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
