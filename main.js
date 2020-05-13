
const btn = document.querySelector("#submit");
const n1  = parseInt(document.getElementById('num1').value);
const n2 = parseInt(document.getElementById('num2').value);
let output1 = document.querySelector("#output1").innerHTML="";
let output2 = document.querySelector("#output2").innerHTML="";


btn.addEventListener("click", validateInputs(n1, n2));


function validateInputs(first, second) {
    let check = true;
    if (first < 2 || second < 2) {
        //check = false;
        result1 = "";
        result2 = "Invalid input, please try again";
        break;
    } 
    else if (first > 100 || second > 100) {
        result1 = "";
        result2 = "Invalid input, please try again";
        break;
        //check = false;
    }
    else if (checkPrime(start) === false || checkPrime(second) === false) {
        result1="";
        result2 = "Invalid input, please try again";
        break;
    }
    else {
        if (first < second) {
            primes = getPrimes(first, second);
            
        }
        else {
            primes = getPrimes(second, first);
            
        }
        result1 = (`There are ${primes.length} prime numbers`);
        result2 = (primes + ',');
    }
    let output1 = document.querySelector("#output1").innerHTML = result1;
    let output2 = document.querySelector("#output2").innerHTML = result2;
}

function checkPrime(num) {
    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i !== 0) {
                return true;
            }
            else if (num === i * i) {
                return false
            }
            else {
                return false;
            }
        }
    }
    else {
        return false;
    }
}

function getPrimes(start, stop) {
    let primes = [];
    for (let i = 2; i <= stop; i++) {
        let isPrime = true;
        for (var j = 0; j < primes.length; j++) {
            let d = primes[j];
            if (i % d === 0) {
                //it is divisible by another prime, so it's not prime
                isPrime = false;
                break;
            }
            //you don't need to check primes bigger than sqrt(i)
            if (d * d > i)
                break;
        }
        if (isPrime){
            primes.push(i);
        }            
    }
    return primes;
    

    
    /* document.getElementById('output1').innerHTML = (`There are ${primes.length} prime numbers`);
    document.querySelector("#output2").innerHTML = (primes + ','); */
    
};






/*  while (start <= end) {
        if (checkPrime(start) === true && checkPrime(end) === true) {
            primes[primes.length] = start;
        }
        start = start + 1;  
    } */

   /*  if (count === 0) {
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
 */



/*
function listPrimes(vals) {
    let text = "<h2>Prime Numbers</h2>";
    for (i = 0; i < vals.length; i++) {
        text += vals[i] + ",";
    }
    return text;
    
} */

    
