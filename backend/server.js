const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const result = dotenv.config({ path: __dirname + '/.env' });

if (result.error) {
	throw result.error;
}

console.log(result.parsed);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('../'));
app.use(express.static(path.join(__dirname, '../', 'build')));
app.use(express.json());
app.get('/ping', function(req, res) {
	return res.send('pong');
});

const usersRouter = require('./routes/users');
let uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true
});
const connection = mongoose.connection;
connection
	.once('open', () => {
		console.log('mongoDB database connection established');
	})
	.on('error', err => {
		console.log('Error: ', err);
	});

app.use('/users', require('./routes/users'));
app.use('/reports', require('./routes/reports'));
app.use('/todos', require('./routes/todos'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

app.use((req, res) => {
	res.status(404).send('Page not found');
});

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
