// Creating Game Boxes
let gameDiv = document.querySelector(".gameDiv");
let turn = 0;
let turnDiv = document.querySelector("h2");
let crossline = document.querySelector(".crossline");

// 0 = " ", 1 = "X", 2 = "O"
let table = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Creating game boxes and adding click event
for(let i = 0; i < 9; i++){
  let box = document.createElement("div");
  let span = document.createElement("span");
  box.classList.add("box");
  box.addEventListener("click", () => {
    if(span.textContent == ""){
      span.textContent = (turn % 2 == 0) ? "X" : "O";
      turnDiv.firstElementChild.textContent = (turn % 2 != 0) ? "X" : "O";
      table[i] = (turn % 2 == 0) ? 1 : 2;
      turn++;
    }
    verifyTable();
  });
  gameDiv.appendChild(box);
  box.appendChild(span);
}

// Setting Restart Button to Work
let reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
  Array.from(gameDiv.children).forEach( (boxDiv) => {
    if(!boxDiv.classList.contains("crossline")){
      boxDiv.firstElementChild.textContent = "";
      turn = 0;
    }
  });
  turnDiv.innerHTML = "Turn: <span></span>";
  crossline.classList.remove("show");
  setTimeout(() => {
    crossline.classList.remove("type1");
    crossline.classList.remove("type2");
    crossline.classList.remove("type3");
    crossline.classList.remove("type4");
    crossline.classList.remove("type5");
    crossline.classList.remove("type6");
    crossline.classList.remove("type7");
    crossline.classList.remove("type8");
  },100);
  for (let i = 0; i < table.length; i++) {
    table[i] = 0;
  }
});

// Setting Verify Table Function
function verifyTable(){
  if(table[0] == 1 && table[1] == 1 && table[2] == 1){
    victory(1, "X");
  }else if(table[3] == 1 && table[4] == 1 && table[5] == 1){
    victory(2, "X");
  }else if(table[6] == 1 && table[7] == 1 && table[8] == 1){
    victory(3, "X");
  }else if(table[0] == 1 && table[3] == 1 && table[6] == 1){
    victory(4, "X");
  }else if(table[1] == 1 && table[4] == 1 && table[7] == 1){
    victory(5, "X");
  }else if(table[2] == 1 && table[5] == 1 && table[8] == 1){
    victory(6, "X");
  }else if(table[0] == 1 && table[4] == 1 && table[8] == 1){
    victory(7, "X");
  }else if(table[2] == 1 && table[4] == 1 && table[6] == 1){
    victory(8, "X");
  }else if(table[0] == 2 && table[1] == 2 && table[2] == 2){
    victory(1, "O");
  }else if(table[3] == 2 && table[4] == 2 && table[5] == 2){
    victory(2, "O");
  }else if(table[6] == 2 && table[7] == 2 && table[8] == 2){
    victory(3, "O");
  }else if(table[0] == 2 && table[3] == 2 && table[6] == 2){
    victory(4, "O");
  }else if(table[1] == 2 && table[4] == 2 && table[7] == 2){
    victory(5, "O");
  }else if(table[2] == 2 && table[5] == 2 && table[8] == 2){
    victory(6, "O");
  }else if(table[0] == 2 && table[4] == 2 && table[8] == 2){
    victory(7, "O");
  }else if(table[2] == 2 && table[4] == 2 && table[6] == 2){
    victory(8, "O");
  }
}

// Function to trigger victory
function victory(type, winner){
  crossline.classList.add("show");
  crossline.classList.add("type"+type);
  turnDiv.innerHTML = winner+" is the winner<span></span>";
}
