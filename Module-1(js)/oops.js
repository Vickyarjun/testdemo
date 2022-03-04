// //class & this--------------------------------------
// //class is a collection of properties and methods
// //syntax : class classname
// //(generally classname starts with caps)

// // class Car{
// //     //constructor:special way to assign(or)store values to/in objects
// //     //constructor is a keyword
// //     constructor(brand,color){
// //         brand="audi";
// //         color="red";
// //     }
// // }

// //this is a keyword, which will be pointing temporarily to freshly created object

// class Car{
   
//     constructor(brand,color,series){
//         this.brand=brand;
//         this.color=color;
//         this.series=series;
//     }
// getbrandname(){
//     return this.brand;
// }
//getters  method gets that particular value
//should use inside class
// }



// // //new objects can be created with keyword using new
// // //variablename = new classname();
// var s1 = new Car("audi", "white","a6");
// var s2 = new Car ("bmw","black","a3");
// console.log(s1);
// console.log(s1.brand);
// console.log(s2);


// // <--------------------------sir's code------------------------------->

// //class and Object
// //class is a collection of properties and Methods
// //object :an real time entity 
// //class classname 

// //constructors:special way to assign values to objects

// //objects can be declared with keyword using new
// class Car{
//     constructor(brand,color,series){
//     this.brand=brand;
//     this.color=color;
//     this.series=series;
//     }
//     }
//     //this is a keyowrd , which will be pointing to freshly created objects
//     //variablename refernce(userdefined)=new classname();
//     //s1:reference of the object
//     var s1=new Car("audi","white","a6");
//     var m1=new Car("mahendraxuv","red","a7");
//     console.log(s1);
//     console.log(m1);
//    // <------------------------------------------------------>



   //-----------------------------------------------practice----------------------------------------------------------------
//syntax : class Classname{block of code}
//constructor:special way to assign(or)store values to/in objects
class Bike{
    constructor(brand,color,series){
        this.brand = brand
        this.color = color
        this.series = series
    }
}
//it was a class,now we are going to create a object for it
//new objects can be created inside class using keyword  new
//syntax for object: variable name = new classname();
//new keyword will always create a new fresh object everytime

var O= new Bike("yamaha","blue","R15");
//var O is a reference to object(to access it)
//this is a temporary keyword which always points only to newly created object
//this keyword is used to differentiate field(like key) and value(eg: brand & 'yamaha')
//now we add this keyword inside class[eg; this.brand= brand : this.brand represents field & brand represents value]
//so now we give values in O(newly created object), we give here becoz to pass values dynamically to constructor
console.log(O);
console.log(O.color);

//a single object can have multiple references(no limit).

// sample practice----
class Dog{
    constructor(breed,color,cost){
        this.breed = breed;
        this.color = color;
        this.cost = cost;
    }
       //method getters and setters
//this getters method gets particular value----
//should use inside class
// we can also use this method to estimate something like cost
    getbreedname() {
        return this.breed;
 
    }
    getcost(n){
      return  this.cost*n;
    }
}

var D1 = new Dog("lab","tan",8000);
var D2 = new Dog("beagle","white",12000);
console.log(D1);
console.log(D1.breed);
console.log(D2);

 //var D2 = D1;
//console.log(D2.color);

console.log(D1.getbreedname());
console.log(D2.getcost(2));
//syntax: reference variable.methodname()
