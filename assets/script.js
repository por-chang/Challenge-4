var quizStatus = true; 
var questionNumber = 0;// a tracking system that check questions if its correct
var answerNumber = 0; // track next answer to show
var score = 0; // the current score of wrong answer each time they missed
var highScore = 100; // highscore for how much points you can have
var finalAnswerCheck = 0 
var checkTimes = 1 // this check the time of when the call funtions on the last final questions
var viewHighScoresBtnEl = document.getElementById('view-high-scores'); //View your most recent high scores
var startQuizBtnEl = document.getElementById('start-quiz'); 
var answer1BtnEl = document.getElementById('answer1'); // Start Quiz button Btn El
var answer2BtnEl = document.getElementById('answer2'); 
var answer3BtnEl = document.getElementById('answer3');
var answer4BtnEl = document.getElementById('answer4'); 
var submitScoreEl = document.getElementById('submitScore'); 
var questionsEl = document.getElementById('questions'); 
var mainEl = document.getElementById('main'); //main grid for your answer and quetions
var htmlTimeLeft = document.getElementById('timeLeft');
var questionCorrectWrong = document.getElementById('questionCorrectWrong'); // Display the corrent correct or wrong questions
var startQuestionDisplayEl = document.createElement("startQuestionDisplay"); //Start the exam
var currentScoreDisplayEl = document.createElement("currentScoreDisplay"); //display your most current scores
var yourInitialsEl = document.createElement("yourInitials"); // Your initials for entering 
var yourInitialsTextAreaEl = document.createElement("yourInitialsTextArea"); 
var button1234 = document.createElement("button");
var timeLeft = 90; ///current time is 90 seconds to complete the exam


answer1BtnEl.style.display = 'none'; // display if there is a buggs
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
questionCorrectWrong.style.display='none';
yourInitialsTextArea.style.display='none';

var questionsObject = { //the questions to the exame
    correct: { 
        0 : "Commonly used datatypes DO NOT include?",// quiz for the user to answer
        1 : "The condition statement if/else is enclosed with the following:",
        2 : "Arrays can be used to store the following", 
        3 : "A very useful tool to debug arrays is:", 
        4 : "Strings must be enclosed with:"
    }
};

var answersObject = { // the answer which the user are allow to select from
    answers: { 
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : {
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops", 
            3: "Console.log"},      
        3 : { 
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes", 
            3: "Parentheses"},      
        4 : { 
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},  
    }
};


htmlTimeLeft.textContent = timeLeft;// Current time left on the user of when the time will be up
    

answer1BtnEl.addEventListener("mouseover", function() {// mouse over to the current queston allow user to select which one to choose from

    questionCorrectWrong.style.display='none';

});

answer2BtnEl.addEventListener("mouseover", function() {

    questionCorrectWrong.style.display='none';

});

answer3BtnEl.addEventListener("mouseover", function() {

    questionCorrectWrong.style.display='none';

});

answer4BtnEl.addEventListener("mouseover", function() {

    questionCorrectWrong.style.display='none';

});

submitScoreEl.addEventListener("mouseover", function() {

    questionCorrectWrong.style.display='none';

});

startQuizBtnEl.addEventListener("click", function() {


    startQuizBtnEl.style.display = 'none';// if anything happen this will create a debug to allow the programs to run
    startQuestionDisplay.style.display='none';
    currentScoreDisplay.style.display = 'none';
    yourInitials.style.display='none';
    score = 0; 
    timeLeft=90;
    htmlTimeLeft.textContent = timeLeft;
    checkTimes = 1; 


    
    
    var timeInterval = setInterval(function() {
        // if user score a point it will be increase base on correct answer

        if (score === 1){ 
            highScore -= 20;
        }

        score = 0; 

        
        if(timeLeft >= 1 && finalAnswerCheck !== 1) {
 
            startQuestionDisplay.textContent = questionsObject.correct[questionNumber];// start the number of display questions
            
            startQuestionDisplay.style.display= "";// questions display as blank
            answer1BtnEl.style.display = ""; 
            answer2BtnEl.style.display = "";
            answer3BtnEl.style.display = "";
            answer4BtnEl.style.display = "";

            answer1BtnEl.textContent = answersObject.answers[answerNumber][0];//quetions on every answer
            answer2BtnEl.textContent = answersObject.answers[answerNumber][1];
            answer3BtnEl.textContent = answersObject.answers[answerNumber][2];
            answer4BtnEl.textContent = answersObject.answers[answerNumber][3];
           
            quizContainer.appendChild(startQuestionDisplayEl);
            quizContainer.appendChild(answer1BtnEl);
            quizContainer.appendChild(currentScoreDisplayEl);
            timeLeft -= 1;
            htmlTimeLeft.textContent = timeLeft;// current time that is left to answer the questions
            console.log("time left:" + timeLeft)
            

            answer1BtnEl.addEventListener("click", function() {//start of the question by adding an event listener with the function click

                if (startQuestionDisplay.textContent === "The condition statement if/else is enclosed with the following:" && answer1BtnEl.textContent === "Parentheses") {// current option of correct and wrong answer
                    console.log("Correct");
                  
                    questionNumber = 2; 
                    answerNumber = 4;
                    questionCorrectWrong.style.display="";
                    questionCorrectWrong.textContent = "Correct!";
                    questionCorrectWrongGrid.appendChild(questionCorrectWrong);
                } else {



                    switch(answer1BtnEl.textContent) {// buttons that allow the string of answer that will apppear on the button that allow user to choose which answer to pick from
                        case "Strings":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!";// if user pick the wrong answer there will be a pop up indicating that it was the wrong answer
                            score = 1; 
                            questionNumber = 1; 
                            answerNumber = 1;
                            break;
                        case "Number of strings":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!";
                            score = 1; 
                            questionNumber = 3;
                            answerNumber = 2;
                            break;
                        case "Javascript":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!";
                            score = 1; 
                            questionNumber = 4; 
                            answerNumber = 3;
                        break;
                        case "Commas":
                            console.log("Correct");// if user pick the correct answer this will pop up indicating that user enter in the correct information
                            questionCorrectWrong.style.display=""; 
                            questionCorrectWrong.textContent = "Correct!";
                            questionCorrectWrongGrid.appendChild(questionCorrectWrong);
                            questionNumber = 0; 
                            answerNumber = 0; 
                            console.log("I'm here" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            questionCorrectWrong.style.display='none'; 
                            startQuizBtnEl.style.display = 'none'; 
                            startQuestionDisplay.textContent = "Congrats for finishing the quiz!";
                            currentScoreDisplay.style.display = ""; 
                            yourInitials.style.display = ""; 
                            yourInitialsTextArea.style.display="";  
                            finalAnswerCheck = 1; 
                            currentScoreDisplay.textContent = "Your total score is: " + highScore; 
                            yourInitials.textContent = "Please Enter in Your initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";                   
                            clearInterval(timeInterval);
                            break;
                        
                    }
                }
      

            });

            answer2BtnEl.addEventListener("click", function() {//same as the one up above since its the same thing as copy and paste the only thing that is different is the user answer for the next questions

                if (startQuestionDisplay.textContent === "Strings must be enclosed with:" && answer2BtnEl.textContent === "Curly brackets") {
                    console.log("Correct");
                    questionCorrectWrong.style.display=""; 
                    questionCorrectWrong.textContent = "Correct!";
                    questionCorrectWrongGrid.appendChild(questionCorrectWrong);
                    questionNumber = 0; 
                    answerNumber = 0; 
                    console.log("I'm here" + timeInterval);
                    answer1BtnEl.style.display = 'none';
                    answer2BtnEl.style.display = 'none';
                    answer3BtnEl.style.display = 'none';
                    answer4BtnEl.style.display = 'none';
                    questionCorrectWrong.style.display='none'; 
                    startQuizBtnEl.style.display = 'none'; 
                    startQuestionDisplay.textContent = "Congrat for finishing the quiz!";
                    currentScoreDisplay.style.display = ""; 
                    yourInitials.style.display = "";
                    yourInitialsTextArea.style.display="";  
                    currentScoreDisplay.textContent = "Your total score is: " + highScore; 
                    yourInitials.textContent = "Enter initials: "
                    submitScoreEl.style.display = "";
                    submitScoreEl.textContent = "Submit";                   
                    clearInterval(timeInterval);
                } else {

                    switch(answer2BtnEl.textContent) {
                        case "Boolean":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!";
                            score = 1; 
                            questionNumber = 1; 
                            answerNumber = 1;
                            break;
                        case "Curly Brackets":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!";                        
                            score = 1; 
                            questionNumber = 2;
                            answerNumber = 4;
                            console.log(score);
                            break;
                        case "Other arrays":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1; 
                            questionNumber = 3; 
                            answerNumber = 2;
                            break;
                        case "Terminal/bash":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1; 
                            questionNumber = 4; 
                            answerNumber = 3;
                            break;

                            
                    }
                 }



                
            });

            answer3BtnEl.addEventListener("click", function() {

                if (startQuestionDisplay.textContent === "Commonly used datatypes DO NOT include?" && answer3BtnEl.textContent === "Alerts") {
                    console.log("Correct");
                    questionNumber = 1; 
                    answerNumber = 1;
                    questionCorrectWrong.style.display=""; 
                    questionCorrectWrong.textContent = "Correct!";
                    questionCorrectWrongGrid.appendChild(questionCorrectWrong);
                } else if (startQuestionDisplay.textContent === "looping to debug arrays is:" && answer3BtnEl.textContent === "For loops") {
                    console.log("Correct");
                    questionNumber = 4; 
                    answerNumber =3;
                    questionCorrectWrong.style.display=""; 
                    questionCorrectWrong.textContent = "Correct!";
                    questionCorrectWrongGrid.appendChild(questionCorrectWrong);
                } else if (startQuestionDisplay.textContent === "The condition statement if/else is enclosed with the following:" && answer3BtnEl.textContent === "Quotes") {
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Wrong!";
                            score = 1; 
                            questionNumber = 2; 
                            answerNumber = 4;
                }
                
                else {

                    switch(answer3BtnEl.textContent) {
                        case "Booleans":
                            console.log("Current case now");
                            aquestionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1; 
                            questionNumber = 3; 
                            break;
                        case "Quotes":
                            console.log("Current case now");
                            score = 1; 
                            questionNumber = 0; 
                            answerNumber = 0; 
                            console.log("Great" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            questionCorrectWrong.style.display='none'; 
                            startQuizBtnEl.style.display = 'none'; 
                            startQuestionDisplay.textContent = "Congrat for finishing the quiz!";
                            currentScoreDisplay.style.display = ""; 
                            yourInitials.style.display = ""; 
                            yourInitialsTextArea.style.display="";  
                            finalAnswerCheck = 1; 
                            lastQuestionWrong();
                            currentScoreDisplay.textContent = "Your total score is: " + highScore; 
                            yourInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";                   
                            clearInterval(timeInterval);
                            
                        break;
                    }

                }

            });

            answer4BtnEl.addEventListener("click", function() {

                if (startQuestionDisplay.textContent === "Arrays can be used to store the following" && answer4BtnEl.textContent === "All of the above") {
                    console.log("Correct");
                    questionNumber = 3; 
                    answerNumber = 2;
                    questionCorrectWrong.style.display=""; 
                    questionCorrectWrong.textContent = "Correct!"
                    questionCorrectWrongGrid.appendChild(questionCorrectWrong);

                } else {

                    switch(answer4BtnEl.textContent) {
                        case "Numbers":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1; 
                            questionNumber = 1; 
                            answerNumber = 1;
                            break;
                        case "Square Brackets":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1;
                            questionNumber = 2; 
                            answerNumber = 4;
                            break;
                        case "Console.log":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            aquestionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1; 
                            questionNumber = 4; 
                            answerNumber = 3;
                        break;
                        case "Parentheses":
                            console.log("Current case now");
                            questionCorrectWrong.style.display="";
                            questionCorrectWrong.textContent = "Incorrect!"; 
                            score = 1; 
                            questionNumber = 0; 
                            answerNumber = 0; 
                            console.log("Great" + timeInterval);
                            answer1BtnEl.style.display = 'none';
                            answer2BtnEl.style.display = 'none';
                            answer3BtnEl.style.display = 'none';
                            answer4BtnEl.style.display = 'none';
                            aquestionCorrectWrong.style.display='none'; 
                            startQuizBtnEl.style.display = 'none'; 
                            startQuestionDisplay.textContent = "Congrat for finishing the quiz!";
                            currentScoreDisplay.style.display = ""; 
                            yourInitials.style.display = ""; 
                            yourInitialsTextArea.style.display="";                           
                            finalAnswerCheck = 1; 
                            lastQuestionWrong();
                            currentScoreDisplay.textContent = "Your total score is: " + highScore; 
                            yourInitials.textContent = "Enter initials: "
                            submitScoreEl.style.display = "";
                            submitScoreEl.textContent = "Submit";                   
                            clearInterval(timeInterval);
                        break;
                        
                    }
                 
                }
                
            });

        }
        else if(timeLeft === 0){//if the time reaches zero a display will appear indicating that the time is up and you fail to finish the exam

          console.log("Great" + timeInterval);
          questionNumber = 0; 
          answerNumber = 0; 
          answer1BtnEl.style.display = 'none';
          answer2BtnEl.style.display = 'none';
          answer3BtnEl.style.display = 'none';
          answer4BtnEl.style.display = 'none';
          questionCorrectWrong.style.display='none';
          startQuestionDisplay.textContent = "Sorry Please try agian by clicking the Stat Quiz";
          startQuizBtnEl.style.display = "";
          clearInterval(timeInterval);
       
        }
      }, 1000)

});

function lastQuestionWrong () {
        if (finalAnswerCheck === 1 && checkTimes === 1) {
        highScore -= 20;
        checkTimes = 2;
        return highScore
    }

  }
  viewHighScoresBtnEl.addEventListener("click", function() { 

    var quizUsers = "";
    var substringTest ="";
    var highScores = "";

    for (var i=0; i < localStorage.length; i++) {
        var checkUserValue = [];
        
        quizUsers = localStorage.getItem(localStorage.key(i));
        substringTest = quizUsers.substring(0,4) 
        if (substringTest == "quiz") {
            checkUserValue = quizUsers.split(",");
            var userName = checkUserValue[0]
            highScores += "User " + userName.substring(4) + " Your total high score is: " + checkUserValue[1] + "\n";
       }
    }
    window.alert(highScores);

});

submitScoreEl.addEventListener("click", function() { //allow user to submit there score to determine how much they have score during the exam this also allow user to put there initail on the exam
    

    var quizLocalStorage = "quiz";
    var quizUserDetails = "";
    var value = [];
    quizUserDetails = quizLocalStorage + yourInitialsTextArea.value 
    value = [quizUserDetails,highScore] 

    if (!localStorage.length) {
        localStorage.setItem("test","test");
    }
       
        
    for (var i=0; i < localStorage.length; i++){
        
        var checkUser = "";
        var checkUserValue = [];

        quizUserDetails = quizLocalStorage + yourInitialsTextArea.value;

   
        checkUser = localStorage.getItem(quizUserDetails);
       
        if (checkUser == null) { 
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        } else if (checkUser != null){
            checkUserValue = checkUser.split(","); 
           
        
        }  
  
        if ( quizUserDetails == checkUserValue[0] && highScore == checkUserValue[1] ) {// the is a storage systems that allow user to keep track of how many point the have during the time they took the test

        localStorage.setItem(quizUserDetails, value); 
        window.alert(highScore + " " + "is the latest entry for user initial " + yourInitialsTextArea.value + ". Entry will not be added.")
        break; 
        } else if (yourInitialsTextArea.value == "") {
            window.alert("Please enter an initial");
            break;
        } else if ( quizUserDetails == checkUserValue[0] && highScore > checkUserValue[1] ) { 
            localStorage.setItem(quizUserDetails, value);  
            window.alert("New high score of " + highScore + " has been submitted!.\nYour previous score was " + checkUserValue[1])
            break; 
        } else if ( quizUserDetails == checkUserValue[0] && highScore < checkUserValue[1] ) { 
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your previous code of " + checkUserValue[1] + " was higher.");
            break; 

        } else { 
            localStorage.setItem(quizUserDetails, value); 
            window.alert("Your score of " + highScore + " has been submitted!")
            break;
        }
                
    }
    
} );