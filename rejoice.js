

// lococnotive js use for smooth scrolling
// locomotive codepen for smooth scrolling 
function locomotiveCode() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveCode();


function courserAnnimation() {
    const courser = document.querySelector(".courser");

    const page1 = document.querySelector(".page1");
    page1.addEventListener("mousemove", (e) => {
        console.log(e.x);
        gsap.to(courser, {
            x: e.x-35,
            y: e.y-35,
        })
    })
    page1.addEventListener("mouseenter", () => {
        gsap.to(courser, {
            scale: 1,
            opacity: 1,
            duration: 0.5
        })
    })
    page1.addEventListener("mouseleave", () => {
        gsap.to(courser, {
            scale: 0,
            duration: 0.5,
            opacity: 0,
        })
    })
}
courserAnnimation();


function page2Annimation() {
    gsap.from(".headpart h2 span", {
        y: -80,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".headpart h2 span",
            scroller: ".main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3,
        }
    })

    gsap.to(".headline", {
        width: "100%",
        duration: 0.7,
        scrollTrigger: {
            trigger: ".headline",
            scroller: ".main",
            start: "top 90%",
            end: "top 10%",
            scrub: 3,
        }
    })

    gsap.from(".elem h1 span", {
        y: 80,
        stagger: {
            amount: 0.7
        },
        duration: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: ".elem h1 span",
            scroller: ".main",
            start: "top 95%",
            end: "top 50%",
            scrub: 3,
        }
    })
}
page2Annimation();


function page3Annimation() {
    const page3Top = document.querySelector(".title2");

    gsap.from(".title2 h1 span", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".title2 h1 span",
            scroller: ".main",
            start: "top 90%",
            end: "top 50%",
            scrub: 1,
        }
    })

    page3Top.addEventListener("mouseenter", () => {
        gsap.to(".page3line", {
            width: "100%",
            opacity: 1,
            duration: 1,
            stagger: 0.2
        })
    })

    page3Top.addEventListener("mouseleave", () => {
        gsap.to(".page3line", {
            width: "0%",
            opacity: 0,
            duration: 0.7,
            stagger: 0.1
        })
    })
}
page3Annimation();


function loaderAnnimation() {
    const tl = gsap.timeline();

    tl.from(".loader h2", {
        x: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1
    })

    tl.to(".loader h2", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: -0.2,
    }
    )
    tl.to(".loader", {
        opacity: 0,
        display: "none"
    })

    tl.from(".page1-content nav h2", {
        x: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        delay: -0.4
    })

    tl.from(".page1-content h1 span", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: -0.5,
    })
}
loaderAnnimation();

function page4Annimation() {
    gsap.from(".page4-top h4 span", {
        y: -50,
        opacity: 0,
        duration: 0.3,
        scrollTrigger: {
            trigger: ".page4-top h4 span",
            scroller: ".main",
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
        }
    })


    gsap.to(".page4headline", {
        width: "100%",
        duration: 0.7,
        scrollTrigger: {
            trigger: ".page4headline",
            scroller: ".main",
            start: "top 80%",
            end: "top 10%",
            scrub: 1,
        }
    })


    gsap.from(".page4elme h4 span", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: {
            amount: 0.3,
        },
        scrollTrigger: {
            trigger: ".page4elme h4 span",
            scroller: ".main",
            start: "top 95%",
            end: "top 5%",
            scrub: 1,
        }
    })

}
page4Annimation();


function page5Annimation(){
    gsap.to(".pg5video",{
        height:`80%`,
        width:`100%`,
        scrollTrigger:{
            trigger:`.pg5video`,
            scroller:`.main`,
            start:`30%`,
            end:`60%`,
            markers:true
        }
    })
}

gsap.from(".bottom-footer h1 span",{
    y:-100,
    opacity:0,
    duration:0.5,
    stagger:{
        amount:0.5
    },
    scrollTrigger:{
        trigger:".bottom-footer h1 span",
        scroller:".main",
        start:"top 50%",
        end:"top 50%",
        scrub:2
    }
})