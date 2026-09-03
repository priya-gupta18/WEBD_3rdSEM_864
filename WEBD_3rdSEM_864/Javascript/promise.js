// let promise=new Promise((resolve,reject) => {
//     console.log("I am a new promise");
//     resolve("successfully executed");
// }
// )

// function GetData(dataId)
// {
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("successful");
//         },8000);
//     });
// }
// let r=GetData(123);

const GetPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("successful");
    });
};
let promise=GetPromise();
promise.then(()=>{
    console.log("promise is fulfilled");
});
promise.catch(()=>{
    console.log("network is not working properly")
});