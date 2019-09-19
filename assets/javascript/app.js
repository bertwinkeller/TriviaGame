// Global Variables
let timeCounter = 30;
let answerCorrect = 0;
let answerWrong = 0;
let currentQuestionIndex = 0;

// Array of trivia questions
const triviaArray = [
    {
        question: 'Which of the following inventions was the first to be patented?',
        answers: ['chewing gum', 'rubber band', 'dishwasher', 'bicycle'],
        correctAnswer: 'rubber band'
    },
    {
        question: 'Which of the following empires had no written language?',
        answers: ['roman empire', 'incan empire', 'aztec empire', 'tang dynasty'],
        correctAnswer: 'incan empire'

    },
    {
        question: 'Which American general famously promised "I shall return"',
        answers: ['george washington', 'geroge patton', 'douglas macarthur', 'john pershing'],
        correctAnswer: 'douglas macarthur'

    },
    {
        question: 'When the first Burger King Restaurant opened in 1954, how much did a hamburger cost',
        answers: ['37 cents', '18 cents', '1 dollar', '10 cents'],
        correctAnswer: '18 cents'

    },
    {
        question: 'In what ocean was the Battle of Midway Fought?',
        answers: ['pacific ocean', 'atlantic ocean', 'indian ocean', 'southern ocean'],
        correctAnswer: 'pacific ocean'


    },
    {
        question: 'Who did Spartacus fight in the Third Servile War?',
        answers: ['romans', 'phoenicians', 'carthaginians', 'persians'],
        correctAnswer: 'romans'


    },
    {
        question: 'Which Soviet satellite was the first to be launched into space in 1957?',
        answers: ['venera', 'sputnik', 'mir', 'vostok'],
        correctAnswer: 'sputnik'

    },
    {
        question: 'What was the name of the military nobility of medieval and early-modern Japan?',
        answers: ['kazoku', 'ninja', 'emperor', 'samurai'],
        correctAnswer: 'samurai'

    }
]

// function to load question
function loadQuestion() {
    timeCounter = 30;

    let timerSlot = document.getElementById('timerSlot');
    let questionSlot = document.getElementById('questionSlot');
    // clears out previous comments
    questionSlot.innerHTML = '';
    questionSlot.innerHTML += triviaArray[currentQuestionIndex].question;
    timerSlot.innerHTML += `Timer: ${timeCounter} seconds`;

    loadChoices();
    checkGuess();

};

// function to load answer choices
function loadChoices() {
    let answerSlot = document.getElementById('answerSlot');
    let choices = triviaArray[currentQuestionIndex].answers;

    // sets answers to empty string to clear previous
    answerSlot.innerHTML = '';
    for (i = 0; i < choices.length; i++) {
        answerSlot.innerHTML += "<br>";
        answerSlot.innerHTML += `<li class="domchoices" data-answer="${choices[i]}">${choices[i]}</li>`;
    }

};

// timer function
function timerCountdown(){
  
    timeCounter--;
    
    timerSlot.innerHTML += `Timer: ${timeCounter} seconds`;
}

// function to load timer
function loadTimer() {
    let timerSlot = document.getElementById('timerSlot');
}


// function check answer
function checkGuess() {

    document.addEventListener('click', event => {
        if(document.body.querySelector('.domchoices[data-answer="bicycle"]')){
            console.log('hi');
        }
        
    })
}
document.getElementById('startBtn').addEventListener("click", loadQuestion);



