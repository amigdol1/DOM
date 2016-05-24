$(document).ready(function() {
  $("button#coffee").click(function() {
    $("ul#user").prepend("<li>Yo, I need coffee</li>");
    $("ul#webpage").prepend("<li>No you don't!!!</li>");
  });

  $("button#puppies").click(function() {
    $("ul#user").prepend("<li>I love puppies</li>");
    $("ul#webpage").prepend("<li>I like cats waaaaay more</li>");
  });

  $("button#sleep").click(function() {
    $("ul#user").prepend("<li>go to sleep</li>");
    $("ul#webpage").prepend("<li>Go to sleep then!!!</li>");
  });


});
