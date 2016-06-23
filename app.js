'use strict';

// show start page when page loads
$(document).ready(pageLoad);

function pageLoad() {
	$("#start-page").show();
	$("#questions-page").hide();
	$("#question-tracker").hide();
	$("#end-page").hide();
}

// global variables
var currQuestion = 0;
var numCorrect = 0;

// hide start page and show questions page when click start button
$("#begin").click(start);

function start() {
	$("#start-page").hide();
	$("#questions-page").show();
	$("#question-tracker").show();
	generateQuestion();
	trackLeaf();
}

// questions and choices
var questions = [

	{title: "What is the nation's first national park?",
	options: ["Grand Teton National Park", "Yellowstone National Park", "Zion National Park", "Death Valley National Park"],
	questionNum: 1,
	answer: "Yellowstone National Park"},
	
	{title: "Which of the following states does not have a national park?",
	options: ["Arkansas", "New Mexico", "West Virginia", "South Carolina"],
	questionNum: 2,
	answer: "West Virginia"},

	{title: "How many recreational visits were there to America's National Parks in 2015?",
	options: ["58 million", "103 million", "247 million", "307 million"],
	questionNum: 3,
	answer: "307 million"},

	{title: "About how many species of threatened or endangered plants and animals are in the U.S. National Parks?",
	options: ["150", "200", "250", "300"],
	questionNum: 4,
	answer: "250"},

	{title: "Which national park contains the highest point in North America?",
	options: ["Denali National Park", "Glacier National Park", "Olympic National Park", "Yosemite National Park"],
	questionNum: 5,
	answer: "Denali National Park"},

	{title: "Mammoth Cave National Park in Kentucky has about how many miles of mapped caves?",
	options: ["200", "300", "400", "500"],
	questionNum: 6,
	answer: "400"},

	{title: "What was the most visited national park in 2015?",
	options: ["Great Smoky Mountains National Park", "Yellowstone National Park", "Acadia National Park", "Yosemite National Park"],
	questionNum: 7,
	answer: "Great Smoky Mountains National Park"},

	{title: "How many national parks are there in the United States?",
	options: ["52", "55", "58", "62"],
	questionNum: 8,
	answer: "58"}

]	

// generate current question number, question title, and add radio buttons for question options
function generateQuestion() {
	$("#questions-page h3").text("Question " + questions[currQuestion].questionNum);
	$("#questions-page h2").text(questions[currQuestion].title);
	for(var i = 0; i < questions[currQuestion].options.length; i++) {
		var optionInput = questions[currQuestion].options[i];
		$("#questions-page form").append("<input type='radio' value=\"" + optionInput + "\">");
	}
}

// when click submit
$("#submit").click(function () {
	evaluateAnswer();
	nextQuestion();
	generateQuestion();
	trackLeaf();
})

// if correct answer, add to number correct, change current question icon to green
// else, display alert and change current question icon to red
function evaluateAnswer() {
	var selection = $("#questions-page form input").val();
	if(currQuestion != 8) {
		if (selection == questions[currQuestion].answer) {
		alert("You got it right!");
		numCorrect++;
		var icon = questions[currQuestion].questionNum;
		$(".fa-leaf:nth-child(" + icon + ")").css("color", "green");
		nextQuestion();
		}
		else {
		alert("That is incorrect! The right answer is " + questions[currQuestion].answer);
		var icon = questions[currQuestion].questionNum;
		$(".fa-leaf:nth-child(" + icon + ")").css("color", "red");
		}
	}
	else {
		finish ();
	}	
}

// clear for next question
function nextQuestion() {
	$("#questions-page form").empty();
	$("#questions-page h3").empty();
	$("#questions-page h2").empty();
	currQuestion++;
}

// track icons showing current question
function trackLeaf() {
	var icon = questions[currQuestion].questionNum;
	$(".fa-leaf:nth-child(" + icon + ")").css("color", "black");
}

function finish() {
	$("#questions-page").hide();
	$("#question-tracker").hide();
	$("#end-page").show();
	$("#end-page h2").text("You got " + numCorrect + " out of 8 questions correct");
}

// try again
$("#try-again").click(function () {
	pageLoad();
})















