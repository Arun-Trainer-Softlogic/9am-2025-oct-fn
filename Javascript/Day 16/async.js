// console.log("start");

// for (let i = 0 ; i < 1e2 ; i++ ){
//     console.log(i);

// } //heavy task

// console.log("end");

// console.log("start");

// setTimeout(() => {
//   console.log("async Task Done");
// }, 2000);

// console.log("End");

// function fetchData(callback){
//     setTimeout(()=> {
//         callback("data Fetched ")
//     }, 2000)
// }

// fetchData((result)=> {
//     console.log(result);

// })

// callback hell
// hard to debug
// poor Reality

// Promise

// Pending
// Fullifilled
// Rejected

// const promise = new Promise((resolve, reject) => {
//     let success = false ;

//     if(success){
//         resolve("Operation was successful ");
//     }else {
//         reject("something went wrong")
//     }
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.error(error))
//   .finally(()=> console.log("Operation Finished "));

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Data Received"), 2000);
//   });
// }
// async function loaddata() {
//   const result = await fetchData();
//   console.log(result);
// }

// loaddata();
// fetchData()
// .then (res => console.log(res))
// .catch(err => console.log(err))

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const success = false;

//     setTimeout(() => {
//       if (success) resolve("Data Received");
//       else reject("Failed to fetch Data ");
//     }, 2000);
//   });
// }

// async function loadData() {
//   try {
//     const result = await fetchData();
//     console.log("Async/ Await ", result); // Pause Execution until resolved
//   } catch (err) {
//     console.error("Async / Await : ", err); // catches Potential rejections
//   }
// }
// loadData();

// (function (){
//     console.log("Hello AAAA");
// })();

navigator.geolocation.getCurrentPosition(success , error , options);




// success runs if location fetched
// error = runs if permission denied or failed 
// options - accuracy , timeout , catching


