var active = 3;
var minicircles = document.querySelectorAll(".minicircle");
var seconds = document.querySelectorAll(".second");


function removeHighlight(){
    gsap.to(minicircles,{
        opacity: .1
    })
    gsap.to(seconds,{
        opacity: .3
    })
}

gsap.to(minicircles[active-1],{
    opacity: .7
})
gsap.to(seconds[active-1],{
    opacity: 1
})

minicircles.forEach(function(val,index){
    val.addEventListener("click", function(){
        gsap.to(".circle",{
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration: 1
        })
        removeHighlight();
        gsap.to(this,{
            opacity: .7
        })
        gsap.to(seconds[index],{
            opacity: 1
        })
    })
})





gsap.to(".circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})