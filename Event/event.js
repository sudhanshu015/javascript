 // let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 is clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);

// };

// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("you are inside div")
// };

btn1.addEventListener( "click",()=>{
    console.log("button was clicked - ")
})
btn1.addEventListener( "click",()=>{
    console.log("button was clicked -  handler 2")
})
const handler3=() => {
   console.log(" button1 was clicked - handler3 ")
}
btn1.addEventListener( "click",()=>{
    console.log("button was clicked -  handler 3")
})
// btn1.addEventListenerEventListener( "click",()=>{
//     console.log("button was clicked -  handler 4")
// })
// btn1.removeEventListener("click",()=>{
    
// })
btn1.removeEventListener("click",handler3)
let div = document.querySelector("div");