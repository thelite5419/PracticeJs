function swappingWithoutVariable(a, b) {
    console.log(`Before Swapping varible`);
    console.log(`first value is :${a}`);
    console.log(`second value is : ${b}`);
    
    a = a+b;
    b = a-b; 
    a = a-b;

    console.log(`After Swapping varible`);
    console.log(`first value is :${a}`);
    console.log(`second value is : ${b}`);
}

swappingWithoutVariable(10, 50);
swappingWithoutVariable(50, 90);
swappingWithoutVariable(80, 5);
