let hourEle=document.getElementById("hour");
let miunteEle=document.getElementById("minute");
let secondEle=document.getElementById("second");

setInterval(() => {
    let date=new Date();
    let second=date.getSeconds();
    let hour=date.getHours();
    let minute=date.getMinutes();
    console.log(hour+" "+minute+" "+second);
    hourEle.style.transform=`rotate(${30*hour+minute/2}deg)`;
    miunteEle.style.transform=`rotate(${6*minute+second/10}deg)`;
    secondEle.style.transform=`rotate(${6*second}deg)`;
}, 1000);