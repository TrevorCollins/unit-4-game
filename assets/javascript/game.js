var wins = 0;
var losses = 0;
var score = 0;
var number;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

game();

function game() {
    var number = Math.floor((Math.random() * 120) + 19);
    var redNumber = Math.floor((Math.random() * 12) + 1);
    var greenNumber = Math.floor((Math.random() * 12) + 1);
    var blueNumber = Math.floor((Math.random() * 12) + 1);
    var yellowNumber = Math.floor((Math.random() * 12) + 1);

    $("#score").text(score);

    $("#randomNumber").text(number);

    $("#red").on("click", function() {
        score = score + redNumber;
        $("#score").text(score);
    });

    $("#green").on("click", function() {
        score = score + greenNumber;
        $("#score").text(score);
    });

    $("#blue").on("click", function() {
        score = score + blueNumber;
        $("#score").text(score);
    });

    $("#yellow").on("click", function() {
        score = score + yellowNumber;
        $("#score").text(score);
    });
};

if (score === number) {
    wins++;
    game();
    console.log(wins);
};

if (score > number) {
    losses++;
    game();
};

console.log(score);
console.log(number);