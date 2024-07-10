const prompt =requires("prompt-sync")();

function speedDetector(){
    let speed = parseFloat(prompt('Enter speed of the car:'));

    if(speed < 70){
        console.log('Ok);
        return'Ok';
    } else{
        let point = Math.floor((speed -70)/5);
        if(point > 12){
            console.log('license suspended');
            return'license suspended';
        } else{
            console.log(Your demerit points are: ${points});
            return Your demerit points are: ${points};
        }
    }
}
console.log(speedDetector());