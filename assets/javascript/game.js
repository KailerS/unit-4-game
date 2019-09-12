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
    Omi: {
        value: randomizeValue(),

    },
}
console.log(crystalValues);


function randomizeValue(){
   return  Math.floor(Math.random()*25)+5;
}


function gameStart(){
    targetScore = Math.floor(Math.random()*101)+50;
    roundScore = 0;
    wins = 0;
    losses = 0;
};

gameStart()

$(".crystal").on("click",function(){
    var clickedCrystal = $(this).attr("data-name")
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
            roundScore += crystalValues.Omi.value
            break;
        default:

    }
    $("#totalScore").text(roundScore);
    console.log(roundScore);
    
});

