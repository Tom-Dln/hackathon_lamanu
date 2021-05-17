/* -----------------------------------------------
    Fichier JS
----------------------------------------------- */
// Vérification de la bonne connexion
console.log("Connexion JS - Ok")
$('img').on('dragstart', function(event) { event.preventDefault(); });
// Passage entre pages
$("#menu_start_button").click(function(e){
    e.preventDefault();
    $(".IG_screen").toggle( );
    $("#screen_menu").toggle();
    $("#game_over").hide();
})
$("#IG_menu_button").click(function(e){
    e.preventDefault();
    $(".IG_screen").toggle( );
    $("#screen_menu").toggle();
})
$("#game_over").hide();

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
    $("#IG_menu_button").hide();
    $("#in_game_theme")[0].play();
    $("#game_over").hide();
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
        crossRight()
        $(".IG_timer").html(timerNum)
        if (timerNum == 0) {
            console.log('fini')
            clearInterval(timerFunction);
            clearInterval(targetInterval);
            $("#IG_target").hide()
            $("#game_over").show();
            $("#IG_start_button").show();
            $("#IG_menu_button").show()
        }
    },1000)
}






function cross() {
    for (let i = 0; i < 90; i += 15) {
        if (timerNum <= 75 && timerNum == i) {
            $("#crossScreen").show()
            let randomCross = Math.floor(Math.random() * 80) + 10;
            $("#crossScreen").css("top", randomCross + '%')
            $("#crossScreen").addClass("IG_bonustarget");
            setTimeout(function () {
                $("#crossScreen").removeClass("IG_bonustarget");
            }, 3000)
        }
    }
}


function crossRight() {
    for (let i = 0; i < 90; i += 20) {
        if (timerNum <= 75 && timerNum == i) {
            $("#crossScreenRight").show()
            let randomCross = Math.floor(Math.random() * 80) + 10;
            $("#crossScreenRight").css("top", randomCross + '%')
            $("#crossScreenRight").addClass("IG_bonustargetRight");
            setTimeout(function () {
                $("#crossScreenRight").removeClass("IG_bonustargetRight");
            }, 3000)
        }
    }
}



$("#crossScreen").click(function () {
    score = score + 3
    $("#crossScreen").hide()
    $('#IG_hit')[0].play()

})

$("#crossScreenRight").click(function () {
    score = score + 4
    $("#crossScreenRight").hide()
    $('#IG_hit')[0].play()

})






