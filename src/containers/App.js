import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.module.css';
import Persons  from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  state = {
    person: [
      {id : '1' , name : "mukul" , age : "1"},
      {id : '2' ,name : "mukul" , age : "2"},
      {id : '3' ,name : "mukul" , age : "3"}
    ],
    showPerson : false
  }

  nameChangedHandler = (event , id) => {
    const personIndex = this.state.person.findIndex( p => {
      return p.id === id;
    });

    const person = { 
      ...this.state.person[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person: persons})
  }

  changeHandler = (e) => {
    console.log(e.target.value);
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    //console.log("clicked")
    const people = [...this.state.person];
    //console.log(people);
    //console.log(this.state.person)
    people.splice(personIndex , 1);
    this.setState({person : people});
  }

  render(){

    let style = {
      backgroundColor : 'green',
      color : 'white',
      borderRadius : '5px',
      padding : '10px',
      border : '1px solid grey',

      ':hover' : {
        backgroundColor : 'red',
        color : 'white',
        padding : '12px',
      }
    };

    let persons = null;    

    if(this.state.showPerson){
      style = {
        backgroundColor : 'red',
        color : 'white',
        borderRadius : '5px',
        padding : '10px',
        border : '1px solid grey'
      }
      persons = (
        <div>
          <Persons
          person={this.state.person}
          changed = {this.nameChangedHandler}
          clicked = {this.deletePersonHandler}
           />    
        </div> 
      )
    }
    return (
        <div className={classes.App}>
          <Cockpit
          person={this.state.person}
          toggle = {this.toggleHandler}
          />
          {persons}
        </div>
      //React.createElement('div' , {className: 'App'}, React.createElement('h1' , {className: 'App'} , "Hi my name is mukul")  )
    );
  }
  
}

export default App;
