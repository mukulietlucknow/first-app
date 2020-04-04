import React , {Compenent, Component}  from 'react';
import classes from "./Person.module.css";
import Aux from '../../../hoc/Auxilary'
import withClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types'
import authContext from '../../../context/auth-context';



class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
        
    }
    componentDidMount(){
        
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        
        return (              
                <Aux>
                    <authContext.Consumer>
                        {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please Log In</p>}
                    </authContext.Consumer>
                    {/* {this.props.isAuth ? <p>Authenticated</p> : <p>Please Log In</p> } */}
                    <p 
                        key= "i11" 
                        onClick={this.props.click}>my name is {this.props.name} and my age is {this.props.age}
                    </p>

                    <p key= "i12">
                        {this.props.children}
                    </p>

                    <input 
                        key= "i13" 
                        //ref={(inputEl) => {this.inputElement = inputEl}}
                        ref = {this.inputElementRef}
                        type="text" 
                        onChange={this.props.changed}
                    /> 
                </Aux>            
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person , classes.Person);