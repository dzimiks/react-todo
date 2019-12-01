import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {addTodo, generateId} from './lib/todoHelpers';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{id: 1, name: 'Learn JSX', isComplete: true},
				{id: 2, name: 'Build an Awesome App', isComplete: false},
				{id: 3, name: 'Ship It!', isComplete: false}
			],
			currentTodo: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newId = generateId();
		const newTodo = {id: newId, name: this.state.currentTodo, isComplete: false};
		const updatedTodos = addTodo(this.state.todos, newTodo);
		this.setState({
			todos: updatedTodos,
			currentTodo: '',
			errorMessage: ''
		});
	};

	handleEmptySubmit = (e) => {
		e.preventDefault();
		this.setState({
			errorMessage: 'Please supply a todo name'
		});
	};

	handleInputChange = (e) => {
		this.setState({
			currentTodo: e.target.value
		});
	};

	render() {
		const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1>React Todos</h1>
				</header>
				<div className="Todo-App">
					{this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
					<TodoForm handleInputChange={this.handleInputChange}
							  currentTodo={this.state.currentTodo}
							  handleSubmit={submitHandler}/>
					<TodoList todos={this.state.todos}/>
				</div>
			</div>
		);
	}
}

export default App;
