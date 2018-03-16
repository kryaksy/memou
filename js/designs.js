/* Create a list that holds all of your cards */
var card = document.getElementsByClassName('card');
var cards = document.querySelector('.cards');

/* Converting HTML Collection to an array*/
var cardsArray = Array.prototype.slice.call(card);

/* Font Awesome LISTENERS*/
var faItems = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];

/* TODO: Display the cards on the page
- shuffle the list of cards
- loop through each card and create its HTML
- add each card's HTML to the page */


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

function showCard(a) {
	// display the card's symbol
	a.classList.add('open');
}

function addCard() {
	//add the card to a *list* of "open" cards
	console.log('addCard');
	if (true /*list has two card*/ ) {
		checkCards();
	}

}

function lockCards() {
	// function to lock the cards in the open position
	console.log('lockCards');
}

function hideCards() {
	// function to remove the cards from the list and hide the card's symbol
	console.log('hideCards');
}

function incrementMoveCount() {
	// function to increment the move counter and display it on the page
	console.log('incrementMoveCount');
}

function endGame() {
	// function to display a message with the final score
	console.log('endGame');
}

function checkCards(A, B) {
	// check to see if the two cards match
	if (A === B) {

		lockCards();

	} else {

		hideCards();
		incrementMoveCount();

	}

}

function checkIfEnd() {
	if (false /*all open*/ ) {

		endGame();

	}
}


//LISTENERS
// TODO: set up the event listener for a card.
document.querySelector('.cards').addEventListener('click', function(e) {

	showCard(e.target);

	addCard();

	checkIfEnd();

});


//TESTS
// Shuffle Test Starts
// var testArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// console.log(shuffle(testArray));
// Shuffle Test Ends