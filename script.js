var change = ["Mentor", "Consultant", "Design Director"]

var text = document.getElementById("words");
var i = 0;
setInterval(function () {
  text.innerHTML = change[i];
  i = (i + 1) % change.length;
  
}, 2000);

// ----------------------------------

// function show(){
//   gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
// el: document.querySelector("#main"),
// smooth: true
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
// scrollTop(value) {
//   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, // we don't have to define a scrollLeft because we're only scrolling vertically.
// getBoundingClientRect() {
//   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();
// }
// show();

//--------------------
var tl = gsap.timeline();

gsap.set("#nav", {
  opacity: 0,
  y: "-50%",
})

gsap.to("#nav", {

  opacity: 1,
  // dalay: 2,
  y: "0%",
  duration: 3,
  ease: Expo.easeInOut,

})

gsap.set("#center img", {
  opacity: 0,
  y: "-70%",
})

gsap.to("#center img", {

  opacity: 1,
  y: "0%",
  duration: 3,
  ease: Expo.easeInOut,

})

gsap.to("#head1,#head2",{
 y:25,
opacity:0,
strager:.5,
})
gsap.to("#head1",{
 y:2,
 delay:3,
opacity:1,
})
gsap.to("#head2",{
 y:-15,
 delay:4,
opacity:1,
})


gsap.to("#center img",{
    scrollTrigger : {
    trigger : "#first",
    start : "top 10%",
       scrub : 1,
 
},

rotate:"180deg",
scrub : 1,
top:"0%",

marginLeft:"40vw"

})
gsap.to("#center img",{
    scrollTrigger : {
    trigger : "#first",
    start : "top 10%",
       scrub : 1,
 
},

rotate:"240deg",
scrub : 1,
top:"0%",
marginLeft:"65vw"

})
gsap.to("#center img",{
    scrollTrigger : {
    trigger : "#first",
    start : "top 10%",
       scrub : 1,
 
},

rotate:"360deg",
scrub : 1,
// 
x:"50%",
marginLeft:"100vw"

})
// ----------second
gsap.to("#sec #semicircle",{
    scrollTrigger : {
    trigger : "#sec",
    start : "top 110%",
    // start : "top 80%",
       scrub : 1,
 
},

rotate:"18deg",

})
gsap.to("#sec #semicircle",{
    scrollTrigger : {
    trigger : "#sec",
    start : "top 25%",
   
       scrub : 1,
 
},
duration:2,
rotate:"5deg",

})
gsap.to("#sec #semicircle",{
    scrollTrigger : {
    trigger : "#sec",
    start : "top 10%",
   
       scrub : 1,
 
},
duration:2,
rotate:"-30deg",

})
gsap.to("#sec #semicircle",{
    scrollTrigger : {
    trigger : "#sec",
    start : "top 10%",
   
       scrub : 1,
 
},
duration:2,
rotate:"0deg",

})

gsap.set(".anim", { opacity: 0, y: 50 })
gsap.to(".anim",{
    scrollTrigger:{
      trigger : "#three",
    start : "20% 20%",
       scrub : 1,
    },

      opacity: 1,
      y: 0,
      ease: Expo.easeOut,
      stagger: .1,
      duration: .5,
      delay: 1,
  })
  

  gsap.to("#four img,video",{
    scrollTrigger:{
      trigger : "#four",
    start : "10% 60%",
    // markers:true,
       scrub : 1,
    },

top:-350,
  })

 
  gsap.to("#nine ",{
    scrollTrigger:{
      trigger : "#nine",
    start : "top 60%",
    // markers:true,
       scrub : 1,
    },

strager:5,   
top:0,
  })
  gsap.to("#nine #circle",{
    scrollTrigger:{
      trigger : "#nine",
    start : "25% 100%",
    // markers:true,
       scrub : 1,
    },

width:"250vw",
height:"250vw"
  })

  // -------------------

  gsap.set("#six .sixanim", { opacity: 0, y: 80 })

  gsap.to("#six .sixanim",{
    scrollTrigger:{
      trigger : "#six",
    start : "0% 50%",
    // markers:true,
       scrub : 1,
    },

      opacity: 1,
      y: 0,
      ease: Expo.easeOut,
      stagger: .05,
      duration: .5,
      delay: 1,
  })
  
  gsap.set("#six .item", { opacity: 0, padding:"1.9vw 1vw",fontSize:"1vw" })

  gsap.to("#six .item",{
    scrollTrigger:{
      trigger : "#six",
    start : "15% 30%",
    end : "50% 20%",

    },
strager:2.55,
delay:1,

      opacity: 1,
      padding:"4vw 5vw",
      fontSize:"2vw"
     
  })
  

  gsap.set("#six img",{opacity:0,bottom:"30%",left:"85%"} )
  
  gsap.to("#six img",{
  
    scrollTrigger:{
      trigger : "#six",
    start : "50% 20%",
  
    },
duration:2,
    bottom:"0%",
    left:"46%",
      opacity: 1,
 

     
  })

  gsap.set("#eight .eight-anim", { opacity: 0, y: 80 })

  gsap.to("#eight .eight-anim",{
    scrollTrigger:{
      trigger : "#eight",
    start : "0% 50%",
       scrub : 1,
    },

      opacity: 1,
      y: 0,
      ease: Expo.easeOut,
      stagger: .05,
      duration: .5,
      delay: 1,
  })


  gsap.to("#nine .same",{
    scrollTrigger:{
      trigger : "#nine",
    start : "0% 50%",
       scrub : 1,
      //  markers:true
    },
      top:"-10%",
   
      stagger: .8,
      duration: 3,
      // delay: 1,
  })
  gsap.to("#thirteen .cc",{
    scrollTrigger:{
      trigger : "#thirteen",
    start : "10% 90%",
      //  scrub : 1,
      //  markers:true
    },
    duration:5,
  
     rotate:"-360deg"
  })


  //  ------------five

  document.querySelector("#folio1").addEventListener("mouseover",function(){
    document.querySelector("#folio1 img").style.scale = "1";
    document.querySelector("#folio1").style.color = "#51733F";
    document.querySelector("#folio1 h1").style.zIndex = "9999";
    document.querySelector("#folio1 p").style.zIndex = "9999";
})
document.querySelector("#folio1").addEventListener("mouseout",function(){
    document.querySelector("#folio1 img").style.scale = "0";
    document.querySelector("#folio1").style.color = "black";
    document.querySelector("#folio1 h1").style.zIndex = "99";
    document.querySelector("#folio1 p").style.zIndex = "99";
})


document.querySelector("#folio2").addEventListener("mouseover",function(){
  document.querySelector("#folio2 img").style.scale = "1";
  document.querySelector("#folio2").style.color = "#51733F";
  document.querySelector("#folio2 h1").style.zIndex = "9999";
  document.querySelector("#folio2 h5").style.zIndex = "9999";
})
document.querySelector("#folio2").addEventListener("mouseout",function(){
  document.querySelector("#folio2 img").style.scale = "0";
  document.querySelector("#folio2").style.color = "black";
  document.querySelector("#folio2 h1").style.zIndex = "99";
  document.querySelector("#folio2 h5").style.zIndex = "99";
})
document.querySelector("#folio3").addEventListener("mouseover",function(){
  document.querySelector("#folio3 img").style.scale = "1";
  document.querySelector("#folio3").style.color = "#51733F";
  document.querySelector("#folio3 h1").style.zIndex = "9999";
  document.querySelector("#folio3 h5").style.zIndex = "9999";
})
document.querySelector("#folio3").addEventListener("mouseout",function(){
  document.querySelector("#folio3 img").style.scale = "0";
  document.querySelector("#folio3").style.color = "black";
  document.querySelector("#folio3 h1").style.zIndex = "99";
  document.querySelector("#folio3 h5").style.zIndex = "99";
})
document.querySelector("#folio4").addEventListener("mouseover",function(){
  document.querySelector("#folio4 img").style.scale = "1";
  document.querySelector("#folio4").style.color = "#51733F";
  document.querySelector("#folio4 h1").style.zIndex = "9999";
  document.querySelector("#folio4 h5").style.zIndex = "9999";
})
document.querySelector("#folio4").addEventListener("mouseout",function(){
  document.querySelector("#folio4 img").style.scale = "0";
  document.querySelector("#folio4").style.color = "black";
  document.querySelector("#folio4 h1").style.zIndex = "99";
  document.querySelector("#folio4 h5").style.zIndex = "99";    
})
document.querySelector("#folio5").addEventListener("mouseover",function(){
  document.querySelector("#folio5 img").style.scale = "1";
  document.querySelector("#folio5").style.color = "#51733F";
  document.querySelector("#folio5 h1").style.zIndex = "9999";
  document.querySelector("#folio5 h5").style.zIndex = "9999";
})
document.querySelector("#folio5").addEventListener("mouseout",function(){
  document.querySelector("#folio5 img").style.scale = "0";
  document.querySelector("#folio5").style.color = "black";
  document.querySelector("#folio5 h1").style.zIndex = "99";
  document.querySelector("#folio5 h5").style.zIndex = "99";  
})

document.querySelector("#folio6").addEventListener("mouseover",function(){
  document.querySelector("#folio6 img").style.scale = "1";
  document.querySelector("#folio6").style.color = "#51733F";
  document.querySelector("#folio6 h1").style.zIndex = "9999";
  document.querySelector("#folio6 h5").style.zIndex = "9999";
})
document.querySelector("#folio6").addEventListener("mouseout",function(){
  document.querySelector("#folio6 img").style.scale = "0";
  document.querySelector("#folio6").style.color = "black";
  document.querySelector("#folio6 h1").style.zIndex = "99";
  document.querySelector("#folio6 h5").style.zIndex = "99";      
})



