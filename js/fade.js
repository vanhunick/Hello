$("#interests").click(function(){
  console.log("Click");
  $(".fade-elem").fadeOut(function() {
    $('#h-1').text("Muay Thai");
    $('#h-2').text("Running");
    $('#h-3').text("Strategy Games");
  }).fadeIn();
});
