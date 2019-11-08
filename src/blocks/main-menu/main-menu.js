/* header */
/* global vars */
const PAGE_INDEX = 'http://localhost:3000/index.html';
const PAGE_DOCUMENTS = 'http://localhost:3000/documents.html';
const PAGE_GALERY = 'http://localhost:3000/galery.html';
const PAGE_CONTACT = 'http://localhost:3000/contact.html';

var currPage = PAGE_INDEX;

//setCurrPage(getNameByURL(window.location.href));
//windowSize();

$(window).ready(function()
{
	setCurrPage(getNameByURL(window.location.href));
	toggleHeader();

});

function setCurrPage(name)
{
	switch(name)
	{
		case 'main':
			currPage = PAGE_INDEX;
			break;

		case 'documents':
			currPage = PAGE_DOCUMENTS;
			break;

		case 'galery':
			currPage = PAGE_GALERY;
			break;

		case 'contact':
			currPage = PAGE_CONTACT;
			break;
	}
	/* Меняем цвет кнопки текущей страницы в хэдере*/
	$('.header__link[name='+name+']').css({'color':'#bb1620'});
}

function getNameByURL(url)
{
	switch (url)
	{
		case PAGE_INDEX || PAGE_INDEX+'#':
			return 'main';
			break;

		case PAGE_DOCUMENTS:
			return 'documents';
			break;

		case PAGE_GALERY:
			return 'galery';
			break;

		case PAGE_CONTACT:
			return 'contact';
			break;
	}

}

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
	}
	else if ($(window).width() <= '760')
	{
		_menu.css({'display': 'none'});
	} 
}
$(window).resize(windowResizeHandler_fromMM); // при изменении размеров



function toggleHeader()
{
    var scroll_status = $(document).scrollTop();
    if(scroll_status > 400)
        $(".main-menu > .container-fluid").addClass("menu-fixed-top");
    else
        $(".main-menu > .container-fluid").removeClass("menu-fixed-top");
}
$(document).scroll(function()
{
    toggleHeader();
})