function generateCircles() {
  const circleArea = document.querySelector('.guess');
  for (let index = 0; index < 6; index += 1) {
    const newCircle = document.createElement('div');
    newCircle.className = 'ball';
    circleArea.appendChild(newCircle);
  }
}

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function fillCircleColor() {
  const allCircles = document.querySelectorAll('.ball');
  const correctAnswerText = document.querySelector('#rgb-color');
  const correctAnswer = (Math.floor(Math.random() * 5.9));

  for (let index = 0; index < allCircles.length; index += 1) {
    allCircles[index].style.background = generateColor();
    if (index === correctAnswer) {
      correctAnswerText.innerText = allCircles[index].style.background;
    }
  }
}

function answer(self) {
  const score = document.querySelector('#score');
  const correctColor = document.querySelector('#rgb-color').innerText;
  const clickedColor = self.target.style.background;
  const answerText = document.querySelector('#answer');
  const answerImg1 = document.querySelector('.answer-type1');
  const answerImg2 = document.querySelector('.answer-type2');

  if (correctColor === clickedColor) {
    answerText.innerText = 'Acertou!';
    score.innerText = parseInt(score.innerText, 0) + 3;
    answerImg1.src = './img/correct.png'
    answerImg2.src = './img/correct.png'
  } else {
    answerText.innerText = 'Errou! Tente novamente';
    answerImg1.src = './img/wrong.png'
    answerImg2.src = './img/wrong.png'
  }
  fillCircleColor();
}

function addColorButtonFunction() {
  const circleArea = document.querySelectorAll('.ball');
  for (let index = 0; index < 6; index += 1) {
    circleArea[index].addEventListener('click', answer);
  }
}

function resetGame() {
  const answerText = document.querySelector('#answer');
  answerText.innerText = 'Escolha uma cor';
  fillCircleColor();
}

window.onload = () => {
  const resetButton = document.querySelector('#reset-game');
  resetButton.addEventListener('click', resetGame);
  generateCircles();
  fillCircleColor();
  addColorButtonFunction();
};
