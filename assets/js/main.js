jQuery(function($){
	var gnb_arr = [];

	var gnb_active = function(selector){
		$(selector + " .scr").each(function(i){
			gnb_arr[i] = $(this).attr('data-scr');
		});

		for (var i = 0; i < gnb_arr.length; i++)
		{
			var off_top = $(gnb_arr[i]).offset().top;
			var con_height = $(gnb_arr[i]).outerHeight();
			var top_sum = off_top;
			var bot_sum = off_top + con_height;

			if ($(window).scrollTop() + 10 >= $(gnb_arr[i]).offset().top - $('#header').outerHeight()){
				$(selector + " .dep1_con").removeClass("active");
				$(selector + " .scr").eq(i).parent("li").addClass("active");
			}
		}
		if ($(window).scrollTop() + 10 < $(gnb_arr[0]).offset().top - $('#header').outerHeight()){
			$(selector + " .dep1_con").removeClass("active");
		}
	}
	var gnb_click_event = function($this){
		var id = $this.attr('data-scr');
		var off_top = $(id).offset().top;
		var top_sum = off_top - $('#header').outerHeight() + 1;
		$('html, body').stop().animate({
			scrollTop:top_sum
		});
	}
	$('.gnb .scr').on('click', function(){
		var $this = $(this);
		gnb_click_event($this);
	});
	$('.m_gnb_area .scr').on('click', function(){
		var $this = $(this);
		gnb_click_event($this);
		$('.m_gnb_area .gnb_wrap').stop().fadeOut();
	});
	$('.scr_section_move').on('click', function(){
		var $this = $(this);
		gnb_click_event($this);
	});
	$(window).scroll(function(){
		gnb_active('.gnb');
		gnb_active('.m_gnb_area');
	});
	$(document).ready(function(){
		gnb_active('.gnb');
		gnb_active('.m_gnb_area');
	});

	$('.open_gnb').on('click', function(){
		$('.m_gnb_area .gnb_wrap').stop().fadeIn();
	});
	$('.close_gnb').on('click', function(){
		$('.m_gnb_area .gnb_wrap').stop().fadeOut();
	});
	$('.m_slide .wrap #slide_wrap .slide').bxSlider({
		pagerCustom:'.m_slide .wrap .nav .dep1_wrap',
		adaptiveHeight:true
	});
	$('.scr_top').on('click', function(){
		$('html, body').animate({scrollTop:0});
		$('.m_gnb_area .gnb_wrap').stop().fadeOut();
	});
});