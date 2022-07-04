let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});
let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});


let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});


tl.fromTo('.sliding-text', {y:0}, {y: -400});
tl2.fromTo('.logo', {scale: 4}, {scale:1 , top:"2rem", 
left:"3rem", x:'50%', y:'50%'});
tl4.fromTo('.square', {left: "70%" }, {left: "100%", opacity: 0, rotation: 90 });

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '600%',
        scrub: 1,
        pin: true,
        pinSpacing: false
    },
});

function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}
window.addEventListener('scroll',scrollAppear);

function scrollAppear2(){
    var introTexts = document.querySelector('.thrid-text');
    var introPosition = introTexts.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;

    if(introPosition < screenPosition){
        introTexts.classList.add('intro-appears');
    }
}
window.addEventListener('scroll',scrollAppear2);

const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector("section");

const MAX_SCROLL = document.documentElement.getBoundingClientRect().height - document.documentElement.clientHeight;

const animateProgressBar = () => {
    const scrollDistance = Math.ceil(window.scrollY);
    progressBar.style.width = `${Math.round((scrollDistance / MAX_SCROLL) * 100)}%`;
};

window.addEventListener('scroll', animateProgressBar);
