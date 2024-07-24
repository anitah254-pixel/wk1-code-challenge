const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateGrade(marks) {
  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

rl.question("Please enter student marks (0-100): ", (input) => {
  const marks = parseInt(input);

  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    const grade = calculateGrade(marks);
    console.log(`The student's grade is: ${grade}`);
  } else {
    console.log("Invalid input. Please enter a number between 0 and 100.");
  }

  rl.close();
});
