var questions = [{
    ques: "How long is each round in a UFC fight?",
    ans: ["5 minutes", "30 seconds", "3 minutes", "1 hour"],
    name: "round",
    correct: "5 minutes",
    divClass: ".round"
},
{
    ques: "Which agency tests fighters for banned substances?",
    ans: ["USADA", "FDA", "FBI", "LAPD"],
    name: "usada",
    correct: "USADA",
    divClass: ".usada"
},
{
    ques: "What does UFC stand for",
    ans: ["Untitled Fight Club", "United Fight Club", "Ultimate Fighting Championship", "Unfair Fight Club"],
    name: "ufc",
    correct: "Ultimate Fighting Championship",
    divClass: ".ufc"
},
{
    ques: "Which UFC fighter faced Floyd Mayweather in a boxing match?",
    ans: ["Conor McGregor", "Chuck Liddell", "Brock Lesnar", "Tito Ortiz"],
    name: "conor",
    correct: "Conor McGregor",
    divClass: ".conor"
},
{
    ques: "Which weight class is at 205 lbs?",
    ans: ["Welterweight", "Middleweight", "Lightweight", "Light Heavyweight"],
    name: "weight",
    correct: "Light Heavyweight",
    divClass: ".weight"
},
{
    ques: "As of July 2018 how much is it to order UFC on PPV?",
    ans: ["$1000", "$35", "$65", "Free"],
    name: "PPV",
    correct: "$65",
    divClass: ".PPV"
},
{
    ques: "Where are the UFC Headquarters?",
    ans: ["Miami", "New York", "Los Angeles", "Las Vegas"],
    name: "HQ",
    correct: "Las Vegas",
    divClass: ".HQ"
},
{
    ques: "Who was the first female fighter signed to the UFC?",
    ans: ["Ronda Rousey", " Holly Holm", "Miesha Tate", "Jennifer Aniston"],
    name: "firstFemale",
    correct: "Ronda Rousey",
    divClass: ".firstFemale"
},
{
    ques: "What year did the first UFC event take place?",
    ans: ["600 BC", "1776", "1993", "1998"],
    name: "yearStart",
    correct: "1993",
    divClass: ".yearStart"
},
{
    ques: "Who is the president of UFC?",
    ans: ["Donald Trump", "Bill Gates", "Dana White", "Conor McGregor"],
    name: "president",
    correct: "Dana White",
    divClass: ".president"
}
] 

var labels = ["first", "second", "third", "fourth"];


var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();

for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);

    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();


    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-but').on('click', function() {
clearInterval(timer);
})
};



var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();
$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);

});