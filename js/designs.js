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
function deleteCards() {
	document.querySelector('.cards').innerHTML = '';
}

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

	return a;
}

function startGame() {
	deleteCards();
	shuffle(faItems);

	for (var i = 0; i < faItems.length; i++) {
		var newCard = document.createElement('div');
		var back = document.createElement('div');
		newCard.classList.add('card');
		back.classList.add('back', 'fa', faItems[i]);
		newCard.id = i + 1;
		newCard.append(back);
		document.querySelector('.cards').append(newCard);
	}
}

function isEven(n) {
	n = Number(n);
	return n === 0 || !!(n && !(n % 2));
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
					document.querySelector('#point').innerHTML = Math.floor(1000000 / ((endTime - startTime) * moveCount / 1000));
					setTimeout(function() {
						document.querySelector('header').style.color = '#aaa';
						document.querySelector('header').style.height = '50vh';
						document.querySelector('h1').style.lineHeight = '5em';
						document.querySelector('h1').style.fontSize = '4em';
						document.querySelector('button').style.marginTop = '120px';
					}, 100)
					setTimeout(function() {
						document.querySelector('.restart').style.top = '0px';
						document.querySelector('.restart').style.opacity = '100';
					}, 200)
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

document.querySelector('#startButton').addEventListener('click', function(e) {

	let pressEnter = 1;
	compareCards = [];
	moveCount = 0;
	matchedCards = 0;
	startGame();
	document.querySelector('.container').style.display = 'flex';
	document.querySelector('header').style.height = '0vh';
	document.querySelector('header').style.color = '#aaa';
	document.querySelector('h1').style.fontSize = '8em';
	document.querySelector('h1').style.lineHeight = '0em';
	document.querySelector('.restart').style.top = '-200px';
	window.addEventListener('keypress', function(e) {
		pressEnter++;
		var key = e.which || e.keyCode;
		if (key === 13) { // 13 is enter

			if (isEven(pressEnter)) {
				setTimeout(function() {
					document.querySelector('header').style.color = '#aaa';
					document.querySelector('header').style.height = '50vh';
					document.querySelector('h1').style.lineHeight = '5em';
					document.querySelector('h1').style.fontSize = '4em';
					document.querySelector('button').style.marginTop = '120px';
				}, 100)
				setTimeout(function() {
					document.querySelector('.restart').style.top = '0px';
					document.querySelector('.restart').style.opacity = '100';
				}, 200)
			} else {
				setTimeout(function() {
					document.querySelector('header').style.color = '#aaa';
					document.querySelector('header').style.height = '0vh';
					document.querySelector('h1').style.lineHeight = '0em';
					document.querySelector('h1').style.fontSize = '8em';
					document.querySelector('button').style.marginTop = '0px';
				}, 200)
				setTimeout(function() {
					document.querySelector('.restart').style.top = '-200px';
				}, 100)
			}

		}
	});
});