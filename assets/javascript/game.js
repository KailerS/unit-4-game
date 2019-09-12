var targetScore = 0;
var roundScore = 0;
var wins = 0;
var losses = 0;
var crystals = $(".crystal")

crystals.attr("data-value", Math.floor(Math.random()*25)+5)

function gameStart(){
    targetScore = Math.floor(Math.random()*101)+50;
    roundScore = 0;
};
$(".crystal").on("click",function(){
    var crystalValue = ($(this).attr("data-value"));
    console.log(crystalValue);
}
    

);

