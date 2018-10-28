
/*----------------------------*\
#smooth scroll
\*----------------------------*/

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;
    console.log(target)

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c/ 2 * t * t +b;
        t--;
        return -c /2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var opracBierzMat = document.querySelector('#obm--button');

// opracBierzMat.addEventListener('click', function(){
//     console.log("clicked")
//     smoothScroll('#oprac--bierz--mat', 1000);
// });

/*----------------------------*\
#navbar color change
\*----------------------------*/

var navbar = document.querySelector('.navbar');

var topImage = document.querySelector('.top_image');




window.addEventListener('scroll', function () {
    var scrollYdist = window.pageYOffset;
    var topHeight = topImage.clientHeight;
    
    if (topHeight < scrollYdist) {
        navbar.style.background = '#476885';
    }
    else{
        navbar.style.background = 'rgba(45, 40, 80, 0.8)';
    }
    //to chowa pasek przy skrolowaniu
    // navbarLinks.style.display = "none";
})

/*----------------------------*\
#hamburger menu
\*----------------------------*/

var hamburgerMenu = document.querySelector('.burger--icon')
var navbarLinks = document.querySelector('.navbar--links--container')

var burgerClickCount = 0;

function menuUnwrap() {

    if (burgerClickCount == 0) {
        burgerClickCount = 1
        navbarLinks.style.display = "flex";
    } else if (burgerClickCount == 1){
        burgerClickCount = 0
        navbarLinks.style.display = "none";
    }

}