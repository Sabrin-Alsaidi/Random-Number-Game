let randomNumber= parseInt((Math.random()*100)+1);

const submit=document.querySelector('#sub');
const userInput=document.querySelector('#GuessField');
const guesselot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const startOver=document.querySelector('.resultPress');
const lowOrHi=document.querySelector('.lowOrHi');
const p = document.getElementsByTagName('p');

let previouseGuesses=[];
let numGuesses=1;
let playGame=true;

if(playGame){
    submit.addEventListener("click",function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }else if (guess<1){
        alert("Please enter a number greater than 1 !");

    }else if (guess>100){
        alert("Please enter a number less than 100 !");
    }else{
        previouseGuesses.push(guess);

        if(numGuesses === 10){
            displayGuesses(guess);
            displayMessage(`Game over ! The Number was ${randomNumber}`);
            endGame();
        }else{
            displayGuesses(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("Congratulations you guessed correctly !!");
        endGame();

    }else if(guess< randomNumber){
        displayMessage("Too low .. Try again !");

    }else if(guess > randomNumber){
        displayMessage("Too high .. Try again !");
    }
}
function displayGuesses(guess){
    userInput.value= " "
    guesselot.innerHTML += ` ${guess}`;
    numGuesses++;
    remaining.innerHTML=`${10-numGuesses}`;
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h1>${message}</h1>`;
}

function endGame(){
    userInput.value=" ";
    userInput.setAttribute('disabled','');
    const p =document.createElement('p');
    p.classList.add('button');
    p.innerHTML=`<h1 id="newGame"> Start New Game </h1>`;

    startOver.appendChild(p);
    playGame=false;
    newGame();

}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener("click",function(){
        randomNumber=parseInt((Math.random()*100)+1);
        previouseGuesses=[];
        numGuesses=1;
        guesselot.innerHTML='';
        lowOrHi.innerHTML='';
        remaining.innerHTML=`${10-numGuesses}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;

    });
}