// function greet(name, callback) {
//   console.log("hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("GoodBye !");
// }

// greet("arun", sayBye);

// setTimeout
// event handlers
// old API call

// function fetchData(callback){
//     setTimeout(() => {
//         callback("data Loaded")
//     }, 5000 )
// }

// fetchData(function(result){
//     console.log(result);

// })

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Task completed ");
//   } else {
//     reject("Task Failed ");
//   }
// });

// promise
// .then
// .catch(error => console.log(error));

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("data Recved");
//     });
//   });
// }
// getData().then((data) => console.log(data));

// async function showData() {
//   return "Hello Async";
// }
// showData().then((data) => console.log(data));


function fetchData(){
    return new Promise (resolve => {
        setTimeout (() => {
            resolve ("fetched Succesfully")
        })
    })
} 


async function getResult() {
    let result = await fetchData();
    console.log(result);
}
getResult();

