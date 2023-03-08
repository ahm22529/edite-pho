//get filter
let f1=document.getElementById("sat");
let f2=document.getElementById("con");
let f3=document.getElementById("pra");
let f4=document.getElementById("gry");
let f5=document.getElementById("blur");
let f6=document.getElementById("hue");

//get upload
let up=document.getElementById("upload");
//get dawenload
let da=document.getElementById("dawenload");
//get image
let img=document.getElementById("img");
//get reset
let re=document.querySelector("span");
//box 
let imgb=document.querySelector(".img-box");
//get can
let canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
//hidden the box and rest and dawenload
window.onload=function (){
    da.style.display="none";
    re.style.display="none";
    imgb.style.display="none";
    
}

up.onchange=function(){
    x();
    da.style.display="block";
    re.style.display="block";
    imgb.style.display="block";
    let file=new FileReader();
    file.readAsDataURL(up.files[0]);
file.onload=function(){
    img.src=file.result;
}
img.onload= function(){
    canvas.width=img.width;
    canvas.height=img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display="none";
}
}

let f=document.querySelectorAll(" ul li input");
f.forEach(fi=>{
    fi.addEventListener("input",function(){
       ctx.filter =`
        saturate(${f1.value}%)
       contrast(${f2.value}%)
       brightness(${f3.value}%)
       grayscale(${f4.value})
       blur(${f5.value}px)
       hue-rotate(${f6.value}deg)
       
        `
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
      }
        )
})

function x (){
    ctx.filter="none";
    f1.value="100";
    f2.value="100";
    f3.value="100";
    f4.value="0";
    f5.value="0";
    f6.value="0";
    ctx.drawImage(img,0,0,canvas.width,canvas.height);

}
da.onclick=function(){
    da.href=canvas.toDataURL("image/png");
}






