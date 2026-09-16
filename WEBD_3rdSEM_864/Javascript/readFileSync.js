// console.log('this is first line');
// console.log('this is second line');

// const fs = require('fs');
// try{
//     const data = fs.readFileSync('data.txt','utf8');
//     console.log(data);
// } catch(err){
//     console.log("Error:",err);
// }

// console.log('this is third line');


const fs=require('fs');
fs.readFile('output.txt','utf8',(err,output) => {
if(err){
    console.log("Error reading file:",err);
    return;
}
console.log("File Content:");
console.log(output);
});

