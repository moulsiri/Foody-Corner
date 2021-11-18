let tl=gsap.timeline()
gsap.set("#left img",{ transformOrigin:"-50%,-50%"})
tl
.from("#left",{
    width:0,
    duration:.5,
    ease:Sine.easeInOut
})
.from("#curve1",{
    width:0,
    height:0,
    duration:2.9,
    // x:-300
},"-=2")
.from("#left img",{
    scale:(0,0),
  rotateY:100,
  display:"none",
  duration:2,
  ease:Elastic.easeOut

},"-=.5")
.from("#lnav",{
    ease:Bounce.easeInOut,
    y:-5,
    opacity:0,
    duration:1.5

},"-=1")
.from("#ltxt",{
    x:50,
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
},"-=1.9")
.from("#text",{
    ease:Expo.easeInOut,
    opacity:0,
    x:-70,
    duration:1,

},"-=1")
.from("#recipe",{
    opacity:0,
    x:-50,
    duration:2,
    ease:Elastic.easeOut

},"-=.2")
.from("#line",{
    width:0,
    duration:1,
    ease:Expo.easeInOut

},"-=1")
.from("#links a",{
    stagger:.3,
    ease:Expo.easeInOut,
    // y:-5,
    opacity:0,
    duration:1.5
},"-=2")
.from("#navIcon i",{
    stagger:.3,
    ease:Bounce.easeInOut,
    opacity:0,
    x:5,
    duration:1
    
},"-=.5")
.from("#btn",{
    stagger:.3,
    ease:Bounce.easeInOut,
    y:10,
    duration:1,
    opacity:0
},"-=1.5")

