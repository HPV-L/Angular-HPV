(function($){
"use strict"; // Start of use strict
function scroll_paral(){
	if($('.list-product-parallax').length>0){
		var st = $(window).scrollTop();
		$('.item-product-parallax').each(function(){
			var hit = $(this).height();
			var obt = $(this).offset().top-100;
			var stop = obt+hit+100;
			var mgt = (st-obt)/3;
			var lmg = (st-obt)/4;
			if(st>obt&&st<stop){
				$(this).addClass('active');
				$(this).find('.front-product .paral-img img').css('margin-top','-'+mgt+'px');
				$(this).find('.front-product .paral-img .first-letter').css('margin-top',mgt+'px');
			}else{
				$(this).removeClass('active');
			}
		});
		$('.paral-control a').removeClass('active');
		$('.item-product-parallax.active .paral-control a').eq($('.item-product-parallax.active').index()).addClass('active');
	}
}
//Document Ready
jQuery(document).ready(function(){
	$('.front-product .paral-img').each(function(){
		$(this).height($(this).find('img').height());
	});
	//Get Control html
	var count = $('.item-product-parallax').size();
	$('.item-product-parallax').each(function(){
		$(this).append('<div class="paral-control"></div>');
	});
	var html="";
	for(var i=1;i<=count;i++){
		if(i<10){
			html+='<a href="#"><span>'+0+i+'</span></a>';
		}else{
			html+='<a href="#"><span>'+i+'</span></a>';
		}
	}
	$('.paral-control').html(html);
	$('.paral-control').each(function(){
		var h = ($(this).height())/2+30;
		$(this).css('margin-top','-'+h+'px');
	});
	$('.paral-control a').on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.item-product-parallax').eq($(this).index()).offset().top}, 1000);
		scroll_paral();
	});
	//Scroll
	scroll_paral();
	$(window).scroll(function(event){
		scroll_paral();
		$('.banner-count').slideUp('slow');
		$('body').addClass('onscroll');
	});
	
});
})(jQuery); // End of use strict
