/* alert("Use Properly") */


/* let a=100;  
{
    let a=200;
    console.log(a);
}
console.log(a); */



/* let x=20; // Block Scope
let y=30;
if(true){
    let x=40;
    console.log(x);
    console.log(y);
} */



/* let x=20;  // If statement
let y=30;
if(x<y){
    console.log("x is a greater number");
} */



/* const num=200; if else statement
if(num%2==0){
    console.log("Even!");
}
else{
    console.log("Odd!");
} */


const age=prompt("Enter Your Age Here");
console.log("Your Age "+age);
const adhar=prompt("Do you have adhar if yes then enter 1 if you have not then enter 2");
if(adhar==1){
    console.log("You have Adhar")
}
else{
    console.log("You have not Adhar")
}
if(age>=18 && adhar==1){
    console.log("You can vote!")
}
else{
    console.log("You can not vote!")
}