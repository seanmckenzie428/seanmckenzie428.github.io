const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPositions = []
let currentTime = 10
let timerId = null
const moleCount = 2;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquares = [];
  for (let i = 0; i < moleCount; i++) {
    randomSquares[i] = squares[Math.floor(Math.random() * 9)]
    randomSquares[i].classList.add('mole')
    hitPositions[i] = randomSquares[i].id
  }

}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    let hitIndex = hitPositions.indexOf(square.id)
    if (hitIndex !== -1) {
      result++
      score.textContent = result.toString();
      hitPositions[hitIndex] = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

