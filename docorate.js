window.onload = function () {
    document.getElementById("docorate").onclick = docorator;
    var text = document.getElementById("text");
    var chkbox = document.getElementById("bng");
    chkbox.onchange = somestyle;
}

function docorator() {

    var currentfont = parseInt(window.getComputedStyle(text, null).getPropertyValue('font-size'));
    text.style.fontSize = currentfont + 24 + "px";
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