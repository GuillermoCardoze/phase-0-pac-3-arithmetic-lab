

function add(a , b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;   
}

function multiply(a, b) {
    return a * b;
}
 
function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n + 1;
  }
  
  console.log(increment(5)); 

function decrement(n) {
    return n - 1;
  }
  
  console.log(decrement(5)); 

  function makeInt(n) {
    return parseInt(n, 10);
  }

  function preserveDecimal(n) {
    return parseFloat(n);
  }

  console.log(preserveDecimal("3.14159")); // Output: 3.14159
console.log(preserveDecimal("2.71828")); // Output: 2.71828
console.log(preserveDecimal("10.5")); // Output: 10.5
