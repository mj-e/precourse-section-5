var questions = ["Question 1","Question 2","Question 3","Question 4","Question 5","Question 6","Question 7","Question 8","Question 9",
                "Question 10", "Question 11", "Question 12", "Question 13", "Question 14", "Question 15", "Question 16", "Question 17",
                "Question 18", "Question 19", "Question 20"];


function checkQ(x) {
    var qArr = document.getElementsByName(x);

    for (var i = 0; i < qArr.length; i++) {
        if (qArr[i].checked) {
            if (qArr[i].value === "correct") {
                console.log(qArr[i].name + " correct!");
            }
            else{
                console.log(qArr[i].name + " wrong!");
                }
            }
    }
}

function checkAll() {
    
    for (var i = 0; i < questions.length; i++) {
        checkQ(questions[i]);
    }
    
}

function checkComplete(arr) {
    
            
    var allDone = false;
    for (var i = 0; i < arr.length; i++) {
        var qArr = document.getElementsByName(arr[i]); 
       if (!qArr[0].checked && !qArr[1].checked && !qArr[2].checked) {
           allDone = false;
           return allDone;
       }
       else{
           allDone = true;
       }
    }
}

function totalScore(arr) {
    
var correct = 0;

    for (var i = 0; i < arr.length; i++) {
        var qArr = document.getElementsByName(arr[i]);
        for (var j = 0; j < qArr.length; j++) {
            if (qArr[j].checked) {
                if (qArr[j].value === "correct") {
                    correct ++;
                    }
                 }
            }
        }
    console.log("You scored " + correct + " out of 20 = "  + (correct / 20 * 100) + "%");
    return correct;   
    
}

function allFuncs() {
    
        totalScore(questions);
        checkAll();
        if (checkComplete(questions) === false) {
        alert("Please complete all questions.");
        }
}