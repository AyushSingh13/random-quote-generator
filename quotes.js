/*
    Name: Ayush Singh
    Title: random-quote-generator
*/

$(document).ready(function() {
    $("#getQuote").on("click", function() {
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
            var html = "";
            html += "<div class='quoteMessage'>" + json.quoteText + "</div><br>";
            html += "<div class='quoteAuthor'> - " + json.quoteAuthor + "</div><br>";
            $(".quote").html(JSON.stringify(json));
            $(".quote").html(html);
        });
    });
});
