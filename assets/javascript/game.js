var targetScore = 0;
var roundScore = 0;
var wins = 0;
var losses = 0;
var crystals = $(".crystal")
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

crystals.attr("data-value", Math.floor(Math.random()*25)+5)

function randomizeValue(){
   return  Math.floor(Math.random()*25)+5;
}


function gameStart(){
    targetScore = Math.floor(Math.random()*101)+50;
    roundScore = 0;
    // crystalValues.key = Math.floor(Math.random()*25)+5
    wins = 0;
    losses = 0;
};

gameStart()
// console.log(crystalValues.key);

$(".crystal").on("click",function(){
    // var crystalValue = ($(this).attr("data-value"));
    var crystalValue = ($(this));
    roundScore =+ crystalValue;
    console.log($(this));
});


