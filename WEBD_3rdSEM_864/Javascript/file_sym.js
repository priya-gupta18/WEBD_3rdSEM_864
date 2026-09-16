// const f=require("fs");
// console.log("data1");
// console.log("data2");

// f.writeFileSync("priya.txt", "hello to all , i m priya gupta");
// console.log("data3");
// console.log("data4");


// f.promise.writeFile("file_out.txt","new data","utf-8")
// .then(console.log("file successfully created"))
// .catch((err)=>console.log(err))

const data=f.readFileSync("priya.txt","utf-8");
console.log(data);
console.log("data3");
console.log("data4");