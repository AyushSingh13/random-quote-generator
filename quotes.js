/*
    Name: Ayush Singh
    Title: random-quote-generator
*/

function populateQuote() {
    var api = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    $.ajax(api, {
        success: function(json) {
            var html = "";
            html += '<div class="quoteMessage">"' + json.quoteText + '"</div><br>';
            html += "<div class='quoteAuthor'> - " + json.quoteAuthor + "</div><br>";
            setTweetButton(json.quoteText, json.quoteAuthor);
            $(".quote").html(html);
        },
        error: function() {
            error = "<div>Error in retrieving information from API</div>";
            $(".quote").html(error);
        }
    });
}

function setTweetButton(quote, author) {
    $("#twitter-share-button").attr('href', 'https://twitter.com/intent/tweet?text="' + encodeURIComponent(
        quote + '" - ' + author
    ));
}

$(document).ready(function() {
    populateQuote();
    $("#newQuote").on("click", function() {
        populateQuote();
    });
});
