'use strict';

// show start page when page loads
$(document).ready(pageLoad);

function pageLoad() {

	$("#questions-page").hide();
	$("#question-tracker").hide();
	$("#end-page").hide();

}

var currQuestion = 0;
var numCorrect = 0;

// hide start page and show questions page when click button
$("#begin").click(start);

function start() {
	$("#start-page").hide();
	$("#questions-page").show();
	$("#question-tracker").show();
}

// questions and choices
var question = [

	{title: "What is the nation's first national park?",
	options: ["Grand Teton National Park", "Yellowstone National Park", "Zion National Park", "Death Valley National Park"],
	questionNum: 0,
	answer: 1},
	
	{title: "Which of the following states does not have a national park?",
	options: ["Arkansas", "New Mexico", "West Virginia", "South Carolina"],
	questionNum: 1,
	answer: 2},

	{title: "How many recreational visits were there to America's National Parks in 2015?",
	options: ["58 million", "103 million", "247 million", "307 million"],
	questionNum: 2,
	answer: 3},

	{title: "About how many species of threatened or endangered plants and animals are in the U.S. National Parks?",
	options: ["150", "200", "250", "300"],
	questionNum: 3,
	answer: 2},

	{title: "Which national park contains the highest point in North America?",
	options: ["Denali National Park", "Glacier National Park", "Olympic National Park", "Yosemite National Park"],
	questionNum: 4,
	answer: 0},

	{title: "Mammoth Cave National Park in Kentucky has about how many miles of mapped caves?",
	options: ["200", "300", "400", "500"],
	questionNum: 5,
	answer: 2},

	{title: "What was the most visited national park in 2015?",
	options: ["Great Smoky Mountains National Park", "Yellowstone National Park", "Acadia National Park", "Yosemite National Park"],
	questionNum: 6,
	answer: 0},

	{title: "How many national parks are there in the United States?",
	options: ["52", "55", "58", "62"],
	questionNum: 7,
	answer: 2}

]	

// when click submit
$("#submit").click(function () {
	evaluateAnswer();

})

// if correct answer, add to number correct, change current question icon to green
// else, change current question icon to red
function evaluateAnswer() {
	var selection = $("input[type='radio']:checked").val();
	if (selection == question[currQuestion].answer) {
		numCorrect++;
		$(".fa-tree").css("color" : "green");
	}
	else {
		$(".fa-tree").css("color" : "red");
	}
}























