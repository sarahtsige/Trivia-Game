let url = 'https://opentdb.com/api.php?amount=30&category=9&difficulty=medium&type=multiple'
let startButton = document.getElementById('start-btn')
let questionContainer = document.getElementById("question-container")
let question = document.getElementById('question')
let answerDiv = document.getElementById('answer-buttons')
let answerButtons = document.querySelectorAll('.answer-btn')
let nextButton = document.getElementById('next-btn')
let answer1 = document.getElementById('0')
let answer2 = document.getElementById('1')
let answer3 = document.getElementById('2')
let answer4 = document.getElementById('3')
let scoreContainer = document.getElementById('score');

let score = 0
let questionIndex = 7



startButton.addEventListener('click', startGame)

answer1.addEventListener('click', checkAnswer)
answer2.addEventListener('click', checkAnswer)
answer3.addEventListener('click', checkAnswer)
answer4.addEventListener('click', checkAnswer)

nextButton.addEventListener('click', nextQuestion)


//round()
//populate the question to the question div
//randomly populate answers to the answers divs...correct answer cannot be in the same div each time
///compare answer provided to the correct answer
//if correct give player 50 points and display the next button
//if not correct 

function showQuestion(){
    //populate question from questions array
    question.innerText = questions[questionIndex].question;
    //answerButtons.forEach(element => element.innerText = sampleQuestion.answers[0])
    answer1.innerHTML =  questions[questionIndex].answers[0].text;
    answer2.innerHTML =  questions[questionIndex].answers[1].text;
    answer3.innerHTML =  questions[questionIndex].answers[2].text;
    answer4.innerHTML =  questions[questionIndex].answers[3].text;
}

function showFinalMessage() {
    let finalMessage = document.getElementById('final-message');
    let correctAnswerCount =  document.getElementById('final-message__correct-answer-count');
    let finalScore = document.getElementById('final-message__final-score');
    finalScore.innerText = `Your final score is: ${score}`;
    correctAnswerCount.innerText = `You correctly answered ${score/50} questions out of ${questions.length}`;
    finalMessage.classList.toggle('hide');
}

function nextQuestion() {
    console.log(questionIndex)
    questionIndex += 1
    if (questionIndex < questions.length) {
        showQuestion()
        reset()
    } else  {
        nextButton.classList.add('hide');
        showFinalMessage();
    }
}

function reset(){
    for (i=0; i < answerButtons.length; i++) {
        answerButtons[i].style.backgroundColor = 'white';
    }
}

function checkAnswer(e) {
    console.log('answer clicked!')
    let clickedItem = e.target.id;
     // take id of clicked item and check the correct key value (true or false) = 
     if (questions[questionIndex].answers[clickedItem].correct == true){
         console.log("That's Right");
         e.target.style.backgroundColor = '#99ff99';
        score += 50;
        scoreContainer.innerText = `Score: ${score}`;
        //if clicked item is the wrong answer, turn background red
     } else {
         console.log("sorry, that's incorrect")
         e.target.style.backgroundColor = '#FF9999';
     }
    nextButton.classList.remove('hide');
    //if clicked button 
}





function startGame() {
    scoreContainer.innerText = `Score: ${score}`;
    //hide start button
    startButton.classList.add('hide')
    //show question 
    questionContainer.classList.remove('hide')
    //shuffledQuestions = questions.sort(() => Math.random() - .5);
    showQuestion()
    //nextQuestion()
}




/**
 * <p>
 *  Question represents the trivia questions disaplayed to the user/player
 * </p>
 */
class Question {
    constructor() {
        this.question = "";
        this.answer = "";
    }
}


class Trivia {
    constructor() {
        this.questions = [];
    }

    /**
     * 
     * @param {int} x is the number of questions 
     */
    init(x) {
        
    }

    startGame () {

    }

    checkAnswer() {

    }

    reset() {

    }

    nextQuestion () {

    }

}










//Trivia question:
let questions = [
    {question: "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?",
    answers: [
        {text:"Richard Branson", correct:true, value:50},
        {text:"Alan Sugar", correct:false, value:0},
        {text:'Donald Trump', correct:false, value:0},
        {text:'Bill Gates', correct:false, value:0}
    ]},
    {question: "Scotch whisky and Drambuie make up which cocktail?",
    answers: [
        {text:"Screwdriver", correct:false, value:0},
        {text:"Manhattan", correct:false, value:0},
        {text:"Rusty Nail", correct:true, value:50},
        {text:"Sex on the Beach", correct:false, value:0}
    ]
    },
    {question: "Apple co-founder Steve Jobs died from complications of which form of cancer?",
    answers: [
        {text:"Bone", correct:false, value:0},
        {text:"Liver", correct:false, value:0},
        {text:"Stomach", correct:false, value:0},
        {text:"Pancreatic", correct:true, value:50}
    ]
    },
    {question: "What was the original name of the search engine 'Google'?",
    answers: [
        {text:"CatMassage", correct:false, value:0},
        {text:"BackRub", correct:true, value:50},
        {text:"SearchPro", correct:false, value:0},
        {text:"Netscape Navigator", correct:false, value:0}
    ]
    },
    {question: "What character was once considered to be the 27th letter of the alphabet?",
    answers: [
        {text:"Interrobang", correct:false, value:0},
        {text:"Tilde", correct:false, value:0},
        {text:"Pilcrow", correct:false, value:0},
        {text:'Ampersand', correct:true, value:50}
    ]
    },
    {question: "In what year was McDonald's founded?",
    answers: [
        {text:"1955", correct:true, value:50},
        {text:"1964", correct:false, value:0},
        {text:"1951", correct:false, value:0},
        {text:"1947", correct:false, value:0}
    ]
    },
    {question: "What is the largest organ of the human body?",
    answers: [
        {text:"Heart", correct:false, value:0},
        {text:"Skin", correct:true, value:50},
        {text:"Large Intestine", correct:false, value:0},
        {text:"Liver", correct:false, value:0}
    ]
    },
    {question: "What alcoholic drink is made from molasses?",
    answers: [
        {text:"Gin", correct:false, value:0},
        {text:"Vodka", correct:false, value:0},
        {text:"Rum", correct:true, value:50},
        {text:"Whisky", correct:false, value:0}
    ]
    },
    {question: "How tall is the Burj Khalifa?",
    answers: [
        {text:"2,722 ft", correct:true, value:50},
        {text: "2,717 ft", correct:false, value:0},
        {text:"2,546 ft", correct:false, value:0},
        {text:"3,024 ft", correct:false, value:0}
    ]
    },
    {question: "Which country, not including Japan, has the most people of japanese decent?",
    answers: [
        {text:"China", correct:false, value:0},
        {text:"Brazil", correct:true, value:50},
        {text:"South Korea", correct:false, value:0},
        {text:"United States of America", correct:false, value:0}
    ]
    }
]



