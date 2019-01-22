$(document).ready(function() {
  var computerNumber = Math.floor(Math.random() * 101 + 19);
  var userGuess = 0;
  var wins = 0;
  var losses = 0;

  gameReset();

  function gameReset() {
    userGuess = 0;
    computerNumber = Math.floor(Math.random() * 101 + 19);
    $("#computerNumber").text(computerNumber);

    $("div#jewelDiv img").each(function() {
      randNum = Math.floor(Math.random() * 11 + 1);
      $(this).attr("crystalNum", randNum);
    });

    $("#userGuess").text(userGuess);
  }

  //function for if the user gets the same number
  function sameNumber() {
    if (userGuess === computerNumber) {
      alert("You Win!");
      wins++;
      $("#wins").text(wins);
      gameReset();
    }
  }

  //function for if the user goes over the computer number
  function differentNumber() {
    if (userGuess > computerNumber) {
      alert("You Lose!");
      losses++;
      $("#losses").text(losses);
      gameReset();
    }
  }

  $("div#jewelDiv img").on("click", function() {
    crystalNumber = $(this).attr("crystalNum");

    userGuess = parseInt(userGuess);
    userGuess += parseInt(crystalNumber);

    $("#userGuess").text(userGuess);

    if (userGuess === computerNumber) {
      sameNumber();
    }

    if (userGuess > computerNumber) {
      differentNumber();
    }
  });
});
