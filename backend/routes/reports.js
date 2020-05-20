const router = require('express').Router();
let Report = require('../models/report.model');

router.get('/', (req, res) => {
	Report.find()
		.then((reports) => res.json(reports))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.post('/add', (req, res) => {
	const username = req.body.username;
	const content = req.body.content;
	const date = req.body.date;

	const newReport = new Report({
		username,
		date,
		content,
	});

	newReport
		.save()
		.then(() => res.json('Report added!'))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.get('/:id', (req, res) => {
	Report.findById(req.params.id)
		.then((report) => res.json(report))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.delete('/:id', (req, res) => {
	Report.findByIdAndDelete(req.params.id)
		.then(() => res.json('Report Deleted!'))
		.catch((err) => res.status(404).json('Error: ' + err));
});

router.post('/update/:id', (req, res) => {
	Report.findById(req.params.id)
		.then((report) => {
			report.content = req.body.content;

			report
				.save()
				.then(() => res.json('Report Updated!'))
				.catch((err) => res.status(404).json('Error: ' + err));
		})
		.catch((err) => res.status(404).json('Error: ' + err));
});

module.exports = router;
