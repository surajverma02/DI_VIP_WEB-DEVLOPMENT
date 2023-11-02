// Questions-Answers
const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Perth", correct: false},
        ]
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
            {text: "Mars", correct: false},
        ]
    },
    {
        question: "In which year did World War I begin?",
        answers: [
            {text: "1905", correct: false},
            {text: "1920", correct: false},
            {text: "1939", correct: false},
            {text: "1914", correct: true},
        ]
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        answers: [
            {text: "Japan", correct: true},
            {text: "Vietnam", correct: false},
            {text: "South Korea", correct: false},
            {text: "China", correct: false},
        ]
    },
    {
        question: "Which river is the longest in the world?",
        answers: [
            {text: "Mississippi-Missouri", correct: false},
            {text: "Amazon", correct: false},
            {text: "Nile", correct: true},
            {text: "Ganga", correct: false},
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            {text: "Pablo Picasso", correct: false},
            {text: "Vincent van Gogh", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Michelangelo", correct: false},
        ]
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        answers: [
            {text: "Hydrogen", correct: true},
            {text: "Nitrogen", correct: false},
            {text: "Carbon dioxide", correct: false},
            {text: "Oxygen", correct: false},
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {text: "Oxygen", correct: true},
            {text: "Gold", correct: false},
            {text: "Silver", correct: false},
            {text: "Osmium", correct: false},
        ]
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star' due to its visibility from Earth?",
        answers: [
            {text: "Mercury", correct: false},
            {text: "Venus", correct: true},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: false},
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Venus", correct: false},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Southern Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
        ]
    },
    {
        question: " In which year did the Titanic sink?",
        answers: [
            {text: "1905", correct: false},
            {text: "1920", correct: false},
            {text: "1912", correct: true},
            {text: "1914", correct: false},
        ]
    },
    {
        question: "Which continent is the driest and the hottest on Earth?",
        answers: [
            {text: "Africa", correct: false},
            {text: "Australia", correct: true},
            {text: "Asia", correct: false},
            {text: "Antarctica", correct: false},
        ]
    },
    {
        question: " Who is known as the 'Father of Computer Science'?",
        answers: [
            {text: "Bill Gates", correct: false},
            {text: "Charles Babbage", correct: false},
            {text: "Steve Jobs", correct: false},
            {text: "Alan Turing", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();