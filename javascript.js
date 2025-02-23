function favoriteAnimal(animal) {
  return "My favorite animal is a " + animal;
}

console.log(favoriteAnimal("dog"));

function add7(num) {
  return num + 7;
}

console.log(add7(10))

function multiply(num1, num2){
  return num1 * num2;
}

console.log(multiply(9, 7))

function capitalize(string){
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("murphy"))

function lastLetter(string) {
  return string[string.length - 1];
}

console.log(lastLetter("murphy"))