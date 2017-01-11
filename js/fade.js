var state = "PROJECTS";

$("#interests").click(function(){
  $(".fade-elem").fadeOut(function() {
    $('#contact-row').fadeOut();

    $('#h-1').text("Muay Thai");
    $('#h-2').text("Running");
    $('#h-3').text("Strategy Games");

    $('#s-1').text("Kick Boxing++");
    $('#s-2').text("Stress Relief");
    $('#s-3').text("Liesure");

    $('#i-1').html(
      '<img src="images/mt_draw.jpg" class="img-responsive img-center fade-elem" >'
    );
    $('#i-2').html(
      '<img src="images/background_sketch.jpg" class="img-responsive img-center fade-elem">'
    );
    $('#i-3').html(
      '<img src="images/strat.jpg" class="img-responsive img-center fade-elem" >'
    );

    // Highlight the currently selected link
    $("#interests-link").addClass('active');
    $("#contact-link").removeClass('active');
    $("#projects-link").removeClass('active');

  }).fadeIn();
});

$("#projects").click(function(){
  $(".fade-elem").fadeOut(function() {
    $('#contact-row').fadeOut();

    $('#h-1').text("Train Simulator");
    $('#h-2').text("Facebook Analysis");
    $('#h-3').text("RTS Game");

    $('#s-1').text("Honours Project");
    $('#s-2').text("Data Processing");
    $('#s-3').text("Node, Pixi, handlebars");

    $('#i-1').html(
      '<a href="https://github.com/vanhunick/Train-Simulator" target="_blank"><img src="images/train_draw.jpg" class="img-responsive img-center fade-elem" ></a>'
    );
    $('#i-2').html(
      '<a href="https://github.com/vanhunick/Facebook-Analysis" target="_blank"><img src="images/facebook_sketch.jpg" class="img-responsive img-center fade-elem" ></a>'
    );
    $('#i-3').html(
      '<a href="https://github.com/vanhunick/RTS" target="_blank"><img src="images/background_sketch.jpg" class="img-responsive img-center fade-elem" ></a>'
    );

    // Highlight the currently selected link
    $("#projects-link").addClass('active');
    $("#contact-link").removeClass('active');
    $("#interests-link").removeClass('active');

  }).fadeIn();
});

$("#contact").click(function(){
  $(".fade-elem").fadeOut(function() {

    // Highlight the currently selected link
    $("#contact-link").addClass('active');
    $("#projects-link").removeClass('active');
    $("#interests-link").removeClass('active');

    // $('#contact-row').show();

  }).fadeOut();
  $('#contact-row').fadeIn();
});

$(document).ready(function() {
    $('#contact-row').hide();
});
