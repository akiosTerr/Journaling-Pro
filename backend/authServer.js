const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.AUTH_PORT || 4000;
let uri = process.env.REACT_APP_MONGODB_URI;

mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});
const connection = mongoose.connection;

connection
	.once('open', () => {
		console.log('mongoDB database connection established');
	})
	.on('error', (err) => {
		console.log('Error: ', err);
	});

app.post('/login', async (req, res) => {
	//console.log(req);
	User.findOne({ username: req.body.username })
		.then((user) => {
			if (!user) {
				const err = 'User not found';
				res.status(404).send(err);
				throw err;
			} else {
				return user;
			}
		})
		.then(async (user) => {
			let userPassword = user.password;
			let userName = user.username;
			let result = null;
			try {
				result = await bcrypt.compare(req.body.password, userPassword);
			} catch (e) {
				throw new Error(e);
			}
			if (result == null) {
				res.status(503);
				throw 'Could not validate password';
			}
			if (result == false) {
				const err = 'Wrong Password';
				res.status(401).send(err);
				throw err;
			} else {
				const user = { username: userName };
				const accessToken = generateAccessToken(user);
				const refreshToken = jwt.sign(
					user,
					process.env.REACT_APP_REFRESH_SECRET
				);
				//res.json({ accessToken: accessToken, refreshToken: refreshToken });
				res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
				res.append('set-cookie', `accessToken=${accessToken}`);
				res.send(`Welcome ${user.username}`);
			}
		})
		.catch((err) => {
			console.log(err);
		});
});

app.post('/token', (req, res) => {
	const refreshToken = req.body.token;
	if (refreshToken == null) return res.sendStatus(401);
	if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
		if (err) return res.sendStatus(403);
		const accessToken = generateAccessToken({ name: user.name });
		res.json({ accessToken: accessToken });
	});
});

app.delete('/logout', (req, res) => {
	refreshTokens = refreshTokens.filter((token) => token !== req.body.token); //query refresh token in DB
	res.sendStatus(204);
});

function generateAccessToken(user) {
	return jwt.sign(user, process.env.REACT_APP_ACCESS_SECRET, {
		expiresIn: '2m',
	});
}

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
