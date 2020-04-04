import React , {useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    let assignedClasses = [];
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated)

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
            
            <button onClick = {authContext.login}>Login</button>}
                      
        </div>
        
    );
};

export default React.memo(Cockpit);