const router = require('express').Router();
const authToken = require('./auth');
let Todo = require('../models/todo.model');

router.get('/', authToken, (req, res) => {
	const username = req.user.username;
	console.log('username:<% ' + username);

	Todo.find()
		.then((todos) => res.json(todos))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.post('/add', authToken, (req, res) => {
	const username = req.user.username;
	const content = req.body.content;

	const newTodo = new Todo({
		username,
		content,
	});

	newTodo
		.save()
		.then(() => res.json('Todo added!'))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
	Todo.findById(req.params.id)
		.then((todo) => res.json(todo))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
	Todo.findByIdAndDelete(req.params.id)
		.then(() => res.json('Todo Deleted!'))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
	Todo.findById(req.params.id)
		.then((todo) => {
			todo.username = req.body.username;
			todo.content = req.body.content;

			todo
				.save()
				.then(() => res.json('Todo Updated!'))
				.catch((err) => res.status(404).json('Error: ' + err));
		})
		.catch((err) => res.status(404).json('Error: ' + err));
});

module.exports = router;
