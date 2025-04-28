const {endpoints, submit} = require("../../resources/config");
const axios = require("axios");
const express = require("express");

const router = express.Router();

router.use(express.json());

// track if the user has already posted a submission to avoid duplicates
let userPostedSubmission = false;

// post user choices to the google form
router.post(endpoints.submit, async (req, res) => {
	// check if the user has already submitted the form
	if (userPostedSubmission) {
		console.log("Already submitted the form. Ignoring this request.");
		return res.status(200).send('Form already submitted');
	}

	const search = req.query.search;
	const buy = req.query.buy;

	console.log(`got search=${search}&buy=${buy}`);

	// construct the form URL with the user choices
	const formUrl = "https://docs.google.com/forms/d/"
		+ `${submit.id}/formResponse?usp=pp_url&submit=Submit`
		+ `&entry.${submit.entries.search}=${encodeURIComponent(search)}`
		+ `&entry.${submit.entries.buy}=${encodeURIComponent(buy)}`;

	// console.log(formUrl);

	// send a GET request to the form URL to submit the data
	try {
		await axios.get(formUrl);
		res.send('Form submitted successfully');
		userPostedSubmission = true;
	} catch (error) {
		console.error('Error submitting form:', error.message);
		res.status(500).send('Error submitting form');
	}
});

module.exports = router;
