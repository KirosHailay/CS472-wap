window.onload = function () {
    document.getElementById("login").onclick = printToConsole;
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var url = document.getElementById("url");
    document.getElementById("aProduct").onclick = alertMessage;
}

function printToConsole() {
    console.log("Email: " + email.value + "Pass: " + pass.value + "URL: " + url.value); 

}

function alertMessage() {
    alert(document.getElementById("pNumber").value());
}