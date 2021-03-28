let grid = document.querySelector('.grid')
let squares = document.querySelectorAll('.square')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let points = 0
let timer

grid.addEventListener('click', checkHitMole)



function moveMole(){

    timer = setInterval( () => {

        squares.forEach( square => {
            square.classList.remove('mole')
        } )

        squares[Math.floor( Math.random() * 9 )].classList.add('mole')
        timeLeft.textContent -= 1
        
        score.textContent = points
        console.log(timeLeft.textContent)
        if( timeLeft.textContent === '0'  ){
            
            clearInterval(timer)
            alert('GAME OVER! ', points)
        }

    }, 1000)

}


moveMole()

function checkHitMole(event){

    if( event.target.getAttribute('class') === 'square mole' ){
        points += 1
    }   

}
