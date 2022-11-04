// import print from './exp/test.js';

// print();


function test() {
    let n = 5;

    return function () {
        return n++;
    }
}

const output = test();

console.log(output());
console.log(output());
console.log(output());
console.log();
const output2 = test();


console.log(output2());
console.log(output2());
console.log();

console.log(output());

