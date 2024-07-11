const prompt = require('prompt-sync')();

function studentMarks(){
    let marks = parseFloat(prompt('Enter students marks:'));
    if(marks > 79 &&marks <= 100){
        console.lo('A');
    } else if(marks >= 60 &&marks <= 79){
        console.lo('B');
    } else if(marks > 49 &&marks <= 59){
        console.lo('C');
    } else if(marks >= 40 &&marks <= 49){
        console.lo('D');
    } else if(marks >=0 &&marks < 40){
        console.lo('E');
    } else{
        console.lo('invalid')
    }
}

studentMarks();