const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			minlenght: 3,
			maxlength: 50,
		},
		email: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 999,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
