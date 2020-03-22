const router = require('express').Router();
let Todo = require('../models/todo.model');

router.get('/', (req, res) => {
	Todo.find()
		.then(todos => res.json(todos))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
	const username = req.body.username;
	const content = req.body.content;

	const newTodo = new Todo({
		username,
		content
	});

	newTodo
		.save()
		.then(() => res.json('Todo added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
	Todo.findById(req.params.id)
		.then(todo => res.json(todo))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
	Todo.findByIdAndDelete(req.params.id)
		.then(() => res.json('Todo Deleted!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
	Todo.findById(req.params.id)
		.then(todo => {
			todo.username = req.body.username;
			todo.content = req.body.content;

			todo
				.save()
				.then(() => res.json('Todo Updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
