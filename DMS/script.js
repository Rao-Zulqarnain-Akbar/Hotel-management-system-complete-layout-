let ds = Number(prompt("Enter the Data Science marks"));
let ml  = Number(prompt("Enter the Machine Learning marks"));
let eng = Number(prompt("Enter the English marks"));
let web = Number(prompt("Enter the Web Technology marks"));
let oops = Number(prompt("Enter the Advanced Oops marks"));

let obtainedmarks = ds + ml + eng + web + oops;
let totalmarks = 500;
let percentile = (obtainedmarks / totalmarks) * 100;

let grade;

if (percentile>=90) {
    console.log(grade = "A");
}
else if(percentile>=80) {
    console.log(grade = "B");
}
else if(percentile>=70) {
    console.log(grade = "C");
} 
else if(percentile>=60) {
    console.log(grade = "D");
}  
else if(percentile>=50) {
    console.log(grade = "E");
}
else if (percentile<50) {
    console.log(grade = "F");
}
else {
    console.log("Invalid input");
}

console.log(`Data Science : ${ds}`); document.write(`Data Science : ${ds}<br>`);
console.log(`Machine Learning : ${ml}`); document.write(`Machine Learning : ${ml}<br>`);
console.log(`English : ${eng}`); document.write(`English : ${eng}<br>`);
console.log(`Web Technology : ${web}`); document.write(`Web Technology : ${web}<br>`);
console.log(`Advanced Oops : ${oops}`); document.write(`Advanced Oops : ${oops}<br>`);

console.log(`Obtained Marks : ${obtainedmarks}`);
document.write(`Obtained Marks : ${obtainedmarks}<br>`); 
console.log(`Percentile : ${percentile}`); 
document.write(`Percentile : ${percentile}<br>`);
console.log(`Grade : ${grade}`); 
document.write(`Grade : ${grade}`);
