
//
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    /* 상수 userGuess 선언 텍스트 필드에 입력된 값을 저장한다. */ 
    const userGuess = Number(guessField.value);

    /* 조건 코드 블록 */
    /* 플레이어의 첫 턴 인지를 테스트 */
    if (guessCount === 1){
        guesses.textContent = "Previous guesses: ";
    }

    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber)  {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10)   {
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong";
        // lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber)   {
            lowOrHi.textContent = "Last guess was too low!";
            lastResult.style.backgroundColor ="blue";
        } else if (userGuess > randomNumber)    {
            lowOrHi.textContent = "Last guess was too high!";
            lastResult.style.backgroundColor ="red";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver()  {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame()    {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}