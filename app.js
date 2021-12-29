const playerOne = {
    score: 0,
    display: document.querySelector('#p1Score'),
    button: document.querySelector('#p1Add')
};
const playerTwo = {
    score: 0,
    display: document.querySelector('#p2Score'),
    button : document.querySelector('#p2Add')
};

 const winningScore = document.querySelector('#scoreNum');
 let playerOnePoints = 0; 
 let playerTwoPoints = 0; 
 let winningPoints = 5;
 console.log(`${scoreNum}`);

playerOne.button.addEventListener('click', ()=>{
    playerOne.score++;
    playerOne.display.innerText = playerOne.score;
})

playerTwo.button.addEventListener('click', ()=>{
    playerTwo.score++;
    playerTwo.display.innerText = playerTwo.score;
} )

winningScore.addEventListener('change', ()=>{
    winningPoints = (winningScore.value);
    console.log(winningPoints);
})