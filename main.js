let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let O = new Image();
let X = new Image();
let mark = new Audio();



let res = [];


O.src = "IMG/0.png"
X.src = "IMG/X.png"


X.onload = function(){
    ctx.drawImage(X, 0, 0)
    ctx.drawImage(X, 0, 120);
    ctx.drawImage(X, 0, 240)
}



$("#canvas").click(function(e) {
    var offset = $(this).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);
   
    alert("X: " + relativeX + "  Y: " + relativeY);
  });



//!начало кода проверки на выигрыш
/*function isSolved(board) {
    board = board.join('-').replace(/,/g,'');
    console.log(board)
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
 }
 
 isSolved(res);*/
 //!конец кода проверки на выигрыш