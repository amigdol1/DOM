$(document).ready(function() {
  $("button#coffee").click(function() {
    $("ul#user").prepend("<li>Yo, I need coffee</li>");
    $("ul#webpage").prepend("<li>No you don't!!!</li>");
    $('li').css('background-color','green');
    $("ul#user").children("li").first().click(function(){
      alert("coffee")
    });
    $("ul#webpage").children("li").first().click(function(){
      alert("coffee - webpage")
    });
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#puppies").click(function() {
    $("ul#user").prepend("<li>I love puppies</li>");
    $("ul#webpage").prepend("<li>I like cats waaaaay more</li>");
    $('li').css('background-color','orange');
  });

  $("button#sleep").click(function() {
    $("ul#user").prepend("<li>go to sleep</li>");
    $("ul#webpage").prepend("<li>Go to sleep then!!!</li>");
    $('li').css('background-color','red');
  });


});
