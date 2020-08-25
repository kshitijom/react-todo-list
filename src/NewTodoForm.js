import React, { Component } from 'react';
import uuid from 'react-uuid';
import './NewTodoForm.css'

class NewTodoForm extends Component {
	constructor (props) {
		super(props);
		this.state={
			task: '', isDone: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange (evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit (evt) {
		evt.preventDefault();
		this.props.createTodo({...this.state, id: uuid(), completed: false});
		this.setState({
			task: '', isDone: false
		});
	}
	render () {
		return (
			<form className='NewTodoForm' onSubmit={this.handleSubmit}>
				<label htmlFor='task'>New Todo</label>
				<input 
					id='task'
					type='text'
					name='task'
					placeholder='New Todo'
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;