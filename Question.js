let time = questions.length * 15;

var startbtn;

function startQuiz() {
  var startScreen = document.querySelector("start-screen");
  startScreen.setAttribute("class", "hide");
  questionsElement.removeAttribute("class");
}

function getCurrentQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
}

titleElement.textContent = currentQuestion.title;

startbtn.onclick = startQuiz();
