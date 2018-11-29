// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoice= "";
var winner = "";
var randomNumber = getRandomNum();
function getRandomNum(){
    return Math.floor(Math.random() * 10);
}
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
});


$("#shoot").click(function(){
    alert(getRandomNum());
    if(randomNumber > 1 && randomNumber < 3){
        $("#computerChoice").text("rock");
    } 
    else if(randomNumber > 4 && randomNumber < 7){
        $("#computerChoice").text("paper");
    }else{
         $("#computerChoice").text("scissors");
    }
});
