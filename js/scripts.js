$(function() {
  $('form').submit(function(){
    var points = parseInt($('input[name=q1]:checked').val()) + parseInt($('input[name=q2]:checked').val()) + parseInt($('input[name=q3]:checked').val()) + parseInt($('input[name=q4]:checked').val());
    var superhero;
    if ( points <= 5 ) {
      superhero = "Superman";
    } else if ( points < 10 ) {
      superhero = "Ant-man";
    } else if ( points < 15 ) {
      superhero = "Spiderman";
    } else if ( points <= 20 ) {
      superhero = "Deadpool";
    } else {
      superhero ="You suck!";
    }
    $('#hero').text(superhero);
    event.preventDefault();
  });
})
