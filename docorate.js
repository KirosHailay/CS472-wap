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
        text.style.fontWeight="bold";
        text.style.color = "green";
        text.style.textDecoration ="underline";
    }
    else {
        text.style.fontWeight ="normal";
    }
    
}