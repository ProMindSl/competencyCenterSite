// back to top (btn on footer)
$(function()
{
	$(window).scroll(function() 
	{
 		if($(this).scrollTop() != 0) $('#btn_toTop').fadeIn();
 		else $('#btn_toTop').fadeOut();
  	});
 
	$('#btn_toTop').click(function() 
	{
 		$('body,html').animate({scrollTop:0},800);
 	});
});
