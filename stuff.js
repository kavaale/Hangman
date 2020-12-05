$(function (){
    $("form").submit(submitChoice);

    var words = ["funny", "submit", "function", "parse", "sweeper", "bleach", "guitar", "world", "metal",
    "display", "narcissist", "monday", "bones", "witch", "frayed", "powder"]; //length = 16
    var answer = words[(Math.random()*15).toFixed()];
    console.log(answer); //left in for easy debugging
    var i = 0;
    var answerArray = answer.split("");
    var outputArray = [];
    while(answer.length > i){
        outputArray.push(" _ ");
        i++;
    }
    var output = outputArray.join("");
    $("#wordConfirm").text(output);
    var image = 1;

    function submitChoice(event){
        event.preventDefault();
        if(image<7) {
            i = 0;
            var choice = $("#choice").val().toLowerCase();
            answerArray.forEach(function (item, index) {
                if (choice == answerArray[index]) {
                    outputArray[index] = item;
                    i++;
                }
            })
            $("input").val("");
            output = outputArray.join("");
            $("#wordConfirm").text(output);
            if (i < 1 && image < 7) {
                image++;
                $("#hangman").prop("src", "Hangman/hangman" + image + ".png");
                if(image==7){
                    $("#wordConfirm").text("You Lose!")
                }
            }
        }
    }
})