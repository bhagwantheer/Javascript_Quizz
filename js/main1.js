/*const questionsArray =[
	{
		question:"Inside which HTML element do we put the Javascript?",
		answerChoices:['<script>','<Javascript>','<js>','<scripting>'],
		correctAns:0
	},
	{
		question:"Where is the correct place to insert a JavaScript?",
		answerChoices:['both the head and body section are correct','the head section','the body section'],
		correctAns:1
	},
	{
		question:"Is Javascript case sensitive?",
		answerChoices:["True","False"],
		correctAns:0
	},
	{
		question:"Javascript file has an extension of:",
		answerChoices:['.java','.py','.js','.xml'],
		correctAns:2
	}
];*/
let currentQuestion = -1;
let score = 0;
let totalQuestions = questionsArray.length;
console.log("The total questions are:",totalQuestions);
$(function(){
	$('.startbtn').click(function(){
		displayQuizz();
		$('.submitbtn').on('click',checkAnswer);
	});
});

function displayQuizz(event){
	$('.startQuiz').remove();
	nextQuestion();
	$('.questionsClass').removeClass('hidden');
	$('.counterClass').removeClass('hidden');
	$('.btnClass').removeClass('hidden');
}
function checkAnswer(){
	let selectedValue = $('input[class="answer"]:checked').val();
	let question = questionsArray[currentQuestion];
	let answerIndex = question.correctAns;
	let correctAnswer = question.answerChoices[answerIndex];
	console.log("correctAnswer is", correctAnswer ,"the selectedValue is:",selectedValue);
	
	if(selectedValue === undefined){
		alert("Please check one option");
		return;
	}
	if(selectedValue == correctAnswer){	
		score++;
		console.log("new score is"+score);
	}
	
	nextQuestion();
}
function nextQuestion(){
	currentQuestion++;
	if(currentQuestion ==totalQuestions){
		$('.questionsClass').hide();
		$('.counterClass').hide();
		$('.submitbtn').hide();
		$('.finalResult').removeClass("hidden");
		$('.finalResult').show();
		$('.finalResult').html("<h2> Your final Score is: "+score+"</h2>");
			return ;
		}
	$('.questionCount').text("Question : "+(currentQuestion+1)+" out of 4");
	$('.scoreCount').text("Your Score is : " + score);
	$('#questionHeading').text(questionsArray[currentQuestion].question);
	$('label').remove();
	const amountofAnswers = questionsArray[currentQuestion].answerChoices.length;
	for(var i =0;i<amountofAnswers;i++){
		//$('.questionsClass').append(`<label><input class ='answer' type='radio' name='answer' value='${questionsArray[currentQuestion].answerChoices[i]}'>${questionsArray[currentQuestion].answerChoices[i]}</label>`);
		const input = $(`<input class ='answer' type='radio' name='answer'>`);
		input .val(questionsArray[currentQuestion].answerChoices[i]);
		const label = $('<label>');
		label.text(questionsArray[currentQuestion].answerChoices[i]).prepend(input);
		$('.questionsClass').append(label);
	}
	if(currentQuestion == totalQuestions-1){
		$('.submitbtn').attr('value',"Finish");
		}
}

