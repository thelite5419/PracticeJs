//WAP to check if it is male or female and check if it is male the age should be abive 26 and height should be above 170 and if it is female the age should be above 22 and height should be above 160 
let candidate = {
    name: "anand", 
    gender: "male", 
    height: 150,
    age: 21
}

let candidate2 = {
    name: "gauri", 
    gender: "female", 
    height: 165,
    age: 22
}
console.log('candidate :>> ', candidate);
if(candidate.gender==="male"){
    if(candidate.age>=26 && candidate.height>=170)
        console.log(`${candidate.name} is selected`);
    else{
        console.log(`${candidate.name} is not selected`);   
    }
}

if(candidate2.gender==="female"){
    if(candidate2.age>=22 && candidate2.height>=160)
        console.log(`${candidate2.name} is selected`);
    else
        console.log(`${candidate2.name} is not selected`);   
}