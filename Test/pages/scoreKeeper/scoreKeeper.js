//                  ORIGINAL CODE

// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const resetButton = document.querySelector('#resetButton');

// const p1ScoreDisplay = document.querySelector('#p1ScoreDisplay');
// const p2ScoreDisplay = document.querySelector('#p2ScoreDisplay');

// const winningScoreSelector = document.querySelector('#winningScoreSelector');


// let p1Score = 0 ;
// let p2Score = 0 ;
// let isGameOver = false ;
// let winningScore = 3

// p1Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p1Score += 1;
//         if (p1Score === winningScore) {          
//             isGameOver = true;     

//             p1ScoreDisplay.classList.add('winner');
//             p2ScoreDisplay.classList.add('loser');

//             p1Button.disabled = true ;
//             p2Button.disabled = true ;
//         }
//         p1ScoreDisplay.textContent = p1Score ;   

//     }
// });

// p2Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         p2Score += 1;
//         if (p2Score === winningScore) {          
//             isGameOver = true;  
            
//             p2ScoreDisplay.classList.add('winner');
//             p1ScoreDisplay.classList.add('loser');

//             p1Button.disabled = true ;
//             p2Button.disabled = true ;
//         }
//         p2ScoreDisplay.textContent = p2Score ;   

//     }
// });

// winningScoreSelector.addEventListener('change', function () {
//     if (this.value !== 'unlimited') {
//         winningScore = parseInt(this.value);
//     }else{
//         winningScore = 9999
//     }
//     reset();
// });

// resetButton.addEventListener('click', reset);

// function reset() {
//     isGameOver = false ;

//     p1Score = 0 ;
//     p1ScoreDisplay.textContent = p1Score ;   

//     p2Score = 0 ;
//     p2ScoreDisplay.textContent = p2Score ;  

//     p1ScoreDisplay.classList.remove('winner' , 'loser');
//     p2ScoreDisplay.classList.remove('winner' , 'loser');

//     p1Button.disabled = false ;
//     p2Button.disabled = false ;
// }


//                              REFACTORED CODE

const p1 = {
    score: 0 ,
    button:document.querySelector('#p1Button'),
    scoreDisplay:document.querySelector('#p1ScoreDisplay')
}

const p2 = {
    score: 0 ,
    button:document.querySelector('#p2Button'),
    scoreDisplay:document.querySelector('#p2ScoreDisplay')
}


const resetButton = document.querySelector('#resetButton');


const winningScoreSelector = document.querySelector('#winningScoreSelector');


let isGameOver = false ;
let winningScore = 3

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {          
            isGameOver = true;     

            player.scoreDisplay.classList.add('winner');
            opponent.scoreDisplay.classList.add('loser');

            player.button.disabled = true ;
            opponent.button.disabled = true ;
        }
        player.scoreDisplay.textContent = player.score ;   

    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1,p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2,p1);

});

winningScoreSelector.addEventListener('change', function () {
    if (this.value !== 'unlimited') {
        winningScore = parseInt(this.value);
    }else{
        winningScore = 9999
    }
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false ;

    for(let p of [p1,p2] ) {
        p.score = 0;
        p.scoreDisplay.textContent = 0;p.scoreDisplay.classList.remove('winner','loser');
        p.button.disabled = false;
    }
}
