

var tl = gsap.timeline({ defaults:{opacity:0, ease:"Power4.easeInOut", duration:1}});
gsap.set(".page-wrapper", {rotationY:15})
function init() {
    tl.from(".page-wrapper", {ease:"linear", autoAlpha:0, y:50})
    .from(".hero-pic", {scale:1.6, duration:2}, "<")
    .from("h1", {x:80, duration:1},"<50%")
    .from("p", {y:30, rotation: 5, duration:1},"<50%")
    .from(".offer-container", {y:30, rotation: 5, duration:0.2},"<50%")
    .from(".button", {y:30, rotation: 5, duration:0.2},"<50%") 
    .from(".bot-link", {y:30, rotation: 5, duration:1.5},"<50%")
}

window.addEventListener("load", function(event) { 
  init(); //do stuff
});