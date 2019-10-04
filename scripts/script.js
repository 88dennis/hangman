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
    console.log(revealedLetters, "blank Array")
    maxStrike = word.length * 2;
    strikeLetters = new Array()
    console.log("strike letters", strikeLetters)
    strike = 0;

    console.log(maxStrike, "this is the maximum allowed strike")
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
                console.log(strikeLetters)
                let num = strikeLetters.length;
                console.log(num, "++++++++++++++++++++++++++++")
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
                    console.log(word[i], "CORRECT LETTER")
                    revealedLetters[i] = guessedLetter;

                    console.log(revealedLetters, "CORRECT SO FAR")
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
            console.log("PANALO")
            youWin.style.display = "block"
            strike = 0;
            maxStrike = 0;
            guessWrapper.style.display ="none"
            imgElem.src = imgSrc7;

        }
    }
    guessInput.value = ""
}


function drawHangMan(nums) {
    if (nums === 1 && nums <= maxStrike * .2) {
        console.log("hellos")
        imgElem.src = imgSrc1;
    }
    if (nums > maxStrike * .2 && nums <= maxStrike * .4) {
        console.log("gasgaf")
        imgElem.src = imgSrc2;
    }
    if (nums > maxStrike * .4 && nums <= maxStrike * .5) {
        console.log("asdasl")
        imgElem.src = imgSrc3;
    }
    if (nums > maxStrike * .5 && nums <= maxStrike * .6) {
        console.log("asdasdasasdadsa");
        imgElem.src = imgSrc4;
    }
    if (nums > maxStrike * .6 && nums <= maxStrike * .8) {
        console.log("FFFFFFFFFFF")
        imgElem.src = imgSrc5;
    }
    if (nums === maxStrike) {
        console.log("SA WAKAS")
        imgElem.src = imgSrc6;
        guessWrapper.style.display ="none"
        youLoose.style.display = "block"
        
    }
}






// 
// let wordArr = new Array(word.length);
// let wordArrLetter =""

// let guessedArr = []



// let totalHits = 0;
// let correctGuess = 0;
// let wrongGuess = 0;
// let totalCorrect = 0;


// function getWord(event) {


//         console.log(word);
//         console.log(wordArr)
//         wordArrLetter = wordArr.fill("--")
//         // wordArrNew = wordArr[0]
//         console.log(wordArr)

//     }

// }


//     if (wordArrNew) {

//         strike = strike + 1;
//         console.log("STRIKE No " + strike)
//         for (let i = 0; i < wordArrNew.length; i++) {
//             if (guessedLetter === wordArrNew[i] ) {

//                 if (guessedArr[i] !==wordArrNew[i] && !guessedArr.includes(guessedLetter) ){
//                     guessedArr.splice(wordArr.indexOf(wordArrNew[i]), 0, wordArrNew[i])
//                     console.log(wordArrNew)
//                     console.log(guessedArr, "GUESSED ARRAY")
//                 }
//             }

//             // {
//             //     
//             //     
//             //     console.log(guessedLetter, "guessed letter")
//             //     // if(guessedArr[i] !==wordArrNew[i]){
//             //     //     correctGuess = correctGuess + 1;
//             //     //     console.log(correctGuess, "CORRECT GUESS")
//             //     // }
//             // }
//         }

//     }

//     // for (let j = 0; j < spans.length; j++) {
//     //     let letter = (spans[j].textContent)
//     //     boxArr.push(letter)
//     //     console.log(letter)
//     //     console.log(boxArr)
//     //     // .join("").push(letter)
//     // }
// }
// // console.log(totalStrike)
// // console.log(strike)

// // function addStrikes(hit, correct) {
// // totalHits = totalHits + hit;
// // // totalCorrect = totalCorrect + correct
// // // wrongGuess = totalHits - correctGuess
// // console.log(totalHits, "STRIKETOTAL")
// // // console.log(totalCorrect, "totalCorrect")
// // }





// // for (let i = 0; i < word.length; i++) {

// //     console.log(word.lenght, 'length')
// //                 if (wordArr[0].length === guessedArr.length && word[i] === guessedArr[i]) {
// //                     console.log("you win")
// //                     wordArr = [];
// //                     guessedArr = [];
// //                     // console.log(wordArr)
// //                     // console.log(guessedArr)
// //                 }


// // if(guessedLetter) {
// //     addStrikes(strike, correctGuess)
// //     // console.log(strike)
// //    '
// // }

// // }



//             //      if (word[i] !== guessedArr[i]){
//             //                 guessedArr.push(guessedLetter)

//             //                 spans[i].textContent = word[i]
//             //                     correctGuess = 1;
//             //                     console.log("=========================")
//             //                     console.log(correctGuess, "CORRECT GUESS")
//             //         console.log(guessedArr)
//             //     // }
//             // } else if(word[i] !== guessedLetter){
//             //     // console.log(word[i])
//             //     console.log(guessedLetter)
//             //     strike = 1;
//             // }
//             // if (spans.textContent === wordArr[0].join("")) {
//             //     console.log("you win")
//             // }
//             // console.log(wordArr[0].length)
//             // console.log(guessedArr.length)


