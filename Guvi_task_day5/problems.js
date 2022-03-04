//Write a function called “addFive”.---
//Given a number, “addFive” returns 5 added to that number.
function addfive(a,b,c){
    a=a+5;
    b=b+5;
    c=c+5;
    console.log(a,b,c);
    return +5
}
addfive(5,0,-5);



//Fill in your code that takes an number minutes and converts it to seconds.---
var min = 5;
function toSeconds(min) {
    return min*60;
}
var seconds = toSeconds(min)
console.log(seconds)


//Create a function that takes a string and returns it as an integer.---
var mystr = "111";
function toInteger(mystr){
       return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log(myint);


//Create a function that takes an array and returns the first element.---
var arr1 = [1001, 2001, 3001];
function getFirstElement(arr1){
    return arr1[0];
}
var data = getFirstElement(arr1)
console.log(data);


//Convert Hours into Seconds
//Write a function that converts hours into seconds.---
var arr2 = [2, 4, 6];
function hourToSeconds(arr2) {
    for(i=0;i<arr2.length;i++){
    arr2[i] = 3600*arr2[i];
    }
    return arr2
    }
    var data = hourToSeconds(arr2)
    console.log(data);


//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.---
function findPerimeter(num1,num2){
    return num1*num2
}
var p = findPerimeter(6,7)
console.log(p);


//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.---
function lessThan100(num1,num2) {
    if(num1+num2 < 100){
    return true}
    else{
    return false
    }
    }
    var result = lessThan100(50,49)
    console.log(result);


//Check if an Integer is Divisible By Five
//Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.---
function divisibleByFive(num1) {
    if(num1%5===0){
        return true
    }
    else{
        return false
    }
    }
    // var divisible = divisibleByFive(5)
    console.log(divisibleByFive(5));



//Write a function called “areBothOdd”.
//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.---
function areBothOdd(num1, num2){
    if((num1%2!=0)&&(num2%2!=0)){
        return true
    }
    else{
        return false
    }
   }
   console.log(areBothOdd(1,5));

//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.---
function getFullName(firstName, lastName){
    if((firstName!='')&&(lastName!='')){
        return firstName + ' ' + lastName
    }
    else{
        return firstName + lastName
    }
   }
console.log(getFullName("guvi","geek"));

