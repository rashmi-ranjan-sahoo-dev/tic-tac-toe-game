let newgame = document.querySelector(".New-btn");

let boxes = document.querySelectorAll(".box")

let winnerele = document.querySelector(".winner");

let draw = document.querySelector(".draw");

// console.log(boxes)
let restart = document.querySelector(".restart-btn")
let flag = true;
let count = 0;

const winPatterns =[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [5,4,3],
  [6,7,8]
]
function showWinner(winer)
{
    winnerele.style.visibility = "visible";
    winnerele.innerHTML = `Winner is ${winer}`;
    winnerele.style.fontSize = "50px";
    winnerele.style.color= "white";
    box.disabled = true;
    
}
function gameDraw()
{
  draw.style.visibility = "visible";
  draw.innerHTML = `Game draw`;
  draw.style.fontSize = "50px";
  draw.style.color= "white";
  count = 0;
}

function checkWinner()
{
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != '' && pos2Val != '' && pos3Val != '')
    {
      if(pos1Val === pos2Val && pos2Val === pos3Val)
      {
        count = 0;
        showWinner(pos1Val);
        box.disabled = true;
      }
    }
  }
}
boxes.forEach((box)=>{
  box.addEventListener('click',()=>{
    // console.log(box)
    if(flag)
    {
      box.innerHTML = "X";
      flag = false;
      // console.log("box is clicked");
    }
    else{
      box.innerHTML = "0";
      flag = true;
    }
    box.disabled = true;
        count++;
        let isWinner = checkWinner();
       console.log(count);
    if (count === 9 ) {
          gameDraw();
        }
  })
})

function restartAll(){
  boxes.forEach((box) => {
    box.innerHTML = '';
    box.disabled = false;
    winnerele.style.visibility = "hidden";
    draw.style.visibility = "hidden";
  });
}
function Gamestart(){
  boxes.forEach((box) => {
    box.innerHTML = '';
    box.disabled = false;
    winnerele.style.visibility = "hidden";
    draw.style.visibility = "hidden";
  });
}

restart.addEventListener('click',restartAll);
newgame.addEventListener('click',Gamestart);
 