let word;
let lives = document.getElementById("livesLeft");
let livesLeft = 7;
let newText = "";
let result = document.getElementById("textResult");
function saveTheWord() {
    lives.innerHTML = livesLeft + "&#x2764;&#xfe0f;";
    let typedWord = document.getElementById("hangmanWord").value;
    word = typedWord;
    let wordLength = word.length;
    for (let i = 0; i < wordLength; ++i) {
        newText += " _"
    };
    document.getElementById("textZone").innerHTML = newText;
    const element = document.getElementById("startingElements");
    element.parentNode.removeChild(element);
    result.innerHTML = "Type a single letter above to begin";
}
let guessedLetters = 0;
function checkLetter() {
    let wordLength = word.length;
    let myLetter = document.getElementById("writeLetter").value;
    let indexOfLetter = word.indexOf(myLetter);
    if (indexOfLetter >= 0) {
        while (indexOfLetter >= 0) {
            if (guessedLetters < wordLength) {
                word = word.substring(0, indexOfLetter) + `.` + word.substring(indexOfLetter + 1);
                newText = newText.substring(0,indexOfLetter * 2 + 1) + `${myLetter}` + newText.substring(indexOfLetter * 2 + 2);
                document.getElementById("textZone").innerHTML = newText;
                console.log(indexOfLetter);
                guessedLetters += 1;
                console.log(guessedLetters);
                indexOfLetter = word.indexOf(myLetter);
            } if (word.length === guessedLetters) {
                const gameOver = document.getElementById("letterElements");
                gameOver.parentNode.removeChild(gameOver);
                result.innerHTML = "You won ! Press F5 to start again !";
            }
            document.getElementById("writeLetter").value = "";
        };
    } else {wrongLetter(myLetter)};
}
function wrongLetter(userLetter) {
    if (livesLeft > 1) {
        --livesLeft;
        lives.innerHTML = livesLeft + "&#x2764;&#xfe0f;";
        result.innerHTML = "The letter " + userLetter + " was not found";
    } else if (livesLeft === 1) {
        --livesLeft;
        lives.innerHTML = livesLeft + "&#x2764;&#xfe0f;";
        const gameOver = document.getElementById("letterElements");
        gameOver.parentNode.removeChild(gameOver);
        result.innerHTML = "You ran out of lives :c press F5 to try again!";
    }
}