/**
 * <p>
 *  Question represents the trivia questions disaplayed to the user/player
 * </p>
 */
class Question {
    constructor(question, answers) {
        this.question = question
        this.answers = answers
    }

    getAnswer(index) {
        return this.answers[index].correct;
    }

    getAnswers() {
        return this.answers;
    }

    getQuestion() {
        return this.question;
    }
}

/**
 * Represents the trivia game
 */
class Trivia {
    constructor() {
        this.startButton = document.getElementById('start-btn')
        this.questionContainer = document.getElementById("question-container")
        this.question = document.getElementById('question')
        this.answerDiv = document.getElementById('answer-buttons')
        this.answerButtons = document.querySelectorAll('.answer-btn')
        this.nextButton = document.getElementById('next-btn')
        this.welcome = document.getElementById('welcome')
        this.answer1 = document.getElementById('0')
        this.answer2 = document.getElementById('1')
        this.answer3 = document.getElementById('2')
        this.answer4 = document.getElementById('3')
        this.scoreContainer = document.getElementById('score');
        this.correctAnswer = document.getElementById("correct-answer");
        this.questions = this.generateQuestions();
        this.questionIndex = 0;
        this.score = 0;
        this.init();
    }

    generateQuestions() {
        return this.questions;
    }

    startGame = () => {
        this.scoreContainer.innerText = `Score: ${this.score}`;
        //hide start button
        this.startButton.classList.add('hide')
        this.welcome.classList.add('hide')
        //show question 
        this.questionContainer.classList.remove('hide')
        this.nextQuestion()
    }

    init() {
        this.startButton.addEventListener('click', this.startGame)
        this.answer1.addEventListener('click', this.checkAnswer)
        this.answer2.addEventListener('click', this.checkAnswer)
        this.answer3.addEventListener('click', this.checkAnswer)
        this.answer4.addEventListener('click', this.checkAnswer)
        this.nextButton.addEventListener('click', this.nextQuestion)
    }

    checkAnswer = e => {
        let clickedItem = e.target.id;
        // take id of clicked item and check the correct key value (true or false) = 
        if (this.questions[this.questionIndex].getAnswer(clickedItem)) {
            e.target.style.backgroundColor = '#99ff99';
            this.score += 50;
            this.scoreContainer.innerText = `Score: ${this.score}`;
            //if clicked item is the wrong answer, turn background red
            this.correctAnswer.innerHTML = "Correct!"
        } else {
            console.log("sorry, that's incorrect")
            e.target.style.backgroundColor = '#FF9999';
            this.correctAnswer.innerHTML = "Sorry...wrong answer."
        }
        this.nextButton.classList.remove('hide');
        this.questionIndex += 1
    }

    reset() {
        for (let i = 0; i < this.answerButtons.length; i++) {
            this.answerButtons[i].style.backgroundColor = 'white';
            this.correctAnswer.innerHTML = ""
        }

    }

    showFinalMessage() {
        let finalMessage = document.getElementById('final-message');
        let correctAnswerCount = document.getElementById('final-message__correct-answer-count');
        let finalScore = document.getElementById('final-message__final-score');
        finalScore.innerText = `Your final score is: ${this.score}`;
        correctAnswerCount.innerText = `You correctly answered ${this.score / 50} questions out of ${this.questions.length}`;
        finalMessage.classList.toggle('hide');
    }

    nextQuestion = () => {
        if (this.questionIndex < this.questions.length) {
            //populate question from questions array
            this.question.innerText = this.questions[this.questionIndex].question;
            //answerButtons.forEach(element => element.innerText = sampleQuestion.answers[0])
            this.answer1.innerHTML = this.questions[this.questionIndex].getAnswers()[0].text;
            this.answer2.innerHTML = this.questions[this.questionIndex].getAnswers()[1].text;
            this.answer3.innerHTML = this.questions[this.questionIndex].getAnswers()[2].text;
            this.answer4.innerHTML = this.questions[this.questionIndex].getAnswers()[3].text;
            this.reset()
        } else {
            this.nextButton.classList.add('hide');
            this.questionContainer.classList.add('hide')
            this.showFinalMessage();
            let restart = document.getElementById("restart-btn");
            restart.classList.remove('hide');
        }

    }

    generateQuestions() {
        return [new Question("Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?", [
            { text: "Richard Branson", correct: true, value: 50 },
            { text: "Alan Sugar", correct: false, value: 0 },
            { text: 'Donald Trump', correct: false, value: 0 },
            { text: 'Bill Gates', correct: false, value: 0 }
        ]),
        new Question("Scotch whisky and Drambuie make up which cocktail?", [
            { text: "Screwdriver", correct: false, value: 0 },
            { text: "Manhattan", correct: false, value: 0 },
            { text: "Rusty Nail", correct: true, value: 50 },
            { text: "Sex on the Beach", correct: false, value: 0 }
        ]),
        new Question("Apple co-founder Steve Jobs died from complications of which form of cancer?", [
            { text: "Bone", correct: false, value: 0 },
            { text: "Liver", correct: false, value: 0 },
            { text: "Stomach", correct: false, value: 0 },
            { text: "Pancreatic", correct: true, value: 50 }
        ]),
        new Question("What was the original name of the search engine 'Google'?", [
            { text: "CatMassage", correct: false, value: 0 },
            { text: "BackRub", correct: true, value: 50 },
            { text: "SearchPro", correct: false, value: 0 },
            { text: "Netscape Navigator", correct: false, value: 0 }
        ]),
        new Question("What character was once considered to be the 27th letter of the alphabet?", [
            { text: "Interrobang", correct: false, value: 0 },
            { text: "Tilde", correct: false, value: 0 },
            { text: "Pilcrow", correct: false, value: 0 },
            { text: 'Ampersand', correct: true, value: 50 }
        ]),
        new Question("In what year was McDonald's founded?", [
            { text: "1955", correct: true, value: 50 },
            { text: "1964", correct: false, value: 0 },
            { text: "1951", correct: false, value: 0 },
            { text: "1947", correct: false, value: 0 }
        ]),
        new Question("What is the largest organ of the human body?", [
            { text: "Heart", correct: false, value: 0 },
            { text: "Skin", correct: true, value: 50 },
            { text: "Large Intestine", correct: false, value: 0 },
            { text: "Liver", correct: false, value: 0 }
        ]),
        new Question("What alcoholic drink is made from molasses?", [
            { text: "Gin", correct: false, value: 0 },
            { text: "Vodka", correct: false, value: 0 },
            { text: "Rum", correct: true, value: 50 },
            { text: "Whisky", correct: false, value: 0 }
        ]),
        new Question("How tall is the Burj Khalifa?", [
            { text: "2,722 ft", correct: true, value: 50 },
            { text: "2,717 ft", correct: false, value: 0 },
            { text: "2,546 ft", correct: false, value: 0 },
            { text: "3,024 ft", correct: false, value: 0 }
        ]),
        new Question("Which country, not including Japan, has the most people of japanese decent?", [
            { text: "China", correct: false, value: 0 },
            { text: "Brazil", correct: true, value: 50 },
            { text: "South Korea", correct: false, value: 0 },
            { text: "United States of America", correct: false, value: 0 }
        ])]
    }

}

const game = new Trivia();