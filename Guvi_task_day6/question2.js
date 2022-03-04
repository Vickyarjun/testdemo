alert("I’m invoked!");
alert("welcome to JavaScript!");

//Explain the below code how it works

alert('Hello world') // this line is not having semicolon
alert(`Wor
 ld`) //this is multiple line code and its working
alert(3 +
1
+ 2); // this is multiple line code and its working


//Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+" "+lname;
alert( admin ); // "Guvi geek"


//Fix the below to alert hello Guvi geek
let finame=10.5; 
finame = "Guvi";
laname = "geek"
let name = finame+" "+laname;
alert( `hello ${name} `);//hello Guvi geek


//Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b)) 
//adds 2 variable values


//If you run the below scritpt you will get “Code is Blasted”
//Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a6 = "2" == "12";
// //Don't touch below this
if (a6) {
  console.log("Code is Blasted")//string value cant use <> comparison operator
}
else
{
  console.log("Diffused") //both are string value 
}


//How to get the success in console.
let a1 = prompt("Enter a number?");
// //Don't modify any code below this
if (a1) {
 console.log( 'OMG it works for any number inc 0' );//works on any number
}
else
{
 console.log( "Success" );//works on without gives number and enter
}


//How to get the correct score in console.
let value22 = prompt('How many runs you scored in this ball');
if (value22 == 4) { //if we give 4 will get the result as "You hit a Four"
      console.log("You hit a Four");
} else if (value22 == 6) {//if we give 6 will get the result as "You hit a Six"
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");//rest of the 4 and 6 it will print else msg
}


//Fix the code to welcome the boss
// You cant change the value of the msg
let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
console.log(message1);


//Fix the code to welcome the boss
let message2;
let lock1 = 0;//Error lock1=2
//Dont change any code below this 
if (null || lock1 || undefined )
{
  message2 = "Go away";
}
else
{
 message2 = "welcome";
}
  console.log(message2);


//Fix the code to welcome the boss
let message3;
let lock2 = 0;//Error lock2=2
//Dont change any code below this
if (lock2 && " " || undefined )
{
  message3 = "Go away";
}
else
{
 message3 = "welcome";
}
console.log(message3);