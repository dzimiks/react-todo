import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm} from './components/todo/TodoForm';

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
							  currentTodo={this.state.currentTodo}/>
					<div className="Todo-List">
						<ul>
							{this.state.todos.map(todo =>
								<li key={todo.id}>
									<input type="checkbox" defaultChecked={todo.isComplete}/> {todo.name}
								</li>)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
