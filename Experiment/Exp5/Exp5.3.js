// const express=require('express');
// const app=express();

// app.use(express.json());

// let students=[
//     { id:1, name:"Rahul", branch:"CSE"},
//     { id:2, name:"Aman",branch:"IT"}

// ];

// app.get('/',(req,res)=>{
//     res.send("Server is running");
// });

// app.post('/student',(req,res)=>{
//     const newStudent=req.body;
//     students.push(newStudent);
//     res.status(201).json({ message:"Student added successfully", student: newStudent})
// });

// app.listen(3005,()=>{
//     console.log("Server running at port 3005");
// });



// DELETE route - Delete student by ID
const express = require("express");

const app = express();

app.use(express.json());

// Existing student data
let students = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Aman",
        branch: "IT"
    },
    {
        id: 3,
        name: "Priya",
        branch: "CSE"
    }
];

// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});

// DELETE student
app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully",
        student: student
    });
});

// Start Server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});