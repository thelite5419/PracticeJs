function areaOfTriangle(a, b, c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log(`The area pf triangle having ${a} ${b} ${c} sides is ${area}`);
}

areaOfTriangle(3,4,5);
areaOfTriangle(5, 12, 13);
areaOfTriangle(9, 40, 41);
areaOfTriangle(12, 35, 37);