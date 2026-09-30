//Create  routes that handle GET,POST,PUT,DELETE in Node.js

// const express= require('express');
// const app = express();

// //Student data
// let students = [
//     { id: 1,name:"Rahul",branch:"CSE"},
//     { id: 2,name:"Aman",branch:"IT"}
// ];

// //Get route
// app.get('/students',(req,res)=>{
//     res.json(students);
// });

// //Start server
// app.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000");
// });


const express = require('express');
const app = express();

let students = [
  { id: 1, name: 'Rahul', branch: 'CSE', age: 20 },
  { id: 2, name: 'Aman', branch: 'IT', age: 21 },
  { id: 3, name: 'Priya', branch: 'CSE', age: 20 },
  { id: 4, name: 'Neha', branch: 'ECE', age: 21 }
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student)
    return res.status(404).json({ message: 'Student not found' });

  res.json(student);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});