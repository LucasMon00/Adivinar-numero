let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const attemptCounter = document.querySelector('.attemptCounter');

let guessCount = 1;
let resetButton;

function checkGuess() 
{
    const userGuess = Number(guessField.value);

    if (guessCount === 1) 
    {
        guesses.textContent = 'Intentos previos: ';
    }

    guesses.textContent += ` ${userGuess}`;
    attemptCounter.textContent = `Intento: ${guessCount} de 10`;

    if (userGuess === randomNumber) 
    {
        lastResult.textContent = '¡Enhorabuena, lo adivinaste!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        stopGame();
    } 

    else if (guessCount === 10) 
    {
        lastResult.textContent = '¡Fin del juego!';
        lowOrHi.textContent = '';
        stopGame();
    } 

    else 
    {
        lastResult.textContent = '¡Incorrecto!';
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = userGuess < randomNumber ? 'El número es muy pequeño' : 'El número es muy grande';
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function stopGame() 
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Empieza un juego nuevo';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() 
{
    guessCount = 1;
    guesses.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    attemptCounter.textContent = 'Intento: 1 de 10';
    lastResult.style.backgroundColor = 'white';

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    resetButton.remove();
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

guessSubmit.addEventListener('click', checkGuess);
