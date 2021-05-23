var startButton = document.getElementById("start");
var questionContainerEl = document.getElementById("question-container");
var questionsEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");
var timerEl = document.getElementById("timer");

var score = 0;

var randomQuestions = [];
// var currentQuestionIndex = [];
var jumbled = [];

var questions = [
  {
    q: "The Black Knight always wins!",

    answer1: "Your arms off!",
    answer2: "No it isn't.",
    answer3: "Alright, We'll call it a draw",
    answer4: "Never heard of him.",

    correct: "3",
  },
  {
    q: "What is the air speed of an unladen swallow?",

    answer1: "African or European",
    answer2: "I...I don't know that!",
    answer3: "blue! No wait!",
    answer4: "What are you talking about?",

    correct: "2",
  },
  {
    q: "Where does Sir Galahad believe the Holy Grail is located?",

    answer1: "Castle Anthrax",
    answer2: "Camelot",
    answer3: "Castle AAAAAAAAAUUUGGGGHHHHH",
    answer4: "I have no idea what you're talking about",

    correct: "1",
  },
  {
    q:
      "Where can the instructions for the Holy Hand-grenade of Anitoch be found?",

    answer1: "Attached to the pin",
    answer2: "You've watched this way too many times.",
    answer3: "Written on the husk used by the swallows to carry a coconut.",
    answer4: "In the Book of Armaments Chapter 2, verses 9-21.",

    correct: "4",
  },
  {
    q: "How do you know she is a witch?",

    answer1: "Well she turned me into a newt!",
    answer2: "Build a bridge out of her",
    answer3:
      "If she weighs the same as a duck then she is made out of wood and therefore, A WITCH!",
    answer4: "Burn her!!",

    correct: "3",
  },
  {
    q: "What do the Knights Who Say Ni require?",

    answer1: " A shrubbery",
    answer2: "A herring",
    answer3: "I feel happy!",
    answer4: "A coconut",

    correct: "1",
  },
];

startButton.addEventListener("click", start);

function start() {
  //   change this to data-state "hidden"
  startButton.classList.add("hide");

  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  timerEl.classList.remove("hide");

  countdown();
  nextQuestion();
}

var rand = Math.floor(Math.random() * questions.length);
var currentQuestionIndex = randomQuestions[rand];
randomQuestions.splice(rand, 1);

console.log(questions.length);

// jumbled.push(tempQuestions);
for (j = 0; j < questions.length; j++) {
  tempQuestions = JSON.stringify(questions[j]);
  randomParse = JSON.parse(tempQuestions);
  jumbled.push(randomParse);
}

console.log(jumbled.correct);
function selectAnswer() {
  document.getElementById("btn-1").addEventListener("click", function () {
    var userChoice = 1;
    if (userChoice != jumbled.correct) {
      timeLeft -= 10;
    } else {
      score = score + 10;
    }
    jumbled.shift();
    nextQuestion();
  });
  document.getElementById("btn-2").addEventListener("click", function () {
    var userChoice = 2;
    if (userChoice != jumbled.correct) {
      timeLeft -= 10;
    } else {
      score = score + 10;
    }
    jumbled.shift();
    nextQuestion();
  });
  document.getElementById("btn-3").addEventListener("click", function () {
    var userChoice = 3;
    if (userChoice != jumbled.correct) {
      timeLeft -= 10;
    } else {
      score = score + 10;
    }
    jumbled.shift();
    nextQuestion();
  });
  document.getElementById("btn-4").addEventListener("click", function () {
    var userChoice = 4;
    if (userChoice != jumbled.correct) {
      timeLeft -= 10;
    } else {
      score = score + 10;
    }
  });
}
jumbled.shift();
nextQuestion();

function nextQuestion() {
  questionsEl.innerHTML = jumbled[0].q;

  document.getElementById("btn-1").innerHTML = jumbled[0].answer1;

  document.getElementById("btn-2").innerHTML = jumbled[0].answer2;

  document.getElementById("btn-3").innerHTML = jumbled[0].answer3;

  document.getElementById("btn-4").innerHTML = jumbled[0].answer4;
}
// Timer function
var timeLeft = questions.length * 10;
function countdown() {
  // create countdown in 1 second intervals
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds remaining.";

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

// ends the game
function gameOver() {
  timerEl.classList.add("hide");
  var endGame = questionContainerEl.classList.add("hide");
  var userInput = prompt("Game Over! Please enter initials in the box below");
  localStorage.setItem("initials", userInput);
  localStorage.setItem("score", score);

  var audio = document.getElementById("lose");
  audio.play();
}

selectAnswer();

console.log(randomParse.correct);
