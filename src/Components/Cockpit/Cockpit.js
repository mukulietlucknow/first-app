import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    let assignedClasses = [];

    if(props.person.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(props.person.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return(
        <div className={classes.Cockpit}>
            <h1>This is React</h1>
            <p className={assignedClasses.join(' ')}>this is really working</p>
            <button
            className = {classes.Button}
            onClick={props.toggle}>switch button</button>
        </div>
        
    );
};

export default cockpit;