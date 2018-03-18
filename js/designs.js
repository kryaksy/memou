/* Create a list that holds all of your cards */
var card = document.getElementsByClassName('card');
var cards = document.querySelector('.cards');

const startTime = performance.now();
var compareCards = [];
var moveCount = 0;
var matchedCards = 0;

let faItems = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];

startGame();

// FUNCTIONS
// deleteCards()
function deleteCards() {
	document.querySelector('.cards').innerHTML = '';
}

// Shuffle function
function shuffle(a) {
	var i = a.length,
		temp,
		j;

	while (i !== 0) {
		j = Math.floor(Math.random() * i);
		i -= 1;
		temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}

	return this;
}

// startGame() function
function startGame() {
	deleteCards();
	shuffle(faItems);

	for (var i = 0; i < faItems.length; i++) {
		var newCard = document.createElement('container');
		var back = document.createElement('div');
		newCard.classList.add('card');
		back.classList.add('back', 'fa', faItems[i]);
		newCard.id = i + 1;
		newCard.append(back);
		document.querySelector('.cards').append(newCard);
	}

}

//LISTENERS
document.querySelector('.cards').addEventListener('click', function(e) {

	if (e.target !== document.querySelector('.cards') &&
		!(e.target.classList.contains('match')) &&
		!(e.target.classList.contains('open'))) {

		e.target.classList.add('open');
		compareCards.push(e.target.id);

		if (compareCards.length == 2) {

			let firstCard = document.getElementById(compareCards[0]);
			let secondCard = document.getElementById(compareCards[1]);
			if (firstCard.querySelector('.back').classList[2] == secondCard.querySelector('.back').classList[2]) {
				setTimeout(function() {
					firstCard.classList.add('match');
					secondCard.classList.add('match');
					firstCard.classList.remove('open');
					secondCard.classList.remove('open');
				}, 500)
				matchedCards++;
				if (matchedCards === 8) {
					const endTime = performance.now();
					alert('You win!\n' + Math.floor(1000000 / ((endTime - startTime) * moveCount / 1000)) + ' puan');
				}
			} else {
				moveCount++;
				const firstCardToClose = document.getElementById(compareCards[0]);
				const secondCardToClose = document.getElementById(compareCards[1]);
				setTimeout(function() {
					firstCardToClose.classList.remove('open');
					secondCardToClose.classList.remove('open');
				}, 500)
			}
			compareCards = [];
		}
	}

});

document.querySelector('.restart').addEventListener('click', function() {
	startGame();
});