
const btn = document.querySelector("#submit");
const n1  = parseInt(document.getElementById('num1').value);
const n2 = parseInt(document.getElementById('num2').value);
let output1 = document.querySelector("#output1").innerHTML="";
let output2 = document.querySelector("#output2").innerHTML="";


btn.addEventListener("click", validateInputs);


function validateInputs(event) {
    let first = parseInt(document.getElementById('num1').value);
    let second = parseInt(document.getElementById('num2').value);
    if (first < 2 || second < 2) {
        //check = false;
        result1 = "";
        result2 = "Invalid input, please try again";
    
    } 
    else if (first > 100 || second > 100) {
        result1 = "";
        result2 = "Invalid input, please try again";
        
        //check = false;
    }
    else if (checkPrime(first) === false || checkPrime(second) === false) {
        result1="";
        result2 = "Invalid input, please try again";
        
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
    
};


    
