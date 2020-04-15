const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');

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

router.post('/login', async (req, res, next) => {
	User.findOne({ username: req.body.username }, (err, userInfo) => {
		if (err) {
			console.log(err);

			res.status(400).send(err);
		} else {
			if (userInfo == null) {
				console.log('User not found');
				res.status(404).send('User Not Found');
				return;
			}

			bcrypt.compare(req.body.password, userInfo.password, (err, result) => {
				if (err) {
					console.log(err);
					res.status(500).send(err);
					return;
				}
				if (result) {
					console.log('right pass');
					res.status(200).send('Access Granted');
				} else {
					console.log('wrong pass');
					res.status(500).send('Access Denied');
				}
			});
		}
	});
});

module.exports = router;
