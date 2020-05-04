//! localstorge
storge = function() {
	// если аргумент один
	if (arguments.length == 1) {
		var arg1 = arguments[0];
		// если первый аргумент строка
		if (typeof arg1 == 'string') {
			var retString = localStorage.getItem(arg1);
			if (retString == null) {
				return false
			}
			var last = retString.length - 1;
			// если строка в сторче похожа на json обьект
			if ((retString[0] == '{' && retString[last] == '}')
					|| (retString[0] == '[' && retString[last] == ']')) {
				// то распарсить и вернуть обьект
				return JSON.parse(retString)
			}// если нет
			else {// то вернуть просто строку
				return retString
			}
		}// если первый аргумент обьект
		else if (typeof arg1 == 'object') {
			for (prop in arg1) {// то засунуть значения и ключи в сторч
				try {
					localStorage.setItem(prop, arg1[prop]);
					return true
				} catch (e) {
					if (e == QUOTA_EXCEEDED_ERR) {
						alert('Локальное хранилище переполнено');
						return false
					}
				}
			}
		}
		// если аргумента два
	} else if (arguments.length == 2) {
		var arg1 = arguments[0];
		var arg2 = arguments[1];
		// если второй аргумент строка или номер
		if (typeof arg2 == 'string' || typeof arg2 == 'number') {
			try {
				// то засунуть ключ и значение в сторч
				localStorage.setItem(arg1, arg2)
				return true
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Локальное хранилище переполнено');
					return true
				}
			}

		}// если второй аргумент null
		else if (arg2 == null) {
			// то удалить значение и ключ
			localStorage.removeItem(arg1)
			return true
		}
		// если второй аргумент обьект
		else if (typeof arg2 == 'object') {
			try {
				// то преобразовать в json строку и засунуть в сторч
				localStorage.setItem(arg1, JSON.stringify(arg2))
				return true
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					alert('Локальное хранилище переполнено');
					return true
				}
			}
		}
	}
}
// очистить сторч
storge.clear = function() {
	localStorage.clear()
}






let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

let O = new Image();
let X = new Image();
let bg = new Image();
let mark = new Audio();
let player = true;
//! True - X, False - O
let playerX = 'X';
let playerO = 'O';



$('#canvas').css("border", "solid red");
$('#canvas').css("margin-left", "505px");
$('#canvas').css("margin-top", "230px");
$('#inp').show();
if(storge('names') === false){
playerX = 'X';
playerO = 'O';
}else{
  if(playerX !== 'X') $("#playerX").val(storge('names').X);
  if(playerO !== 'O') $("#playerO").val(storge('names').O);
}

let res = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];


O.src = "IMG/0.png"
X.src = "IMG/X.png"
bg.src = "IMG/BG.png"


bg.onload = function(){
  ctx.drawImage(bg, 0, 0);
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
      location.href='index.html';
    };
    if(isSolved(res) === 2){
      alert(`${playerO} win`)
      location.href='index.html';
    };
    
    if(res[0][0] !== 0 && res[0][1] !== 0 && res[0][2] !== 0 && res[1][0] !== 0 && res[1][1] !== 0 && res[1][2] !== 0 && res[2][0] !== 0 && res[2][1] !== 0 && res[2][2] !== 0 && isSolved(res) !== 1 && isSolved(res) !== 2){
      alert("draw!");
      location.href = 'index.html'
    }

    player = !player;
  });


  function send(){
  $('#inp').hide();
  playerX = document.getElementById("playerX").value;
  playerO = document.getElementById("playerO").value;
  if(document.getElementById("playerX").value === ''){
    playerX = 'X'
  }
  if(document.getElementById("playerO").value === ''){
    playerO = 'O'
  }
  storge('names', {
    X: playerX,
    O: playerO
  })
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





