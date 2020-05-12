let formElement = document.querySelector("form");
let btn = document.querySelector("#submit");
let output1 = document.querySelector("#output1").innerHTML="";
let output2 = document.querySelector("#output2").innerHTML="";


formElement.addEventListener("click", (e) => {
    e.preventDefault();
    const n1 = formElement.querySelector("#num1").value;
    const n2 = formElement.querySelector("#num2").value;
// first check if inputs are between 2 and 100
    if (n1 >= 2 && n1 <= 100) {
        if (n2 >= 2 && n2 <= 100 ) {
        // check which is bigger
            if (n1<n2) {
                //output2
                result = getPrimes(n1,n2);
            }
            else {
                result = getPrimes(n2,n1);
            }
        }
    } 
    else {
        //output2
        result = "Invalid input, please try again";
    }
    return result;
    
});


function getPrimes(start, end) {
    let primes = new Array();
    while (start <= end) {
        if (checkPrime(start) === true && checkPrime(end) === true) {
            primes[primes.length] = start;
        }
        start = start + 1;  
    }

    if (primes.length === 0) {
        //output2
        result2 = "Invalid input, please try again";
    }  
    else {
        // output1
        result1 = listPrimes(primes);
        //listPrimes(primes);
    }
    document.querySelector('#output2').innerHTML= result2;
    document.querySelector('#output1').innerHTML = result1;
}

function checkPrime(num) {
    let check = true;
    for (let i = 2; i <= Math.ceil(num / 2); i++) {
        if ((num % i) === 0) {
            check = false;
            break;
        }
    }
    return check;
}

function listPrimes(vals) {
    let text = "<h2>Prime Numbers</h2>";
    for (i = 0; i < vals.length; i++) {
        text += vals[i] + ",";
    }
    return text;
    
}


    
//     //clear the result div
//     document.getElementById("result").innerHTML = '';

//     //loop till i equals to end
//     for (i = start; i <= end; i++) {
//         c = 0;
//         for (j = 1; j <= i; j++) {
//             // % modules will give the reminder value, so if the reminder is 0 then it is divisible
//             if (i % j === 0) {
//                 //increment the value of c
//                 c++;
//             }
//         }

//         //if the value of c is 2 then it is a prime number
//         //because a prime number should be exactly divisible by 2 times only (itself and 1)
//         if (c == 2) {
//             document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
//         }
//     }
// }
    
// /* function calcPrimeNumber() {

//     
//  */

// //check if inputs are prime
// /* function primes() {
//     const num1 = document.getElementById("num1");
//     const num2 = document.getElementById("num2");

//     //find start and end 
//     if (num1 < num2) {
//         let start = num1;
//         let end = num2;
//         //check 
//     }
//     else {
//         let start = num2;
//         let end = num1;

//     }

//     if (start >= 2 && end >= 2) {
//         if (start < 100 && end < 100) {
//             if (start % 2 === 0)
//         }
//     } 
//     else {
//         result1 = "Invalid input, please try again";
//     } 
//     else if ()
//     for(start=)
//         result1 = "Invalid input, please try again";
// } */