// When a user inputs a number
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
}

// If the current number is divisible by 3 then print "Fizz"


// If the current number is divisible by 5 then print "Buzz"


// If the current number is divisible by 3 and 5 then print "FizzBuzz"


// Otherwise print the current number
