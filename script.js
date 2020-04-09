var resetButton = document.querySelector('#reset');
var numInput = document.querySelector('input[type="number"]');
var darkButton = document.querySelector('#darkMode');
var allButtons = document.querySelectorAll('button');
var winningScoreDisplay = document.querySelector('p span');
var gameOver = false;
var winningScore = 5;
var darkMode = false;
var pButton = [document.querySelector('#p1'),document.querySelector('#p2')];
var pDisplay = [document.querySelector('#p1Display'),document.querySelector('#p2Display')];
var pScores = [0,0];

pButton[0].addEventListener('click', function(){
		addScore(0);
});

pButton[1].addEventListener('click', function(){
		addScore(1);
});


winningScoreDisplay.textContent = winningScore;
numInput.value = winningScore;

function addScore(playerNumber) {
	if (!gameOver) {
		pScores[playerNumber]++;
		pDisplay[playerNumber].textContent = pScores[playerNumber];

		if (pScores[playerNumber] === winningScore) {
			pDisplay[playerNumber].classList.add('winner');
			gameOver = true;
		}
	}
}

darkButton.addEventListener('click', function(){
	darkMode = !darkMode;
	document.querySelector('body').classList.toggle('darkModeClass');
	for (var i = 0; i<allButtons.length; i++) {
		allButtons[i].classList.toggle('buttonDark');
	}
	numInput.classList.toggle('buttonDark');
	if (darkMode) {
		document.querySelector('#spanDarkMode').textContent = 'Turn On Light Mode';
	} else {
		document.querySelector('#spanDarkMode').textContent = 'Turn On Dark Mode';
	}
});

resetButton.addEventListener('click',function(){
	resetGame();
});

function resetGame() {
	for (var i = 0; i < 2; i++) {
		pScores[i] = 0;
		pDisplay[i].textContent = pScores[i];
		pDisplay[i].classList.remove('winner');
	}
	gameOver = false;
}

numInput.addEventListener('change', function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	resetGame();
	if (numInput.value <= 0) {
		validation();
	}
});

function validation () {
	numInput.value = 1;
	winningScore = 1;
	winningScoreDisplay.textContent = numInput.value;
	alert('Winning Score should be greater than 0');
}