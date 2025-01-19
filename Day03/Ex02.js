/*
Question 2

write a javascript program to get teh extention of a filename 
for e.g. 
input = index.html
output = .html
*/

const findExtention = (str) => {  
    return str.slice(str.lastIndexOf("."));
}

console.log('findExtention(index.html) :>> ', findExtention("index.html"));
console.log('findExtention(style.css) :>> ', findExtention("style.css"));
console.log('findExtention(file.config.js) :>> ', findExtention("file.config.js"));