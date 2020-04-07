const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}
//{ path: __dirname + '/.env' }

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(favicon('../build/favicon.ico'));
//app.use(express.static('E:\\WEBDEV\\APPS\\journal-app-react'));
app.use(express.static('../build'));
app.use(express.json());
app.get('/ping', (req, res) => {
	return res.send('pong');
});

let uri = process.env.MONGODB_URI;
mongoose.set('debug', true);

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

app.use('/users', require('./routes/users'));
app.use('/reports', require('./routes/reports'));
app.use('/todos', require('./routes/todos'));

app.get('/', (req, res) => {
	res.sendFile('build/index.html', {
		root: 'E:/WEBDEV/APPS/journal-app-react',
	});
});

app.use((req, res) => {
	res.status(404).send('Page not found');
});

app.listen(port, () => {
	console.log(`server is running on port: ${port}`);
});
