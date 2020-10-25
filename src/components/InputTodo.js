import React from 'react';

	class InputTodo extends React.Component {
	  constructor(props) {
	  super(props);
  	  this.state = { description: '' }
	  }
	  onDescriptionChange = (event) => {
		this.setState({description: event.target.value})
		}

	onCreateTodo = () => {
    fetch('https://guarded-earth-77991.herokuapp.com/createTodo', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        description: this.state.description
      })
    })
  }

		render(){
			return(
				<div>
				<h1 className="text-center mt-5">Pern Todo List</h1>
				<form className="d-flex mt-5 mx-5">
					<input type="text" className="form-control" name="description" id="description" onChange={this.onDescriptionChange} />
					<input className="btn btn-success" onClick={this.onCreateTodo} type="submit" value="Add" />
				</form>
				</div>
				)
		}		
	}

export default InputTodo;