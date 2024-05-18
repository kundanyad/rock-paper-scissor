let userscrore = 0;
let compscore = 0;

let userpara=document.querySelector("#user");
let compara=document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");


const gencomputerchoice = () => {
  const options = ["rock", "paper", "sissor"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};


const drawgame = () => {
  msg.innerText="Game was Draw play Again/";
};

const showwinner = (userwin,userchoice,coputerchoice) => {
  if (userwin) {
    msg.innerText=`You Win! Your ${userchoice} beats ${coputerchoice}`;
     msg.style.color="green";
     userscrore++;
     userpara.innerText=userscrore;
  } 
  else {
    msg.innerText=`You Lose ${coputerchoice} beats Your ${userchoice}`;
     msg.style.color="red";
     compscore++;
     compara.innerText=compscore;
  }
};

const playgame = (userchoice) => {
  const coputerchoice = gencomputerchoice();
  if (userchoice ==coputerchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice == "rock") {
      userwin = coputerchoice === "paper" ? false : true;
    } else if (userchoice == "paper") {
      userwin = coputerchoice === "sissor" ? true : false;
    } else {
      userwin = coputerchoice === "rock" ? false : true;
    }

    showwinner(userwin ,userchoice,coputerchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
