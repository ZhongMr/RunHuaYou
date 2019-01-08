// JavaScript Document
$(function(){
	//登录页输入账户、密码
	$("#userN,#passW").focus(function(){
		  $(this).siblings("p").show();
		  
	}).blur(function(){
		 if ($(this).val() == '') {
			$(this).siblings("p").show();
		 }
		 if ($(this).val() != '') {
			$(this).siblings("p").hide();
		 }
	});	
});

function subform(obj){
	//用户名
	if( obj.email.value === "" ){
		$("#userN").show();
		return false;
	}else{
		$("#userN").hide();	
	}
	//密码
	if( obj.pass.value === "" ){
		$("#passW").show();
		return false;
	}else{
		$("#passW").hide();	
	}
	return true;
}
	
	
	
	
	
		