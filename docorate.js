window.onload = function () {
    document.getElementById("docorate").onclick = docorator;
    var text = document.getElementById("text");
    var chkbox = document.getElementById("bng");
    chkbox.onchange = somestyle;
}

function docorator() {
    text.style.fontSize = "24pt";
} 

function somestyle() {
     var chkbox = document.getElementById("bng");
    if(chkbox.checked == true) {
       text.className = "txt";
    }
    else {
        text.className = "txt2"
    }
    
}