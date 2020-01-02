//Storing data for questions,answers//
let quizQuestions = [{
    question: "In Empire Strikes Back What City is Lando in charge of?",
    answera: "Cloud City",
    answerb: "Rainy City",
    answerc: "Plant City",
    answerd: "Sky City",
    correct: "answera"
},
{
question: "What Color is Darth Vaders lightsaber?",
answera: "Red",
answerb: "Pink",
answerc: "Green",
answerd: "Blue",
correct: "answera"
},
{
    question: "In Return of the Jedi, what ship does Lando pilot on his attack on the second Death Star?",
    answera: "A-Wing",
    answerb: "B-Wing",
    answerc: "X-Wing",
    answerd: "Millennium Falcon",
    correct: "answerd"
},
{
    question: "Darth Vader was formerly known by what name?",
    answera: "Anakin Skywalker",
    answerb: "Luke Starkiller",
    answerc: "Anakin Starkiller",
    answerd: "Obi-Wan Kenobi",
    correct: "answera"
},
{
    question: "What planet did Luke Skywalker grow up on?",
    answera: "Tatooine",
    answerb: "Dantooine",
    answerc: "Yavin IV",
    answerd: "Jakku",
    correct: "answera"
}
]
//variables
let currentQuestion= 0;
let currentScore=0;

//button action
function startQuiz(){
    $('.startquizbutton').click(function (event){
        event.preventDefault();
        createQuestionView();

    })

}
//checking value of answer submited
function checkAnswer(){
    let CurrentQ = quizQuestions.question

$('.submitanswer').click(function (event){
    event.preventDefault
    
})
}
function createQuestionView(){
    const questionHtml = $(`
    <div class="quizinfo">
         <div class="userscore">
            <p>Score 0/5</p>
        </div>
     <div class="questionprog">
            <p>Question 1/5</p>
     </div>
</div>
    <div class="Question_section">
     <form>
         <fieldset>
             <legend>${quizQuestions[currentQuestion].question}</legend>
          <label>
              <input name="option" type="radio" value="Answer 1">${quizQuestions[currentQuestion].answera}
          </label>
          <label>
                <input name="option" type="radio" value="Answer 2">${quizQuestions[currentQuestion].answerb}
            </label> 
            <label>
                    <input name="option" type="radio" value="Answer 3">${quizQuestions[currentQuestion].answerc}
            </label>
            <label>
                    <input name="option" type="radio" value="Answer 4">${quizQuestions[currentQuestion].answerd}
            </label>         
         <button class="submitanswer" type="submit">submit</button>
        </fieldset>
     </form>
    </div>
    `);
    $(".welcome_section").html(questionHtml);

}
    startQuiz();