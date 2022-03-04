//Do the below programs in arrow functions
//a.Print odd numbers in an array
const odd=()=>{
    let arr1=[1,2,3,5,6,8,7,9,10,11,12,15,19,18];
    for (let i=0;i<arr1.length;i++){
        if (arr1[i]%2==1){
            console.log(arr1[i]);
                }
    }
};
odd();

//b.Convert all the strings to title caps in a string array
const titleCaps = () => {
    let a="welcome to javascript"
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    console.log(a);
}
titleCaps();

//c.Sum of all numbers in an array
const sumofall=()=>{
    let arr2=[2,4,8,10];
    let Sum=0;
        for (let i=0;i<arr2.length;i++){
        Sum+=arr2[i];}
        console.log(Sum);
}
sumofall();

//d.Return all the prime numbers in an array
const prime1=() => {
    var arr3=[2,3,4,5,6,7,8,9,10];
    var temp=[];
    const prime= function() {
    for(var x of arr3){
    var b=0;
    for(var i=2;i<=x/2;i++){ 
    if(x%i==0){ 
    b=1;
    break;
    }
    }
    if(b==0){
    temp.push(x)
    }
    }
    return temp
    
    }(arr3)
    console.log(prime);
    }
    prime1();

//e.Return all the palindromes in an array
const pal=()=>{
    var a=["wow","lol","java","mam"]
    for(i=0;i<a.length;i++)
    {
        var b=a[i].split("").reverse().join("")
        if(a[i]==b)
        console.log(a[i]);
    }}
    pal();