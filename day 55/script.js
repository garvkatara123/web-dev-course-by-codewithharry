// Solution Using Reduce

// const factorial = (n) => {
//   if (n < 0) {
//     return "undefined";
//   } else if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
// }
// let n = prompt("enter a number:- ");
// console.log(factorial(n)); 

// Solution usinf for loop

let n = prompt("Enter a number: ");
let fact = 1;
if(n == 0 || n == 1) {
  console.log(1);
}
else{
    for(let i = 2; i <=n; i++){
        fact *= i;
    }
    console.log(fact);
}

