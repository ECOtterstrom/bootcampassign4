// Pseudo code:
// Begin quiz screen
// Display quesiton & answers (create div add question to top of dive and answers under question)
// Increase score if answer is correct (score variable and score++ if answer is right)
// Set timer with each question for XX seconds (setInterval (function){build & answers if time runs out go to next question})
// In between display each answer for XX seconds
// If no more questions take score and get nane store into local storage

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
      question: "In JavaScript, what is a series of instructions, also known as statements, that a computer can follow one by one?",
      answers: {
        a: "A comment",
        b: "A method",
        c: "A script",
        d: "A function"
      },
      correctAnswer: "c"
    },
    {
      question: "In JavaScript, what do you write to explain what your code does?",
      answers: {
        a: "Objects",
        b: "Comments",
        c: "Loops",
        d: "Strings"
      },
      correctAnswer: "b"
    },
    {
      question: "In JavaScript, what temporarily stores bits of information the program needs to do its job?",
      answers: {
        a: "Variables",
        b: "Methods",
        c: "Scripts",
        d: "Expressions"
      },
      correctAnswer: "a"
    },
    {
      question: "In JavaScript, what special type of variable stores more than one piece of related information?",
      answers: {
        a: "A script",
        b: "A loop",
        c: "A function",
        d: "An array"
      },
      correctAnswer: "d"
    },
    {
      question: "In JavaScript, what lets you group a series of statements together to perform a specific task that can be repeated throughout the script?",
      answers: {
        a: "A comment",
        b: "A function",
        c: "A loop",
        d: "A variable"
      },
      correctAnswer: "b"
    }
  ];

function buildQuiz(){
  
    // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
};

function showResults(){};

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
