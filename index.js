let numbers = [];
let sum = 0;

function sumInput() {
    for (;;) {
        let value = +prompt('What is your number?', '');
        if (!value) break;
        numbers.push(value);
        sum += value;
    }
    numbers.sort((a, b) => a - b);
}

sumInput();
alert(numbers);
alert(sum);

 // numbers.sort(function(a,b){
 //     return a - b;
 // })