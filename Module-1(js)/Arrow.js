// //IIFE
// //Immediately invoked function execution
// //no return in iife
// //syntax = (function(){})()

// //anonymous function----
// var mul=function(a,b){
//     return a*b;
// }
// console.log(mul(12,13));


// //iife----
// (function(a,b){
//     console.log(a*b);
// })(12,13);


// //arrow function------
// //syntax = variable=(a,b)=>{block of code};
// //in arrow function,if one statement only there is  no return required
// //more than one statement, then return must be needed

// //arrow function
// var mul = (a,b)=>{return a*b}
// console.log(mul(12,12));

// var con = (name)=>"hello"+ name
// console.log(con("johndoe"));

// //practice task-1------
// //print unique num in array using anonymous function
// //this method used only for even number repeatation
// var arr = [1,1,2,3,4,5,6,7,4,3,2,5,6];
// var temp = arr[0];
// for(var i = 1;i<arr.length;i++) 
// {
//     temp = temp^arr[i]
// }
// console.log(temp);


//practie task 2------
//remove specific element in array

// var remove = (arr,n)=>{
//     for(i=0; i<arr.length; i++){
//         if(arr[i]===n)
//         arr.splice(i,1)
//     }
//     return arr
// }
// console.log(remove([2,5,9,6],5));


// //sample api task: 



// var request = new XMLHttpRequest();
// request.open("GET","https://www.anapioficeandfire.com/api/books/1");
// request.send();
// request.onload= function(){
//     var data = JSON.parse(request.response);
    
//         console.log(`AuthorName:${data.authors} Book:${data.name} ISBN:${data.isbn} Pages:${data.numberOfPages} Publisher:${data.publisher}`)
      
// }
  


//-----------------------------------practice-------------------------------

// //Normal function------
// function multi(a,b){
//     return a*b
// }
// console.log(multi(5,12));

// //Anonymous function-----
// //stores in variable
// var multiply = function(a,b){
//     return a*b
// }
// console.log(multiply(5,11));

// //IIFE------
// //return wont work here
// (function(a,b){console.log(a*b)})(5,10);

// //Arrow function--------
// //no need of return if only one line block code used
// var mull = (a,b)=>a*b
// //var mull = (a,b)=>{return a*b}--syntax for more lines of code exists
// console.log(mull(5,9));


// //sample task 1-------
// //convert to arrow function
// var con = (name)=> "hello"+name;
// console.log(con("johndoe"));

// //sample task 2-------
// // //print unique num in array using anonymous function
// var arr = [1,1,4,2,3,4,5,6,7,3,2,5,6];
// var temp = arr[0];
// for(i=1;i<arr.length;i++){
//     temp = temp^arr[i];
// }
// //but this logic works only in even number repitations
// console.log(temp);

// //sample task 3--------------------------------
// //remove specific element from array
// //[2,5,9,6]5

// var remove = (arr,n)=>{
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===n)
//         arr.splice(i,1);
//     }
//     return arr;
// }
// console.log(remove([2,5,9,6],6));


//sample task 4--------------------------------
//5.Write a JavaScript function to find the most frequent item of an array.
//Sample array:var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
//Sample Output: q ( 5 times )

// var arr = [3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
// var freq = 1;
// var count = 0;
// var ans;
// for (var i=0; i<arr.length; i++){
//         for (var j=i; j<arr.length; j++){
//                 if (arr[i] == arr[j])
//                  count++;
//                 if (freq<count){
//                   freq=count; 
//                   ans = arr[i];
//                 }
//         }
//         count=0;
// }
// console.log(ans + "( " +freq +" times )") ;


var arr1=[3, 'q', 'q', 'q', 2, 3, 'q', 3, 'q', 2, 4, 9, 3];
var mincount=1;
var count=0;
var ele;
for(var i=0;i<arr1.length;i++){
//second for loop for count as  well as mincount values
for(var j=i;j<arr1.length;j++){
if(arr1[i]===arr1[j]){
count++;
}
if(mincount<count){
mincount=count;
ele=arr1[i];
}
}

count=0;
}
console.log(`${ele} repeated ${mincount}`);