const baseUrl = 'http://localhost:7777/todos';

export const loadTodos = () => {
	return fetch(baseUrl)
		.then(res => res.json());
};
