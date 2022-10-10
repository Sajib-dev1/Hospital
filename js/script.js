$(function(){
$('.back-to-top').on('click',function(){
    $('html,body').animate({scrollTop: 0},1000)
});

$(window).on('scroll',function(){
    var scroll =$(this).scrollTop()
    if(scroll>50){
        $('.back-to-top').fadeIn(500)
    }
    else{
        $('.back-to-top').fadeOut(500)
    }
    if(scroll>50){
        $('.navbar').addClass('sticke-menu')
    }
    else{
        $('.navbar').removeClass('sticke-menu')
    }
});

// ==========one page nav js===================
$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
});

// ===============side bar================
$('.show').on('click',function(){
  $('.slide-bar').css('left','0px')
});
$('.crose').on('click',function(){
  $('.slide-bar').css('left','-100%')
});
$('.nav-link').on('click',function (){
    $('.slide-bar').css({left:'-100%'});
});
});