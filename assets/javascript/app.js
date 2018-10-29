/*questionaire objects*/
var q0 = {
	question : '1. In the second season, Michael treats the office staff to a "booze cruise" in freezing January weather so he can perform motivational speaking. When Michael becomes frustrated that nobody is listening to him, what false allegation does he exclaim to get everyone s attention?',
	possibleAnswers : ['A. The sky is falling',
				        'B. Dwight fell overboard',
				        'C. The booze is gone',
				        'D. The ship is sinking'],
	flags : [false, false, false, true],
	answer : 'D. The ship is sinking'
};

var q1 = {
	question : '2. Who was the only character to successfully run barefoot across hot coals in "Beach Games," a third-season episode where Michael takes the office gang to Lake Scranton?',
	possibleAnswers : ['A. Pam',
				        'B. Michael',
				        'C. Creed',
				        'D. Phyllis'],
	flags : [true, false, false, false],
	answer : 'A. Pam'
};

var q2 = {
	question : '3. What ringtone song played repeatedly on Andy s cell phone when Jim hid it in the ceiling at the office?',
	possibleAnswers : ['A. "Another Brick in the Wall"',
				        'B. "867-5309/Jenny"',
				        'C. "Cannot Touch This"',
				        'D. "Rockin Robin"'],
	flags : [false, false, false, true],
	answer : 'D. "Rockin Robin"'
};

var q3 = {
	question : '4. What was the name of Angela s sick cat that Dwight killed?',
	possibleAnswers : ['A. Angel Tail',
				        'B. Sprinkles',
				        'C. Mr. Longwhiskers',
				        'D. Princess Puss'],
	flags : [false, true, false, false],
	answer : 'B. Sprinkles'
};

var q4 = {
	question : '5. Pam once participated in an art exhibit, which went badly. As she was leaving, Michael showed up and bought her drawing of their office building. What medium did Pam use to create this masterpiece?',
	possibleAnswers : ['A. oil paint',
				        'B. Pen-and-ink',
				        'C. Charcoal',
				        'D. Crayons'],
	flags : [false, false, false, true],
	answer : 'D. Crayons'
};

var q5 = {
	question : '6. When Andy was inviting everyone at the office to see him perform in the live show "Sweeney Todd," Dwight declined by saying:',
	possibleAnswers : ['A. "I will be busy washing my hair."',
				        'B. "The beets are ripe at Schrute Farms, and beets wait for no man."',
				        'C. "Last time I went to the theater a man dressed as a cat sat on my lap."',
				        'D. "It is illogical to observe humans attempt to dance and sing with merriment."'],
	flags : [false, false, true, false],
	answer : 'C. "Last time I went to the theater a man dressed as a cat sat on my lap."'
};

var q6 = {
	question : '7. When Dwight was brutally pummelling Jim with snowballs indoors, he warned Jim that he had a _____ for everybody in the office.',
	possibleAnswers : ['A. Snow cone',
				        'B. Bottle of beet juice',
				        'C. Pen',
				        'D. Wig'],
	flags : [false, false, false, true],
	answer : 'D. Wig'
};

var q7 = {
	question : '8. When a new manager was installed to oversee the Dunder Mifflin Scranton office, Michael quit and opened his own paper company. What was the name of this enterprise?',
	possibleAnswers : ['A. Scranton Paper Plus',
				        'B. Scraples',
				        'C. Michael Scott Paper Company',
				        'D. Paper R Us'],
	flags : [false, false, true, false],
	answer : 'C. Michael Scott Paper Company'
};

var q8 = {
	question : '9. The fictional Scranton street address of "The Office" is 1725 Slough Road. What is the significance of "Slough?"',
	possibleAnswers : ['A. It is the name of the street where Steve Carell grew up',
				        'B. The word describes a state of moral degradation',
				        'C. Slough is the location of the original British show, "The Office"',
				        'D. It was Phyllis maiden name'],
	flags : [false, false, true, false],
	answer : 'C. Slough is the location of the original British show, "The Office"'
};

var q9 = {
	question : '10. Employees from "The Office" took turns racing in front of a radar speed sign to see who could run the fastest. What did Michael claim was his speed?',
	possibleAnswers : ['A. 13 m.p.h.',
				        'B. 22 m.p.h.',
				        'C. 31 m.p.h.',
				        'D. 52 m.p.h.'],
	flags : [false, false, true, false],
	answer : 'C. 31 m.p.h.'
};
/*questionaire objects*/

var questions = [q0 , q1 , q2 , q3 , q4 , q5 , q6 , q7 , q8 , q9];//array of questionaire objects

var correct = 0;
var wrong = 0;
var unanswered = 10;
var count = 120;//start 120 seconds

/*set the timer*/
function setTimer(){
    /*start timer*/
    var timeSet = setInterval(function() {
        
        $('.main').text("Time Remaining: " + count + " Seconds");
        if(count !== 0){
            count--;
            $('.main').text("Time Remaining: " + count + " Seconds");
        }else{
            /*end timer*/
                clearInterval(timeSet);
                $(".main").empty();//clear main
                $(".questionaire").empty();//clear questionaire
                $(".main").html("All Done!<br>Correct Answers: " + correct + "<br>Incorrect Answers: " + wrong + "<br>Unanswered: " + unanswered);
            /*end timer*/
        }
    }, 1000);
    /*start timer*/       
}    
/*set the timer*/

$(document).ready(function() {

    /*set start button*/
    var start = $('<button>Start</button>');
    start.attr("type" , "button");
    start.addClass("btn btn-lg");
    $(".main").append(start);
    /*set start button*/

    /*function when clicking the start button*/
    start.click(function () {
        $(".main").empty();//clear main
        $(".questionaire").empty();//clear questionaire
        setTimer();//set the timer

        /*set the questions and answers*/
        for(var i=0; i<questions.length; i++){
            var dq = $('<div></div>');
            $(".questionaire").append(dq);
            dq.html("<br>" + questions[i].question);
            
            for(var j=0; j<4; j++){
                var da = $('<input> ' + questions[i].possibleAnswers[j] + '<br></input>');
                da.attr('type' , 'radio');
                da.attr('name' , 'radio_group' + i);
                da.attr('id' , j);
                da.attr('value' , i);
                da.addClass("answerchoice");
                $(".questionaire").append(da);
            }
        /*set the questions and answers*/

        }

        /*set submit button*/
        var submitbtn = $('<button>Submit</button>');
        submitbtn.attr("type" , "button");
        submitbtn.addClass("btn btn-lg mt-5");
        $(".questionaire").append(submitbtn);
        /*set submit button*/

        /*function when clicking the submit button*/
        submitbtn.click(function(){
            /*end timer*/
            count = 0;
            /*end timer*/
        });
        /*function when clicking the submit button*/

        /*functions for correct and incorrect answers*/
        $(".answerchoice").on('click' , function(){
            //console.log($(this));
            //console.log(questions[this.value]);
            //console.log(questions[this.value].flags);
            if(this.id === "0") {
                var answerChosen = 'A';
            } else if(this.id === "1") {
                answerChosen = 'B';
            } else if (this.id === "2") {
                answerChosen = 'C';
            } else if (this.id === "3") {
                answerChosen = 'D';
            }
            if ((answerChosen == 'A') && (questions[this.value].flags[0] == true)) {
                correct++;
            } else if (answerChosen == 'A') {
                wrong++;
            }
            if ((answerChosen == 'B') && (questions[this.value].flags[1] == true)) {
                correct++;
            } else if (answerChosen == 'B') {
                wrong++;
        
            }
            if ((answerChosen == 'C') && (questions[this.value].flags[2] == true)) {
                correct++;
            } else if (answerChosen == 'C') {
                wrong++;
            }
            if ((answerChosen == 'D') && (questions[this.value].flags[3] == true)) {
                correct++;
            } else if (answerChosen == 'D') {
                wrong++;
            }
            unanswered = 10 - (correct + wrong) ;
        });
        /*functions for correct and incorrect answers*/
    
    });
    /*function when clicking the start button*/

});