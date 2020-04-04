import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import props from 'prop-types';
import App from './containers/App'

// class Person{
// 	name = "mukul"

// 	printMyName = () => {
// 		console.log(this.name);
// 	}
// }

// const person = new Person();
// person.printMyName();

// const numbers = [1,2,3,4]
// const new_numbers = [...numbers , 5]

// const title = React.createElement(
// 	'h1', 
// 	{id:"title" , className: "header"},
// 	new_numbers
// 	)


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
