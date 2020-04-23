const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

router.get('/', (req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.post('/add', async (req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const password = await bcrypt.hash(req.body.password, 10);

	const newUser = new User({ username, email, password });

	console.log(newUser);

	newUser
		.save()
		.then(() => res.json('User added!'))
		.catch((err) => res.status(404).json('Error: ' + err));
});

module.exports = router;
