$(document).ready(function() {
  $('#user-input').submit(function() {
    event.preventDefault();
    $('#user-input').hide();
    var userSentence = $('#user-sentence').val();
    var letters = userSentence.split('');
    var vowels = ["a", "e", "i", "o", "u"]

    var puzzle=letters.map(function(letter) {
      if (vowels.includes(letter)){
        return('-')
      } else {
        return (letter)
      };



    });
    // displaySentence=displaySentence;
    var displaySentence = puzzle.join(' ');
    // console.log(displaySentence);
    $("#results").text(displaySentence);

  });
});
