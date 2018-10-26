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

// btn blog 
// block
function btnClick(number){
    if(number==1){
        // All case
        var x = document.getElementsByClassName("story");
        var y = document.getElementsByClassName("character");
        var z = document.getElementsByClassName("monster");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
        for (i = 0; i < z.length; i++) {
            z[i].style.display = "block";
        }

    }else if(number==2){
        // story(x) case
        var x = document.getElementsByClassName("story");
        var y = document.getElementsByClassName("character");
        var z = document.getElementsByClassName("monster");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "block";
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        for (i = 0; i < z.length; i++) {
            z[i].style.display = "none";
        }
    }else if(number==3){
        // character case
        var x = document.getElementsByClassName("story");
        var y = document.getElementsByClassName("character");
        var z = document.getElementsByClassName("monster");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "block";
        }
        for (i = 0; i < z.length; i++) {
            z[i].style.display = "none";
        }
    }else if(number==4){
        // monster case
        var x = document.getElementsByClassName("story");
        var y = document.getElementsByClassName("character");
        var z = document.getElementsByClassName("monster");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < y.length; i++) {
            y[i].style.display = "none";
        }
        for (i = 0; i < z.length; i++) {
            z[i].style.display = "block";
        }
    }
}


