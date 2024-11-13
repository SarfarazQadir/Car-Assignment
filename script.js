gsap.to(".box", { 
    x: -1400,
    duration: 3,
    ease: "none",
}).repeat(Infinity);

// var red = document.getElementById("red");
// var green = document.getElementById("green");
// var yellow = document.getElementById("yellow");

// function red(){
//    var a = red.style= "visible";   
//    var b = green.style= "visible";   
//    var c = yellow.style= "visible";   
//     if(red.style == "visible"){
//         b.style = "hidden";
//         c.style = "hidden";
//     }else if(b == "visible"){

//     }
// }

function signal(params) {
var a = document.getElementById(params)
if(params == "red"){
    a.style = "visible";
}else if(params == "green"){
    a.style = "visible"
}    
else if(params == "yellow"){
    a.style = "visible"
}
}    
