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

var car = document.getElementById("car");
var cargoing = document.getElementById("cargoing");
var start = document.getElementById("start");

function red() {
    gsap.killTweensOf(car)
    var red = document.getElementById("red");
    red.style.backgroundColor="red"
}    
function green() {
    // gsap.to(".box", { 
    //     x: -1400,
    //     duration: 3,
    //     ease: "none",
    // }).repeat(Infinity);
    gsap.fromTo( ".box",{ x: 0, }, { x: -1400, duration: 3}).repeat(Infinity);
    cargoing.play();
    var green = document.getElementById("green");
    green.style.backgroundColor="green"
}    
function yellow() {
    start.play();
    var yellow = document.getElementById("yellow");
    yellow.style.backgroundColor= "yellow"
}    
