/*
    Name: Ayush Singh
    Title: random-quote-generator
*/

$(document).ready(function() {
    populateQuote();
    $("#newQuote").on("click", function() {
        populateQuote();
    });
});

function populateQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
        var html = "";
        html += "<div class='quoteMessage'>" + json.quoteText + "</div><br>";
        html += "<div class='quoteAuthor'> - " + json.quoteAuthor + "</div><br>";
        setTweetButton(json.quoteText, json.quoteAuthor);
        $(".quote").html(html);
    });
}

function setTweetButton(quote, author) {
    $("#twitter-share-button").attr('href', 'https://twitter.com/intent/tweet?text="' + encodeURIComponent(
        quote + '" - ' + author
    ));
}
