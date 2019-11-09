/* header */


//setCurrPage(getNameByURL(window.location.href));
//windowSize();

$(window).ready(function()
{
	//setCurrPage(getNameByURL(window.location.href));
	toggleHeader();

	// handlers for menu btns
	$('#btn_src_objective').click(function()
	{
		$("html, body").animate({ scrollTop: ($('#title_objectivity').offset().top - 100) }, 1200);
	});
	$('#btn_src_news').click(function()
	{
		$("html, body").animate({ scrollTop: ($('#title_news').offset().top - 100) }, 1200);
	});
	$('#btn_src_experts').click(function()
	{
		$("html, body").animate({ scrollTop: ($('#title_experts').offset().top - 100) }, 1200);
	});
	$('#btn_src_contactus').click(function()
	{
		$("html, body").animate({ scrollTop: ($('#title_contactus').offset().top - 100) }, 1200);
	});
	$('#btn_src_partners').click(function()
	{
		$("html, body").animate({ scrollTop: ($('#title_partners').offset().top - 100) }, 1200);
	});
	$('#btn_src_useful').click(function()
	{
		$("html, body").animate({ scrollTop: ($('#title_useful').offset().top - 100) }, 1200);
	});
});



// обработчик клика на кнопку меню
$('.btn_menu[name="menu"]').on('click', function() 
{
	let _menu = $('nav.main-menu__menu');

	if(_menu.css('display') == 'none')	
	{
		_menu.css({'display': 'inline-flex'});
		TweenMax.from( _menu, 0.5, {x:200, ease: Power4.easeOut});
	}
	else 
	{
		_menu.css({'display': 'none'});
	}
});


/* Включаем display для меню при морфе в десктопное меню */
function windowResizeHandler_fromMM()
{
	/*console.log($(window).width());*/
	let _menu = $('nav.main-menu__menu');
	if ($(window).width() > '760')
	{
		if(_menu.css('display') == 'none')	_menu.css({'display': 'inline-flex'});
		//$(".main-menu__content.mx-auto > a.logo").css({'display': 'block'});
	}
	else if ($(window).width() <= '760')
	{
		_menu.css({'display': 'none'});
		//$(".main-menu__content.mx-auto > a.logo").css({'display': 'none'});
	} 
}
$(window).resize(windowResizeHandler_fromMM); // при изменении размеров



function toggleHeader()
{
    var scroll_status = $(document).scrollTop();
    if(scroll_status > 308)
    {
        $(".main-menu > .container-fluid").addClass("menu-fixed-top");
        $(".front").addClass("mt-70");
        //if ($(window).width() > '760') $(".main-menu__content.mx-auto > a.logo").css({'display': 'block'});
    }
    else
    {
        $(".main-menu > .container-fluid").removeClass("menu-fixed-top");
        $(".front").removeClass("mt-70");
        //$(".main-menu__content.mx-auto > a.logo").css({'display': 'none'});
    }
}
$(document).scroll(function()
{
    toggleHeader();
})