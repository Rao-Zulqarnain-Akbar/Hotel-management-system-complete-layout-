// let number = [1,2,3]
// number.push(4,5,6);
// console.log(number);


// let fruit = ["orange","apple","mango"]
// let newfruit = prompt("Enter a fruit");
// fruit.push(newfruit);
// console.log(fruit);


// let fruit = ["mango","banana", "orange"]
// fruit.pop();
// console.log(fruit);

// let colors = ["red","blue","green"]
// let removedcolors = colors.pop();
// console.log(colors);
// console.log(removedcolors);


// let number = [1,2,3,4,5,6]
// let numremove = number.shift();
// console.log(number,numremove);

// let colors = ["Green", "Blue"]
// let length = colors.unshift("Red","Violet");
// console.log(colors);
// console.log(length);


// let fruits = ["orange","banana","cherry"]
// let vegetable = ["potato","tomato","onion"]
// let drinks = ["milk","coke","water"]
// let dryfruit = ["almond","cereals"]
// let eatable = fruits.concat(vegetable,drinks,dryfruit);
// console.log(eatable);


// let number = [1,2,3,4,5,6,7,8]
// let result = number.slice(0,4)
// console.log(result);


// let number = [1,2,3,4,5,6,7,8]
// let result = number.slice(-4)
// console.log(result);


// let arr = [2,4,5,6,7,12,45,65,32]
// let middle = arr.slice(1,-2)
// console.log(middle);


// let number = [10,20,30,40,50]
// let copy = number.slice();
// console.log("Original array:", number)
// console.log("Copied array:", copy)


// let products = ["Laptop","Smartphone","Keyboard","Mouse","Monitor",
//     "Headphones","Smart Watch","Tablet","Printer","Webcam",
//     "USB Flash Drive","External Hard Drive","Power Bank","Bluetooth Speaker","Charger"  
// ];
// let pageSize = 3;
// console.log("Page 1");
// console.log(products.slice(0,5));
// console.log("Page 2");
// console.log(products.slice(5,10));
// console.log("Page 3");
// console.log(products.slice(10,16));


// let str = "Hello World";
// let result = str.slice(6,11)
// console.log(result);


// let str = [1,2,3,4,5,6,7]
// function getlastN(arr,n) {
//     return str.slice(-n);
// }
// console.log(getlastN(str,3))


// let employees = [
//    {id:1, name:"Ali", position:"Manager", gmail:"ali@gmail.com", password:"12@3456"},
//      {id:2, name:"Aleem", position:"HR", gmail:"aleem@gmail.com", password:"12@0998"},
//        {id:3, name:"Ahmad", position:"Developer", gmail:"ahmad@gmail.com", password:"45678@3456"},
//          {id:4, name:"Asim", position:"Instructor", gmail:"asim@gmail.com", password:"12$3456"},
//               {id:5, name:"Amin", position:"CEO", gmail:"amin@gmail.com", password:"12%*3456"}
// ];
// let top_employees = employees.slice(0,3)
// console.log(top_employees);



// map method
// let number = [1,2,3,4,5,6]
// let result = number.map(function(num){
//     return num*2;
// }); console.log(result);


// let number = [20,30,40,50]
// let result = number.map(num => num+10);{
//     if (number.includes(40) ) {
//         console.log("Number present")
//     }
//     else{
//         console.log("Number not present")
//     }
// }
// console.log(result);

// filter method (1)
// let number = [10,20,30,40,50]
// let result = number.filter(function(num){
//     return num>20;
// })
// console.log(result);

// filter method (2)
// let number = [10,321,47,550,44,0,3]
// let result = number.filter( num=>num%2==0);{
//     console.log(result);
// }


// filter(3)
// let fruit = ["orange","banana","kiwi","mango","pomigranate"]
// let result = fruit.filter(fruit => fruit.length>5);
// console.log(result);


// filter(4)
// let student = [
//     {Name: "Ali", Marks: 89, Subject: "Science"},
//         {Name: "Alia", Marks: 80, Subject: "Arts"},
//             {Name: "Aleem", Marks: 79, Subject: "Economics"},
//                 {Name: "Alias", Marks: 92, Subject: "ICS"},
// ];
// let passed = student.filter(student => student.Marks>=85);
// passed.forEach ((student) => {
//    console.log(`Name: ${student.Name} ":" , Marks: ${student.Marks}, Subject: ${student.Subject}`)
// });

// let students = [
//     { name: "Ali", marks: 90 },
//     { name: "Sara", marks: 80 },
//     { name: "Ahmed", marks: 70 }
// ];

// let totalMarks = students.reduce((sum, student) => {
//     return sum + student.marks;
// }, 0);

// console.log(totalMarks);


// let number = [22,33,55,77,88,99]
// let largest = number.reduce((acc,current) => {
//      if (current>acc) {
//         return current;
//      }
//      else{
//         return acc;
//      }
// });
// console.log(largest);



// let student = [
//     {
//         name: "Ali",
//         subject: ["Math","English","ICT"]
//     },
//     {
//         name: "Ahmad",
//         subject: ["Science","Arts","Oops"]
//     },
//     {
//         name: "Aleem",
//         subject: ["Computer","HRM","ICS"]
//     }
// ];
// let allsubjects = student.flatMap( student =>student.subject);
// console.log(allsubjects);


// let fruits = ["Mango", "Apple", "Banana", "Orange"];
// fruits.sort();
// console.log(fruits);


// let numbers = [10,45,2,9,81];
// let result = numbers.sort((a,b) => a-b);
// console.log(result);


// let students = [
//     {name: "Ali", marks:77},
//     {nmae:"Ahmad", marks:109},
//     {name:"Arif", marks:9},
//     {name:"Aleem", marks:100}
// ];
// students.sort((a,b) =>a.marks-b.marks);
// console.log(students);



// let products = [
//     {name:"Laptop",price:900},
//     {name:"Phone",price:500},
//     {name:"Mouse",price:50},
//     {name:"Keyboard",price:100}
// ];
// products.sort((a,b)=>a.price-b.price);
// console.log(products);


// let name = "JavaScript";
// let reversed = name.split("").reverse().join("-");
// console.log(reversed);


