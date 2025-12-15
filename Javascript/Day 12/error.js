
// let x = 10;


// if(x == 90) {
//     console.log("hello" );
// }else {
//     console.log("not equal to 10");
// }



// console.log(a);



// let num = 23;

// let up = num.toUpperCase();

// console.log(up);


// let arr = new Array(-1);
// console.log(arr);


// why error handling is important 

// prevents application crashing 
// improves user exprences 
// helps debugging 
// Requried in real world application (forms , api, patyments)



// try{
//     // code that may cause error 
// } catch (error){
//     // runs if the error occures 
// }finally{
//     // runs always 
// }


// let useName = " ar"
// try{
//     console.log(useName);
// }catch (err) {
//     console.log("variable is not defined  bro ");
    
// }finally{
//     console.log("code ran succesfully ");
    
// }



// let age = 15 ;

// if (age < 18 ){
//     throw new Error ("access denied ")
    
// }



function widthdraw(amount){
    if(amount > 5000){
        throw new Error ("withdrawal limit exceeded ")
    }
    console.log("withdrawal Successfull");

    
}

try {
    widthdraw(2000)
}catch(a){
    console.log(a.message);
    
}



