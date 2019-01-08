// JavaScript Document
$(function(){
	$(".channelMall li:last").css("border-bottom","solid 1px #4084C1");
	//$(".channelMall li:last").css("border-bottom","solid 1px #EC404C");
	//图片移动效果
	var rank_move_time  = 300;//偏移时速
	var rank_move_range = 13;
	$(".hover_moving_img").hover(
		function(){
			$(this).stop().animate({"marginLeft":-rank_move_range},rank_move_time);
		},
		function(){
			$(this).stop().animate({"marginLeft":0},rank_move_time);
		}
	);
	$(function(){
	//输入关键字
	$(".searchDiv_form_L").focus(function(){
		$(this).val("");
	}).blur(function(){
		$(this).val(this.defaultValue);
	});
		
	//返回顶部JS
	var $backToTopTxt = "", $backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
		.text($backToTopTxt).attr("title", $backToTopTxt).click(function() {
			$("html, body").animate({ scrollTop: 0 }, 120);
	}), $backToTopFun = function() {
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 0)? $backToTopEle.show(): $backToTopEle.hide();
		//IE6下的定位
		if (!window.XMLHttpRequest) {
			$backToTopEle.css("top", st + winh - 166);
		}
	};
	$(window).bind("scroll", $backToTopFun);
	$(function() { $backToTopFun(); });

	
});



	
});











	
	
	
		














