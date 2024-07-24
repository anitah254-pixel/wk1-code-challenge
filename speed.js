const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const excessSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
}

rl.question("Enter the speed of the car (km/s): ", (input) => {
  const speed = parseInt(input);

  if (!isNaN(speed)) {
    calculateDemeritPoints(speed);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  // Close the readline interface
  rl.close();
});
