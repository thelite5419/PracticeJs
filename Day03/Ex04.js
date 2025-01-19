/*
Question 4

Write a JavaScript Program to get the current Date
Expected Output : 
mm-dd-yyyy
*/

const CurrentDate = (date = new Date()) => {
    const date1 = date.getDate();
    const months = date.getMonth()+1;
    const year = date.getFullYear();
    return `${date1}/${months}/${year}`;
}

console.log(CurrentDate());