window.onload = function () {
    document.getElementById("aProduct").onclick = alertMessage;
}

function alertMessage() {
    str = "Product Info to be Added" + "\n";
    var opt = document.getElementById("supplier");
    var stropt = opt.options[opt.selectedIndex].text;
    str = str.concat("Product Number is: " + document.getElementById("pNumber").value +"\n"
            +"Name: " + document.getElementById("name").value + "\n" +
            "Prce: " + document.getElementById("uPrice").value + "\n" +
            "Quantity: " + document.getElementById("quantity").value + "\n" + 
            "Supplier: " + stropt + "\n" +
            "Date: " + document.getElementById("date").value + "\n");
    alert(str);
}