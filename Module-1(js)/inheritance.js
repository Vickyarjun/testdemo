// //Destructuring array and objects
// //inheritance and For each loop



// //Destructuring: unpacking array or object into a bunch of variables------------------------------
// var arr=["john","doe"];
// //fname=john
// //lname=doe
// let[fname,lname]=arr;
// console.log(fname);
// console.log(lname);

// //Destructuring string--
// let[fname1,lname1]="john doe".split(" ");
// console.log(fname1);

// //ignoring middle names
// let[fname2,,,lname2]=["john","doe","seaser","prince"];
// console.log(fname2);
// console.log(lname2);

// //
// let[fname3,lname3,...rest]=["john","doe","seaser","prince"];
// console.log(fname3);
// console.log(lname3);
// console.log(rest);



// //Object destructuring----
// let student = {
//     name:"john doe",
//     age:21,
//     gender:"Male"
// };
// let{name,age,gender}=student;
// //this key names should be same to objects
// console.log(age);
// console.log(gender);



// // inheritance-------------------------------------------

// //class& constrctor
// class Car{
//     constructor(brand,color){
//         this.brand=brand;
//         this.color=color;
//     }
//     brandname(){
//         return "i have "+this.brand+" car";
//     }
// }

// var s1 = new Car("ferrari","red");
// //if you want to establish a relationship, then use extends keyword
// //class child *extends* parent
// class mahendra extends Car{
//     constructor(brand){
//         super(brand);
//     }
//     display(){
//         return this.brandname();
//     }
// }
// //if you want to access the constructor of the parent, then use *super* keyword

// //create object for children
// //if u create object for child , then u can access parent also
// var child1 = new mahendra("lamborghini");
// console.log(child1.display());



// // // sample task---
// // class Car{
// //     constructor(color){
// //         this.color=color;
// //     }
// //     colorname(){
// //         return "i have "+this.color+" car";
// //     }
// // }

// // class lamborghini extends Car{
// //     constructor(color){
// //         super(color);
// //     }
// //     display(){
// //         return this.colorname();
// //     }
// // }
// // var child1 = new lamborghini("yellow");
// // console.log(child1.display());

// //for each--------------------------------------------------------
// //it is a alternative to for loop
// //for each takes function as a parameter
// //apply on every element of the array

// //(array-for each)
// var array = [11,12,13,14,15];
// array.forEach((e)=>{
//     console.log(e);
// })

// //(object-for each)
// var obj1={
//     name:"vicky",
//     age:22
// };
// //Object.keys is a keyword and o should be in caps
// console.log(Object.keys(obj1));
// Object.keys(obj1).forEach((ele)=>{
//     console.log(ele,obj1[ele]);
// });


// ----------------------------------------------------------practice-----------------------------------------------------------------------------------

//--------* destructuring *----------

//destructuring array---
//destructuring: unpacking array or object into a bunch of variables.
let array = ["vignesh","arjunan"];
let[fname,lname] = array;
console.log(fname);
console.log(lname);
//spread operator only spread the array but destructuring spread and stores it in a variable.

//destructuring string---

//case 1--
let[x,y,z] = "abc";
console.log(x);
console.log(z);
console.log(y);

//case 2--
let[fname1,lname1]="vignesh arjunan".split(" ");
console.log(lname1);
console.log(fname1);

