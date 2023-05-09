window.onbeforeunload = function(){
    window.scrollTo(0, 0);
}


// INTERSECTION OBSERVER \\
let div2h2 = document.querySelector('.div2__h2');
let div2p = document.querySelector('.div2__p');
let div2img = document.querySelector('.div2__img');
let div2group = document.querySelector('.div2__group');
let div3h2 = document.querySelector('.div3__h2');
let div3p = document.querySelector('.div3__p');
let portfoliowrapper = document.querySelector('.div3__portfolio-wrapper');
let div4alla = document.querySelector('.div4__footer-all-a');
let div4p = document.querySelector('.div4__footer-p');

const observer = new IntersectionObserver(function (entries){
    entries.forEach(function (entry){
        entry.target.classList.toggle('show', entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);               // Pojave se samo prvi put
    });
}, {
    threshold: 0.6,                                                               // default: 0 , recommended: 0.5
    // rootmargin: "100px",                                                       // Ucitava slike 100px pre nego dodjemo do njih
});

observer.observe(div2h2);
observer.observe(div2p);
observer.observe(div2img);
observer.observe(div2group);
observer.observe(div3h2);
observer.observe(div3p);
observer.observe(portfoliowrapper);
observer.observe(div4alla);
observer.observe(div4p);

