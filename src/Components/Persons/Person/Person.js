import React , {Compenent, Component}  from 'react';
import classes from "./Person.module.css";
import Aux from '../../../hoc/Auxilary'
import withClass from '../../../hoc/WithClass';



class Person extends Component{

    render(){
        
        return (    
          
                <Aux>
                <p key= "i11" onClick={this.props.click}>my name is {this.props.name} and my age is {this.props.age}</p>
                <p key= "i12">{this.props.children}</p>
                <input key= "i13" type="text" onChange={this.props.changed}/> 
                </Aux>
         
        
        );
    }
   

}

export default withClass(Person , classes.Person);