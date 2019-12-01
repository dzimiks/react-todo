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
			currentTodo: ''
		});
	};

	handleInputChange = (e) => {
		this.setState({
			currentTodo: e.target.value
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1>React Todos</h1>
				</header>
				<div className="Todo-App">
					<TodoForm handleInputChange={this.handleInputChange}
							  currentTodo={this.state.currentTodo}
							  handleSubmit={this.handleSubmit}/>
					<TodoList todos={this.state.todos}/>
				</div>
			</div>
		);
	}
}

export default App;
