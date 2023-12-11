var startButton = document.getElementById("start-button")
var nextButton = document.getElementById("next-button")
var questionContainerElement= document.getElementById ("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

var questions = [
  // First question and answer set
  {
    question: "What allows us to write JavaScript inside the HTML, and add a source attribute to connect the external JavaScript?",
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


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", nextQuestion)


function startGame() {
  startButton.classList.add("hide")
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}



function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
})
}


function setNextQuestion() {
  nextButton.classList.remove("hide")
  showQuestion()

}

function resetState() {
nextButton.classList.remove("hide")
while (answerButtonsElement.firstChild) {
  answerButtonsElement.removeChild
  (answerButtonsElement.firstChild)
}
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(currentQuestionIndex + 1)
    nextButton.classList.remove("hide")
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong") 
}


