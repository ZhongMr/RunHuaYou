$(function(){
	$(".zuo_ul li").click(function(){
		$(this).addClass("moren").siblings().removeClass("moren");
		var _index =$(this).index();
		$(".kayou div").eq(_index).show().siblings().hide();
	})
})