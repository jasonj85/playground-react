import React, { Component } from 'react';
import classes from './App.css';
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
    let persons = null;
    let btnClass = [classes.Button];
    
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

      btnClass.push(classes.Red);

     }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi</h1>
          <p className={assignedClasses.join(' ')}>This works mofo!</p>
          <button
            className={btnClass.join(' ')}
            alt={this.state.showPersons}
            onClick={this.togglePersonHandler}
          >{this.state.showPersons ? 'Hide names' : 'Show names'}
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
