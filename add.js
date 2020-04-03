// window.onload = function () {
//     document.getElementById("aProduct").onclick = alertMessage;
// }

// function alertMessage() {
//     str = "Product Info to be Added" + "\n";
//     var opt = document.getElementById("supplier");
//     var stropt = opt.options[opt.selectedIndex].text;
//     str = str.concat("Product Number is: " + document.getElementById("pNumber").value +"\n"
//             +"Name: " + document.getElementById("name").value + "\n" +
//             "Prce: " + document.getElementById("uPrice").value + "\n" +
//             "Quantity: " + document.getElementById("quantity").value + "\n" + 
//             "Supplier: " + stropt + "\n" +
//             "Date: " + document.getElementById("date").value + "\n");
//     alert(str);
// }

$(function() {
    $("#add").on('submit', addhandler);
    $("#reset").on('click', () => $('#outputdiv').remove());
});

function addhandler(evt) {

    var info = $("<p></p>").text("Product Info to be Added");
    var date = $("<p></p>").text( "Date: " + $("#date").val()); 
    var opt = document.getElementById("supplier");
    var stropt = $("<p></p>").text("Supplier: " + opt.options[opt.selectedIndex].text);
    var productname = $("<p></p>").text("Product Number is: " + $("#pNumber").val());
    var name = $("<p></p>").text("Name: " + $("#name").val());
    var price = $("<p></p>").text("Prce: " + $("#uPrice").val());
    var quantity= $("<p></p>").text("Quantity: " + $("#quantity").val()); 
    var mainDiv = $("<div></div>");
    mainDiv.attr('id', 'outputdiv');
    mainDiv.append(info);
    mainDiv.append(productname);
    mainDiv.append(name);
    mainDiv.append(price);
    mainDiv.append(quantity);
    mainDiv.append(stropt);
    mainDiv.append(date);
    

    $("#add").append(mainDiv);

    evt.preventDefault();

}

