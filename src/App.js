import React, { Component } from 'react';
import InputTodo  from './components/InputTodo';
import ListTodo  from './components/ListTodo';
import './App.css';


const initialState = {
	route: '/',
	todo: {
    todo_id: '',
    description: ''
  }
  }

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }



render(){
	return(
		<div className="App">
			<InputTodo />
			<ListTodo 
			todo_id={this.state.todo.todo_id}
			description={this.state.todo.description}
			/>
		</div>
		);
}

}

/*
function App() {
  return <Fragment></Fragment>;
}
*/
export default App;
