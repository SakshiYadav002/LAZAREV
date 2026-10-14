function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}


function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}


function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {




            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x -50,
                y: dets.y - elem.getBoundingClientRect().y - 100,
            })
        })
    })
}


function page3VideoAnimation() {
    var page3Center = document.querySelector("#page3-center")
    var video = document.querySelector("#page3 video")

    page3Center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}


function page7Animation() {
    var sections = document.querySelectorAll(".sec-right")
    var para = document.querySelectorAll(".sec-right p")

    sections.forEach(function (elem) {
        elem.addEventListener("mouseenter", function (dets) {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()

        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })
}


function page8Animation() {
    var page8Videos = document.querySelectorAll(".page8-down video")
    var page8Contents = document.querySelectorAll(".page8-content")

    page8Videos.forEach(function (elem, i) {
        elem.addEventListener("mouseenter", function () {
            var tl1 = gsap.timeline()
            tl1.to(elem, {
                opacity: 1,
                duration: 0
            })
            tl1.to(elem, {
                height: "100%",
                duration: 0.4
            })
            gsap.to(page8Contents[i], {
                borderTop: "2px solid #111",
                duration: 0.1
            })
            elem.play()
        })
        elem.addEventListener("mouseleave", function () {
            var tl2 = gsap.timeline()
            tl2.to(elem, {
                height: "65%",
                duration: 0.4
            })
            tl2.to(elem, {
                opacity: 0,
                duration: 0
            })
            gsap.to(page8Contents[i], {
                borderTop: "1px solid #dcdcdc",
                duration: 0.1
            })
            elem.pause()
            elem.currentTime = 0
        })
    })
}

function page10Details() {
    var headingIcons = document.querySelectorAll(".heading i")
    var details = document.querySelectorAll("details")

    details.forEach(function (elem, i) {
        elem.addEventListener("toggle", function (event) {
            if (elem.open) {
                headingIcons[i].classList.remove("ri-arrow-down-s-line")
                headingIcons[i].classList.add("ri-arrow-up-s-line")
            }
            else {
                headingIcons[i].classList.remove("ri-arrow-up-s-line")
                headingIcons[i].classList.add("ri-arrow-down-s-line")
            }
        })
    });
}


function page10Animation() {
    var page10Elem = document.querySelectorAll(".page10-elem")
    var over = document.querySelectorAll(".over")

    page10Elem.forEach(function (elem, i) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(over[i], {
                y: "0%",
                opacity: 1,
                duration: 0.1
            })
        })
    })
    page10Elem.forEach(function (elem, i) {
        elem.addEventListener("mouseleave", function () {
            var tl = gsap.timeline()
            tl.to(over[i], {
                y: "100%",
                duration: 0.1
            })
            tl.to(over[i], {
                opacity: 0,
                duration: 0.3
            })
            tl.to(over[i], {
                y: "-100%",
                duration: 0
            })
        })
    })
}


    function page11Animations() {
    gsap.from(".btm11-parts h5", {
        x: 10,
        duration: 1,
        scrollTrigger: {
            trigger: ".btm11-parts",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 30%",
            scrub: true
        }
    })
}

locomotiveAnimation()
navAnimation()
page2Animation()
page3VideoAnimation()
page7Animation()
page8Animation()
page10Details()
page10Animation()
page11Animations();
loadingAnimation()


