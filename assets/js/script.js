/* -----------------------------------------------
    Fichier JS
----------------------------------------------- */
// Vérification de la bonne connexion
console.log("Connexion JS - Ok")
// Passage entre pages
$("#menu_start_button").click(function(e){
    e.preventDefault();
    $(".IG_screen").toggle( );
    $("#screen_menu").toggle();
})



//animation target
$("#IG_target").hide()
const target = document.getElementById("IG_target")
const button = document.getElementById("IG_start_button")
let timerNum = 90
$("#IG_start_button").click( function () {
    clearInterval(timerFunction);
    clearInterval(targetInterval);
    start()
    interval()
    timer()
    timerNum = 90
    $("#IG_start_button").hide();
    $("#in_game_theme")[0].play();
})

function start (){
    let randomNumber = Math.floor(Math.random() * 80) +10;
    let randomNumber2 = Math.floor(Math.random() * 80) +10;
    $("#IG_target").css("top", randomNumber + '%')
    $("#IG_target").css("left", randomNumber2 + '%')
    $("#IG_target").show()
}

let score = 0

$("#IG_target").click(function(){
    $("#IG_target").hide()
    $('#IG_hit')[0].play()
    console.log($('#IG_hit'));
    score++
    $(".IG_score_value").html(score)
    timePaste = 0
})

let timePaste = 0
let targetInterval
function interval() {
    targetInterval = setInterval(function () {
        timePaste++
        if (timePaste == 3) {
            start()
            timePaste = 0
        }
    }, 500)
}


let timerFunction
function timer() {
    timerFunction = setInterval(function () {
        timerNum--
        cross()
        $(".IG_timer").html(timerNum)
        if (timerNum == 0) {
            console.log('fini')
            clearInterval(timerFunction);
            clearInterval(targetInterval);
            $("#IG_target").hide()
        }
    },1000)
}

function cross() {
    if (timerNum == 80) {
        console.log('oui')
        $("#crossScreen").css("right", "0")
    }
    
}




