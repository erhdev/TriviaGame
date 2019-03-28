// I will need a bank of questions and a bank of potential answers 
// that are linked to the questions

// I will need a way of dynamically populating the response buttons with 
// the answers appropriate to the questions

// I will need a way of resetting the timer when the question is answered

// I could use an array of objects to set up the questions and answers
// theme: D&D trivia
var qArray = [
    qFireball = {
        question: "What is the most iconic third level spell in Dungeons and Dragons?",
        answers: ["Fireball", "Light", "Wish", "Polymorph"],
        rightAnswer: "Fireball",
    },
    qGoblins = {
        question: "What is the most common low level enemy?",
        answers: ["Dragons", "Orcs", "Goblins", "Other Party Members"],
        rightAnswer: "Goblins"
    }
];
var qsRight = 0;
var buttonArray = [
    $('#a1'), $('#a2'), $('#a3'), $('#a4')
];
function runGame() {
   
    qInPlay = qArray[Math.floor(Math.random() * qArray.length)];
    $('#question').text(qInPlay.question);

    // how do I make sure the same answers aren't used twice in the display?
    for (i = 0; i < buttonArray.length; i++) {
        var answerNumber = Math.floor(Math.random() * qInPlay.answers.length);
        var answerUsed = qInPlay.answers[answerNumber];
        buttonArray[i].text(answerUsed);
        qInPlay.answers.splice(answerNumber, 1);
    }
    
    //if the text of the clicked button equals the text of the rightAnswer property the user gets the question correct
    $('button').click( function () {
        if ($(event.target).text() === qInPlay.rightAnswer) {
           $('#success').fadeIn(700)
           .fadeOut(800);
           qsRight++;
           reset();
        } else {
            reset();
        }
    });
    setTimeout(function(){ 
        $('#slow')
        .fadeIn(500)
        .fadeOut(550);
        reset();
     }, 13000);
     function reset() {
        qArray.splice(qInPlay, 1);
        runGame();
    }4
}



$(document).ready(function () {
    runGame();
    
});

