// function myfunction(){
//      console.log(" hello jii");
//      console.log(" kaise ho ");

// }
// myfunction();

// function myfunction(msg)
// {
//  console.log(msg)
// }
//  myfunction(" i love nature");

//  function sum ( x,y){ // here x and y is local variable which is use just in funtion
//     //  console.log(x+y);
//     s= x+y;
//     return s;
//  }
  
//  // arrow function 
//  // morden js 
//   const arrowSum = (a,b)=>{

//     console.log(a+b);
//   }

//  function mul(p ,q){
//      return p*q;
//  }

//   const arrowMul = (x,y)=>{
//     console.log(x*y);
//   }
//  console.log(mul(7,4))
//   console.log(sum(3,9));


     //// question ///

//    function countvewole(str){
//    // let str = prompt("enter anystring");
//     coun = 0;
//    let  vowel= ["a","e","i","o","u"];
//           for( const cr of str )
//           { 
//             console.log(cr)
//             for(let i =0;i<=vowel.length;i++)
//             if(cr===vowel[i])
//             {
//                 coun++
//             }
//           }
//         console.log(" number of vowel " ,coun)
         
     
//       }

//  function vowelcount(str){
//     let conut = 0;
//      for(const char of str){
//         console.log(char);
//         if(char==="a"|| char==="e"||char==="i"|| char==="o"||char==="u")
//         {
//             conut++
//         }
//      }
//     console.log(conut);
//  }


     // FOR EACH METHORD /////



    //  let arrp=[1,2,7]

    //  arrp.forEach((num)=> {
    //     console.log(num*num);
    //  });

//     let nums=[ 65,54,85,96,48];
//    let newarr= nums.map((li)=>{
//         return li*li;
//     });
//     console.log(newarr);


///// FILTER METHORD ////


//   let nums=[ 65,54,85,96,48];
//   let evenarr= nums.filter((val)=>{
//     return val%2==0;
//   })
//   console.log(evenarr)

// let arr=[1,2,3,4];
// const output= arr.reduce((res,curr)=>{
//     return res+curr;
// });

// console.log(output);

// let arr = [5,7,8,9,101,87]
// const output= arr.reduce((res,curr)=>{
//     return res >curr?res:curr;
// });

// console.log(output);

// let marks= [90,56,95,85,45,94]

// let topper = marks.filter((val)=>{
//     return val>90;
// });
// console.log(topper);

let n = prompt("enter the number: ");
let arr=[];
for(let i=0;i<=n;i++){
    arr[i]=i;
}
console.log(arr);

 let oput=arr.reduce((res,curr)=>{
    return res + curr;
})
console.log(oput)