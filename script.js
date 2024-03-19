function saveTheWord() {
    let word = document.getElementById("hangmanWord").value
    let wordLength = word.length
    let newText = "_"
    for (let i = 1; i < wordLength; ++i) {
        newText += " _"
    };
    document.getElementById("textZone").innerHTML = newText;
}