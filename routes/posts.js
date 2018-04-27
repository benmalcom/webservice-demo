const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
	axios.get(url)
		.then(function (response) {
			return res.render('posts', { title: 'Posts', posts: response.data });
		})
		.catch(function (error) {
			return next(error.data);
		});
});

module.exports = router;
