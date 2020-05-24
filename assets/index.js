// Pseudo code:
// Begin quiz screen
// Display quesiton & answers (create div add question to top of div and answers under question)
// Increase score if answer is correct (score variable and score++ if answer is right)
// Set timer with each question for XX seconds (setInterval (function){build & answers if time runs out go to next question})
// In between display each answer for XX seconds
// If no more questions take score and get nane store into local storage
// variables to keep track of quiz state
// list of all questions, choices, and answers
var myQuestions = [
  {
    title: "In JavaScript, what is a series of instructions, also known as statements, that a computer can follow one by one?",
    choices: ["A comment", "A method", "A script", "A function"],
    answer: "A script"
  },
  {
    title: "In JavaScript, what do you write to explain what your code does?",
    choices: ["Objects", "Comments", "Loops", "Strings"],
    answer: "Comments"
  },
  {
    title: "In JavaScript, what temporarily stores bits of information the program needs to do its job?",
    choices: ["Variables", "Methods", "Scripts", "Expressions"],
    answer: "Variables"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

var currentQuestionIndex = 0;
var time = myQuestions.length * 15;
var timerId;
var score = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");





function start() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(startTime, 1000);
  timerEl.textContent = time;
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = myQuestions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    // var questionNumber = i + 1;
    // choiceNode.textContent = questionNumber + ". " + choice
    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}


function questionClick(event) {
  // check if user guessed wrong
  var value = event.target.value
  console.log(value)
  if (value !== myQuestions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;

    // play "wrong" sound effect


    feedbackEl.textContent = "Wrong!";
  } else {
    // play "right" sound effect


    feedbackEl.textContent = "Correct!";

  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // move to next question
  currentQuestionIndex++;

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    end();
  } else {
    getQuestion();
  }
}

function startTime() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    end();
  }
}

function end() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = score;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

startBtn.onclick = start;