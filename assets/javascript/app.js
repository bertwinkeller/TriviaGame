// Global Variables
let timeCounter = 30;
let answerCorrect = 0;
let currentQuestionIndex = 0;
let timerSlot = document.getElementById('timerSlot');
let questionSlot = document.getElementById('questionSlot');
let answerSlot = document.getElementById('answerSlot');

// Array of trivia questions
const triviaArray = [
    {
        question: 'Which of the following inventions was the first to be patented?',
        answers: ['chewing gum', 'rubber band', 'dishwasher', 'bicycle'],
        correctAnswer: 'rubber band',
        gif: './assets/images/rubberband.gif'
    },
    {
        question: 'Which of the following empires had no written language?',
        answers: ['roman empire', 'incan empire', 'aztec empire', 'tang dynasty'],
        correctAnswer: 'incan empire',
        gif: './assets/images/incan.gif'

    },
    {
        question: 'Which American general famously promised "I shall return"',
        answers: ['george washington', 'geroge patton', 'douglas macarthur', 'john pershing'],
        correctAnswer: 'douglas macarthur',
        gif: './assets/images/macarthur.gif'

    },
    {
        question: 'When the first Burger King Restaurant opened in 1954, how much did a hamburger cost',
        answers: ['37 cents', '18 cents', '1 dollar', '10 cents'],
        correctAnswer: '18 cents',
        gif: './assets/images/bk.gif'

    },
    {
        question: 'In what ocean was the Battle of Midway Fought?',
        answers: ['pacific ocean', 'atlantic ocean', 'indian ocean', 'southern ocean'],
        correctAnswer: 'pacific ocean',
        gif: './assets/images/pacific.gif'


    },
    {
        question: 'Who did Spartacus fight in the Third Servile War?',
        answers: ['romans', 'phoenicians', 'carthaginians', 'persians'],
        correctAnswer: 'romans',
        gif: './assets/images/romans.gif'


    },
    {
        question: 'Which Soviet satellite was the first to be launched into space in 1957?',
        answers: ['venera', 'sputnik', 'mir', 'vostok'],
        correctAnswer: 'sputnik',
        gif: './assets/images/satellite.gif'

    },
    {
        question: 'What was the name of the military nobility of medieval and early-modern Japan?',
        answers: ['kazoku', 'ninja', 'emperor', 'samurai'],
        correctAnswer: 'samurai',
        gif: './assets/images/samurai.gif'

    }
]

// function to load question
function loadQuestion() {
    
    // clears out previous comments
    questionSlot.innerHTML = '';
    questionSlot.innerHTML += triviaArray[currentQuestionIndex].question;
    // timerSlot.innerHTML += `Timer: ${timeCounter} seconds`;

    loadChoices();


};

// function to load answer choices
function loadChoices() {

    let choices = triviaArray[currentQuestionIndex].answers;

    // sets answers to empty string to clear previous
    answerSlot.innerHTML = '';
    for (i = 0; i < choices.length; i++) {
        answerSlot.innerHTML += "<br>";
        answerSlot.innerHTML += `<li class="domchoices" data-answer="${choices[i]}">${choices[i]}</li>`;
    }

};




// selects next question
function nextQuestion() {
    const checkMoreQuestions = (triviaArray.length) - 1 === currentQuestionIndex;
    if (checkMoreQuestions) {   
        questionSlot.innerHTML = '';
        answerSlot.innerHTML = '';
        questionSlot.innerHTML += 'GAME OVER';
        answerSlot.innerHTML += `Score: ${answerCorrect} out of 8 <br>`;
        answerSlot.innerHTML += '<button class="btn btn-secondary btn-lg" id="restartbutton" role="button">Restart Game?</button>'
        
       
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}
function gif() {
answerSlot.innerHTML += `<img id='gif' src='${triviaArray[currentQuestionIndex].gif}'>`
};


// function to show correct screen
function correctScreen() {

    questionSlot.innerHTML = '';
    answerSlot.innerHTML = '';

    questionSlot.innerHTML += 'Correct!';
    gif();
    answerPageTimeFunction();
}

// function displays incorrect screen
function incorrectScreen() {
    questionSlot.innerHTML = '';
    answerSlot.innerHTML = '';

    questionSlot.innerHTML += `Incorrect: the correct answer is, ${triviaArray[currentQuestionIndex].correctAnswer}`;
    gif();
    answerPageTimeFunction();
}
// timeout function called at the end of correct screen
function answerPageTimeFunction() {
    setTimeout(() => {

        nextQuestion();

    }, 3500);

}

// initializes firts game 
document.getElementById('startBtn').addEventListener("click", loadQuestion);


// code checks page clicks of answer slots
document.addEventListener('click', event => {
    if (event.target.className === 'domchoices') {
        if (event.target.dataset.answer === triviaArray[currentQuestionIndex].correctAnswer) {
            answerCorrect++;
            correctScreen();

        } else if (event.target.dataset.answer !== triviaArray[currentQuestionIndex].correctAnswer) {
            incorrectScreen();
        }
    } else {

    }
})
document.addEventListener('click', event => {
    if(event.target.id ==='restartbutton'){
        currentQuestionIndex = 0;
        answerCorrect = 0;
        loadQuestion();
 
    }
});