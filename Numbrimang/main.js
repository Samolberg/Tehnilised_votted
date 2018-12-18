const guessField =
      document.querySelector('.guessField');
const guessSubmit =
      document.querySelector('.guessSubmit');

const guesses =
      document.querySelector('.guesses');
const lastResult =
      document.querySelector('.lastResult');      
const lowOrHigh =
      document.querySelector('.lowOrHigh');

let guessCount = 1;
let randomNumber = Math.floor(Math.random()*100) + 1;

const checkGuess = () => {
    let userGuess = Number(guessField.value);
    console.log('Vajutasid nuppu');
    if (guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: ';
    }

    guesses.textContent += ` ${userGuess}`;

    //kui kaustaja pakub õigesti
    if (userGuess === randomNumber){
        lastResult.textContent = 'Viimane pakkumine oli õige vastus';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = ' ';
        document.getElementById("button").disabled = true;
        document.getElementById("guessField").disabled = true;
        
        //kui kasutajal saavad pakkumised otsa    
    } else if (guessCount === 10) {
        lastResult.textContent = 'Kaotasid';
        lowOrHigh.textContent = ' ';
        document.getElementById("button").disabled = true;
        document.getElementById("guessField").disabled = true;
        lastResult.style.backgroundColor = 'red';
        document.getElementById('refresh').style.visibility = "visible";
    }else {
        lastResult.textContent = 'Viimane pakkumine oli vale vastus';
        
        //kui number liiga madal
        
        const lowOrHighText = 'Viimane pakkumine oli liiga ';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'madal';
            //kui number on liiga kõrge
        } else if (userGuess > randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'kõrge';
        };

    };

    guessCount++;
    guessField.value ='';
    guessField.focus();
};

guessSubmit.addEventListener('click',checkGuess);