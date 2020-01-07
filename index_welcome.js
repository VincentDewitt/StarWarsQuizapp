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
$('.welcome_section').on('click' , '.submitanswer' , function (event){
    event.preventDefault();
    let answerSelected = $('.option:checked').val();
    if ( answerSelected === undefined){
        $('.unselected_error').html(`
        <p>
        Please select a answer
        </p>
        `)
    }

    else if (answerSelected === quizQuestions[currentQuestion].correct){
        currentScore++;
        $('.welcome_section').html(`
        <div class="quizinfo">
            <div class="userscore">
               <p>Score ${currentScore}/5</p>
           </div>
        <div class="questionprog">
               <p>Question ${currentQuestion+1}/5</p>
        </div>
   </div>
    <div class="feedbackright_section">
    <img src="#" alt="Star Wars correct Gif">
     <p>Witty Dialog that tells the user answer was correct. </p>
     <form>
         <button class="next_question" type="submit">Next Question</button>
     </form>
    </div>
        `)

    }
    else {
        $('.welcome_section').html(`
        <div class="quizinfo">
        <div class="userscore">
           <p>Score ${currentScore}/5</p>
       </div>
    <div class="questionprog">
           <p>Question ${currentQuestion+1}/5</p>
    </div>
</div>
<div class="feedbackwrong_section">
<img src="#" alt="Star Wars Wrong Gif">
 <p>Witty Dialog that tells the user answer was incorrect. </p>
 <form>
     <button class="next_question" type="submit">Next Question</button>
 </form>
</div>
        `)
    }



    let CurrentQ = quizQuestions[currentQuestion]
    
})
}
function nextQuestion(){
    $('.welcome_section').on('click', '.next_question' , function (event){
        event.preventDefault();
        currentQuestion++
        //needs something to tell when at end of quiz 
        createQuestionView();

    });
}
function createQuestionView(){
    const questionHtml = $(`
    <div class="quizinfo">
         <div class="userscore">
            <p>Score ${currentScore}/5</p>
        </div>
     <div class="questionprog">
            <p>Question ${currentQuestion+1}/5</p>
     </div>
</div>
    <div class="Question_section">
     <form>
         <fieldset>
             <legend>${quizQuestions[currentQuestion].question}</legend>
          <label>
              <input name="option" class="option" type="radio" value="answera">${quizQuestions[currentQuestion].answera}
          </label>
          <label>
                <input name="option" class="option" type="radio" value="answerb">${quizQuestions[currentQuestion].answerb}
            </label> 
            <label>
                    <input name="option" class="option" type="radio" value="answerc">${quizQuestions[currentQuestion].answerc}
            </label>
            <label>
                    <input name="option" class="option" type="radio" value="answerd">${quizQuestions[currentQuestion].answerd}
            </label>         
         <button class="submitanswer" type="submit">submit</button>
        </fieldset>
     </form>
     <div class="unselected_error">
     </div>
    </div>
    `);
    $(".welcome_section").html(questionHtml);

}
function init(){
    startQuiz(); 
    checkAnswer(); 
    nextQuestion();

}
init();