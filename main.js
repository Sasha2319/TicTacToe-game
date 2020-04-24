let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let O = new Image();
let X = new Image();
let bg = new Image();
let mark = new Audio();
let player = true;
let playerX = 'X';
let playerO = 'O';
//! True - X, False - O

let res = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];


O.src = "IMG/0.png"
X.src = "IMG/X.png"
bg.src = "IMG/BG.png"


X.onload = function(){
  ctx.drawImage(bg, 0, 0);
  //   ctx.drawImage(X, 0, 0);
  //   ctx.drawImage(X, 0, 120);
  //   ctx.drawImage(X, 0, 240);
  //   ctx.drawImage(X, 120, 0);
  //   ctx.drawImage(X, 240, 0);
  //   ctx.drawImage(X, 120, 120);
  //   ctx.drawImage(X, 240, 120);
  //   ctx.drawImage(X, 120, 240);
  //   ctx.drawImage(X, 240, 240);
}



$("#canvas").click(function(e) {
    var offset = $(this).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);
   
    //*  alert("X: " + relativeX + "  Y: " + relativeY);
     //! 1
    if(relativeX > 0 && relativeX < 110 && relativeY > 0 && relativeY < 100){
      if(player === true && res[0][0] === 0){
        ctx.drawImage(X, 0, 0);
        res[0][0] = 1;
      } 
      if(player === false && res[0][0] === 0){
        ctx.drawImage(O, 0, 0);
        res[0][0] = 2;
      } 
    }
    //! 2
    if(relativeX > 120 && relativeX < 230 && relativeY > 0 && relativeY < 100){
      if(player === true && res[0][1] === 0){
        ctx.drawImage(X, 120, 0);
        res[0][1] = 1;
      } 
      if(player === false && res[0][1] === 0){
        ctx.drawImage(O, 120, 0);
        res[0][1] = 2;
      } 
    }
    //!3
    if(relativeX > 240 && relativeX < 345 && relativeY > 0 && relativeY < 100){
      if(player === true && res[0][2] === 0){
        ctx.drawImage(X, 240, 0);
        res[0][2] = 1;
      } 
      if(player === false && res[0][2] === 0){
        ctx.drawImage(O, 240, 0);
        res[0][2] = 2;
      } 
    }
    //!4
    if(relativeX > 0 && relativeX < 120 && relativeY > 120 && relativeY < 215){
      if(player === true && res[1][0] === 0){
        ctx.drawImage(X, 0, 120);
        res[1][0] = 1;
      } 
      if(player === false && res[1][0] === 0){
        ctx.drawImage(O, 0, 120);
        res[1][0] = 2;
      } 
    }
    //!5
    if(relativeX > 120 && relativeX < 230 && relativeY > 120 && relativeY < 215){
      if(player === true && res[1][1] === 0){
        ctx.drawImage(X, 120, 120);
        res[1][1] = 1;
      } 
      if(player === false && res[1][1] === 0){
        ctx.drawImage(O, 120, 120);
        res[1][1] = 2;
      } 
    }
    //!6
    if(relativeX > 240 && relativeX < 345 && relativeY > 120 && relativeY < 215){
      if(player === true && res[1][2] === 0){
        ctx.drawImage(X, 240, 120);
        res[1][2] = 1;
      } 
      if(player === false && res[1][2] === 0){
        ctx.drawImage(O, 240, 120);
        res[1][2] = 2;
      } 
    }
    //!7
    if(relativeX > 0 && relativeX < 120 && relativeY > 230 && relativeY < 330){
      if(player === true && res[2][0] === 0){
        ctx.drawImage(X, 0, 240);
        res[2][0] = 1;
      } 
      if(player === false && res[2][0] === 0){
        ctx.drawImage(O, 0, 240);
        res[2][0] = 2;
      } 
    }
    //!8
    if(relativeX > 120 && relativeX < 230 && relativeY > 230 && relativeY < 330){
      if(player === true && res[2][1] === 0){
        ctx.drawImage(X, 120, 240);
        res[2][1] = 1;
      } 
      if(player === false && res[2][1] === 0){
        ctx.drawImage(O, 120, 240);
        res[2][1] = 2;
      } 
    }
    //!9
    if(relativeX > 240 && relativeX < 345&& relativeY > 230 && relativeY < 330){
      if(player === true && res[2][2] === 0){
        ctx.drawImage(X, 240, 240);
        res[2][2] = 1;
      } 
      if(player === false && res[2][2] === 0){
        ctx.drawImage(O, 240, 240);
        res[2][2] = 2;
      } 
    }
    if(isSolved(res) === 1){
      alert(`${playerX} win`);
      location.href='home.html';
    };
    if(isSolved(res) === 2){
      alert(`${playerO} win`)
      location.href='home.html';
    };
    
    if(res[0][0] !== 0 && res[0][1] !== 0 && res[0][2] !== 0 && res[1][0] !== 0 && res[1][1] !== 0 && res[1][2] !== 0 && res[2][0] !== 0 && res[2][1] !== 0 && res[2][2] !== 0){
      alert("draw!")
    }

    player = !player;
  });


  function send(){
  playerX = document.getElementById("playerX").value;
  playerO = document.getElementById("playerO").value;
  }


//!начало кода проверки на выигрыш
function isSolved(board) {
    board = board.join('-').replace(/,/g,'');
    console.log(board)
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
}
 //! 1 - X, 2 - O


