// let mBtn=document.querySelector("#menuT");
let menu=document.querySelector("#menu");
// let cBtn=document.querySelector("#menu i:nth-child(1)");
// let flag=1;
// mBtn.addEventListener("click",function(){
//     
// })
// cBtn.addEventListener("click",function(){
//    
// })
let menuT=document.querySelector("#menuT");
let m1=document.querySelector(".mElm:nth-child(1)");
let m2=document.querySelector(".mElm:nth-child(2)");
let m3=document.querySelector(".mElm:nth-child(3)");
let flag=1;
menuT.addEventListener("click",function(){
    if(flag===1){
         m1.style.transform=" translate(1px,4px)  rotate(45deg)";
         m2.style.opacity=0;
         m3.style.transform="translate(1px,-5px) rotate(-45deg)";
         menu.style.right="0";   
    flag=0;
    }
    else{
         m1.style.transform="initial";
         m2.style.opacity=1;
         m3.style.transform="initial";
         menu.style.right="-25%";
         flag=1;

    }
   
})