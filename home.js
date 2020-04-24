var e = document.getElementById("or");
var result = e.options[e.selectedIndex].text;
if(result === 'For one player'){
    document.getElementById('playb').addEventListener('click', one);
}
if(result === 'For two players'){
    document.getElementById('playb').addEventListener('click', two);
}

    
function one(){
    location.href = 'index.html'
}

function two(){
    location.href = 'two.html'
}


