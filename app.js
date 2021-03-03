// Question Array

var questiions = [
    {
        question: "Q1. What does HTML stand for??",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Markup",
            "Hyper Text Markup Protocol",
            "Hyper Text Markup Ideal",
        ]
    },
    {
        question: "Q2. Who is making the Web standards??",
        answer: "Google",
        options: [
            "Google",
            "Microsoft",
            "Mozilla",
            "Saafari",
        ]
    },
    {
        question: "Q3. Choose the correct HTML element for the largest heading?",
        answer: "<h1>",
        options: [
            "<h1>",
            "<h2>",
            "<h3>",
            "<h5>",]
    },

    {
        question: "Q4.What is the correct HTML element for inserting a line break??",
        answer: "Ul",
        options: [
            "<Dl>",
            "<br>",
            "<break>",
            "<h1>",
        ]
    },
    {
        question: "Q5. hat is the correct HTML for adding a background color?",
        answer: "<body style='background-color:yellow;'>",
        options: [
            "<body style='background-color:yellow;'>",
            "<style='background-color:yellow;'>",
            "None",
            "style='background-color:yellow;'",
        ]
    },
]

//function to Display question:

function displayQuestions(e) {
    var questionElement = document.getElementById("questionoptions");
    questionElement.innerHTML = questiions[e].question;
    var optionElement = document.getElementsByClassName("options");
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questiions[e].options[i];

    }

}


//function to display next question :

var questioncount = 0;
var score = 0;
function nextTask() {
    checkanswer(questioncount);

    questioncount++;
    if (questioncount <= questiions.length - 1
    ) {
        displayQuestions(questioncount);
    }
    removeactiveclass();
    setResult();


}


//function to select right option

function activeclass(e) {
    removeactiveclass()
    e.classList.add("active")


}

function removeactiveclass() {
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")

    }
}


function checkanswer(x) {
    var active = document.getElementsByClassName("active");
    if (active[0].innerHTML == questiions[x].answer) {
        score += 10;
        console.log(score)
    }
}


function setResult() {
    if (questioncount == questiions.length) {
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function showresult() {
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "You scored " + cs + " out of 50";

}