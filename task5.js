let open=document.getElementById("open");
let close=document.getElementById("close");
let openlay=document.querySelector(".overlay");

open.addEventListener('click',function(){
    openlay.classList.add("openlay");   
});
close.addEventListener("click",function(){
    openlay.classList.remove("openlay");
});

/*
let open=document.querySelector(".banner .open-btn");
let close=document.querySelector(".overlay .close-button");
let overlay=document.querySelector(".overlay");
open.addEventLisenter
*/