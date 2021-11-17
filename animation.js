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
    y:-100,
    duration:2

},"-=3")
.from("#nav a,#nav i",{
    stagger:.3,
    y:-100,
    opacity:0,
    duration:2
},"-=2")
.from("#text,#line",{
    ease:Elastic.easeInOut,
    x:700,
    duration:1,
    width:0
},"-=3")
.from("#ltxt",{
    x:-500,
    duration:2,
    ease:Elastic.easeInOut
},"-=4")
.from("#recipe",{
    stagger:1,
    duration:2,
    x:500,
    ease:Elastic.easeOut

},"-=3")
.from("#btn",{
    stagger:.3,
    ease:Bounce.easeInOut,
    y:200
},"-=3")

