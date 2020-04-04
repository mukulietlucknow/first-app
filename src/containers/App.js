import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.module.css';
import Persons  from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxilary';
import authContext from '../context/auth-context';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   console.log("app.js constructor");
    

  // }

  // static getDerivedStateFromProps(props , state){
  //   console.log("getDerivedStateFromProps");
  //   return state;
  // }

  state = {
    person: [
      {id : '1' , name : "mukul" , age : "1"},
      {id : '2' ,name : "mukul" , age : "2"},
      {id : '3' ,name : "mukul" , age : "3"}
    ],
    showPerson : false,
    authenticated : false
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

  loginHandler = () => {
    this.setState({authenticated : true});
  };

  render(){

    console.log("render function");

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
          isAuthenticated = {this.state.authenticated}
           />    
        </div> 
      )
    }
    return (
        <Aux classes={classes.App}>
          <authContext.Provider value={{
            authenticated: this.state.authenticated , 
            login: this.loginHandler}}>
          <Cockpit
          person={this.state.person}
          toggle = {this.toggleHandler}
          />
          
          {persons}
          </authContext.Provider>
        </Aux>
      //React.createElement('div' , {className: 'App'}, React.createElement('h1' , {className: 'App'} , "Hi my name is mukul")  )
    );
  }
  
}

export default withClass(App , classes.App );
