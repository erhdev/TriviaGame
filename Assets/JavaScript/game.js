// Sorry I didn't finish the assignment, I'm just exhausted today. Everything worked until I added in more questions, and for the life of me I cannot figure out what went wrong. 

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
    },
    qObjectAC = {
        question: "What stat is used to determine whether a player hits and breaks an object?",
        answers: ["HP", "Armor Class", "Hardness", "Durability"],
        rightAnswer: "HP"
    },
    qWish = {
        question: "What is the most powerful spell in the PHB?",
        answers: ["Wish", "Meteor Storm", "Stop Time", "Inferno"],
        rightAnswer: "Wish"
    },
    qPlayerRace = {
        question: "What race is not listed as playable in any official source?",
        answers: ["Draconic", "Asimar", "Lizardman", "Orc"],
        rightAnswer: "Orc"
    },
    qHype = {
        question: "What was WotC's rationale for not nerfing Fireball?",
        answers: ["Wizard as a class is underpowered.", "Fireball is only usable in very specific scenarios.", "Fireball is too much fun to nerf.", "Fireball has the possibility of a low roll."],
        rightAnswer: "Fireball is too much fun to nerf."
    },
    qCritical = {
        question: "What is the probability of a critical roll on a d20?",
        answers: ["1%", "5%", "10%", "20%"],
        rightAnswer: "10%"
    },
    qWarlock = {
        question: "Which of the following isn't a Warlock patron?",
        answers: ["Archfey", "Great Old One", "Fiend", "Necromancer"],
        rightAnswer: "Necromancer"
    },
    qAlignments = {
        question: "What are the alignment axes?",
        answers: ["Lawful-Chaotic, Good-Evil", "Good-Evil, Honest-Dishonest", "Good-Evil, OxfordComma-Anti OxfordComma", "Good-Evil, Left-Right"],
        rightAnswer: "Lawful-Chaotic, Good-Evil"
    },
    qCaster = {
        question: "Which class is a caster?",
        answers: ["Barbarian", "Bard", "Fighter", "Rogue"],
        rightAnswer: "Bard"
    },

];
var qsRight = 0;
var buttonArray = [
    $('#a1'), $('#a2'), $('#a3'), $('#a4')
];

function runGame() {
    console.log(qArray);
    qInPlay = qArray[Math.floor(Math.random() * qArray.length)];
    console.log(qInPlay);
    $('#question').text(qInPlay.question);

    // how do I make sure the same answers aren't used twice in the display?
    for (i = 0; i < buttonArray.length; i++) {
        var answerNumber = Math.floor(Math.random() * qInPlay.answers.length);
        var answerUsed = qInPlay.answers[answerNumber];
        buttonArray[i].text(answerUsed);
        qInPlay.answers.splice(answerNumber, 1);
    }
    
    //if the text of the clicked button equals the text of the rightAnswer property the user gets the question correct
   
}
$('button').click( function () {
    if ($(event.target).text() === qInPlay.rightAnswer) {
       $('#success').fadeIn(700)
       .fadeOut(800);
       qsRight++;
       reset();
    } else {
        $('#failure').fadeIn(700)
        .fadeOut(800);
        reset();
    }
});
if ((qArray.length === 0) && (qsRight >= 9)) {
    playerVictory();        
}
var time = 13;
$('#timer').text(time);

setInterval(function() {
    time--;
    $('#timer').text(time);
    if (time === 0) {
        $('#slow')
        .fadeIn(500)
        .fadeOut(550);
        reset();
    }}, 1000);

function countdown(){
        
}
function reset() {
    console.log(qInPlay);
    clearInterval();
    qArray.splice(qInPlay, 1);
    time = 13;
    runGame();
};

function playerVictory() {

};

$(document).ready(function () {
    runGame();
    
});

