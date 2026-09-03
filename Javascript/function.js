// // // function displayStudent(student){
// // //     console.log(student);
// // //     // console.log(student.name);
// // //     // console.log(student.age)
// // // }
// // // let student={
// // //     name:"priya",
// // //     age:30

// // // };
// // //displayStudent(student);

// // let student_arr = [
// //     {
// //         name:"Rahul",
// //         age:21
// //     },
// //     {
// //         name:"Shivam",
// //         age:45
// //     },
// //     {
// //         name:"raj",
// //         age:34
// //     },
// // ];
// // function dispalyStudents(data){
// //     for(let student of data){
// //         console.log(student.name,student.age);
// //     }
// // }
// // displayStudents(student_arr);

//   let student = {
//     name: "raj",
//     marks: [80, 50, 30]
// };

// function displayStudent(student) {
//     console.log(student.name);
//     console.log(student.marks);
// }

// displayStudent(student);

// function calculateTotal(student) {
//     let total = 0;

//     for (let mark of student.marks) {
//         total += mark;
//     }

//     return total;
// }

// let result = calculateTotal(student);
// console.log(result);


// let r=function(a,b)
// {
//     console.log(a+b);
// }
// r(10,5);

// function a_func(a,b){
//     let s,m,mu,rem;
//     s=a+b;
//     m=a-b;
//     mu=a*b;
//     rem=a%b;
//     console.log(`sum=${s} substraction=${m} multiplication=${mu} and rem =${rem}`)

//}
//a_func(10,5);
// let r=function(a,b)
// {
//     console.log(a+b)
// };
// r(10,5);

//const res=(a,b) => {return a+b}
//console.log(res(2,3))

// function  greet (name){
//     console.log("Hello "+ name);
// }

// function processUser(callback){
//     callback("Rahul");
// }
// processUser(greet)

function calculate(a,b,callback){
    let result = a+b;
    callback(result);
}
function display(result){
    console.log("Result = ",result);
}
calculate(10,20,display);