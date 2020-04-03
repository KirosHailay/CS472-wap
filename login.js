$(function() {
    $("#login").on('submit', 'submit', printToConsole);
   
});
  

function printToConsole(evt) {
  console.log("Email: " + $('#email').val());
  console.log("Password: " + $('#pass').val());
  console.log("Website: " + $('#url').val());
  evt.preventDefault();
}
