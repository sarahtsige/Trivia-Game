let url = 'https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple'

let score=0

fetch(url)
.then(res => {
    console.log("success!", res);
})
.catch(err => {
    console.log("something went wrong", err)
})


//round()
//populate the question to the question div
//randomly populate answers to the answers divs...correct answer cannot be in the same div each time
///compare answer provided to the correct answer
//if correct give player 50 points and display the next button
//if not correct 


// function getGameInfo() {
//     //fetch game data
//     return fetch(url)
//     //convert data to JSON
//       .then(res => res.json())
//     //push data to function populateData
//      // .then(data => populateData())
//      .then(console.log(res.json()))
// }


// function populateData(){
//     //once data is pulled from the API, put data in correct divs
// }

