// document.addEventListener("DOMContentLoaded", (event) => {
    // gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    
    // .logo
    gsap.from(
        '.logo',
        {
            duration: 1,
            x: '-100%',
            ease: 'bounce'
        });
    //  .logoEnd
    gsap.from(
        '.logoEnd',
        {
            duration: 1,
            opacity: 0,
            delay: 1
        });
    // .link
    // opacity
    gsap.from(
        '.link',
        {
            duration: 1,
            delay: 1,
            opacity: 0,
            stagger: .5,
        });
    // translateY
    gsap.from(
        '.link',
        {
            duration: .5,
            delay: 1,
            y: '-100%',
            stagger: .5,
        });
    
    // .box
    gsap.set('.box', { y: 100 });
    gsap.to(
        '.box',
        {
            duration: 1,
            y: 0,
            ease: 'power3.out'
        }
    );



// });