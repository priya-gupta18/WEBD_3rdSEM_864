// const express = require("express");

// const app = express();

// app.use(express.json());

// // Existing student data
// let students = [
//     {
//         id: 1,
//         name: "Rahul",
//         branch: "CSE"
//     },
//     {
//         id: 2,
//         name: "Aman",
//         branch: "IT"
//     }
// ];

// // Home route
// app.get("/", (req, res) => {
//     res.send("Student API is running");
// });

// // GET operation
// app.get("/students", (req, res) => {
//     res.json(students);
// });

// // POST operation
// app.post("/students", (req, res) => {

//     const newStudent = {
//         id: students.length + 1,
//         name: req.body.name,
//         branch: req.body.branch
//     };

//     students.push(newStudent);

//     res.json({
//         message: "Student added successfully",
//         student: newStudent
//     });
// });

// // Start server
// app.listen(3005, () => {
//     console.log("Server running at http://localhost:3005");
// });


