//IIFE & Anonymous function


// a.print odd numbers in an array
//anonymous--
const odd= function() {
    let ar1=[11,12,13,14,15,16]
    for(let i=0;i<ar1.length;i++)
    {
        if(ar1[i]%2 != 0)
        {
            console.log(ar1[i])
        }
    }
}
odd()

//b.Convert all the strings to title caps in a string array
//IIFE--
{
    (() => {
    function toTitleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
        }
        return str.join(' ');
      }
      console.log(toTitleCase("namaste javascript"));
})()
}

//c.Sum of all numbers in an array
//anonymous--
const summm= function() {
    let ar2=[1,2,3,4,5,6]
    let sum=0
    for(let i=0;i<ar2.length;i++)
    {
        sum += + ar2[i]
    }
    console.log(sum)
}
summm()

//d.Return all the prime numbers in an array
//IIFE--
{
    (() => {
    var arr=[1,2,3,4,5,6,7,8,9];
    numArray = arr.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
    })
    console.log(numArray)
    })()
}

//e.Return all the palindromes in an array
//IIFE--

{
    (()=>{
        const arr3 = ['hello', 1111,'lol', 2002, 'wow', 2020];
        const Palindrome = (a) => {
           const str = String(a);
           let i = 0;
           let j = str.length - 1;
           while(i < j) {
              if(str[i] === str[j]) {
                 i++;
                 j--;
              } else {
                 return false;
              }
           }
           return true;
        };
        const printPal = (arr3) => {
           return arr3.filter(a => Palindrome(a));
        };
        console.log(printPal(arr3));
    })()
}

//f.Return median of two sorted arrays of the same size
//anonymous--
const medianArray= function() {
    let array1 = [1,2,9];
    let array2 = [3,4,7];
    let n1 = array1.length;
    let n=n1;
    function median(array1,array2,n)
    {
    let i = 0;
    let j = 0;
    let m1 = -1, m2 = -1;
    for ( let a = 0; a <= n; a++)
    {
    if (i == n)
    {
    m1 = m2;
    m2 = array2[0];
    break;
    }
    else if (j == n)
    {
    m1 = m2;
    m2 = array1[0];
    break;
    }
    if (array1[i] <= array2[j])
    {
    m1 = m2;
    m2 = array1[i];
    i++;
    }
    else
    {
    m1 = m2;
    m2 = array2[j];
    j++;
    }
    }
    console.log((m1 + m2)/2)
    }
    median(array1,array2,n1)
}
medianArray()

//g.Remove duplicates from an array
//IIFE--
{
    (()=>{
    let cars = ["Audi", "Rolls royce","Ferrari","Audi","Rolls royce","Ferrari","Lamborghini","Jaguar"];
    let sortcars = [...new Set(cars)];
    console.log(sortcars)
})()
}

// h.Rotate an array by k times
//anonymous--
    const rotate = function(num, k) {
        for (let i = 0; i < k; i++) {
            num.unshift(num.pop());
        }
        return num;
      }
      console.log(rotate([1,2,3,4,5],4));
    



