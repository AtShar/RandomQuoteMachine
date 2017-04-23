$(document).ready(function() {

  setbackground();
  fetchQuoteData();

  $("#postTwitter").click(function() {
    $("#postTwitter").attr("href", "https://twitter.com/intent/tweet?text=" + $("#quoteContent").html());
  });

  $("#newQuote").click(function() {

    fetchQuoteData();
    setbackground();
  });

});

function fetchQuoteData() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {

    $("#quoteContent").html(json["quoteText"]);
    $("#quoteAuthor").text("-" + json["quoteAuthor"]);
  });
}

function setbackground() {

  var index = Math.round(Math.random() * 9);

  var ColorValue = "A9A9A9"; // default color - white (index = 0)

  if (index == 1)
    ColorValue = "708090";
  if (index == 2)
    ColorValue = "EE82EE";
  if (index == 3)
    ColorValue = "708090";
  if (index == 4)
    ColorValue = "6A5ACD";
  if (index == 5)
    ColorValue = "00FA9A";
  if (index == 6)
    ColorValue = "3CB371";
  if (index == 7)
    ColorValue = "20B2AA";
  if (index == 8)
    ColorValue = "2F4F4F";
  if (index == 9)
    ColorValue = "CCCCCC";

  $("#mainContainer").css('background-color', "#" + ColorValue);
  $("#twitterContainer").css('background-color', "#" + ColorValue);
  $("#newQuote").css('background-color', "#" + ColorValue);

  $(".fa-quote-right").css('color', "#" + ColorValue);
  $(".fa-quote-left").css('color', "#" + ColorValue);
  $("#quoteContent").css('color', "#" + ColorValue);
  $("#quoteAuthor").css('color', "#" + ColorValue);
}