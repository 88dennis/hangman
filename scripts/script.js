let wordInput = document.getElementById("wordInputId")
let guessInput = document.getElementById("guessInputId")
let boxWrapper = document.getElementById("boxWrapper")
let spans = document.getElementsByClassName("letterSpan")
let guessWrapper = document.querySelector(".guessWrapper")
let wrongCont = document.querySelector(".wrongCont")
let wrongWrap = document.querySelector("wrongWrap")
let imgElem = document.getElementById("imgId")
let youWin = document.querySelector(".youWin")
let youLoose = document.querySelector(".youLoose")
let wrongText;
let text;
let word = ""
let revealedLetters;
let guessedLetter = ""
let wordArrNew = [];
let strike = 0;
let maxStrike = 0;
let imgSrc0 = "images/strike-0.png";
let imgSrc1 = "images/strike-1.png";
let imgSrc2 = "images/strike-2.png";
let imgSrc3 = "images/strike-3.png";
let imgSrc4 = "images/strike-4.png";
let imgSrc5 = "images/strike-5.png";
let imgSrc6 = "images/strike-6.png";
let imgSrc7 = "images/rope.png";
let strikeLetters;

document.getElementById("formForWord").addEventListener("submit", getWord);
document.getElementById("formForGuess").addEventListener("submit", getGuess);

function getWord(event) {
    event.preventDefault();
    word = wordInput.value.toUpperCase();
    guessWrapper.style.display ="block"
    guessInput.focus()
    youWin.style.display = "none"
    youLoose.style.display = "none"
    wrongText = ''
    wrongCont.innerHTML = wrongText;
    revealedLetters = new Array(word.length);
    revealedLetters.fill('');
    maxStrike = word.length * 2;
    strikeLetters = new Array()
    strike = 0;

    text = "<div class = 'spanContainer'>";
    for (let i = 0; i < revealedLetters.length; i++) {
        text += "<span class = 'letterSpan'>" + revealedLetters[i] + "</span>";
    }
    text += "</div>";
    boxWrapper.innerHTML = text;
    imgElem.src = imgSrc0;
    wordInput.value = ""
}

function getGuess(event) {
    event.preventDefault();
    if (word) {
        guessedLetter = guessInput.value.toUpperCase();
        if (strike <= maxStrike) {
        if (!word.includes(guessedLetter)) {
            strike++
                strikeLetters.push(guessedLetter)
                let num = strikeLetters.length;

                drawHangMan(num)

                wrongText = "<div class = 'wrongWrap'><span>Guesses: </span>";
                for (let i = 0; i < strikeLetters.length; i++) {
                    wrongText += "<span class = 'wrongSpan'>" + strikeLetters[i] +" "+ "</span>";
                }
                wrongText += "</div>";
                wrongCont.innerHTML = wrongText;
            }
            for (let i = 0; i < revealedLetters.length; i++) {
                if (guessedLetter === word[i]) {
                    revealedLetters[i] = guessedLetter;
                    spans[i].textContent = guessedLetter
                    spans[i].style.background ="none"
                    spans[i].style.borderStyle ="solid"
                    spans[i].style.borderColor ="black"
                    spans[i].style.borderWidth ="2px"
                    spans[i].style.borderRadius ="15px"
                }
            }

        }

        if (!revealedLetters.includes("")) {
            youWin.style.display = "block"
            strike = 0;
            maxStrike = 0;
            guessWrapper.style.display ="none"
            imgElem.src = imgSrc7;
            wordInput.focus()
        }
    }
    guessInput.value = ""
}

function drawHangMan(nums) {
    if (nums === 1 && nums <= maxStrike * .2) {
        imgElem.src = imgSrc1;
    }
    if (nums > maxStrike * .2 && nums <= maxStrike * .4) {
        imgElem.src = imgSrc2;
    }
    if (nums > maxStrike * .4 && nums <= maxStrike * .5) {
        imgElem.src = imgSrc3;
    }
    if (nums > maxStrike * .5 && nums <= maxStrike * .6) {
        imgElem.src = imgSrc4;
    }
    if (nums > maxStrike * .6 && nums <= maxStrike * .8) {
        imgElem.src = imgSrc5;
    }
    if (nums === maxStrike) {
        imgElem.src = imgSrc6;
        guessWrapper.style.display ="none"
        youLoose.style.display = "block"
        youLoose.style.color = "red"
        wordInput.focus()  
        
    }
}