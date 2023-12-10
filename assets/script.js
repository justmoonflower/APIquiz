var questions = [
// First question and answer set
  {
    question: "What allows us to write JavaScript inside the HTML, and add a source attribute to connect the external JavaScript.",
    answers: [
      { text: "Script tag", correct: true},
      { text: "Console.log", correct: false},
      { text: "Variables", correct: false},
    ]
  },
// Second question and answer set
  {
    question: "What is a value that is either true or false?",
    answers: [
      { text: "String", correct: false},
      {text: "Number", correct: false},
      {text: "Boolean", crrect: true},
    ],
      correct: 2
  },
  // Third question and answer set
  {
    question: "What are used to store groups in a single variable?",
    answers: [
      { text: "Arrays", correct: true},
      { text:"Conditions", correct: false},
      { text: "Methods", correct: false},
    
    ]
  }
];
// Create Variables for element ID's
var questionElement = getElementById("question");
var answerButton = getElementById("answers");
var nextButton = getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
}