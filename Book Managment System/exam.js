

$(document).ready(function() {
 $("#add").on('submit', addhandler);
    $("#reset").on('click', () => $('#outputdiv').remove());
})

function addhandler(evt) {
  evt.preventDefault();

    // creating tbody
    let booktitle = document.getElementById("btitle").value;
    var isbn = document.getElementById("isbn").value;
    var publish = document.getElementById("publish").value;
    var overdue = document.getElementById("oFday").value;
    var date = document.getElementById("date").value;
    let obj = 
    {
      "isbn": isbn, 
      "title": booktitle,
      "overdueFee": overdue,
      "publisher": publish,
      "datePublished": date

    }

    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add",
      {
          method: "POST",
          body: JSON.stringify(obj),
            headers: {
         "Content-Type": "application/json"
        }
      })
      .then(function(res){ return res.json(); })
      .then(function(data){ 
    //      document.getElementById("btitle").value = "";
    // var isbn = document.getElementById("isbn").value = "";
    // var publish = document.getElementById("publish").value = "";
    // var overdue = document.getElementById("oFday").value = ""
    // var date = document.getElementById("date").value = "";
        alert( JSON.stringify( data ) ) })


    // $.post("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", { JSON.stringify(obj),  headers: {
    //      "Content-Type": "application/json"
    //     }}
    // ).done(response => {
    //   console.log("message from server");
    
    // }).fail(response => {
    //   console.log(response);
    // })

    

  

}

