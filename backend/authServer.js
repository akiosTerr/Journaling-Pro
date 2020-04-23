const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
let User = require('./models/user.model');

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

const app = express();
app.use(express.json());
const port = process.env.AUTH_PORT || 4000;

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

app.post('/login', async (req, res) => {
	console.log('hello?');

	User.findOne({ username: req.body.username }, (err, userInfo) => {
		console.log('hello again?');

		if (err) {
			console.log('and again?');
			res.sendStatus(403);
			return;
		}
		if (userInfo == null) {
			console.log('User not found');
			res.status(404).send('User Not Found');
			return;
		}

		bcrypt.compare(req.body.password, userInfo.password, (err, result) => {
			if (err) {
				console.log(err);
				res.status(403).send(err);
				return;
			}
			if (result) {
				console.log('Access Granted');
				const username = req.body.username;
				const user = { name: username };

				const accessToken = generateAccessToken(user);
				const refreshToken = jwt.sign(
					user,
					process.env.REACT_APP_REFRESH_SECRET
				);
				// store refresh token in DB, see references
				res.json({ accessToken: accessToken, refreshToken: refreshToken });
			} else {
				console.log('wrong pass');
				res.status(403).send('Access Denied');
			}
		});
	});
});

function generateAccessToken(user) {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2m' });
}

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
