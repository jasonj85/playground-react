import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxillary';
import PropTypes from 'prop-types';

class Person extends Component {
    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
        return (
            <Aux>
                <div className={classes.Person}>
                    <p onClick={this.props.click}>
                        I'm {this.props.name} and I'm {this.props.age} years old</p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text"
                        ref={(inputEl) => {this.inputElement = inputEl}}
                        onChange={this.props.changed}
                        value={this.props.name} />
                </div>
            </Aux>
        )

    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default Person;