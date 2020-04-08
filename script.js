var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var resetButton = document.querySelector('#reset');
var numInput = document.querySelector('input[type="number"]');
var darkButton = document.querySelector('#darkMode');
var allButtons = document.querySelectorAll('button');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var darkMode = false;

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

var winningScoreDisplay = document.querySelector('p span');
winningScoreDisplay.textContent = winningScore;
numInput.value = winningScore;

p1Button.addEventListener('click', function(){
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			p1Display.classList.add('winner');
			gameOver = true;
		}
		console.log(p1Score);
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function(){
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.add('winner');
			gameOver = true;
		}
		console.log(p2Score);
		p2Display.textContent = p2Score;
	}
});

reset.addEventListener('click',function(){
	resetGame();
});

function resetGame() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
}

numInput.addEventListener('change', function(){
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	resetGame();
});