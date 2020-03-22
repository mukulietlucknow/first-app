import React , {Compenent}  from 'react';
import classes from "./Person.module.css";
import styled from 'styled-components';



const Person = (props) => {
return (
    
    <div className={classes.Person}>
        <p onClick={props.click}>my name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed}/> 
    </div>

)
}

export default Person;