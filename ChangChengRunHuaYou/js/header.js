$(function(){
	//输入关键字
	$(".searchDiv_form_L").focus(function(){
		$(this).val("");
	}).blur(function(){
		$(this).val(this.defaultValue);
	});
	
	$(".cc_formOrderinp1").focus(function(){
		$(this).val("");
	}).blur(function(){
		$(this).val(this.defaultValue);
	});
	
	
	//首页鼠标经过商城频道
	$(".pingDao").hover(
		function(){
			$(".channelMall").css("display","block");
		},
		function(){
			$(".channelMall").css("display","none");	
		}
	);	
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
