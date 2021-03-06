const header = document.querySelector('header');
const title = document.querySelector('h1');
const restart = document.querySelector('.restart');
const button = document.querySelector('button');
const point = document.querySelector('#point');
const notification = document.querySelector('.notification')
const cards = document.querySelector('.cards');

const startTime = performance.now();

var compareCards = [];
var moveCount = 0;
var matchedCards = 0;
var pressEnter = 1;

let faItems = ['fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-diamond', 'fa-paper-plane-o', 'fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb'];

startGame();

// FUNCTIONS
function deleteCards() {
	cards.innerHTML = '';
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

	return this;
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
		cards.append(newCard);
	}
}

function isEven(n) {
	n = Number(n);
	return n === 0 || !!(n && !(n % 2));
}

//LISTENERS
cards.addEventListener('click', function(e) {

	if (e.target !== cards &&
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
					pressEnter = 1;
					const endTime = performance.now();
					point.innerHTML = Math.floor(1000000 / ((endTime - startTime) * moveCount / 1000));
					setTimeout(function() {
						header.style.color = 'white';
						header.style.height = '50vh';
						title.style.lineHeight = '5em';
						title.style.fontSize = '4em';
						button.style.marginTop = '80px';
					}, 100)
					setTimeout(function() {
						restart.style.top = '0px';
						restart.style.opacity = '100';
					}, 200)
					matchedCards = 0;
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
	var key = e.which || e.keyCode;
	if (key !== 13) { // 13 is enter
		compareCards = [];
		moveCount = 0;
		matchedCards = 0;
		startGame();
		document.querySelector('.container').style.display = 'flex';
		header.style.height = '0vh';
		header.style.color = 'black';
		title.style.fontSize = '4em';
		title.style.lineHeight = '0em';
		restart.style.top = '-300px';
		pressEnter = 2;
	}
});

window.addEventListener('keypress', function(e) {
	var key = e.which || e.keyCode;
	if (key === 13) { // 13 is enter

		if (isEven(pressEnter)) {
			setTimeout(function() {
				header.style.color = '#aaa';
				header.style.height = '45vh';
				title.style.lineHeight = '5em';
				title.style.fontSize = '4em';
				button.style.marginTop = '80px';
				notification.style.color = '#ccc'
			}, 100)
			setTimeout(function() {
				restart.style.top = '0px';
				restart.style.opacity = '100';
			}, 200)
		} else {
			if (pressEnter === 1) {
				startGame();
				document.querySelector('.container').style.display = 'flex';
			}
			setTimeout(function() {
				header.style.height = '0vh';
				header.style.color = 'black';
				title.style.fontSize = '4em';
				title.style.lineHeight = '0em';
			}, 200)
			setTimeout(function() {
				restart.style.top = '-300px';
			}, 100)
			setTimeout(function() {
				notification.style.color = 'green'
			}, 300)
		}
		pressEnter++;
	}
});