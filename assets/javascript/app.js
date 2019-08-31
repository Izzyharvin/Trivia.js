$(document).on(function () {
    $("start").on("click", gameStart);
})

$(document).ready(function () {
    var secs = 30;
    var timer = setInterval(function () {
        secs--; console.log(secs);
            document.getElementById("time").innerHTML = secs;
        if (secs === 0) {
              clearInterval(timer);
              for (let i = 0; i < answers.length; i++) {
                console.log(answers[i]);
        
                if (answers[i] === $("#options" + ([i + 1])).val()) {
                    correct++
                }
                else {
                    wrong++
                }
            }
            $('.modal').modal('toggle')
        
        }          

    }, 1000);
});

$("#checkanswers").click(function () {
    // console.log("click")
    for (let i = 0; i < answers.length; i++) {
        console.log(answers[i]);

        if (answers[i] === $("#options" + ([i + 1])).val()) {
            correct++
        }
        else {
            wrong++
        }
    }
    $('.modal').modal('toggle', function() {
        if(value === answers) {
            ("You got " + correct + " correct!")
        }
    })
})


var correct = 0;
var wrong = 0;
var answers = [
    'Escanor',
    'Natsu',
    'Shield Hero',
    'Uchiha Clan',
    'Asta',
    'People form into demons by Muzan',
    'Dungeons'
];