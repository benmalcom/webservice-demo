const express = require('express');
const router = express.Router();
const questions = require('../data/json/questions');
const answers = require('../data/json/answers');

/* GET home page. */
router.get('/aboutme', function (req, res, next) {
	const q = req.query.q;
	if (q && questions[q] && answers[q]) {
		return res.json({
			question: questions[q],
			answer: answers[q]
		});
	}
	else {
		return res.json({
			questions, answers
		});
	}
});

module.exports = router;
