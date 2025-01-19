/*
Question 5

Write a Javascript program to creat a new string adding "!New" in the front of a given string. 
If the given string begins with "!New" already then return the original string
*/

const newOffer = (str) =>{ 
    return str.indexOf("!New") === 0 ? str : `!New ${str}`;
}
console.log(newOffer("offer"));
console.log('newOffer("!New Gifts") :>> ', newOffer("!New gifts"));