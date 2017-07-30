const express = require("express");
const bodyParser = require("body-parser");
//var mongoose = require("mongoose");


const images = {
	{
		image: '/public/images/beer.jpg',
		emoji: '🍺'
	},
	{
		image: '/public/images/beer.jpg',
		emoji: '🍷'
	},
	{
		image: '/public/images/pizza.jpg',
		emoji: '🍕'
	},
	{
		image: '/public/images/burger.jpg',
		emoji: '🍔'
	},
	{
		image: '/public/images/umbrella.jpg',
		emoji: '🌂'
	},
	{
		image: '/public/images/sunnies.jpg',
		emoji: '🕶'
	},
	{
		image: '/public/images/fried-egg.jpg',
		emoji: '🍳'
		message: 'Sunny side up!'
	},
	{
		image: '/public/images/balloons.jpg',
		emoji: '🎈'
		message: 'Fly my little bird!'
	},
	{
		image: '/public/images/banana.jpg',
		emoji: '🍌'
		message: 'Eat this!'
	},
	{
		image: '/public/images/ketcher.jpg',
		emoji: '🎾'
		message: 'This is a harder one.'
	},
}

🍷🍕🍔🌂

// Start our express app
const app = express();

// A middleware to parse incoming request bodies.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Listen to the port
app.listen((process.env.PORT || 5000));

// Server index page
app.get("/", function (req, res) {
  res.send("We're up and running! Yay! :D ");
});


/**
 * Facebook Webhook varification
 */
// app.get("/webhook", function (req, res) { 

// });


/**
 * All callbacks from messenger will be posted here
 */
// app.post("/webhook", function (req, res) { 
	// Figure out what to do depending on the request (postback / message)
// });


/**
 * Process postbacks
 * This is when the user clicks a button. Either the "Get started" button, or buttons that we set up via messages.
 * 
 */
function processPostback(event) {

}

/**
 * Process messages
 * This is when the user writes something to us. 
 * This function needs to know image we're currently waiting for a match to. And weather or not we started the game.
 */
function processMessage(event) {
	
}


/**
 * Check if emoji matches image
 */
function emojiMatchesDrawing(emoji, drawingId) {
	return true;
}





