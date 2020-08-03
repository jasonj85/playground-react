import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, i) => {
            return (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    changed={(event) => this.props.changed(event, person.id)}
                    click={() => this.props.clicked(i)}
                >
                    My hobbies: {person.hobbies}
                </Person>
            )
        });

    }
}

export default Persons;






