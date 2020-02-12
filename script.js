let url = 'https://opentdb.com/api.php?amount=30&category=9&difficulty=medium&type=multiple'
let startButton = document.getElementById('start-btn')
let questionContainer = document.getElementById("question-container")
let question = document.getElementById('question')


startButton.addEventListener('click', startGame)
let score=0

fetch(url)
.then(res => res.json())
.then(res => console.log("success!", res))
.catch(err => console.log("something went wrong", err));



function startGame() {
    console.log('game started!')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {}

function checkAnswer() {}



//round()
//populate the question to the question div
//randomly populate answers to the answers divs...correct answer cannot be in the same div each time
///compare answer provided to the correct answer
//if correct give player 50 points and display the next button
//if not correct 


function getGameInfo() {
//     //fetch game data
    return fetch(url)
//     //convert data to JSON
      .then(res => res.json())
//     //push data to function populateData
     .then(data => populateQuestion(data))
//      .then(console.log(res.json()))
}


function populateQuestion(data){
    //once data is pulled from the API, put data in correct divs
    question.innerHTML = data[0].question;
}





//sample question:
let questions = [
    {question: "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?",
    answers: [
        {text:"Richard Branson", correct:true},
        {text:"Alan Sugar", correct:false},
        {text:'Donald Trump', coorect: false},
        {text:'Bill Gates', coorect: false}
    ]
}
]