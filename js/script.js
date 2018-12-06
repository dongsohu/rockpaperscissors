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
    return Math.floor(Math.random() * 4);
}
$("#shoot").click(function(){
    $("#userChoice").text($("#input").val());
});


$("#shoot").click(function(){
    alert(getRandomNum());
    if(randomNumber === 1 ){
        $("#computerChoice").html("rock");
    } 
    else if(randomNumber === 2){
        $("#computerChoice").append("paper");
    }else{
         $("#computerChoice").text("scissors");
    }
});
