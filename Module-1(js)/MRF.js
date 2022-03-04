//Map, Reduce and Filter---


//Map------------------------------------------------------------------
//map takes function as an argument
//apply on each and every element on array
//returns new array
//Map syntax: arrayname.map(function);


var arr = [11,12,13,14];
//element represent the element of the array
//index:index of the array

var res = arr.map((element)=>element*2);
console.log(res);
//element is  user defined like variable.


// // case 01:if function is not passed
// // output will be an error

// var res=arr.map();
// console.log(res);

// // case 02: function is there but, return keyword is missing
// //output will be undefined

// var res=arr.map((ele)=>{

// });
// console.log(res);



// sample task 1(map)--------
var student = [{name:"john",marks:30},{name:"alice",marks:40}];
//using above array, increase the marks of each student by 20
//expected output: var result=[{name:"john",marks:50},{name:"alice",marks:60}];


var res1 = student.map((e)=>{
    e.marks= e.marks+20;
    return e;
});
console.log(res1);


//Filter------------------------------------------------
//filter is used to extract the specific elements(also called seperator)
//filter takes:
//function as a parameter, along with that it should
//contain condition inside the function
//if the element in the array passed the condition, it will be pushed to the array
//or it will be ignored
//return type will be an array

//syntax: arrayname.filter(function);

var arr2=[11,12,13,14,15,16];
var res2= arr2.filter((e)=>e%2==0);
console.log(res2);

// sample task 2(filter)----------------
//extract the details of stundents whose marks is greater than 30
//print only name of those students
var student2 = [{name:"john",marks:30},{name:"alice",marks:40},{name:"bob",marks:50}];

var res3=student2.filter((e)=>e.marks>30);
console.log(res3);
var final = res3.map((e)=>e.name);
console.log(final);


//Reduce----------------------------------------------------------------------------------
//reduce will reduce the entire array into single values
//syntax: arrayname.reduce(function(acc,cv));
//acc: accumulator:initial values
//cv:element:array element
//both acc & cv are userdefined

//there are two cases 

//case 01:
//if sum value is not given (if initial value is not given),it will automatically take first element in array
var arr4 = [11,12,13,14,15];
var res4 = arr4.reduce((acc,cv)=>acc+cv);
console.log(res4);

//case 02:
//if sum value given
//we can give any value to sum
var arr5 = [11,12,13,14,15];
var res5 = arr4.reduce((acc,cv)=>acc+cv,2);
console.log(res5);



//<------------------------------------------practice-------------------------------------------------->
// (content: map,reduce,filter & sample problems using this along with API)

//*-------------------*------------------------Map----------------------*---------------------------*
//it takes function as an argument and map can also be used as a replacement for loop
//returns new array
//syntax: arrayname.map(function);
//can use anonymous,arrow & normal function(arrow is prefered)
var a1=[11,12,13,14,15];

var ans1= a1.map((e)=>e*2);
console.log(ans1);
//(return must use in map when blockcode is more than 1 line)

//sample task(for map)---\
//increase marks +20 in array

var student1 = [{name:"john",marks:40},{name:"alice",marks:50}];

var ans2 = student1.map((e)=>{
    e.marks = e.marks+20;
    return e;
})
console.log(ans2);

//*-------------------*------------------------Filter----------------------*---------------------------*
//used to extract the specific elements
//it takes function as parameter & applies to every parameter
//must include condition inside the function
//reurn type will be an array

//syntax: arrayname.filter(function);

var a2 = [11,12,13,14,15,16,17];
var ans3 = a2.filter((e)=>e%2==0)
console.log(ans3);

//sample task 1(for Filter)---
//extract the details of stundents whose marks is greater than 30 in an array
//print  name of those students in seperate array
var student2 = [{name:"john",marks:30},{name:"alice",marks:40},{name:"bob",marks:50}];
var ans4 = student2.filter((e)=>{
    e = e.marks>30;
    return e
})
console.log(ans4);
var ans5 = ans4.map((e)=>{
    e=e.name;
    return e;
})
console.log(ans5);


//*-------------------*------------------------Reduce----------------------*---------------------------*

//reduce is used to find sum of an array
//syntax: arrayname.reduce(function(acc,cv))
//acc: is a accumulator which as initial value
//cv: is a element of the array
//both are user defined

var a3 = [1,2,3,4,5,6,7,8,9,10];
var ans6 = a3.reduce((a,b)=>a+b);
console.log(ans6);