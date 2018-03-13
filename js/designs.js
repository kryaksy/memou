/* Create a list that holds all of your cards */
var cards = document.getElementsByClassName('card');

/* Converting HTML Collection to an array*/
var cardsArray = Array.prototype.slice.call(cards);

/* TODO: Display the cards on the page   - shuffle the list of cards using the provided "shuffle" method below   - loop through each card and create its HTML   - add each card's HTML to the page */


// FUNCTIONS
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var i = array.length,
		temp,
		j;

	while (i !== 0) {
		j = Math.floor(Math.random() * i);
		i -= 1;
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

// Shuffle Test Starts
// var testArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// console.log(shuffle(testArray));
// Shuffle Test Ends

function displayCard() {
	// display the card's symbol
}

function addCard() {
	//add the card to a *list* of "open" cards
}

function checkCard() {
	if ( /*the list already has another card*/ ) {

		// check to see if the two cards match
		if ( /*match*/ ) {

			// function to lock the cards in the open position

		}

		if ( /*not match*/ ) {

			// function to remove the cards from the list and hide the card's symbol
			// function to increment the move counter and display it on the page

		}

		if ( /*all matched*/ ) {

			// function to display a message with the final score

		}
	}
}

// TODO: set up the event listener for a card.
cards.addEventListener('click', function() {

	displayCard(e.target); // display the card's symbol

	addCard(e.target) // - add the card to a *list* of "open" cards

	checkCard(e.target); // check and manipulate the v

});