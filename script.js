var score = { win : 0,
    loss : 0,
    ties : 0
   };
function play() {var choices = ['R','P', 'S'];
var myChoice = prompt("Choose R, P or S");
var choicePicked = myChoice.toUpperCase();                 
var computersChoice = choices[Math.floor(Math.random()*choices.length)];
alert("Computer chose" +" "+ computersChoice);
if (choicePicked === computersChoice){
score.ties+= 1 ; alert("It's a tie") 
}
else if ( choicePicked ==="R" && computersChoice ==="S"||choicePicked ==="P" && computersChoice   ==="R"|| choicePicked ==="S" && computersChoice ==="P") 
{score.win+= 1; alert("Yay!! You win")}
else {score.loss+= 1; alert("You Lose")};
window.alert(
    "Stats:\nWins: " + score.win + "\nLosses: " + score.loss + "\nTies: " + score.ties
  );                
var replay = prompt("Like to play Again? Type Y for yes N for No")             
if (replay.toUpperCase() === "Y" ){
    play();
        
}
else { alert("Thanks for Playing!! Hope to see you soon.")}
                 return;
                };