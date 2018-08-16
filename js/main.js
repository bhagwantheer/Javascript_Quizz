const questionsArray =[
	{
		question:"Inside which HTML element do we put the Javascript?",
		answerChoices:['script','Javascript','js','scripting'],
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
];
let currentQuestion = 0;
let score = 0;
let totalQuestions = questionsArray.length;
console.log("The total questions are:",totalQuestions);

function displayQuizz(event){
	$('.startQuiz').remove();
	$('.questionsClass').removeClass('hidden');
	$('.counterClass').removeClass('hidden');
	$('.scoreCount').text("your score is:" + score);
	$('.questionCount').text("Question:"+currentQuestion+1);
	
}

function checkAnswer(){
    //var selectedValue = $('input[type=radio][name=answer]:checked').val();
	let selectedValue = $('input[class="answer"]:checked').val();
	//console.error(selectedValue);
	//start with questionsArray and look at the current question and goto answerchoices property and 
	//start with questionsArray and look at the current question and get the correct answer index
	let question = questionsArray[currentQuestion];
	let answerIndex = question.correctAns;
	let correctAnswer = question.answerChoices[answerIndex];
	//let newvar = questionsArray[currentQuestion].correctAns;
																   //we can replace newvar here
	//let uAnswer = questionsArray[currentQuestion].answerChoices[questionsArray[currentQuestion].correctAns];
	//console.log(uAnswerIndex);
	console.log("correctAnswer is", correctAnswer ,"the selectedValue is:",selectedValue);
	if(selectedValue === undefined){
		alert("Please check one option");
	}
	if(selectedValue == correctAnswer){
		showScore();
	}

	if(currentQuestion ==totalQuestions){
		console.log("display the result");
	}
	if(selectedValue ==""){
			alert("wrong answer");
			//$('.errorMesages').text("wrong answer");
	}
	nextQuestion();
	$('.questionCount').text("Question:"+(currentQuestion+1)+"out of 4");
}

function showScore(){
	score ++;
	console.log(score);
	$('.scoreCount').text("your score is:" + score);
}
function nextQuestion(){
	console.log("nextQuestion is running");
	currentQuestion +=1;
	
	//find the heading of the question and replace it's text
	var ques =$('#questionHeading').text(questionsArray[currentQuestion].question);
	//Ask jquery to find all the labels in the question and remove them.
	$('label').remove();
	//add the new choices
	const amountofAnswers = questionsArray[currentQuestion].answerChoices.length;
	for(var i =0;i<amountofAnswers;i++){
		$('.questionsClass').append(`<label><input class ='answer' type='radio' name='answer' value='${i}'>${questionsArray[currentQuestion].answerChoices[i]}</label>`);
	}
}

$(function(){
	$('.startbtn').click(function(){
		displayQuizz();
		$('.submitbtn').on('click',checkAnswer);
	});

});
*********************************************************************************

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
	//$('.scoreCount').text("your score is:" + score);
	//$('.questionCount').text("Question: "+currentQuestion+1);
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
	
	/*if(currentQuestion == totalQuestions-1){
		$('.submitbtn').attr('value',"Finish");
	}*/
	
	nextQuestion();
	
}
function nextQuestion(){
	currentQuestion++;
	if(currentQuestion ==totalQuestions){
		$('.questionsClass').hide();
		$('.finalResult').show();
			return;
		}
	$('.questionCount').text("Question:"+(currentQuestion+1)+"out of 4");
	$('.scoreCount').text("your score is:" + score);
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
$.ajax({
			url: pokemonByTypeApi + value,
			dataType:'json',
			type:'GET',
			success:function(data){
				console.log(data);
				for (var i = 0; i < 10;i++){
					var index = [Math.floor(Math.random() *data.pokemon.length)];
				    var randomName = data.pokemon[index].pokemon.name;
			    	createPokemon(randomName);
				}//for loop
			    console.log(length);
				$.each(data.pokemon,function(index,url){
			    	var randomNamesArray = [];
			    	var name = url.pokemon.name;
			    	//console.log(name);
			    
			       	//for (var i =0; i< 10; i++){randomNamesArray.push (randomName);}
			    	//console.log(randomNamesArray);
			    	//createPokemon(name);

			});//each 