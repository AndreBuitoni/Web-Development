var output = [];
var count = 1;

function fizzBuzz() {

    while(count <= 100) {

        if (output % 3 === 0 && output % 5 === 0) {
            output.push("FizzBuzz")
        } else if (output % 3 === 0 && output % 5 !== 0) {
            output.push("Fizz")
        } else if (output % 3 !== 0 && output % 5 === 0) {
            output.push("Buzz")
        } else {
            output.push(count)
        }

    count++;

    }
 
}

fizzBuzz();