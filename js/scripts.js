$(document).ready(function() {
  $('#user-input').submit(function() {
    event.preventDefault();
    $('#user-input').hide();
    var userSentence = $('#user-sentence').val();
    var letters = userSentence.split('');

    var puzzle=letters.map(function(letter) {
      if (letter === "a" || letter === "e"){
        return('-')
      } else {
        return (letter)
      }
    });
      console.log(puzzle);


  });
});
