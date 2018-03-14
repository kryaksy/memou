/* Create a list that holds all of your cards */
var cards = document.getElementsByClassName('card');

/* Converting HTML Collection to an array*/
var cardsArray = Array.prototype.slice.call(cards);

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

function displayCard() {
  // display the card's symbol
}

function addCard() {
  //add the card to a *list* of "open" cards
}

function lockCards() {
  // function to lock the cards in the open position
}

function hideCards() {
  // function to remove the cards from the list and hide the card's symbol
}

function incrementMoveCount() {
  // function to increment the move counter and display it on the page
}

function endGame() {
  // function to display a message with the final score
}

function checkCard() {
  if ( /*the list already has another card*/ ) {

    // check to see if the two cards match
    if ( /*match*/ ) {

      lockCards();

    }

    if ( /*not match*/ ) {

      hideCards();
      incrementMoveCount();

    }

    if ( /*all matched*/ ) {

      endGame();

    }
  }
}


//LISTENERS
// TODO: set up the event listener for a card.
cards.addEventListener('click', function() {

  displayCard(e.target);

  addCard(e.target)

  checkCard(e.target);

});


//TESTS
// Shuffle Test Starts
// var testArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
// console.log(shuffle(testArray));
// Shuffle Test Ends