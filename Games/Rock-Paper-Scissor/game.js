let choices = document.querySelectorAll(".choice");
let button =document.querySelector(".msg-container");
let paraInside =document.querySelector("#msg");
let userScoreid = document.querySelector("#user-score");
let compScoreid= document.querySelector("#comp-score");

let userScore=0;
let compScore=0;

choices.forEach((choice)=>{
  choice.addEventListener('click',()=>{
  
     let userPlay= choice.getAttribute("id");
      
let compPlay = parseInt(Math.random()*3)


let Options =["rock","paper","scissor"];


let compChoice = Options[compPlay];
let userChoice = userPlay

if(compChoice===userChoice){
drawGame();
}
else if(userChoice==='rock'&&compChoice==='paper'||userChoice==='scissor'&&compChoice==='rock'||userChoice==='paper'&&compChoice==='scissor'){
compWin();
}
else if(userChoice==='paper'&&compChoice==='rock'||userChoice==='rock'&&compChoice==='scissor'||userChoice==='scissor'&&compChoice==='paper'){
userWin();
}


  })
});

let drawGame = ()=>{
  paraInside.style.backgroundColor='black'
  paraInside.innerText="Play Again"
}
let userWin=()=>{
paraInside.style.backgroundColor='green'
paraInside.innerText="You win"
userScore++;
userScoreid.innerText=userScore
}
let compWin=()=>{
  paraInside.style.backgroundColor='red'
  paraInside.innerText="Comp Win"
    compScore++;
  compScoreid.innerText=compScore
}
