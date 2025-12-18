// let appName = "my App";

// function showApp() {
//   console.log(appName);
// }

// showApp();

// function demo(){
//     let count = 10 ;
//     console.log(count);
// }

// demo();

// if(true) {
//     let c = 7 ;
//     const y = 10;

// }

//   const c = 90;

//   console.log(c);

// function outer() {
//   let name = "JS";

//   function inner() {
//     console.log(name);
//   }

//   return inner;
// }




// const func = outer()


// func()


function bankAccount() {
  let balance = 1000;

  return {
    getBalance() {
      return balance;
    },
    deposit(amount) {
      balance += amount;
    }
  };
}

const account = bankAccount();
account.deposit(500);
console.log(account.getBalance()); // 1500
