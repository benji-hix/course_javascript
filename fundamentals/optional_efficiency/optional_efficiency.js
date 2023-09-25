const { performance } = require('perf_hooks');
const start = performance.now();

//* Prime numbers

Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
};


function primeCount(integer) {
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    while (primeCount < integer) {
        if (num.isPrime()) {
            primeCount++;
        }
        num++;
    }
    return num - 1;
}
// console.log(`The requested prime number is ${primeCount(5)}`);

//* Fibonacci ; iterative is slightly faster but it's close.

// // recursive
function rFibRecursive(n) {
    if (n < 2) {
        return n;
    }
    return rFibRecursive(n - 1) + rFibRecursive(n - 2);
}
// console.log(rFibRecursive(20));

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
// console.log(iFib(20));



//* Reverse a String

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)

// efficient version
const reversed2 = (string) => {
    let reverse = ''
    for (let i = string.length; i = 0; i--) {
        reverse += string[i]
    }
    return reverse
}
console.log(reversed2(story))

console.log(`This took ${performance.now() - start} milliseconds to run`);
