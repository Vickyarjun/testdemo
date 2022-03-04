// //---------------------------------class-------------------------------
// // step 1; create an XHR object

// var request = new XMLHttpRequest();

// // step 2; request a connection(which data we need to receive)

// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// // https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json
// //step 3; sending a connection request

// request.send();

// //step 4;once the data successfully received
// //from the server(200)
// request.onload= function(){
//     var data = JSON.parse(request.response);
//     //1.
//      //console.log(data);
//      //2. 
//     //   console.log(data[0]);
//      //3.
//     //   console.log(data[1].currencies);
//     // 4.
//     //  for(i=0; i<data.length;i++){
//     //     console.log(`name:${data[i].name} capital:${data[i].capital}`);
//     // }
//    for(i=0; i<10;i++){
//      console.log(`flag:${data[i].flag}`);
//      }
//     }




//--------------------------------------practice--------------------------------------------
// //Day 9 sample task1-----
// // extract details of those countries whose region is in Asia
// var request = new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload= function(){
//   var data = JSON.parse(request.response);
//   let result = data.filter((e)=>e.region==="Asia");
//   console.log(result);
  
//   //details printed

// // sample task 2----
// //using above code &extract the country names which is in the asia region


// for(i=0; i<result.length; i++){
//     console.log(result[i].name)
// }
// //names printed


// // assigment-02/03/2022
// // print the sum of the total population of asia region
// //ans in num

//   var final = result.map((e)=>e.population);
// // console.log(final);

// var res4 = final.reduce((acc,cv)=>acc+cv);
// console.log(res4);
// //total population printed

// }



//class Assingment day 9-----------------------




var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();

request.onload= function(){
  var data = JSON.parse(request.response);

  let result = data.filter((e)=>e.region==="Asia");
  // console.log(result);

let pop = result.reduce((asian,country)=>asian+country.population,0);
console.log(pop);
  
};



































// var final = result.map((e)=>e.population);
// console.log(final);
// //above code is for array of asian contries population



