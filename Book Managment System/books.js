$(function() {
    $.get("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list").done(response => 
    
    {

        
        // const res = JSON.parse(response);
        console.log(typeof(response));
        let content = "";

        
        response.forEach((element, idx) => {
            content += "<tr>" + 
            "<td>" +idx + "</td>"  +
            "<td>"+element.isbn +"</td>" +
             "<td>" + element.title+ "</td>" +
             "<td>" + element.overdueFee+ "</td>" +
             "<td>" +element.publisher+ "</td>" +
             "<td>" +element.datePublished + "</td>" +
             "</tr>"; 
        });

        $("#tby").append(content);
    
    
    })

})