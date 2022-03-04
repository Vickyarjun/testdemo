//today topics------

// let const, 
// spread & rest operator
// array & object destructure
// Template literals
// class
// Arrow functions



//spread operator----------------------------------
//used in array,object
//... is used for spread operator
let str="guvi";
let chars = [...str];
//can use instead of split
console.log(chars);

// sample 1(for spread operator)---
//combine two array in new array
let arr1 = [12,13,14];
let arr2 = [15,16,17];
let arr3 = [...arr1,...arr2];
console.log(arr3);

//sample 2(for spread operator)-------
//push to one array without create a new one
let array1 = [12,13,14];
let array2 = [15,16,17];
array1.push(...array2);
console.log(array1);

// sample3(for spread operator)------
//combine to objects
let obj1={
    salary:33.333,
 gender:"male"
    };
 let obj2={
    name:"john",
    age:23,
    //code applies below
     ...obj1
 };
 console.log(obj2);


 //Rest parameter----------------------------
 //... is syntax for rest parameter
 //used only in function
 //rest:remaining values
 var sum = 0;
 function add(...remaining){
     console.log(remaining);
     for(var i=0; i<remaining.length; i++){
         sum=sum+remaining[i];
     }
     return sum;

 }
console.log(add(3,4,1,2,23,24,15.3,12,25));


//sample task 1

let range=(min,max)=>{
    let temp=[];
    for(var i=min;i<=max;i++){
        temp.push(i); 
    }
    return temp;
}
console.log(range(-3,7));


//------------------------------practice---------------------------------------

//spread operator-------------
//use case - expanding the array elements, can also uses for strings

//sample(eg for array)
let arr = ["hello", "Geek"];
console.log(...arr);

//eg for string
let str = "guvigeek";
let chars = [...str];
console.log(chars);
//console.log(str.split("")); same as spread

//combine two arrays in new array
let arr1 = [1,2,3];
let arr2 = [3,4,5];
let arr3=[...arr1,...arr2];
console.log(arr3);

//combine two arrays without create new array
arr1.push(...arr2);
console.log(arr1);

//spread operator used in object
//combine two objects
let obj1={
        salary:33.333,
     gender:"male"
        };
     let obj2={
        name:"john",
        age:23,
        ...obj1
    }
    console.log(obj2);


    //rest parameter-----------------

    function add(a,b){
        return a+b;
    }
    console.log(add(1,2,3,4,5,6,7.5));
    //here it adds only first 2 numbers, so we can use rest parameter to add all the values
    //note: ret parameter always return in array

    function add(...rest){
        //rest is not a keyword here
        console.log(rest);
        var sum=0;
        for(var i=0;i<rest.length;i++){
            sum = sum+rest[i];

        }
        return sum;
    }
    console.log(add(1,2,3,4,5,6,7.5));

    // generate an array between two given length

    let range = (a,b)=> {
        let temp = [];
        for (let i=a; i<=b; i++){
            temp.push(i);
        }
        return temp;
    }
    console.log(range(-10,10));