var correct = 0;
var incorrect = 0;
/*set the timer*/
function setTimer(){
    /*start timer*/
    var count = 10;//start 120 seconds
    var timeSet = setInterval(function() {
        
        $('.main').text("Time Remaining: " + count + " Seconds");
        if(count !== 0){
            count--;
            $('.main').text("Time Remaining: " + count + " Seconds");
        }else{
            /*end timer*/
                clearInterval(timeSet);
                $(".main").empty();//clear main
                $(".question1").empty();//clear question
                $(".answer1").empty();//clear answer
                $(".main").html("All Done!<br>Correct Answers:" + correct + "<br>Incorrect Answers:" + incorrect + "<br>Unanswered:");
            /*end timer*/
        }
    }, 1000);
    /*start timer*/       
}
/*set the timer*/
$(document).ready(function() {
    /*set start button*/
    var start = $('<button>start</button>');
    start.attr("type" , "button");
    start.addClass("btn btn-lg");
    $(".main").append(start);
    /*set start button*/
    /*function when clicking the button*/
    start.click(function () {
        $(".main").empty();//clear main
        $(".question1").empty();//clear question
        $(".answer1").empty();//clear answer
        setTimer();//set the timer
        $('.question1').append('What gift did Angela give Creed in "Classy Christmas," which aired in December 2010?');
        $('.answer1').append('<br><input type="radio" name="radio_group" value="1"> A kitty calendar</input>');
        $('.answer1').append('<br><input type="radio" name="radio_group" value="2"> A multi-pack of underarm deodorant</input>');
        $('.answer1').append('<br><input type="radio" name="radio_group" value="3"> Two tickets to see the band Creed perform</input>');
        $('.answer1').append('<br><input type="radio" name="radio_group" value="4"> A $20 gift certificate to the Scranton Skillet</input>');
        $('.answer1').click(function(){
            var selected = $("input[name='radio_group']:checked").val();
            selected = parseInt(selected);
            if(selected === 2){
                correct++;
            }else{
                incorrect++;
            }
        });
        
        /*for (var i = 0; i < 4; i++) {
            $('.answer').append('<br><input type="radio" name="radio_group" value="' + i + '"> test</input>');
        }*/
    });
    /*function when clicking the button*/
});