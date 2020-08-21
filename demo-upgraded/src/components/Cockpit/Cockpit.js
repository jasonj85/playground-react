import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {

    }, []);

    let assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <React.Fragment>
            <div className={classes.Cockpit}>
                <h1>{props.title}</h1>
                <p className={assignedClasses.join(' ')}>This works mofo!</p>
                <button
                    className={btnClass}
                    onClick={props.clicked}
                >{props.showPersons ? 'Hide names' : 'Show names'}
                </button>
            </div>
        </React.Fragment>
    );
}

export default React.memo(cockpit);






