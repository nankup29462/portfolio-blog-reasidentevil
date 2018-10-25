// Comment FB
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// NAV BAR MOTION
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop > 1){
        $('#navbar').css('padding','0 20px')
    }else{
        $('#navbar').css('padding','20px')
    }
})

// Owl
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop : false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }  
    });
});

// On top
$('.to-top').click(function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
})





