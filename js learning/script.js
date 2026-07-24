let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));
let op = prompt("Enter the operator(+,-,*,/)")

if (op == "+") {
   document.write(num1 + num2);
}
else if (op == "-") {
    document.write(num1 - num2);
}
else if (op == "*") {
    document.write(num1 * num2);
} 
else if (op == "/") {
     document.write(num1 / num2);
} 
else {
     document.write("Invalid statement");
}