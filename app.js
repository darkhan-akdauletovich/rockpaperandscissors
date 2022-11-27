const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })
        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                
                

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoise);
                    //Update images
                    playerHand.src = `assets/${this.textContent}.png`;
                    computerHand.src = `assets/${computerChoise}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoise, computerChoise) => {
        //Update text
        const winner = document.querySelector('.winner');
        //checking for a tie
        if(playerChoise === computerChoise){
            winner.textContent = 'it is a tie';
            return;
        }
        //checking for a rock
        if(playerChoise === 'rock'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Player Wins';
                updateScore();
                pScore++;
                return;
            }else{
                winner.textContent = 'Computer Wins';
                updateScore();
                cScore++;
                return;
            }
        }
        //checking for A PAPER
        if(playerChoise === 'paper'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Computer Wins';
                updateScore();
                cScore++;
                return;
            }else{
                winner.textContent = 'Player Wins';
                updateScore();
                pScore++;
                return;
            }
        }
        //Checking for a scissors
        if(playerChoise === 'scissors'){
            if(computerChoise === 'paper'){
                winner.textContent = 'Player Wins';
                updateScore();
                pScore++;
                return;
            }else{
                winner.textContent = 'Computer Wins';
                updateScore();
                cScore++;
                return;
            }
        }
    }

    //Is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();