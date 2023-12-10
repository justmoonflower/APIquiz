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
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answers");
var nextButton = document.getElementById("next-button");

//Displaying questions with question number after append
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
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  // Will retrive anwers from var questions, create buttons for them 
  currentQuestion.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("button");
    // Appending to HTML
    answerButtons.appendChild(button);

    if(answer.correct){
      button.datasetset.correct = answer.correct;
    }
    button.addEvenetListener("click", selectAnswer);
  });
}
function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answer.Buttons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  var selectedBtn = e.target;
  var isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
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




startQuiz();