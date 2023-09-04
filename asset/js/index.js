//  function icon(x) {
//     x.classList.toggle("fa-xmark");
//   }

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

document.onclick = () => applyCursorRippleEffect(event); 

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

   ripple.style.animation = "ripple-effect .4s  linear";
   ripple.onanimationend = () => document.body.removeChild(ripple);

}

var animation = 'rubberBand';
$('.icon').on('click', function () {
$(this).toggleClass('icon--active');
});
$('.icon').on('click', function () {
$(this).addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
$(this).removeClass('animated ' + animation);
});
});




$(document).ready(function() {
    /* Progress Bar animation */
    $(".progress-bar").animate({
        width: "100%"
    }, 250 ); // start in under a sec
});

var preloader=document.getElementById('preloader');
function loading(){
    preloader.style.display="none";
}