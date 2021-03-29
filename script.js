var startButton = document.getElementById("start");
var questionContainerElement = document.getElementById("question-container");
var questionsElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

let randomQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("test");
  //   change this to data-state "hidden"
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random(-0.5));
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
}

function setNextQuestion() {
  showQuestion(randomQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
}

function selectAnswer() {}

const questions = [
  {
    question: "What is this?",
    answers: [
      { text: "A1", correct: true },
      { text: "A2", correct: false },
    ],
  },
];
