/*
    Name: Ayush Singh
    Title: random-quote-generator
*/

function populateQuote() {
    var api = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=";
    $.ajax(api, {
        headers: {
            "X-Mashape-Key": "2YzL9EPxnNmshf2N5ev9g4pwYRuRp1tYtubjsn4KOXHKylw9Vw",
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(json) {
            var r = JSON.parse(json);
            var quote = r.quote;
            var author = r.author;
            var html = "";
            html += '<div class="quoteMessage">"' + quote + '"</div><br>';
            html += "<div class='quoteAuthor'> - " + author + "</div><br>";
            setTweetButton(json.quote, json.author);
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
