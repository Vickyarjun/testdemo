// ------------------------------class----------------------------------

var arr = [12,13,14,15];
temp=[];
function even(arr) {
    // console.log(arr);
    // return arr;
    
    for(var i=0; i<arr.length;i++) 
    {
        if(arr[i]%2===0){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(even(arr));

//anonymous function-----
var mul = function(a,b){
    return a*b;
}
console.log(mul(12,13));

//normal function-----

function foo(a,b){
    return a*b;
}
console.log(foo(12,13));





//trail task-1--------
//get first element
function first(arr,n){
    if(n==undefined)
    return arr[0];
    if(n<0)
    return [];
    return arr.slice(0,n);
}
console.log(first([7,9,0,2],2));

// trail task -2----------
//get last element

function last(arr,n){
    if(n==undefined)
    return arr[arr.length-1];
    if(n>0)
    return arr.slice(-n)
}
console.log(last([7,9,0,-2],3));




//--------------------------------------practice------------------------------------
// //basic sample function
// function mul(a,b){
//     return a*b
// }
// console.log(mul(2,4));

// //passing function to a array
// arr = [2,3,4,5,6,7,8];
// function pass(arr){
//     return arr;
// }
// console.log(pass(arr));

// //print only even in array

// arr = [2,3,4,5,6,7,8];
// temporary = [];
// function even(arr){
//     for(i = 0;i<arr.length;i++){
//         if(arr[i]%2===0){
//             temporary.push(arr[i])
//         }
//     }
//     return temporary;
// }
// console.log(even(arr));

// //anonymous function

// var add = function(a,b){
//     return a+b;
// }
// console.log(add(5,5));


// //sample task 1
// //print first num in array
// //print n num in array if n is there
// //print empty array if n is negative

// function first(arr,n){
//     if(n==undefined){
//        return arr[0];
//     }
//     if(n<0){
//         return [];
//     }
//     return arr.slice(0,n);
// }
// console.log(first([9,7,0,-2],2));

// //sample task 2
// //print last num in array
// //print n num of element in reverse

// function last(arr,n){
//     if(n==undefined){
//        return arr[arr.length-1];
//     }
//     if(n>0){
//     return arr.slice(-n)
//     }
// }
// console.log(last([9,7,0,-2],2));
