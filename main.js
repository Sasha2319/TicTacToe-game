let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let O = new Image();
let X = new Image();


O.src = "IMG/0.png"
X.src = "IMG/X.png"

X.onload = function(){
    ctx.drawImage(X, 0, 0)
}