// Creating Game Boxes
let gameDiv = document.querySelector(".gameDiv");
let turn = 0;

for(let i = 1; i < 10; i++){
  let box = document.createElement("div");
  let span = document.createElement("span");
  box.classList.add("box");
  box.addEventListener("click", () => {
    if(span.textContent == ""){
      span.textContent = (turn % 2 == 0) ? "X" : "O";
      turn++;
    }
  });
  gameDiv.appendChild(box);
  box.appendChild(span);
}

// Setting Restart Button to Work
let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  Array.from(gameDiv.children).forEach( (box) => {
    box.firstElementChild.textContent = "";
    turn = 0;
  });
});

// Setting Verify Table Function
function verifyTable(){
  // 0 = " ", 1 = "X", 2 = "O
  let table [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for(let i = 1; i < 10; i++){
    gameDiv.children[i-1].firstElementChild();
  }
}
