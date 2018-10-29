// 01100001
// 0 64 32 0 0 0 0 1
// 128 64 32 16 8 4 2 1
// we shall get 97

// user input (fixed for now)

// keep track of the current sum
// looping through
// convert the number into ascii

function binaryToAscii(input) {
  if (input.length === 8) {
    // iterate through every number in input
    let sum = 0;
    input.split('').reverse().forEach(function (binary, index) {
      if (Number(binary) !== 0) {
        sum += Math.pow(2, index);
      }
    });
    return String.fromCharCode(sum);
  } else {
    throw new Error('Input must be at least 8 chars long!');
  }
}
function asciiToBinary(input) {
  // iterate through every number in input
  let arr = [];
  input.split('').forEach(function (binary, index) {
    arr.push(binary.charCodeAt(0).toString(2));
  });
  return arr;
}


// stack overflow link to code
// https://stackoverflow.com/questions/8128578/reading-value-from-console-interactively
var stdin = process.openStdin();

console.log('Insert anything I will convert it to binary for you. :)')

stdin.addListener("data", function (d) {
  // note:  d is an object, and when converted to a string it will
  // end with a linefeed.  so we (rather crudely) account for that
  // with toString() and then trim()
  let userInput = d.toString().trim();
  console.log(asciiToBinary(userInput).join(" ") + "\n");

  console.log('Insert anything I will convert it to binary for you. :)')
});



