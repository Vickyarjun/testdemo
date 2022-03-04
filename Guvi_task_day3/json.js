 //for loop condition

 let numbers = [1,2,3,4,5]
 for (let i = 0; i < numbers.length; i++){
   console.log(numbers[i])
 }

 
 //for in condition
 var student = {
     firstname: "vignesh",
     lastname: "arjunan",
     age:"21"
 };
 for (let x in student) {
     console.log(x + ": "+student[x])
 }
 

 //for of condition

 let cars=[{"Brand":"Ford","Model":"Aspire"},{"Brand":"Audi","Model":"A6"}]
 for (let i of cars){
     console.log(i)
 }
 

 //for each condition

 var names = ["vicky",  "tony", "benny", "micky", "lucky"];
 names.forEach(function1);
 function function1(currentvalue,index) {
     console.log("index in array is: "+index + ":: value is: "+currentvalue);
 }