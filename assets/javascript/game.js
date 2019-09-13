var targetScore = 0;
var roundScore = 0;
var wins = 0;
var losses = 0;
var crystalValues = {
    ruby:{
        value: randomizeValue(),
    }, 
    emerald: {
        value: randomizeValue(),
    },
    sapphire: {
        value: randomizeValue(),
    },
    omi: {
        value: randomizeValue(),

    },
};
console.log(crystalValues);


function randomizeValue(){
   return  Math.floor(Math.random()*25)+5;
}


function gameStart(){
    targetScore = Math.floor(Math.random()*101)+100;
    roundScore = 0;
    wins = 0;
    losses = 0;
    $("#targetScore").text(targetScore);
};

function gameReset() {
    roundScore = 0;
    targetScore = Math.floor(Math.random()*101)+100;
    $("#targetScore").text(targetScore);
    crystalValues.ruby.value = randomizeValue();
    crystalValues.emerald.value = randomizeValue();
    crystalValues.sapphire.value = randomizeValue();
    crystalValues.omi.value = randomizeValue();
};

gameStart();

$(".crystal").on("click",function(){
    var clickedCrystal = $(this).attr("data-name");
    console.log(clickedCrystal);
    switch (clickedCrystal) {
        case "ruby":
            roundScore += crystalValues.ruby.value
            break;
        case "emerald": 
            roundScore += crystalValues.emerald.value
            break;
        case "sapphire":
            roundScore += crystalValues.sapphire.value
            break;
        case "omi":
            roundScore += crystalValues.omi.value
            break;
        default:

    };
    $("#totalScore").text(roundScore);

    if (roundScore === targetScore) {
        ++wins;
        $("#wins").text("Wins: " + wins);
        alert("You've won!");
    } else if (roundScore > targetScore){
        alert("You've gone too high! You lose!");
        ++ losses;
        $("#losses").text("Losses: " + losses);    
    }
    console.log(roundScore);
    
});

gameReset();

