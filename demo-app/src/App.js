import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: 'JJ', age: 23, hobbies: 'Guitar' },
      { id: '002', name: 'Tom', age: 48, hobbies: 'Football, PS4' },
    ],
    test: 'test',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(i)}
              >
                My hobbies: {person.hobbies}
              </Person>
            )
          })}
        </div>

      );
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
        {persons}
      </div>
    );
  }
}

export default App;
