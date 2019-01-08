function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
$(function(){
	$('.xuanka div:first').show();
	$('.detailsCon_Bot_R ul li:first').addClass("dianji");
	$('.detailsCon_Bot_R ul li').click(function(){
		var _index = $(this).index();
		$(this).addClass("dianji").siblings().removeClass("dianji");
		$(".xuanka div").eq(_index).show().siblings().hide();
	});
	
})