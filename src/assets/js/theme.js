(function($){
"use strict"; // Start of use strict
//Fixed Header
function fixed_header(){
	if($(window).width()>1024){
		var ht = $('#header').height();
		var st = $(window).scrollTop();
		var sf = ht+100;
		if(st>ht){
			$('.scroll-fixed').addClass('nav-fixed');
		}else{
			$('.scroll-fixed').removeClass('nav-fixed');
		}
		if(st>sf){
			$('.scroll-fixed').addClass('nav-show');
		}else{
			$('.scroll-fixed').removeClass('nav-show');
		}
	}
} 
//Offset Menu
function offset_menu(){
	if($(window).width()>767){
		$('.main-nav .sub-menu').each(function(){
			var wdm = $(window).width();
			var wde = $(this).width();
			var offset = $(this).offset().left;
			var tw = offset+wde;
			if(tw>wdm){
				$(this).addClass('offset-right');
			}
		});
	}
}
//Menu Responsive
function rep_menu(){
	$('.toggle-mobile-menu').on('click',function(event){
		event.preventDefault();
		if($(window).width()<768){
			$('.main-nav>ul').toggleClass('active');
		}
	});
	$('.main-nav li.menu-item-has-children>a').on('click',function(event){
		event.preventDefault();
		$(this).next().stop(true,false).slideToggle('slow');
	});
	$('.menu-hover-link').on('click',function(event){
		event.preventDefault();
		$('.content-menu-hover').toggleClass('active');
	});
}
//Image Direct Nav Control
function img_control(){
	if($('.img-directnav').length>0){
		$('.img-directnav').each(function(){	
			//Get html
			if($(this).find('.owl-item.active').prev().length>0){
				$('.prev-img').html($(this).find('.owl-item.active').prev().find('.banner-thumb').html());
			}else{
				$('.prev-img').html($(this).find('.owl-item').last().find('.banner-thumb').html());
			}
			if($(this).find('.owl-item.active').next().length>0){
				$('.next-img').html($(this).find('.owl-item.active').next().find('.banner-thumb').html());
			}else{
				$('.next-img').html($(this).find('.owl-item').first().find('.banner-thumb').html());
			}
		});
	}
}
//Element Control Bar
function e_control(){
	if($('.content-home15').length>0){
		var st = $(window).scrollTop();
		var begin = $('.content-home15').offset().top;
		var h = $('.content-home15').height();
		var f = $('#footer').height();
		var end = begin+h-f;
		if(st>begin&&st<end){
			$('body').addClass('active');
		}else{
			$('body').removeClass('active');
		}
		$('.content-home15>div').each(function(){
			var he = $(this).height();
			var start = $(this).offset().top;
			var stop = start+he;
			if(st>start&&st<stop){
				$(this).addClass('active');
				$('.element-control>a').removeClass('active');
				$('.element-control>a').eq($('.content-home15>div.active').index()).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
	}
}
//Document Ready
jQuery(document).ready(function(){
	//Product Quick View
	$('.quickview-link').fancybox({
		afterShow: function(){
            if($('.product-gallery').length>0){
				$('.product-gallery').each(function(){
						$(this).find('.bxslider').bxSlider({
							pagerCustom: $(this).find('.bx-pager'),
							controls:false,
					});
				});
			}
        }
	});
	//Toggle Sidebar
	$('.toggle-sidebar21').on('click',function(event){
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
	});
	//Fade Slider
	$('.btn-new-col').on('click',function(event){
		event.preventDefault();
		$(this).siblings().removeClass('flipbox');
		$(this).toggleClass('flipbox');
		$('.newcol-slider').slideToggle();
	});
	$('.down-cate').on('click',function(event){
		// event.stopPropagation(); 
		event.preventDefault();
		$(this).siblings().removeClass('flipbox');
		$(this).toggleClass('flipbox');
		$('.list-down-cate').slideToggle();
	});
	$('.menu-hover16  .menu-hover-link16').on('click',function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).next().toggle();
		$(this).toggleClass('flipbox');
	});	
	//Filter Product by color Home 18
	$('.trend-content18').each(function(){
		$(this).find('.attr-color ul li a').on('click',function(event){
			event.preventDefault();
			var data_color=$(this).attr('data-color');
			$(this).parents('.trend-content18').find('.trend-thumb18 img').each(function(){
				if($(this).attr('data-color')==data_color){
					$(this).addClass('active');
				}else{
					$(this).removeClass('active');
				}
			});
		});
	});
	//Filter Product by color Home 21
	$('.item-product21').each(function(){
		$(this).find('.product-thumb-link img').hide();
		$(this).find('.product-thumb-link img').first().show();
		$(this).find('.product-color a').on('click',function(event){
			event.preventDefault();
			$(this).parents('.item-product21').find('.product-thumb-link img').hide();
			$(this).parents('.item-product21').find('.product-thumb-link img').eq($(this).index()).show();
		});
	});
	//Fixed Header
	if($('.scroll-fixed').length>0){
		fixed_header();
		$(window).scroll(function(){
			fixed_header();
		});
	}
	//Animate
	if($(window).width()>767){
		if($('.wow').length>0){
			new WOW().init();
		}
	}
	//Menu Responsive
	rep_menu();
	//Offset Menu
	offset_menu();
	//Product Masonry 20
	if($('.grid-masonry').length>0){
		new AnimOnScroll( document.getElementById( 'grid-masonry' ), {
			minDuration : 0.4,
			maxDuration : 0.7,
			viewportFactor : 0.2
		} );
	}
	//Back To Top
	$('.back-to-top').on('click',function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 1000);
	});
	//Element Control Home 15
	var count = $('.content-home15>div').size();
	$('.content-home15').before('<div class="element-control"></div>');
	var html="";
	for(var i=1;i<=count;i++){
		html+='<a href="#"></a>';
	}
	$('.element-control').html(html);
	$('.element-control a').on('click',function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.content-home15>div').eq($(this).index()).offset().top}, 1000);
		e_control();
	});
	$(window).scroll(function(event){
		e_control();
	});
	//Gallery Control
	$('.view-col').on('click',function(event){
		event.preventDefault();
		$(this).slideUp();
		$(this).parents('.banner-collect-image').next().slideDown();
	});
	$('.close-col').on('click',function(event){
		event.preventDefault();
		$(this).parent().slideUp();
		$(this).parent().prev().find('.view-col').slideDown();
	});
	//Get Content Tab Special
	$('.title-tab-special ul li a').on('click',function(){
		$('.list-caption-intro .caption-intro').removeClass('active');
		$('.list-caption-intro .caption-intro').eq($(this).parent().index()).addClass('active');
	});
	//Image Light Box
	$('.img-lightbox').fancybox();
	//Galery Light Box
	$(".fancybox-gallery").click(function() {
		$.fancybox.open([
			{
				href : 'images/photos/blog/5.jpg',
			}, {
				href : 'images/photos/blog/6.jpg',
			}, {
				href : 'images/photos/blog/7.jpg'
			}, {
				href : 'images/photos/blog/8.jpg'
			}, {
				href : 'images/photos/blog/9.jpg'
			}
		]);
	});
	//Video Light Box
	if($('.content-fashion-design').length>0){
		$('.content-fashion-design .fancybox-media').attr('rel', 'media-gallery').fancybox({
			openEffect : 'none',
			closeEffect : 'none',
			prevEffect : 'none',
			nextEffect : 'none',
			arrows : false,
			helpers : {
				media : {},
				buttons : {}
			}
		});
	}
	//Filter Price
	if($('.range-filter').length>0){
		$( ".range-filter #slider-range" ).slider({
			range: true,
			min: 0,
			max: 2500,
			values: [ 150, 2250 ],
			slide: function( event, ui ) {
				$( ".range-filter  #amount" ).html( "$"+ ui.values[ 0 ] + " - " + "$" + ui.values[ 1 ]);
			}
		});
		$( ".range-filter #amount" ).html("$" + $( ".range-filter #slider-range" ).slider( "values", 0 ) + " - " + "$" + $( ".range-filter #slider-range" ).slider( "values", 1 ));
	}
	//Filter Color
	$('.widget-filter ul li a ').on('click',function(event){
		event.preventDefault();
		$(this).parent().toggleClass('active');
	});
	//Widget Faqs
	$('.widget-faqs li').first().addClass('active');
	$('.widget-faqs li').find('p').hide();
	$('.widget-faqs li').first().find('p').show();
	$('.widget-faqs li h3').on('click',function(){
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		$('.widget-faqs p').not($(this).next()).slideUp();
		$(this).next().slideDown();
	});
	//Supper Deal Countdown
	if($('.supper-deal-countdown').length>0){
		$('.supper-deal-countdown').TimeCircles({
			fg_width: 0.03,
			bg_width: 1.2,
			text_size: 0.07,
			circle_bg_color: "#fff",
			time: {
				Days: {
					show: true,
					text: "",
					color: "#fff"
				},
				Hours: {
					show: true,
					text: "",
					color: "#fff"
				},
				Minutes: {
					show: true,
					text: "",
					color: "#fff"
				},
				Seconds: {
					show: true,
					text: "",
					color: "#fff"
				}
			}
		}); 
	}
	//Big Sale Count Down
	if($('.bigsale-countdown').length>0){
		$('.bigsale-countdown').TimeCircles({
			fg_width: 0.03,
			bg_width: 1,
			text_size: 0.07,
			circle_bg_color: "#333333",
			time: {
				Days: {
					show: true,
					text: "day",
					color: "#fdcd26"
				},
				Hours: {
					show: true,
					text: "hour",
					color: "#fdcd26"
				},
				Minutes: {
					show: true,
					text: "min",
					color: "#fdcd26"
				},
				Seconds: {
					show: true,
					text: "sec",
					color: "#fdcd26"
				}
			}
		}); 
	}
	//Deal Count Down 11
	if($('.deal-count11').length>0){
		$('.deal-count11').TimeCircles({
			fg_width: 0.03,
			bg_width: 1,
			text_size: 0.07,
			circle_bg_color: "#333333",
			time: {
				Days: {
					show: true,
					text: "Days",
					color: "#fdcd26"
				},
				Hours: {
					show: true,
					text: "Hours",
					color: "#fdcd26"
				},
				Minutes: {
					show: true,
					text: "Minutes",
					color: "#fdcd26"
				},
				Seconds: {
					show: true,
					text: "Seconds",
					color: "#fdcd26"
				}
			}
		}); 
	}
});
//Window Load
jQuery(window).load(function(){ 
	//Banner Slider 2
	if($('.banner-slider2').length>0){
		$('.banner-slider2 .bxslider').bxSlider({
			pagerCustom: '.banner-slider2 .bx-pager',
			controls:false,
			auto:true,
			autoHover:true,
			startSlide: 2,
		});
	}
	//Product Tab Slider
	if($('.product-tab-slider').length>0){
		$('.product-tab-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}	
	//Featured Product Slider
	if($('.featured-product-slider').length>0){
		$('.featured-product-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 2], 
				[1024, 2], 
				[1200, 3], 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			});
		});
	}	
	//Hot Cat Adv Slider
	if($('.hot-cat-adv-slider').length>0){
		$('.hot-cat-adv-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 2], 
				[1024, 3], 
				[1200, 3], 
				],
				pagination: false,
				navigation: false,
			});
		});
	}	
	//Featured Product Gallery
	if($('.featured-product-gallery').length>0){
		$('.featured-product-gallery').each(function(){
				$(this).find('.bxslider').bxSlider({
					pagerCustom: $(this).find('.bx-pager'),
					controls:false,
			});
		})
	}
	//Product Gallery
	if($('.product-gallery').length>0){
		$('.product-gallery').each(function(){
				$(this).find('.bxslider').bxSlider({
					pagerCustom: $(this).find('.bx-pager'),
					controls:false,
			});
		});
	}
	//Banner Slider3
	if($('.banner-slider3').length>0){
		$('.banner-slider3').each(function(){
				$(this).find('.bxslider').bxSlider({
					pagerCustom: $(this).find('.bx-pager'),
					controls:false,
					startSlide:1
			});
		});
	}
	//Single Gallery
	if($('.single-gallery-slider').length>0){
		$('.single-gallery-slider').each(function(){
				$(this).find('.bxslider').bxSlider({
					pagerCustom: $(this).find('.bx-pager'),
					controls:true,
					prevText:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
					nextText:'<i class="fa fa-angle-right" aria-hidden="true"></i>',
			});
		});
		$('.single-gallery-slider .bx-controls').insertAfter('.single-gallery-info .post-author');
	}
	//Product SLider 12
	if($('.product-slider12').length>0){
		$('.product-slider12').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 4,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1200, 4] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			});
		});
	}	
	//New Collection 16
	if($('.newcol-slider').length>0){
		$('.newcol-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 5,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1360, 4], 
				[1920, 5], 
				],
				pagination: false,
				navigation: false,
				autoPlay:true,
				stopOnHover:true
			});
		});
	}	
	//Product Slider 9
	if($('.product-slider9').length>0){
		$('.product-slider9').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 5,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 4],
				[1366, 5] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}	
	//Brand Slider
	if($('.brand-slider').length>0){
		$('.brand-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 4,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1200, 4] 
				],
				pagination: false,
				navigation: false,
				autoPlay:true,
				stopOnHover:true
			});
		});
	}	
	//Latest Slider 6
	if($('.latest-news-slider6').length>0){
		$('.latest-news-slider6').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}	
	//Category Slider 6
	if($('.category-slider6').length>0){
		$('.category-slider6').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 5,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1200, 5] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}	
	//Product Slider 7
	if($('.product-slider7').length>0){
		$('.product-slider7').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: false,
				navigation: true,
				navigationText:['','']
			});
		});
	}	
	//Testimo Slider 7
	if($('.testimo-slide7').length>0){
		$('.testimo-slide7').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: false,
				navigation: true,
				navigationText:['','']
			});
		});
	}	
	//Shop Look 7
	if($('.shoplook-slider7').length>0){
		$('.shoplook-slider7').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 5,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 4], 
				[1366, 5] 
				],
				pagination: false,
				navigation: true,
				navigationText:['','']
			});
		});
	}	
	//Owl Direct Nav
	if($('.owl-directnav').length>0){
		$('.owl-directnav').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: false,
				navigation: true,
				addClassActive:true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}	
	//Related Product Slider
	if($('.related-product-slider').length>0){
		$('.related-product-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: true,
				navigation: false,
			});
		});
	}		
	//Mega Slider
	if($('.mega-slider').length>0){
		$('.mega-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 2,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 2], 
				[992, 2], 
				[1200, 2] 
				],
				pagination: true,
				navigation: false,
			});
		});
	}		
	//Banner SLider 4
	if($('.banner-slider4').length>0){
		$('.banner-slider4').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: false,
				navigation: true,
				addClassActive:true,
				autoPlay:true,
				stopOnHover:true,navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Featured Product Tab
	$('.featured-product-title a').on('click',function(event){
		event.preventDefault();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		var id=$(this).attr('data-id');
		$('.content-featured-product').each(function(){
			if($(this).attr('id')==id){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
	});
	//Product Tab
	$('.title-gal-pro-tab a').on('click',function(event){
		event.preventDefault();
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		var id=$(this).attr('data-id');
		$('.gal-pro-slider').each(function(){
			if($(this).attr('id')==id){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
	});
	//Gallery Product Tabs
	if($('.gal-pro-slider').length>0){
		$('.gal-pro-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[481, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: true,
				navigation: false,
			});
		});
	}
	//Tabs Product Gallery
	if($('.gal-pro-tab').length>0){
		$('.gal-pro-tab').each(function(){
			$(this).find('.bxslider').bxSlider({
				pagerCustom: $(this).find('.bx-pager'),
				controls:false,
				randomStart:true
			});
		})
	} 
	//Banner Slider 12
	if($('.banner-slider12').length>0){
		$('.banner-slider12').each(function(){
				$(this).find('.bxslider').bxSlider({
					controls:false,
					pager:true,		
					startSlide: 1,
			});
		})
	} 
	//Popular Category Slider
	if($('.popcat-slider').length>0){
		$('.popcat-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: true,
				navigation: false,
			});
		});
	}
	//From Blog 5
	if($('.from-blog-slider5').length>0){
		$('.from-blog-slider5').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 2,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 2], 
				[992, 2], 
				[1200, 2] 
				],
				pagination: true,
				navigation: false,
			});
		});
	}
	//Summer List Cat
	if($('.summer-list-cat').length>0){
		$('.summer-list-cat').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[482, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: false,
				navigation: false,
			});
		});
	}
	//List Adv 11
	if($('.list-adv11').length>0){
		$('.list-adv11').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[640, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: false,
				navigation: false,
			});
		});
	}
	//Testimonial 4
	if($('.list-testimo4').length>0){
		$('.list-testimo4').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 4,
				itemsCustom: [ 
				[0, 1], 
				[481, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: false,
				navigation: false,
			});
		});
	}
	//Special Slider
	if($('.content-special-slider').length>0){
		$('.content-special-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 4,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1200, 4] 
				],
				pagination: true,
				navigation: false,
			});
		});
	}
	//Best Saller Slider 11
	if($('.bestsale-slider11').length>0){
		$('.bestsale-slider11').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 6,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1280, 5], 
				[1920, 6], 
				],
				pagination: true,
				navigation: false,
			});
		});
	}
	//Brand Slider 17
	if($('.brand-slider17').length>0){
		$('.brand-slider17').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 4,
				itemsCustom: [ 
				[0, 2], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 4] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Trennd Slider 17
	if($('.trend-slider').length>0){
		$('.trend-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 4,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 4] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Product Tab Slider 18
	if($('.pro-tab-slider18').length>0){
		$('.pro-tab-slider18').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 5,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 4], 
				[1200, 5] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Adv Slider 18
	if($('.adv-slider18').length>0){
		$('.adv-slider18').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 3,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 2], 
				[992, 3], 
				[1200, 3] 
				],
				pagination: false,
				navigation: true,
				addClassActive:true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
		$('.adv-slider18 .owl-item').on('mouseover',function(){
			$(this).siblings().addClass('onhover');
			$(this).removeClass('onhover');
		});
		$('.adv-slider18 .owl-item').on('mouseout',function(){
			$('.adv-slider18 .owl-item').removeClass('onhover');
		});
	}
	//Collection Slider 18
	if($('.collect-slider18').length>0){
		$('.collect-slider18').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
			
		});
		//Insert Control
		$('.collect-content18').each(function(){
			$(this).find('.collect-slider18 .owl-controls .owl-pagination').insertBefore($(this).find('.collect-info18 .shopnow'));
		});
	}
	//Product Slider 21
	if($('.product-slider21').length>0){
		$('.product-slider21').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 4],	 
				[1366, 5] 
				],
				pagination: false,
				navigation: true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Banner Slider 17
	if($('.banner-slider17').length>0){
		$('.banner-slider17').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: false,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Img Directnav
	if($('.img-directnav').length>0){
		$('.img-directnav').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: false,
				navigation: true,
				addClassActive:true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
				afterAction:img_control
			});
			$(this).find('.owl-controls .owl-prev').append('<div class="prev-img"></div>');
			$(this).find('.owl-controls .owl-next').append('<div class="next-img"></div>');	
			img_control();
		});
	}
	//Slider Home 22
	if($('.slider-page').length>0){
		var owl = $('.wrap-item');
		$('.slider-page').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: false,
				navigation: false,
				afterInit:function(){
					if($('.product-scroll').length>0){
						$('.product-scroll').mCustomScrollbar({
							scrollButtons:{
								enable:true
							}
						});
						/* $('.slider-page').height($('.slider-thumb img').height()); */
					}
				}
			});
		});
		$('.next-slider').on('click',function(event){
			event.preventDefault();
			owl.trigger('owl.next');
		});
		$('.prev-slider').on('click',function(event){
			event.preventDefault();
			owl.trigger('owl.prev');
		});
	}
	//Owl Paginav 19
	if($('.owl-directnav19').length>0){
		$('.owl-directnav19').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 2], 
				[768, 3], 
				[992, 3], 
				[1200, 4] 
				],
				pagination: false,
				navigation: true,
				addClassActive:true,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Banner Slider 16
	if($('.banner-slider16').length>0){
		$('.banner-slider16').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: false,
				paginationNumbers:true,
				addClassActive:true,
			});
		});
		//Insert Control Slider
		$('.banner-slider16 .owl-controls').appendTo('.control-slider');
	}
	//Gallery Slider Special
	if($('.gal-special-slider.owl-paginav').length>0){
		$('.owl-paginav').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: true,
				autoPlay:false,
				addClassActive:true,
			});
		});
	}
	//Perfect Banner Slider
	if($('.perfect-banner-slider').length>0){
		$('.perfect-banner-slider').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: false,
				autoPlay:true,
			});
		});
	}
	//Owl Pagi Nav
	if($('.product-gall20 .owl-paginav').length>0){
		$('.product-gall20 .owl-paginav').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: true,
				autoPlay:false,
				navigationText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
			});
		});
	}
	//Owl Pagi Nav
	if($('.owl-paginav').length>0){
		$('.owl-paginav').each(function(){
			$(this).find('.wrap-item').owlCarousel({
				items: 1,
				itemsCustom: [ 
				[0, 1], 
				[480, 1], 
				[768, 1], 
				[992, 1], 
				[1200, 1] 
				],
				pagination: true,
				navigation: false,
				autoPlay:true,
				addClassActive:true,
			});
		});
	}
	//Blog Masonry 
	if($('.list-post-masonry').length>0){
		$('.list-post-masonry').masonry({
			itemSelector: '.post-item',
		});
	}	
	//Slick Slider
	if($('.testimo-slider10').length>0){
		$('.testimo-slider10 .center').each(function(){
			$(this).slick({
			  centerMode: true,
			  centerPadding: '27.5%',
			  prevArrow:'<div class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
			  nextArrow:'<div class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
			  slidesToShow: 1,
			  responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				  }
				}
			  ]
			});	
		});
	}
	if($('.banner-slider11').length>0){
		$('.banner-slider11 .center').each(function(){
			$(this).slick({
			  centerMode: true,
			  centerPadding: '20%',
			  prevArrow:'<div class="prev"><span>prev</span></div>',
			  nextArrow:'<div class="next"><span>next</span></div>',
			  slidesToShow: 1,
			  responsive: [
				{
				  breakpoint: 768,
				  settings: {
					arrows: false,
					centerMode: false,
					centerPadding: '0px',
					slidesToShow: 1
				  }
				}
			  ]
			});	
		});
	}
	//Insert Control
	$('.seasion-slider .owl-controls').insertBefore($('.seasion-info .shopnow'));	
});
//Window Resize
jQuery(window).resize(function(){
	offset_menu();
});
})(jQuery); // End of use strict