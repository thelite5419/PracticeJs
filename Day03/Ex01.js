/* 
Question 1

write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

*/

function Tocheck(a, b) {
    if(a===100){
        return true;
    }
    else if(b === 100){
        return true;
    }
    else if (a+b === 100){
        return true;
    }
    else{
        return false;
    }
}

console.log(Tocheck(100, 0));
console.log(Tocheck(1,100));
console.log(Tocheck(10, 0));
console.log(Tocheck(10, 0));
console.log(Tocheck(100, 10));
console.log(Tocheck(50,50));

// Optmized method
const toEqualto100 = (a,b)=> a===100 || b===100 || (a+b)===100;

console.log('toEqualto100(100,0) :>> ', toEqualto100(100,0));
console.log('toEqualto100(100,100) :>> ', toEqualto100(100,100));
console.log('toEqualto100(10,0):>> ', toEqualto100(10,0));
console.log('toEqualto100(1,10) :>> ', toEqualto100(1,10));
console.log('toEqualto100(50,50) :>> ', toEqualto100(50,50));